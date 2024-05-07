import {loginWithEmail} from "../services/loginWithEmail";
import {useContext} from "react";
import {AuthContext} from "../providers/AuthProvider";

export function LoginForm() {
  const {setLoginUser} = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginUser = await loginWithEmail(e.target[0].value, e.target[1].value);
    setLoginUser(loginUser);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email"/>
        </label>
        <label>
          Password
          <input type="password"/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
