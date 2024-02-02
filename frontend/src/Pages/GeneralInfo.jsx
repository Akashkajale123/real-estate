import React from 'react'
import { Link } from 'react-router-dom'
const GeneralInfo = () => {
  return (
    <div>
      <h1>general info page</h1>
      <Link to='/location-info'><button>navigate to property details page</button></Link>
    </div>
  )
}

export default GeneralInfo
