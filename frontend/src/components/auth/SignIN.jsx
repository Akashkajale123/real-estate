import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import "./SignIN.css";
import { useUserData } from "../../ContextApi/UserContext";

const SignIn = () => {
  const {setUserId,setUserName,setId} = useUserData();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
      .required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post("http://localhost:4000/auth/signIn", values);
      console.log(response.data);
      const { UserData,Token } = response.data;
     setId(UserData.Id);
      // console.log(UserData.userId);
      const userId=UserData.userId;
      const email = UserData.email_Id;
      const userName = email.substring(0, email.indexOf('@')); // Extract username from email
      setUserName(userName);
      // console.log(userName)
      setUserId(userId);
      console.log(Token);
      localStorage.setItem("token",Token);
      localStorage.setItem("userData", UserData);
      
      setSubmitting(false);
      resetForm();
      navigate("/property-list");
    } catch (error) {
      console.error("Error occurred while signing in:", error);
      setSubmitting(false);
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else if (error.response && error.response.status === 401) {
        setError("Email is not registered. Please sign up first.");
      } else {
        setError("An error occurred while signing in. Please try again.");
      }
    }
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
          {({ isSubmitting, values, touched, errors }) => (
            <Form>
              <div className="inputs-box">
             <div className="email-input">
             <Field
                  type="text"
                  id="email_id"
                  name="email"
                  placeholder="User ID"
                  className={touched.email && errors.email ? "error" : ""}
                />
                <ErrorMessage name="email" component="div" className="email-error" />
             </div>
                <div className="password_input_container">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className={touched.password && errors.password ? "password error" : "password"}
                  />
                  <span className="password_toggle" onClick={() => setShowPassword(prev => !prev)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  <ErrorMessage name="password" component="div" className="error-password" />
                </div>
                {error && <div className="server-error">{error}</div>}
              </div>
              <button type="submit" id="btn" disabled={isSubmitting}>
                {isSubmitting ? "Signing In..." : "Sign In"}
              </button>
            </Form>
          )}
        </Formik>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <h2 id="signup">Sign Up</h2>
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
