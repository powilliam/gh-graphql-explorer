import React, { useCallback } from 'react';
import { StatusBar } from 'react-native';
import {
  useNavigation,
  useFocusEffect,
  NavigationProp,
} from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { ExplorerModuleStackParams } from 'app/explorer/explorer-module';

import { Column } from 'app/shared/components/column';
import { Search } from 'app/explorer/components/search';

import { dark } from 'app/shared/themes/dark';

export function SearchScreen() {
  const { colors } = useTheme();
  const { navigate } = useNavigation<
    NavigationProp<ExplorerModuleStackParams>
  >();

  useFocusEffect(
    useCallback(() => {
      const timeout = setTimeout(() => {
        navigate('Profile', {
          id: 0,
        });
      }, 2000);

      return () => clearTimeout(timeout);
    }, [navigate]),
  );

  return (
    <Column flex={1} alignItems="center" justifyContent="center">
      <StatusBar
        backgroundColor={dark.colors.background}
        barStyle="light-content"
      />

      <Search placeholder="Search" selectionColor={colors.onBackground} />
    </Column>
  );
}
