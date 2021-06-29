import styled from 'styled-components';
import { MEDIA_QUERIES } from '../../../constants';

export const StyledSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    max-width: 155px;
    margin-bottom: 55px;
  }

  @media only screen and (min-width: ${MEDIA_QUERIES.large}) {
    width: 50%;
  }
`;
