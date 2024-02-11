import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./SignUp.css";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string()
    .matches(/^(?=.*[!@#$%^&*₹])/, "at least one special character required")
    .min(6, "at least 6 characters required")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState(""); // State variable to store error message
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post("http://localhost:4000/auth/signUp", values);
      console.log(response.data);
      navigate("/"); // Navigate to sign-in page
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMessage("Email is already registered"); // Set error message state
      } else {
        console.error("Error occurred while signing up:", error);
      }
    }
    setSubmitting(false);
  };

  return (
    <div className="signup_page">
      <div className="form_box">
        <h1 id="logo">LOGO</h1>
        <p id="para_line">Create New Account</p>
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="inputs">
                <div className="email_input">
                <Field type="text" name="email" placeholder="Mail ID" id="mail-id" />
                <ErrorMessage name="email" component="div" className="email-error" />
                </div>
               <div className="password-input">
               <Field type="password" name="password" placeholder="Password" id="password" />
                <ErrorMessage name="password" component="div" className="password-error" />
               </div>
                <div className="conf-pass-input">
                <Field type="password" name="confirmPassword" placeholder="Confirm Password" id="confirm-password" />
                <ErrorMessage name="confirmPassword" component="div" className="conf-pass-error" />
                </div>
                <button type="submit" id="btn">Sign up</button>
                {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Render error message if it exists */}
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <Link style={{ textDecoration: "none" }} to="/">
        <h2 id="sign-in-link">Sign in</h2>
      </Link>
    </div>
  );
};

export default SignUp;
