import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';

import { AdaptiveThemeProvider } from 'app/shared/contexts/adaptive-theme';

import { ExplorerModule } from 'app/explorer/explorer-module';

import { github } from 'app/providers/github';

export function AppModule() {
  return (
    <ApolloProvider client={github}>
      <AdaptiveThemeProvider>
        <NavigationContainer>
          <ExplorerModule />
        </NavigationContainer>
      </AdaptiveThemeProvider>
    </ApolloProvider>
  );
}
