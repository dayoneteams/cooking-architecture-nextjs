import {LoginUser} from "../types";

const user: LoginUser = {
  id: "1",
  email: "email1@gmail.com",
  firstName: "Nobita",
  lastName: "Bomaba",
  avatar: "https://via.placeholder.com/150",
  role: "admin",
  accessToken: "accessToken 111",
  country: 'US'
};

export function loginWithEmail(email: string, password: string): Promise<LoginUser> {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem("accessToken", user.accessToken);
      resolve(user);
    }, 2000);
  });
}
