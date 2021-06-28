import React from 'react';

import enterImg from '../../assets/images/enter.svg';
import googleImg from '../../assets/images/google-icon.svg';
import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { StyledMain } from './styles';

const Login: React.FC = () => (
  <>
    <StyledMain>
      <section className="app-slogan">
        <img src={illustrationImg} alt="Let Me Ask login page Illustration" />
        <h1>Toda pergunta tem uma resposta.</h1>
        <h2>Aprenda e compartilhe conhecimento com outras pessoas.</h2>
      </section>
      <section className="app-action">
        <img src={logoImg} alt="Logo Let Me Ask" />
        <Button buttonSize="btn-lg" buttonType="danger">
          <img src={googleImg} alt="Crie sua sala com uma conta Google" />
          Crie sua sala com o Google
        </Button>
        <p>ou entre em uma sala</p>
        <Input
          inputSize="input-lg"
          type="text"
          placeholder="Digite o código da sala"
        />
        <Button buttonSize="btn-lg" buttonType="primary">
          <img src={enterImg} alt="Entrar na sala com um código" />
          Entrar na sala
        </Button>
      </section>
    </StyledMain>
  </>
);

export default Login;
