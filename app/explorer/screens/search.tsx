import React, { useState, useCallback } from 'react';
import { StatusBar, Keyboard } from 'react-native';
import {
  useNavigation,
  useFocusEffect,
  NavigationProp,
} from '@react-navigation/native';
import { gql, useQuery } from '@apollo/client';
import { useTheme } from 'styled-components';

import { ExplorerModuleStackParams } from 'app/explorer/explorer-module';

import { Column } from 'app/shared/components/column';
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

  const [login, loginSet] = useState<string>('');

  const { data, error, loading } = useQuery<SearchUserByLoginResponse>(
    SEARCH_USER_BY_LOGIN,
    { variables: { login } },
  );

  useFocusEffect(
    useCallback(() => {
      const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => {
        if (error && loading && !data) {
          return;
        }
        loginSet('');
        navigate('Profile', { user: data!!.user });
      });

      return () => {
        keyboardDidHide.remove();
      };
    }, [navigate, data, error, loading]),
  );

  return (
    <Column flex={1} alignItems="center" justifyContent="center">
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
    </Column>
  );
}
