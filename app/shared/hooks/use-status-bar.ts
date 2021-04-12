import { StatusBarProps, useColorScheme } from 'react-native';
import { useTheme } from 'styled-components';

export function useStatusBar(): StatusBarProps {
  const { colors } = useTheme();
  const colorScheme = useColorScheme();

  return {
    backgroundColor: colors.background,
    barStyle: colorScheme === 'dark' ? 'light-content' : 'dark-content',
  };
}
