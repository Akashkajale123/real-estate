// FormContext.js
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import propTypes from "prop-types"

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState([]);

    const submitForm = () => {
        console.log(formData);
    }

    return (
        <FormContext.Provider value={{ formData, setFormData, submitForm }}>
            {children}
        </FormContext.Provider>
    );
};

FormProvider.propTypes = {
    children: propTypes.node.isRequired,
};


export const FormData = () => useContext(FormContext);