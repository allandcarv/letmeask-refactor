/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';

import { useFirebase } from '../hooks/useFirebase';

import { AuthContextData, User } from '../interfaces';

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState({} as User);
  const { auth } = useFirebase();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(newUser => {
      if (newUser) {
        setUser(_ => ({
          avatar: newUser.photoURL || '',
          id: newUser.uid || '',
          name: newUser.displayName || '',
        }));
      }
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
