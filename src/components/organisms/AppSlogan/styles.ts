import styled from 'styled-components';
import { MEDIA_QUERIES } from '../../../constants';

import { colors } from '../../../styles';

export const StyledSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  background-color: ${colors.purple};

  > img {
    max-width: 320px;
  }

  h1 {
    margin-bottom: 16px;
    color: ${colors.white.light};
  }

  h2 {
    color: ${colors.white.dark};
  }

  @media only screen and (min-width: ${MEDIA_QUERIES.large}) {
    padding: 0 80px;
    align-items: flex-start;
  }
`;
