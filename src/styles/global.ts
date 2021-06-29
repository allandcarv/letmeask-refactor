import { createGlobalStyle } from 'styled-components';

import { colors } from './colors';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: ${colors.white.dark};
  }
`;
