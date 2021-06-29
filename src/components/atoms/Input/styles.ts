import styled, { css } from 'styled-components';

import { InputProps } from '../../../interfaces';

import { colors } from '../../../styles';

const inputSizes = {
  'input-lg': css`
    max-width: 320px;
  `,
  'input-md': css``,
  'input-sm': css``,
};

export const StyledInput = styled.input<InputProps>`
  height: 50px;
  width: 90%;
  padding: 13px 12px 13px 16px;
  border: 1px solid ${colors.gray.medium};
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: ${colors.black};

  &::placeholder {
    color: ${colors.gray.medium};
  }

  ${props => inputSizes[props.inputSize]}
`;
