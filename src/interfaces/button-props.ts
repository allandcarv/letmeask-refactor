import { ButtonHTMLAttributes } from 'react';
import { ButtonSizes, ButtonTypes } from '../types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonSize: ButtonSizes;
  buttonType: ButtonTypes;
}
