import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(15, "Name must not exceed 15 characters")
    .required("Name is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid mobile number")
    .required("Mobile number is required"),
  postedBy: Yup.string().required("Posted by is required"),
  saleType: Yup.string().required("Sale type is required"),
  featuredPackage: Yup.string().required("Featured package is required"),
  ppdPackage: Yup.string().required("PPD package is required"),
});

const initialValues = {
  name: "",
  mobile: "",
  postedBy: "",
  saleType: "",
  featuredPackage: "",
  ppdPackage: "",
  photo: null,
};

const GeneralInfoForm = () => {
  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };
  return (
    <div>
      <h1>Property Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" placeholder="Owner" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="mobile">Mobile</label>
              <Field
                type="text"
                id="mobile"
                name="mobile"
                placeholder="Enter Mobile Number"
              />
              <ErrorMessage name="mobile" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="postedBy">Posted By</label>
              <Field as="select" id="postedBy" name="postedBy">
                <option value="">Select Posted By</option>
                <option value="individual owner">Individual Owner</option>
                <option value="real estate agent">Real Estate Agent</option>
                <option value="builder/developer">Builder/Developer</option>
                <option value="tenant">Tenant</option>
              </Field>
              <ErrorMessage name="postedBy" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="saleType">Sale Type</label>
              <Field as="select" id="saleType" name="saleType">
                <option value="">Please Select Sale Type</option>
                <option value="For Sale">For Sale</option>
                <option value="For Rent">For Rent</option>
                <option value="For Lease">For Lease</option>
              </Field>
              <ErrorMessage name="saleType" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="featuredPackage">Featured Package</label>
              <Field as="select" id="featuredPackage" name="featuredPackage">
                <option value="">Please Select Featured Package</option>
                <option value="swimming pool">Swimming Pool</option>
                <option value="garden yard">Garden Yard</option>
                <option value="garage/parking">Garage/Parking</option>
                <option value="security">Security</option>
              </Field>
              <ErrorMessage
                name="featuredPackage"
                component="div"
                className="error"
              />
            </div>
            <div>
              <label htmlFor="ppdPackage">PPD Package</label>
              <Field as="select" id="ppdPackage" name="ppdPackage">
                <option value="">Please Select PPD Package</option>
                <option value="Basic Package">Basic Package</option>
                <option value="Standard Package">Standard Package</option>
                <option value="Premium Package">Premium Package</option>
                <option value="Advance Package">Advance Package</option>
              </Field>
              <ErrorMessage
                name="ppdPackage"
                component="div"
                className="error"
              />
            </div>
            <div>
              <label htmlFor="photo">Add Photo</label>
              <Field type="file" id="photo" name="photo" />
            </div>
            <div>
              
             <Link to='/property-details'> <button type="button">Previous</button></Link>
              <Link to='/location-info'><button type="submit">Save & Continue</button></Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default GeneralInfoForm;
