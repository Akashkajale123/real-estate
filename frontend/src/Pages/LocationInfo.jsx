import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationInfoForm from '../components/forms/LocationInfoForm';
const LocationInfo = () => {
  return (
    <div style={{width: 1201, height: 656, background: 'white', boxShadow: '10px 14px 70px rgba(0, 0, 0, 0.03)', borderRadius: 20,border:'1px solid black',margin:'48px 0px 0px 40px'}} >
        <LocationInfoForm/>
    </div>
  )
}

export default LocationInfo
