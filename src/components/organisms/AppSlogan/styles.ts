import styled from 'styled-components';

import { colors } from '../../../styles';

export const StyledSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 80px;
  background-color: ${colors.purple};

  > img {
    max-width: 320px;
  }

  h1 {
    margin-bottom: 16px;
  }
`;
