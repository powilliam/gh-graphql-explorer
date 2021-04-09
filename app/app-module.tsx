import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AdaptiveThemeProvider } from 'app/shared/contexts/adaptive-theme';

import { ExplorerModule } from 'app/explorer/explorer-module';

export function AppModule() {
  return (
    <AdaptiveThemeProvider>
      <NavigationContainer>
        <ExplorerModule />
      </NavigationContainer>
    </AdaptiveThemeProvider>
  );
}
