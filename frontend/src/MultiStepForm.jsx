import React, { useContext, useState } from 'react';
import { Formik, Form } from 'formik';
import BasicInfoForm from './components/forms/BasicInfoFrom';
import PropertyDetailsForm from './components/forms/PropertyDetailsForm';
import GeneralInfoForm from './components/forms/GeneralInfoForm';
import LocationInfoForm from './components/forms/LocationInfoForm';
import { useUser } from './ContextApi/UserContext';

const MultiStepForm = () => {
    const { step,setStep,formData, setFormData,nextStep}= useContext(useUser)
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({});

//   const nextStep = () => {
//     setStep(step + 1);
//   };

//   const prevStep = () => {
//     setStep(step - 1);
//   };

  const handleSubmit = (values, actions) => {
    // Merge current form data with previous form data
    const newFormData = { ...formData, ...values };
    setFormData(newFormData);

    if (step === 4) {
      // Submit the final form data
      console.log('Final form data:', newFormData);
      // Perform any additional actions like API call here
      setStep(1);
      setFormData({});
    } else {
      // Move to the next step
      nextStep();
    }

    // Reset form state
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
      <Formik
        initialValues={{}}
        onSubmit={() => {}}
        validateOnMount
      >
        <Form>
          <div style={{ marginBottom: '20px' }}>
            Step {step} of 4 - Progress: {((step - 1) / 3) * 100}%
          </div>
          {getFormStep(step)}
          {/* <div style={{ marginTop: '20px' }}>
            {step > 1 && (
              <button type="button" onClick={prevStep}>
                Previous
              </button>
            )}
            {step < 4 && (
              <button type="submit" onClick={nextStep}>
                Next
              </button>
            )}
          </div> */}
        </Form>
      </Formik>
    </div>
  );
};

export default MultiStepForm;
