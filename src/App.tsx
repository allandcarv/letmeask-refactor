import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import AppProvider from './contexts';

import Routes from './routes';

import { GlobalStyle } from './styles';

const App: React.FC = () => (
  <BrowserRouter>
    <Toaster />
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </BrowserRouter>
);

export default App;
