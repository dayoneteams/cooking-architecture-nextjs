import {useContext} from "react";
import {AuthContext} from "../providers/AuthProvider";

export function useAuth() {
  const {loginUser, logout} = useContext(AuthContext);

  return {
    loginUser,
    logout,
  };
}
