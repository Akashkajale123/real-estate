import React from 'react';
import BasicInfoForm from '../components/forms/BasicInfoFrom';
import PropertyDetailsForm from '../components/forms/PropertyDetailsForm';
import GeneralInfoForm from '../components/forms/GeneralInfoForm';
import LocationInfoForm from '../components/forms/LocationInfoForm';
import { useUserData } from '../ContextApi/UserContext';


const MultiStepForm = () => {
  const { step, setStep} = useUserData();
  const handleSubmit = () => {
  
    if (step === 4) {
        setFormData({});
        setStep(1);

    }

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