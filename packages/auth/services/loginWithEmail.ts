import {LoginUser} from "../types";

export function loginWithEmail(email: string, password: string): Promise<LoginUser> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = {
        id: "1",
        email,
        name: "Name 1",
        avatar: "https://via.placeholder.com/150",
        role: "admin",
        accessToken: "accessToken 111",
      }
      localStorage.setItem("accessToken", user.accessToken);
      resolve(user);
    }, 2000);
  });
}
