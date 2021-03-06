import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  useID: null,
  token: null,
  login: () => {},
  logout: () => {},
});
