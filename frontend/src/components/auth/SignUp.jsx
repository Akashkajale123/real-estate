import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./SignUp.css";

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
      .matches(/^(?=.*[!@#$%^&*])/, "at least one special character required")
      .min(6, "at least 6 characters required")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  

const SignUp = () => {
  const handleSubmit = (values) => {
    console.log(values);
    // Add your submission logic here
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
                <Field type="text" name="email" placeholder="Mail ID" id="mail-id" />
                <ErrorMessage name="email" component="div" className="error" />
                <Field type="password" name="password" placeholder="Password" id="password" />
                <ErrorMessage name="password" component="div" className="error" />
                <Field type="password" name="confirmPassword" placeholder="Confirm Password" id="confirm-password" />
                <ErrorMessage name="confirmPassword" component="div" className="error" />
                <button type="submit" id="btn">Sign up</button>
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
