import { useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';

import { AuthContextData } from '../interfaces';

export function useAuth(): AuthContextData {
  return useContext(AuthContext);
}
