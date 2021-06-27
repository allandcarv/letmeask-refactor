import React from 'react';

import Header from '../components/Header';

import { useAuth } from '../hooks';

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <>
      <p>{user}</p>
      <Header />
      <main>
        <h1>Home</h1>
      </main>
    </>
  );
};
export default Home;
