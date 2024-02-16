import React, {  useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./LocationInfoForm.css";
import { useUserData } from "../../ContextApi/UserContext";
import { FormData } from "../../ContextApi/FormContext";
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const { prevStep, step, setStep, userId } = useUserData();
  const { formData, setFormData } = FormData();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (values, actions) => {
    try {
  
      setSubmitted(true);
      actions.setSubmitting(true);
      
      const newFormData = { ...formData, ...values };
      // setFormData(newFormData);
      console.log(newFormData);
  
      const response = await axios.post(`http://localhost:4000/property/addproperty/${userId}`, newFormData, {
        headers: {
          'Authorization': localStorage.getItem("token")
        }
      });
  
      console.log('POST request successful!');
      console.log('Response data:', response.data);
      alert('Property suceessFully Added')
      setFormData({});
      setStep(1);
      navigate("/property-list");
    } catch (error) {
      console.error('Error making POST request:', error);
    
      setError(error); 

  };

  }


   

  return (
    <div style={{ width: 1201, height: 656, background: 'white', boxShadow: '10px 14px 70px rgba(0, 0, 0, 0.03)', borderRadius: 20, margin: '48px 0px 0px 40px' }}>
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
              <button id="btn1" type="button" onClick={prevStep}>
                Previous
              </button>
              <button id="btn2" type="submit">
                Add Property
              </button>
              {error && <div style={{color:'red'}}>{error.message}</div>}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LocationInfoForm;