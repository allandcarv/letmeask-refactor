import { createGlobalStyle } from 'styled-components';

import { colors } from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: ${colors.white.dark};
    font: 400 1rem 'Roboto', sans-serif;
  }
`;
