import React, { useState } from "react";
import Button from '@mui/material/Button';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./SignIN.css";
const SignIn = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here using the data state
  };

  return (
    <div className="signin_page">
      <div className="form_box">
        <h1 id="logo">LOGO</h1>
        <p id="para_line">Enter your credentials to access your account</p>
        <form onSubmit={handleSubmit}>
  <input
    type="text"
    id="email_id"
    name="email"
    placeholder="User ID"
    value={data.email}
    onChange={handleChange}
  />
  <div className="password_input_container">
    <input
      type={showPassword ? "text" : "password"}
      className="password"
      name="password"
      placeholder="Password"
      value={data.password}
      onChange={handleChange}
    />
    <span className="password_toggle" onClick={togglePasswordVisibility}>
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </span>
  </div>

<button id='btn'>Sign In</button>
</form>

        <h2 id="signup">SignUp</h2>
      </div>
      <div className="signup_link">
        <p>
          Don't have an account? <span>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
