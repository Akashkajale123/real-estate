import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./SignIN.css";
import { Link } from "react-router-dom";
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
<div className="inputs-box">
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
</div>

<Link to='/property-list'><button id='btn'>Sign In</button></Link>
</form>

       <Link to='/signup' style={{ textDecoration: "none" }}> <h2 id="signup">SignUp</h2></Link>
      </div>
      <div className="signup_link">
        <p>
          Don't have an account? 
          <Link to='/signup' style={{ textDecoration: "none" }}><span id='signup-btn'> Sign Up</span></Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
