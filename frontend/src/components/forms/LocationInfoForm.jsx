import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "./LocationInfoForm.css";
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  city: Yup.string().required("City is required"),
  area: Yup.string().required("Area is required"),
  pincode: Yup.string().required("Pincode is required"),
  address: Yup.string()
    .min(5, "Address must be at least 5 characters")
    .required("Address is required"),
  landmark: Yup.string()
    .min(3, "Landmark must be at least 3 characters")
    .required("Landmark is required"),
  latitude: Yup.string()
    .min(3, "Latitude must be at least 3 characters")
    .required("Latitude is required"),
  longitude: Yup.string()
    .min(3, "Longitude must be at least 3 characters")
    .required("Longitude is required"),
});

const initialValues = {
  email: "",
  city: "",
  area: "",
  pincode: "",
  address: "",
  landmark: "",
  latitude: "",
  longitude: "",
};
const LocationInfoForm = () => {
  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
    
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form>
          <div className="input" id="row1">
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <Field as="select" id="city" name="city">
                <option value="">Select City</option>
                <option value="pune">Pune</option>
                <option value="mumbai">Mumbai</option>
                <option value="banglore">Banglore</option>
                {/* Add other city options here */}
              </Field>
              <ErrorMessage name="city" component="div" className="error" />
            </div>
          </div>
          <div className="input">
            <div>
              <label htmlFor="area">Area</label>
              <Field as="select" id="area" name="area">
                <option value="">Select Area</option>
                <option value="shivajinagar">Shivajinagar</option>
                <option value="Pimpri">Pimpri</option>
                <option value="Chinchwad">Chinchwad</option>
              </Field>
              <ErrorMessage name="area" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="pincode">Pincode</label>
              <Field
                type="text"
                id="pincode"
                name="pincode"
                placeholder="Pincode"
              />
              <ErrorMessage name="pincode" component="div" className="error" />
            </div>
          </div>
          <div className="input">
            <div>
              <label htmlFor="address">Address</label>
              <Field
                type="text"
                id="address"
                name="address"
                placeholder="Address"
              />
              <ErrorMessage name="address" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="landmark">Landmark</label>
              <Field
                type="text"
                id="landmark"
                name="landmark"
                placeholder="Landmark"
              />
              <ErrorMessage name="landmark" component="div" className="error" />
            </div>
          </div>
          <div className="input" id="row4">
            <div>
              <label htmlFor="latitude">Latitude</label>
              <Field
                type="text"
                id="latitude"
                name="latitude"
                placeholder="Latitude"
              />
              <ErrorMessage name="latitude" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="longitude">Longitude</label>
              <Field
                type="text"
                id="longitude"
                name="longitude"
                placeholder="Longitude"
              />
              <ErrorMessage
                name="longitude"
                component="div"
                className="error"
              />
            </div>
          </div>
          <div>
            <Link to="/general-info">
              {" "}
              <button id="btn1" type="button">
                Previous
              </button>
            </Link>
            <button id="btn2" type="submit">
              Add Property
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default LocationInfoForm;
