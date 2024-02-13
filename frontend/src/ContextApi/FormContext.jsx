// FormContext.js
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import propTypes from "prop-types"

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState([]);

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};

FormProvider.propTypes = {
    children: propTypes.node.isRequired,
};


export const FormData = () => useContext(FormContext);

