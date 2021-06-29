import styled from 'styled-components';

import Input from '../../atoms/Input';

import { colors } from '../../../styles';

export const StyledInput = styled(Input)`
  margin-bottom: 16px;
`;

export const StyledP = styled.p`
  width: 320px;
  display: flex;
  align-items: center;
  margin: 32px 0;
  font: 400 1rem 'Roboto', sans-serif;
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
`;
