import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './PropertyDetailsForm.css'

import { useUserData } from '../../ContextApi/UserContext';

import { FormData } from '../../ContextApi/FormContext';
const validationSchema = Yup.object().shape({
  length: Yup.number().positive("Length must be positive").required("Required"),
  breath: Yup.number().positive("Breath must be positive").required("Required"),
  totalArea: Yup.number().positive("Total area must be positive").required("Required"),
  areaUnit: Yup.string().required("Required"),
  bhk: Yup.string().required("Required"),
  noOfFloors: Yup.string().required("Required"),
  attached: Yup.string().required("Required"),
  westernToilet: Yup.string().required("Required"),
  furnished: Yup.string().required("Required"),
  carParking: Yup.string().required("Required"),
  lift: Yup.string().required("Required"),
  electricity: Yup.string().required("Required"),
  facing: Yup.string().required("Required"),
});

const initialValues = {
  length: "",
  breath: "",
  totalArea: "",
  areaUnit: "",
  bhk: "",
  noOfFloors: "",
  attached: "",
  westernToilet: "",
  furnished: "",
  carParking: "",
  lift: "",
  electricity: "",
  facing: "",
};

const PropertyDetailsForm = () => {

  const {prevStep,nextStep} = useUserData();
  const {formData,setFormData}=FormData();
    const handleSubmit = (values) => {
        // Handle form submission here
        setFormData(...formData,values);
        // console.log(formData);
        // You can call onNext() to proceed to the next step or save the data.
      };

  return (
    <div style={{width: 1201, height: 1012, background: 'white', boxShadow: '10px 14px 70px rgba(0, 0, 0, 0.03)', borderRadius: 20,margin:'61px 0 0 40px'}}>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          {/* Render your form fields here */}
          <div className="input" id='row1'>
            <div >
              <label htmlFor="length">Length</label>
              <Field type="number" id="length" name="length" placeholder='Example: 1000' />
              <ErrorMessage name="length" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="breath">Breath</label>
              <Field type="number" id="breath" name="breath" placeholder='Example: 1000' />
              <ErrorMessage name="breath" component="div" className="error" />
            </div>
          </div>

          <div className="input">
            <div>
              <label htmlFor="totalArea">Total Area</label>
              <Field type="number" id="totalArea" name="totalArea" placeholder='Example: 7500' />
              <ErrorMessage name="totalArea" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="areaUnit">Area Unit</label>
              <Field as="select" id="areaUnit" name="areaUnit">
                <option value="">Select Area Unit</option>
                <option value="sq-ft">Sq-ft</option>
                <option value="sq-mm">Sq-mm</option>
                <option value="sq-meter">Sq-meter</option>
              </Field>
              <ErrorMessage name="areaUnit" component="div" className="error" />
            </div>
          </div>

          <div className="input">
            <div>
              <label htmlFor="bhk">No of BHK</label>
              <Field as="select" id="bhk" name="bhk">
                <option value="">Select No Of BHK</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Field>
              <ErrorMessage name="bhk" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="noOfFloors">No of Floors</label>
              <Field as="select" id="noOfFloors" name="noOfFloors">
                <option value="">Select No Of Floor</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </Field>
              <ErrorMessage name="noOfFloors" component="div" className="error" />
            </div>
          </div>

          <div className="input">
            <div>
              <label htmlFor="attached">Attached</label>
              <Field as="select" id="attached" name="attached">
                <option value="">Select Attached</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Field>
              <ErrorMessage name="attached" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="westernToilet">Western Toilet</label>
              <Field as="select" id="westernToilet" name="westernToilet">
                <option value="">Select Western Toilet</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Field>
              <ErrorMessage name="westernToilet" component="div" className="error" />
            </div>
          </div>

          <div className="input">
            <div>
              <label htmlFor="furnished">Furnished</label>
              <Field as="select" id="furnished" name="furnished">
                <option value="">Select Furnished</option>
                <option value="Unfurnished">Unfurnished</option>
                <option value="Semi-Furnished">Semi-Furnished</option>
                <option value="Fully-Furnished">Fully-Furnished</option>
              </Field>
              <ErrorMessage name="furnished" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="carParking">Car Parking</label>
              <Field as="select" id="carParking" name="carParking">
                <option value="">Select Car Parking</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Field>
              <ErrorMessage name="carParking" component="div" className="error" />
            </div>
          </div>

          <div className="input">
            <div>
              <label htmlFor="lift">Lift</label>
              <Field as="select" id="lift" name="lift">
                <option value="">Select Lift</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Field>
              <ErrorMessage name="lift" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="electricity">Electricity</label>
              <Field as="select" id="electricity" name="electricity">
                <option value="">Select Electricity</option>
                <option value="1 phase">1 Phase</option>
                <option value="3 phase">3 Phase</option>
                <option value="both">Both</option>
              </Field>
              <ErrorMessage name="electricity" component="div" className="error" />
            </div>
          </div>

          <div className='input'>
            <div id='row7'>
              <label htmlFor="facing">Facing</label>
              <Field as="select" id="facing" name="facing">
                <option value="">Select Facing</option>
                <option value="East">East</option>
                <option value="West">West</option>
                <option value="North">North</option>
                <option value="South">South</option>
              </Field>
              <ErrorMessage name="facing" component="div" className="error" />
            </div>
          </div>



        <div>
        <button id='btn1' type="button" onClick={prevStep}> Previous</button>
          <button id='btn2' type="submit" onClick={nextStep}>Save & Continue</button>
        </div>
      </Form>
    )}
  </Formik>
  </div>

  )
}

export default PropertyDetailsForm
