'use client';
import {createContext, useState} from "react";

export const AuthContext = createContext({
  loginUser: null,
  setLoginUser: () => {},
  logout: () => {},
});

export function AuthProvider({children}) {
  const [loginUser, setLoginUser] = useState(null);

  const logout = () => {
    setLoginUser(null);
  }

  return (
    <AuthContext.Provider value={{loginUser, setLoginUser, logout}}>
      {children}
    </AuthContext.Provider>
  );
}
