/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { createContext, useCallback, useEffect, useState } from 'react';

import { useFirebase } from '../hooks/useFirebase';

import { AuthContextData, User } from '../interfaces';

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');

    if (storedUser) return JSON.parse(storedUser);

    return {} as User;
  });

  const { auth } = useFirebase();

  const setUserToLocalStorage = useCallback(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(newUser => {
      setUser(() => ({
        avatar: newUser?.photoURL || '',
        id: newUser?.uid || '',
        name: newUser?.displayName || '',
      }));
    });

    return () => unsubscribe();
  }, [auth]);

  useEffect(() => setUserToLocalStorage(), [user, setUserToLocalStorage]);

  return (
    <AuthContext.Provider value={{ user, setUser, setUserToLocalStorage }}>
      {children}
    </AuthContext.Provider>
  );
};
