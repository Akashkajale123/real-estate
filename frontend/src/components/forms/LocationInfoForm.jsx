import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom'

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

  const handleCityChange = (event, setFieldValue) => {
    const selectedCity = event.target.value;
    // Reset area field when city changes
    setFieldValue("area", "");

    // Set area options based on the selected city
    switch (selectedCity) {
      case "pune":
        setFieldValue("area", "");
        break;
      case "mumbai":
        setFieldValue("area", "");
        break;
      case "banglore":
        setFieldValue("area", "");
        break;
      // Add cases for other cities
      default:
        break;
    }
  };

  return (
    <div>
      <h1>Add Property Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <Field
                as="select"
                id="city"
                name="city"
                onChange={(e) => handleCityChange(e, setFieldValue)}
              >
                <option value="">Select City</option>
                <option value="pune">Pune</option>
                <option value="mumbai">Mumbai</option>
                <option value="banglore">Banglore</option>
                {/* Add other city options here */}
              </Field>
              <ErrorMessage name="city" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="area">Area</label>
              <Field as="select" id="area" name="area">
                <option value="">Select Area</option>
                {/* Render area options based on the selected city */}
                {/* For Pune */}
                {/* {values.city === 'pune' && (
                <>
                  <option value="pimpri">Pimpri</option>
                  <option value="chinchwad">Chinchwad</option>
                  <option value="pune city">Pune City</option>
                  <option value="katraj">Katraj</option>
                </>
              )} */}
                {/* Add similar conditional rendering for other cities */}
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
            <div>
             <Link to='/general-info'> <button type="button">Previous</button></Link>
              <button type="submit">Add Property</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LocationInfoForm;
