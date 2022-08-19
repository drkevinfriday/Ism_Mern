import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

function Signup() {
  const [addUser, { error }] = useMutation(ADD_USER);

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // TRY/CATCH FOR ERRORS
    try {
      const { data } = await addUser({
        variables: { ...inputs },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (event) {
      console.error(event);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label for="email">Email:</label>
      <input
        type="text"
        value={inputs.email || ""}
        onChange={handleChange}
        id="email"
        name="email"
      />

      {/**Create labels for username and password as the email above*/}
      <label for="username">Username:</label>
      <input
        type="text"
        value={inputs.username || ""}
        onChange={handleChange}
        id="username"
        name="username"
      />

      <label for="password">Password:</label>
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

export default Signup;
