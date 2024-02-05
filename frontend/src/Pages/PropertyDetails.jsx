import React from 'react'
import { Link } from 'react-router-dom'
import PropertyDetailsForm from '../components/forms/PropertyDetailsForm'

const PropertyDetails = () => {
  return (
    <div>
      <div style={{width: 1201, height: 1012, background: 'white', boxShadow: '10px 14px 70px rgba(0, 0, 0, 0.03)', borderRadius: 20,border:'1px solid black',margin:'47px 0px 0px 61px '}} >
        <PropertyDetailsForm/>
      </div>
    </div>
  )
}

export default PropertyDetails
