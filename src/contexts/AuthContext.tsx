import React, { createContext } from 'react';

import { AuthContextData } from '../interfaces';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const user = 'Allan';

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
