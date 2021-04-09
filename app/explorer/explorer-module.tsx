import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SearchScreen } from 'app/explorer/screens/search';
import { ProfileScreen } from 'app/explorer/screens/profile';

const ExplorerModuleStack = createStackNavigator();

export function ExplorerModule() {
  return (
    <ExplorerModuleStack.Navigator headerMode="none">
      <ExplorerModuleStack.Screen name="Search" component={SearchScreen} />
      <ExplorerModuleStack.Screen name="Profile" component={ProfileScreen} />
    </ExplorerModuleStack.Navigator>
  );
}
