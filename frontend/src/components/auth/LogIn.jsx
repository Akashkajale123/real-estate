import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .matches(/^(?=.*[!@#$%^&*])/, "Password must contain at least one special character")
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
});

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type={showPassword ? "text" : "password"} id="password" name="password" />
              <span className="password_toggle" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              <ErrorMessage name="password" component="div" className="error" />
            </div>
          </Form>
        )}
      </Formik>
      <div>
        <Link to="/property-list">
          <button id="btn">Sign In</button>
        </Link>
      </div>
      <div className="signup_link">
        <p>
          Don't have an account?{" "}
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <span id="signup-btn">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
