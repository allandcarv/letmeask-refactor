import React from 'react';

import googleImg from '../../../assets/images/google-icon.svg';
import logoImg from '../../../assets/images/logo.svg';

import Button from '../../atoms/Button';

import EnterRoom from '../../molecules/EnterRoom';

import { useFirebase } from '../../../hooks';

import { StyledSection } from './styles';

import { SignInProvider } from '../../../types';

const AppAction: React.FC = () => {
  // const { user, setUser } = useAuth();
  const { signIn } = useFirebase();

  async function handleSignIn(provider: SignInProvider) {
    const result = await signIn(provider);

    console.log(result.user);
  }

  return (
    <StyledSection>
      <img src={logoImg} alt="Logo Let Me Ask" />
      <Button
        buttonSize="btn-lg"
        buttonType="danger"
        onClick={() => handleSignIn('google')}
      >
        <img src={googleImg} alt="Crie sua sala com uma conta Google" />
        Crie sua sala com o Google
      </Button>
      <EnterRoom />
    </StyledSection>
  );
};

export default AppAction;
