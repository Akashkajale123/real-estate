import React from 'react'
import { Link } from 'react-router-dom'
import './BasicInfo.css'
import BasicInfoFrom from '../components/forms/BasicInfoFrom'
const BasicInfo = () => {
  return (
    <div>
        <div style={{width: 1201, height: 656, background: 'white', boxShadow: '10px 14px 70px rgba(0, 0, 0, 0.03)', borderRadius: 20,margin:'61px 0 0 40px'}} >
            <BasicInfoFrom/>
        </div>
    </div>
  )
}

export default BasicInfo
