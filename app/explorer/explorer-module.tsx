import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { useTheme } from 'styled-components';

import { SearchScreen } from 'app/explorer/screens/search';
import {
  ProfileScreen,
  ProfileScreenParams,
} from 'app/explorer/screens/profile';

export type ExplorerModuleStackParams = {
  Search: {};
  Profile: ProfileScreenParams;
};

const ExplorerModuleStack = createStackNavigator();

export function ExplorerModule() {
  const { colors } = useTheme();

  function screenOptions(): StackNavigationOptions {
    return {
      cardStyle: { backgroundColor: colors.background },
      ...TransitionPresets.SlideFromRightIOS,
    };
  }

  return (
    <ExplorerModuleStack.Navigator
      headerMode="none"
      screenOptions={screenOptions}>
      <ExplorerModuleStack.Screen name="Search" component={SearchScreen} />
      <ExplorerModuleStack.Screen name="Profile" component={ProfileScreen} />
    </ExplorerModuleStack.Navigator>
  );
}
