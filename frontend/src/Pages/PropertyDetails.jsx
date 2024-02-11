import React from 'react'
import { Link } from 'react-router-dom'
import PropertyDetailsForm from '../components/forms/PropertyDetailsForm'

const PropertyDetails = () => {
  return (
    <div style={{backgroundColor:'#FAFBFC'}}>
      <div style={{width: 1201, height: 1012, background: 'white', boxShadow: '10px 14px 70px rgba(0, 0, 0, 0.03)', borderRadius: 20,margin:'61px 0 0 40px'}} >
        <PropertyDetailsForm/>
      </div>
    </div>
  )
}

export default PropertyDetails
