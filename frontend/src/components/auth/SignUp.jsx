import React from 'react'
import './signUp.css'
const SignUp = () => {
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
  )
}

export default SignUp
