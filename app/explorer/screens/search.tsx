import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar, ScrollView, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { gql, useLazyQuery } from '@apollo/client';
import { useTheme } from 'styled-components';

import { Column } from 'app/shared/components/column';
import { Search } from 'app/explorer/components/search';
import { SearchedUser } from 'app/explorer/components/searched-user';

import { dark } from 'app/shared/themes/dark';

import { User } from 'app/shared/models/user';

interface SearchUserByLoginResponse {
  user: User;
}

const SEARCH_USER_BY_LOGIN = gql`
  query SearchUserByLogin($login: String!) {
    user(login: $login) {
      id
      name
      bio
      avatarUrl
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories {
        totalCount
      }
    }
  }
`;

export function SearchScreen() {
  const { colors } = useTheme();

  const [fetchedUsers, fetchedUsersSet] = useState<User[]>([]);
  const [login, loginSet] = useState<string>('');

  const [
    fetch,
    { data, loading, error },
  ] = useLazyQuery<SearchUserByLoginResponse>(SEARCH_USER_BY_LOGIN);

  function onDeleteUser(id: string) {
    fetchedUsersSet(fetchedUsers.filter(it => it.id !== id));
  }

  useFocusEffect(
    useCallback(() => {
      if (!loading && !error && !!data) {
        fetchedUsersSet(latestState => {
          if (latestState.includes(data.user)) {
            return latestState;
          }
          return [data?.user, ...latestState];
        });
      }
    }, [data, loading, error]),
  );

  useEffect(() => {
    if (!login) {
      return;
    }

    const timeout = setTimeout(() => {
      fetch({
        variables: {
          login,
        },
      });
    }, 500);

    return () => clearTimeout(timeout);
  }, [login, fetch]);

  return (
    <Column as={ScrollView} flex={1}>
      <StatusBar
        backgroundColor={dark.colors.background}
        barStyle="light-content"
      />

      <Search
        placeholder="Search"
        selectionColor={colors.onBackground}
        value={login}
        onChangeText={loginSet}
      />

      {loading && (
        <Column p="8px 16px" alignItems="center">
          <ActivityIndicator size="small" color={colors.onBackground} />
        </Column>
      )}

      {fetchedUsers
        ?.filter(it => it.name)
        .map(it => (
          <SearchedUser
            key={it.id}
            data={it}
            onDelete={() => onDeleteUser(it.id)}
          />
        ))}
    </Column>
  );
}
