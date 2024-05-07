import {LoginUser} from "../types";

const loginUser: LoginUser = {
  id: "1",
  email: "email1@gmail.com",
  name: "Name 1",
  avatar: "https://via.placeholder.com/150",
  role: "admin",
  accessToken: "accessToken 111",
}

export function getLoginUser(): Promise<LoginUser> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(loginUser);
    }, 2000);
  });
}
