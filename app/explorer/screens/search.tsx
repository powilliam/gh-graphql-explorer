import React from 'react';
import { StatusBar } from 'react-native';

import { Column } from 'app/shared/components/column';

import { dark } from 'app/shared/themes/dark';

export function SearchScreen() {
  return (
    <Column flex={1} bg="background">
      <StatusBar
        backgroundColor={dark.colors.background}
        barStyle="light-content"
      />
    </Column>
  );
}
