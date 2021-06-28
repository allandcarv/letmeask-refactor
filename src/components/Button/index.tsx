import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

import { ButtonTypes } from '../../types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: ButtonTypes;
}

const Button: React.FC<ButtonProps> = ({ children, buttonType, ...rest }) => (
  <StyledButton buttonType={buttonType} {...rest}>
    {children}
  </StyledButton>
);

export default Button;
