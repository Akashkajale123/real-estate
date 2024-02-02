import React from 'react'
import { Link } from 'react-router-dom'

const PropertyDetails = () => {
  return (
    <div>
      <h1>PropertyDetails</h1>
      <Link to='/general-info'><button>navigate to basic info page</button></Link>
    </div>
  )
}

export default PropertyDetails
