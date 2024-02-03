import React from 'react'
import { Link } from 'react-router-dom'
import './BasicInfo.css'
const BasicInfo = () => {
  return (
    <div>
      <h2 id='headline'>Add new Property</h2>
      <div className="pages-container">
            <div className="basic-info">Basic Info</div>
            <div className="property-details">Property  Detail</div>
            <div className="general-info">General Info</div>
            <div className="location-info">Location Info</div>
      </div>
    </div>
  )
}

export default BasicInfo
