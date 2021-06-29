import styled, { css } from 'styled-components';
import { MEDIA_QUERIES } from '../../../constants';

import { Typography } from '../../../interfaces';

import { colors } from '../../../styles';

const typography = {
  h1: css`
    font-family: 'Poppins', sans-serif;
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 2rem;

    @media only screen and (min-width: ${MEDIA_QUERIES.large}) {
      font-size: 2.25rem;
      line-height: 2.63rem;
    }
  `,
  h2: css`
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.6rem;

    @media only screen and (min-width: ${MEDIA_QUERIES.large}) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  `,
};

export const Element = styled.span<Typography>`
  font: 400 1rem 'Roboto', sans-serif;
  color: ${colors.black};

  ${props => typography[props.element]}
`;
