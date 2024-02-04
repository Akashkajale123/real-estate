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
import HorizantleButtons from './components/Layout/HorizantleButtons';

function App() {
  return (
    
      
      <Layout>
        <Routes>
          <Route path="/" exact element={<SignIN/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/property-list" element={<PropertyList/>} />
          <Route path="/basic-info" element={
            <div>
               <HorizantleButtons/>
              <BasicInfo/>
             
            </div>
          } />
          <Route path="/property-details" element={
             <div>
               <HorizantleButtons/>
             <PropertyDetails/>
            
           </div>
          } />
          <Route path="/general-info" element={
             <div>
             <HorizantleButtons/>
           <GeneralInfo/>
          
         </div>
          } />
          <Route path="/location-info" element={
             <div>
             <HorizantleButtons/>
           <LocationInfo/>
          
         </div>
          } />
          
        </Routes>
      </Layout>
 
  );
}

export default App;
