import React from 'react';
import { Formik, Form } from 'formik';
import BasicInfoForm from '../components/forms/BasicInfoFrom';
import PropertyDetailsForm from '../components/forms/PropertyDetailsForm';
import GeneralInfoForm from '../components/forms/GeneralInfoForm';
import LocationInfoForm from '../components/forms/LocationInfoForm';
import { useUserData } from '../ContextApi/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const MultiStepForm = () => {
  const { step, setStep, formData, setFormData } = useUserData();
  const navigate = useNavigate();
  const {userId} = useUserData();
  const handleSubmit =async (values, actions) => {
  
    // Merge current form data with previous form data
    const newFormData = { ...formData, ...values };
    setFormData(newFormData);
    console.log(formData)
    if (step === 4) {
      // Submit the final form data
      
      console.log('Final form data:', newFormData);
      // Perform any additional actions like API call here
      try {
        // Perform the Axios POST request to the API endpoint
        const response=await axios.post(`http://localhost:4000/property/addproperty/${userId}`, newFormData);
        console.log(response)

        // Reset form data and step
        setFormData({});
        setStep(1);

        // Redirect to property list page
        navigate('/property-list');
      } catch (error) {
        console.error('Error saving property:', error);
        // Handle any errors, show error message or log them
      }
    } else {
      // Move to the next step
      setStep(step + 1);
    }

    // Reset form state
    actions.setSubmitting(false);
    actions.resetForm();
  };

  const getFormStep = (step) => {
    switch (step) {
      case 1:
        return <BasicInfoForm onSubmit={handleSubmit} />;
      case 2:
        return <PropertyDetailsForm onSubmit={handleSubmit} />;
      case 3:
        return <GeneralInfoForm onSubmit={handleSubmit} />;
      case 4:
        return <LocationInfoForm onSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* <Formik initialValues={{}} onSubmit={handleSubmit} validateOnMount> */}
      {/* <Form> */}
      <div style={{ marginBottom: '20px' }}>
        Step {step} of 4 - Progress: {Math.floor(((step - 1) / 3) * 100)}%
      </div>
      {getFormStep(step)}
      {/* </Form> */}
      {/* // </Formik> */}

    </div >
  );
};

export default MultiStepForm;