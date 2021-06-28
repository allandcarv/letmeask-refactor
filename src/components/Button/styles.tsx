/* eslint-disable arrow-parens */
import styled, { css } from 'styled-components';

import { colors } from '../../styles';

import { ButtonTypes } from '../../types';

interface ButtonProps {
  buttonType: ButtonTypes;
}

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

export const StyledButton = styled.button<ButtonProps>`
  ${props => buttonTypes[props.buttonType]}
`;
