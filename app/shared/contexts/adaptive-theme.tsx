import React, { ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { dark } from 'app/shared/themes/dark';
import { light } from 'app/shared/themes/light';

export interface AdaptiveThemeProviderProps {
  children: ReactNode;
}

export function AdaptiveThemeProvider({
  children,
}: AdaptiveThemeProviderProps) {
  const colorScheme = useColorScheme();

  // TODO: Create a light theme
  const theme = colorScheme === 'dark' ? dark : light;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
