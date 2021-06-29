import styled, { css } from 'styled-components';

import { Typography } from '../../../interfaces';

import { colors } from '../../../styles';

const typography = {
  h1: css`
    font-family: 'Poppins', sans-serif;
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 2.63rem;
  `,
  h2: css`
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2rem;
  `,
};

export const Element = styled.span<Typography>`
  color: ${colors.black};

  ${props => typography[props.element]}
`;
