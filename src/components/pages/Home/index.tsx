import React from 'react';
import { useAuth } from '../../../hooks';

import Header from '../../organisms/Header';

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <>
      <Header />
      <main>
        <h1>Home</h1>
        <p>{user.id}</p>
        <img src={user.avatar} alt={user.name} />
        <p>{user.name}</p>
      </main>
    </>
  );
};

export default Home;
