import 'styled-components';

declare module 'styled-components' {
  export interface Colors {
    [key: string]: string;
    primary: string;
    onPrimary: string;
    surface: string;
    onSurface: string;
    background: string;
    onBackground: string;
  }

  export interface DefaultTheme {
    colors: Colors;
  }
}
