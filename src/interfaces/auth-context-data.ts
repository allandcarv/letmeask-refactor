/* eslint-disable no-unused-vars */
import React from 'react';

export interface AuthContextData {
  user: Record<string, unknown>;
  setUser: (value: React.SetStateAction<Record<string, unknown>>) => void;
}
