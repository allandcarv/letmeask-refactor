import React from 'react';

import { StyledButton } from './styles';

import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({
  children,
  buttonSize,
  buttonType,
  ...rest
}) => (
  <StyledButton buttonSize={buttonSize} buttonType={buttonType} {...rest}>
    {children}
  </StyledButton>
);

export default Button;
