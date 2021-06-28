import styled from 'styled-components';

import { MEDIA_QUERIES } from '../../constants';

import { colors } from '../../styles';

export const StyledMain = styled.main`
  .app-slogan {
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
      font-family: 'Poppins', sans-serif;
      font-size: 2.25rem;
      font-weight: 700;
      line-height: 2.63rem;
      color: ${colors.white.light};
    }

    h2 {
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 2rem;
      color: ${colors.white.dark};
    }
  }

  .app-action {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > img {
      max-width: 155px;
      margin-bottom: 55px;
    }

    p {
      width: 320px;
      display: flex;
      align-items: center;
      margin: 32px 0;
      color: ${colors.gray.medium};

      &::before,
      &::after {
        content: '';
        height: 1px;
        background-color: ${colors.gray.medium};
        flex: 1;
      }

      &::before {
        margin-right: 16px;
      }

      &::after {
        margin-left: 16px;
      }
    }

    input {
      margin-bottom: 16px;
    }
  }

  @media only screen and (min-width: ${MEDIA_QUERIES.large}) {
    display: flex;

    .app-slogan,
    .app-action {
      width: 50%;
    }
  }
`;
