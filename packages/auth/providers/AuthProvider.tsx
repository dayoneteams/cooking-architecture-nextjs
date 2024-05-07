'use client';
import {createContext, useState} from "react";

export const AuthContext = createContext({
  loginUser: null,
  setLoginUser: () => {},
});

export function AuthProvider({children}) {
  const [loginUser, setLoginUser] = useState(null);

  return (
    <AuthContext.Provider value={{loginUser, setLoginUser}}>
      {children}
    </AuthContext.Provider>
  );
}
