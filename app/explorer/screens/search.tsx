import React, { useState, useCallback } from 'react';
import {
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
  useNavigation,
  NavigationProp,
  useFocusEffect,
} from '@react-navigation/native';
import { gql, useLazyQuery } from '@apollo/client';
import { useTheme } from 'styled-components';

import { ExplorerModuleStackParams } from 'app/explorer/explorer-module';

import { Column } from 'app/shared/components/column';
import { Row } from 'app/shared/components/row';
import { Text, TextVariants } from 'app/shared/components/text';
import { Search } from 'app/explorer/components/search';

import { dark } from 'app/shared/themes/dark';

interface WithCount {
  totalCount: number;
}

export interface User {
  id: string;
  name: string;
  bio: string;
  avatarUrl: string;
  followers: WithCount;
  following: WithCount;
  repositories: WithCount;
}

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
  const { navigate } = useNavigation<
    NavigationProp<ExplorerModuleStackParams>
  >();

  const [fetchedUsers, fetchedUsersSet] = useState<User[]>([]);
  const [login, loginSet] = useState<string>('');

  const [
    fetch,
    { data, loading, error },
  ] = useLazyQuery<SearchUserByLoginResponse>(SEARCH_USER_BY_LOGIN);

  // eslint-disable-next-line no-shadow
  function handleLoginSet(login: string) {
    fetch({
      variables: {
        login,
      },
    });
    loginSet(login);
  }

  useFocusEffect(
    useCallback(() => {
      if (!loading && !error && !!data) {
        fetchedUsersSet(latestState => {
          if (latestState.includes(data?.user)) {
            return latestState;
          }
          return [data?.user, ...latestState];
        });
      }
    }, [data, loading, error]),
  );

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
        onChangeText={handleLoginSet}
      />

      {loading && (
        <Column p="8px 16px" alignItems="center">
          <ActivityIndicator size="small" color={colors.onBackground} />
        </Column>
      )}

      {fetchedUsers
        ?.filter(it => it.name)
        .map(it => (
          <Row
            as={TouchableOpacity}
            key={it.id}
            p="8px 16px"
            alignItems="center"
            activeOpacity={0.8}
            onPress={() =>
              navigate('Profile', {
                user: it,
              })
            }>
            <Column
              as={Image}
              width="48px"
              height="48px"
              bg="surface"
              borderRadius={48}
              source={{ uri: it.avatarUrl }}
            />

            <Column ml="12px">
              <Text
                variant={TextVariants.MEDIUM}
                fontSize="14px"
                letterSpacing="0.25px"
                color="onBackground">
                {it.name}
              </Text>

              {!!it.bio && (
                <Text
                  width="280px"
                  variant={TextVariants.MEDIUM}
                  fontSize="12px"
                  letterSpacing="1.25px"
                  color="onSurface"
                  numberOfLines={1}>
                  {it.bio}
                </Text>
              )}
            </Column>
          </Row>
        ))}
    </Column>
  );
}
