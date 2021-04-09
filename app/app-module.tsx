import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { AdaptiveThemeProvider } from 'app/shared/contexts/adaptive-theme';

import { Column } from 'app/shared/components/column';
import { Text } from 'app/shared/components/text';

export function AppModule() {
  return (
    <AdaptiveThemeProvider>
      <Column
        flex={1}
        as={SafeAreaView}
        p="16px"
        alignItems="center"
        justifyContent="center"
        bg="white">
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <Text>react-native-discovery-modular-structure</Text>
      </Column>
    </AdaptiveThemeProvider>
  );
}
