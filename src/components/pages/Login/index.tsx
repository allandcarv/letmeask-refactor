import React from 'react';

import AppAction from '../../organisms/AppAction';
import AppSlogan from '../../organisms/AppSlogan';

import { StyledMain } from './styles';

const Login: React.FC = () => (
  <>
    <StyledMain>
      <AppSlogan />
      <AppAction />
    </StyledMain>
  </>
);

export default Login;
