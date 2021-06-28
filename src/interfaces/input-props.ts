import { InputHTMLAttributes } from 'react';

import { InputSizes } from '../types';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize: InputSizes;
}
