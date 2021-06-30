/* eslint-disable no-unused-vars */
import React from 'react';

import { User } from '.';

export interface AuthContextData {
  user: User;
  setUser: (value: React.SetStateAction<User>) => void;
}
