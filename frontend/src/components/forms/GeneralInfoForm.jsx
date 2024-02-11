import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import './GeneralInfoForm.css'
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
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
    const navigate = useNavigate();
  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
    navigate('/location-info');
  };
  return (
    
     
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
           <div className="input" id="row1">
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
           </div>
            <div className="input">
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
            </div>
            <div className="input">
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
            </div>
            <div id="lastrow" style={{width: 105, height: 105, background: '#6AB4F8', boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.13)',border:'1px solid black', borderRadius: 9999,position:'relative',marginRight:'400px'}}>
            <input type="file" id="photoUpload" accept="image/*" style={{position: 'absolute', width: '100%', height: '100%', opacity: 0, zIndex: 1, cursor: 'pointer'}} />
            <div style={{width:'80px', color: '#7D7D7D', fontSize: 18, fontFamily: 'Source Sans Pro', fontWeight: '400', wordWrap: 'break-word', position:'absolute', top:'35px',left:'130px'}}>Add Photo</div>
      <span id="camera-svg">
      <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none" >
  <g clip-path="url(#clip0_0_433)">
    <path d="M19.5 24.7C22.3719 24.7 24.7 22.3719 24.7 19.5C24.7 16.6281 22.3719 14.3 19.5 14.3C16.6282 14.3 14.3 16.6281 14.3 19.5C14.3 22.3719 16.6282 24.7 19.5 24.7Z" fill="white" />
    <path d="M14.625 3.25L11.6512 6.5H6.5C4.7125 6.5 3.25 7.9625 3.25 9.75V29.25C3.25 31.0375 4.7125 32.5 6.5 32.5H32.5C34.2875 32.5 35.75 31.0375 35.75 29.25V9.75C35.75 7.9625 34.2875 6.5 32.5 6.5H27.3487L24.375 3.25H14.625ZM19.5 27.625C15.015 27.625 11.375 23.985 11.375 19.5C11.375 15.015 15.015 11.375 19.5 11.375C23.985 11.375 27.625 15.015 27.625 19.5C27.625 23.985 23.985 27.625 19.5 27.625Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_0_433">
      <rect width="39" height="39" fill="white"/>
    </clipPath>
  </defs>
</svg>
      </span>
            </div>
            {/* <div  id='lastrow'>
              <label htmlFor="photo">Add Photo</label>
              <Field type="file" id="photo" name="photo" />
            </div> */}
            <div>
              
             <Link to='/property-details'> <button id="btn1" type="button">Previous</button></Link>
              <button id="btn2" type="submit">Save & Continue</button>
            </div>
          </Form>
        )}
      </Formik>
  );
};

export default GeneralInfoForm;
