import styled from 'styled-components';

import { MEDIA_QUERIES } from '../../../constants';

export const StyledMain = styled.main`
  @media only screen and (min-width: ${MEDIA_QUERIES.large}) {
    display: flex;
  }
`;
