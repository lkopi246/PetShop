import React, { useState } from "react";
import axios from "axios";

import "./signup.css";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onChangeEmailBox = (event) => {
    setEmail(event.target.value);
  };
  const onChangeUsernameBox = (event) => {
    setUsername(event.target.value);
  };
  const onChangePasswordBox = (event) => {
    setPassword(event.target.value);
  };
  const onHandleSignUpSubmit = (event) => {
    event.preventDefault();
    // console.log(email, username, password);
    axios
      .post("http://localhost:5000/user", { email, username, password })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <form className="signupForm" onSubmit={onHandleSignUpSubmit}>
        <input
          className="textbox usernameBox"
          type="text"
          value={username}
          onChange={onChangeUsernameBox}
          placeholder="Username"
        />
        <input
          className="textbox emailBox"
          type="email"
          value={email}
          onChange={onChangeEmailBox}
          placeholder="Email"
        />
        <input
          className="textbox passwordBox"
          type="password"
          value={password}
          onChange={onChangePasswordBox}
          placeholder="Password"
        />
        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default SignUp;
