// UserContext.js
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [userName,setUserName]=useState('Please sign in');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [id,setId]=useState(1);
  const [PPDId,setPPDId]=useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };




  return (
    <UserContext.Provider value={{ userId, setUserId, userName, setUserName,prevStep,nextStep,step,setStep,
    formData,setFormData,id,setId,PPDId,setPPDId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserData = () => useContext(UserContext);
