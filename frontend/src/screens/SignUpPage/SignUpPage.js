import React from "react";
import { Link } from "react-router-dom";

// import from "/images/dogSignUpBanner.jpg";

import SignUp from "../../Components/SignUp/SignUp";

import "./signuppage.css";
const SignUpPage = () => {
  return (
    <div className="signUpPageContainer">
      <div className="signUpContainer">
        <p>
          Already a user? <Link to="/signin">Sign in</Link>
        </p>
        <h1 className="signUpHeading">Sign up</h1>
        <SignUp />
      </div>
      <div className="signUpImageContainer">
        <img
          className="signUpImage"
          src="/images/dogSignUpBanner.jpg"
          alt="dogBanner"
        />
      </div>
    </div>
  );
};

export default SignUpPage;
