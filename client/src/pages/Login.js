import { useMutation } from "@apollo/client";
import { useState } from "react";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

function Login() {
  const [login, { error }] = useMutation(LOGIN_USER);

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // SUBMIT FORM
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...inputs },
      });

      console.log(data);
      Auth.login(data.login.token);
    } catch (event) {
      console.error(event);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        value={inputs.username || ""}
        onChange={handleChange}
        id="username"
        name="username"
      />

      <label htmlFor="password">Password:</label>
      <input
        type="text"
        value={inputs.password || ""}
        onChange={handleChange}
        id="password"
        name="password"
      />
    </form>
  );
}

export default Login;
