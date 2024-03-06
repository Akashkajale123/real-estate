// FormContext.js
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import propTypes from "prop-types"

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState([]);
    
    const form = new FormData();
    const submitForm = () => {
        for (const keys in formData) {
            form.append(keys, formData[keys])
        }

        for (const [key, value] of form.entries()) {
            console.log(`${key}: ${value}`);
        }

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


export const UseForm = () => useContext(FormContext);