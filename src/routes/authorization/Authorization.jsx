import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button-component/button";
import { SignUp } from "./SignUp";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import "./authorization.styles.css";

export const Authorization = () => {
  const showModal = () => {
    const modal = document.getElementById("signup-modal");
    const [btnSignUp] = document.getElementsByClassName("btn-signup");

    if (modal.style.display !== "block") {
      modal.style.display = "block";
      btnSignUp.innerHTML = "Cancel";
    } else if ((modal.style.display = "block")) {
      modal.style.display = "none";
      btnSignUp.innerHTML = "Sign Up";
    }
  };

  const lol = (event) => {
    event.preventDefault();
    console.log("Prevented submit");
  };

  return (
    <div className="auth-main-container">
      <div className="auth-container">
        <div className="auth-leftside">
          <header className="login-header">Welcome Back!</header>
          <form className="login-form">
            <input
              className="inputs"
              id="login-email"
              type="email"
              placeholder="Your Email"
            />
            <input
              className="inputs"
              id="login-password"
              type="password"
              placeholder="Your Password"
            />
            <Button
              options={{
                text: "Sign In",
                className: "btn-login",
                clickFunc: lol,
              }}
            />
          </form>
          <Link to="/accountrecovery" className="forgot-password">
            Account Recovery
          </Link>
          <div className="google-auth">
            <span className="google-or">or log in with:</span>
            <div className="icons-container">
              <FcGoogle className="fbook login-icon" />
              <BsFacebook className="google login-icon" />
            </div>
          </div>
        </div>

        <div className="auth-rightside">
          <header className="signup-header">Don't have an account?</header>
          <SignUp />

          <Button
            options={{
              text: "Sign Up",
              className: "btn-signup",
              clickFunc: showModal,
            }}
          />
        </div>
      </div>
    </div>
  );
};
