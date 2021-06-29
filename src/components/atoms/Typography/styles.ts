import styled, { css } from 'styled-components';

import { Typography } from '../../../interfaces';

import { colors } from '../../../styles';

const typography = {
  h1: css`
    font-family: 'Poppins', sans-serif;
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 2.63rem;
    color: ${colors.white.light};
  `,
  h2: css`
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2rem;
    color: ${colors.white.dark};
  `,
};

export const Element = styled.span<Typography>`
  ${props => typography[props.element]}
`;
