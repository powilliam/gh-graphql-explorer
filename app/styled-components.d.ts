import 'styled-components';

declare module 'styled-components' {
  export interface Colors {
    [key: string]: string;
    surface: string;
    onSurface: string;
    background: string;
    onBackground: string;
  }

  export interface DefaultTheme {
    colors: Colors;
  }
}
