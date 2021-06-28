/* eslint-disable arrow-parens */
import styled, { css } from 'styled-components';

import { ButtonProps } from '../../interfaces';

import { colors } from '../../styles';

const buttonSizes = {
  'btn-lg': css`
    width: 320px;
  `,
  'btn-md': css`
    width: 177px;
  `,
  'btn-sm': css`
    width: 24px;
  `,
};

const buttonTypes = {
  cancel: css`
    background-color: ${colors.gray.light};
  `,
  danger: css`
    background-color: ${colors.red};
  `,
  primary: css`
    background-color: ${colors.purple};
  `,
  outlined: css`
    background-color: transparent;
  `,
};

const buttonHover = {
  cancel: css`
    background-color: ${colors.hover.gray};
  `,
  danger: css`
    background-color: ${colors.hover.red};
  `,
  primary: css`
    background-color: ${colors.hover.purple};
  `,
  outlined: css`
    background-color: transparent;
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  height: 50px;
  border: 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: ${colors.white.dark};
  cursor: pointer;
  transition: background-color 0.2s;

  ${props => buttonSizes[props.buttonSize]}

  ${props => buttonTypes[props.buttonType]}

  &:hover {
    ${props => buttonHover[props.buttonType]}
  }

  > img {
    margin-right: 10px;
  }
`;
