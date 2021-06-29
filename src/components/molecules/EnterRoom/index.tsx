import React from 'react';

import enterImg from '../../../assets/images/enter.svg';

import Button from '../../atoms/Button';

import { StyledInput, StyledP } from './styles';

const EnterRoom: React.FC = () => (
  <>
    <StyledP>ou entre em uma sala</StyledP>
    <StyledInput
      inputSize="input-lg"
      type="text"
      placeholder="Digite o código da sala"
    />
    <Button buttonSize="btn-lg" buttonType="primary">
      <img src={enterImg} alt="Entrar na sala com um código" />
      Entrar na sala
    </Button>
  </>
);

export default EnterRoom;
