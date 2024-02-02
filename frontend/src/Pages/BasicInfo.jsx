import React from 'react'
import { Link } from 'react-router-dom'
const BasicInfo = () => {
  return (
    <div>
      <h1>basic info page</h1>
      <Link to='/property-details'><button>navigate to property details page</button></Link>
    </div>
  )
}

export default BasicInfo
