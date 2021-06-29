import React from 'react';

import { InputProps } from '../../../interfaces';

import { StyledInput } from './styles';

const Input: React.FC<InputProps> = ({ inputSize, ...rest }) => (
  <StyledInput inputSize={inputSize} {...rest} />
);

export default Input;
