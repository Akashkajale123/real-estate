// FormContext.js
import { createContext, useContext, useState } from 'react';
import PropTypes from "prop-types";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({});

    const submitForm = () => {
        console.log(formData);
        // You can perform any further actions here, such as submitting the form data
    };

    return (
        <FormContext.Provider value={{ formData, setFormData, submitForm }}>
            {children}
        </FormContext.Provider>
    );
};

FormProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useForm = () => useContext(FormContext);
