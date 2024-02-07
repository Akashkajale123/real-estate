import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./SignIN.css";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false); 
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
    .matches(/^(?=.*[!@#$%^&*])/, "special character required")
      .min(6, "at least 6 characters required")
      .required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Add your login logic here using the values object
    console.log(values);
    resetForm();
  };

  return (
    <div className="signin_page">
      <div className="form_box">
        <h1 id="logo">LOGO</h1>
        <p id="para_line">Enter your credentials to access your account</p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, touched, errors }) => (
            <Form>
              <div className="inputs-box">
                <Field
                  type="text"
                  id="email_id"
                  name="email"
                  placeholder="User ID"
                  className={touched.email && errors.email ? "error" : ""}
                />
                <ErrorMessage name="email" component="div" className="error" />
                <div className="password_input_container">
                  <Field
                    type={showPassword ? "text" : "password"} // Toggle password visibility
                    name="password"
                    placeholder="Password"
                    className={
                      touched.password && errors.password ? "password error" : "password"
                    }
                  />
                  <span className="password_toggle" onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  <ErrorMessage name="password" component="div" className="error" />
                </div>
              </div>
            <Link to='/property-list'>  <button type="submit" id="btn">Sign In</button></Link>
            </Form>
          )}
        </Formik>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <h2 id="signup">SignUp</h2>
        </Link>
      </div>
      <div className="signup_link">
        <p>
          Don't have an account?
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <span id="signup-btn"> Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
