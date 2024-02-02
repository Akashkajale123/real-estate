// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Loyout'; // Import the Layout component
import SignIN from './components/auth/SignIN';
import SignUp from './components/auth/SignUp';
import PropertyList from './Pages/PropertyList';
import BasicInfo from './Pages/BasicInfo';
import PropertyDetails from './Pages/PropertyDetails';
import GeneralInfo from './Pages/GeneralInfo';
import LocationInfo from './Pages/LocationInfo';

function App() {
  return (
    
      
      <Layout>
        <Routes>
          <Route path="/" exact element={<SignIN/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/property-list" element={<PropertyList/>} />
          <Route path="/basic-info" element={<BasicInfo/>} />
          <Route path="/property-details" element={<PropertyDetails/>} />
          <Route path="/general-info" element={<GeneralInfo/>} />
          <Route path="/location-info" element={<LocationInfo/>} />
        </Routes>
      </Layout>
 
  );
}

export default App;
