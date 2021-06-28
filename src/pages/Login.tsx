import React from 'react';

import enterImg from '../assets/images/enter.svg';
import googleImg from '../assets/images/google-icon.svg';

import Button from '../components/Button';

const Login: React.FC = () => (
  <>
    <h1>Login</h1>
    <Button buttonSize="btn-lg" buttonType="danger">
      <img src={googleImg} alt="Crie sua sala com uma conta Google" />
      Crie sua sala com o Google
    </Button>
    <Button buttonSize="btn-lg" buttonType="primary">
      <img src={enterImg} alt="Entrar na sala com um código" />
      Entrar na sala
    </Button>
  </>
);

export default Login;
