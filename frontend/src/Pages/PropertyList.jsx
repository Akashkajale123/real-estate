import React from 'react'
import { Link } from 'react-router-dom'

const PropertyList = () => {
  return (
    <div>
      <h1>Properties list here</h1>
      <Link to='/basic-info'><button>navigate to basic info page</button></Link>
    </div>
  )
}

export default PropertyList
