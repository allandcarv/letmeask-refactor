import React from 'react';
import { useHistory } from 'react-router-dom';

import googleImg from '../../../assets/images/google-icon.svg';
import logoImg from '../../../assets/images/logo.svg';

import Button from '../../atoms/Button';

import EnterRoom from '../../molecules/EnterRoom';

import { useAuth, useFirebase, useToast } from '../../../hooks';

import { StyledSection } from './styles';

import { SignInProvider } from '../../../types';

const AppAction: React.FC = () => {
  const { setUser } = useAuth();
  const { signIn } = useFirebase();
  const { error } = useToast();
  const history = useHistory();

  async function handleSignIn(provider: SignInProvider) {
    const result = await signIn(provider);

    if (!result.user) {
      error(
        'Ocorreu um erro na autenticação, por favor tente novamente mais tarde',
      );
    }

    setUser({
      avatar: result.user?.photoURL || '',
      id: result.user?.uid || '',
      name: result.user?.displayName || '',
    });

    history.push('/');
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
