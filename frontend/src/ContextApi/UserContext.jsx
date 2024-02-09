// UserContext.js
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [formDataArray, setFormDataArray] = useState([]);
  const [userId, setUserId] = useState(null);
  const [userName,setUserName]=useState('Please sign in');

  // Function to update form data array
  const updateFormDataArray = (newFormData) => {
    setFormDataArray((prevFormDataArray) => [
      ...prevFormDataArray,
      newFormData,
    ]);
  };

  return (
    <UserContext.Provider value={{ formDataArray, updateFormDataArray, userId, setUserId, userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
