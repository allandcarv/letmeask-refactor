import React from 'react';

import googleImg from '../../../assets/images/google-icon.svg';
import logoImg from '../../../assets/images/logo.svg';

import Button from '../../atoms/Button';

import EnterRoom from '../../molecules/EnterRoom';

import { StyledSection } from './styles';

const AppAction: React.FC = () => (
  <StyledSection>
    <img src={logoImg} alt="Logo Let Me Ask" />
    <Button buttonSize="btn-lg" buttonType="danger">
      <img src={googleImg} alt="Crie sua sala com uma conta Google" />
      Crie sua sala com o Google
    </Button>
    <EnterRoom />
  </StyledSection>
);

export default AppAction;
