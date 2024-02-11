import React from 'react'
import { Link } from 'react-router-dom'
import GeneralInfoForm from '../components/forms/GeneralInfoForm'
const GeneralInfo = () => {
  return (
    <div style={{width: 1201, height: 656, background: 'white', boxShadow: '10px 14px 70px rgba(0, 0, 0, 0.03)', borderRadius: 20,border:'1px solid black',margin:'47px 0px 0px 40px'}} >
        <GeneralInfoForm/>
    </div>
  )
}

export default GeneralInfo
