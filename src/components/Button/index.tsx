import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
}) => <StyledButton>{children}</StyledButton>;

export default Button;
