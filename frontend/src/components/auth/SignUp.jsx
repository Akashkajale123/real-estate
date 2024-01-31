import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
const SignUp = () => {
  return (
    <div className="signup_page">
      <div className="form_box">
        <h1 id="logo">LOGO</h1>
        <p id="para_line">Create New Account</p>
        <div className="inputs">
            <input  type="text" 
            placeholder="Mail ID"/>
            <input type="password"
            placeholder="Password" />
            <input type="password"
            placeholder="Confirm Password" />
            <button>Sign up</button>
        </div>
      </div>
     <Link style={{ textDecoration: "none" }} to="/"> <h2>Sign in</h2></Link>
      
    </div>
  );
};

export default SignUp;
