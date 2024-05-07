import {useContext} from "react";
import {AuthContext} from "@lib/auth/providers/AuthProvider";

export function useAuth() {
  const {loginUser} = useContext(AuthContext);

  return {
    loginUser,
  };
}
