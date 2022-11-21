import React from "react";
import { Button } from "../../components/button-component/button";
import "./signup.styles.css";

export const SignUp = () => {
  const lol = (event) => {
    event.preventDefault();
    console.log("Prevented Default");
  };

  return (
    <div id="signup-modal">
      <form className="login-form">
        <input
          className="inputs"
          id="signup-name"
          type="text"
          placeholder="Name"
        />
        <input
          className="inputs"
          id="signup-email"
          type="email"
          placeholder="Email"
        />
        <input
          className="inputs"
          id="signup-password"
          type="password"
          placeholder="Password"
        />
        <Button
          options={{
            text: "Register",
            className: "btn-register",
            clickFunc: lol,
          }}
        />
      </form>
    </div>
  );
};
