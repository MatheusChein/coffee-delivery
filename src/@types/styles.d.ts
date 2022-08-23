/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme;

// criando uma tipagem para o módulo styled-components
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
