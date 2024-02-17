import React from 'react'
import { useUserData } from '../ContextApi/UserContext';

const ProgressBar = () => {
    const {step}=useUserData();
    const steps = ['BasicInfo', 'PropertyDetail', 'GeneralInfo', 'LocationInfo'];
  return (
    <nav>
      <div className="progress" style={{height:'22px'}}>
        <div 
          className={`progress-bar ${step > 1 ? 'bg-success' : ''}`}
          role="progressbar"
          style={{  width: `${(step / 4) * 100}%`, fontFamily:'sans-serif', fontSize:'16px'}}
          aria-valuenow={step}
          aria-valuemin="0"
          aria-valuemax="4"
        >
          {`${steps[step - 1]} form `}
        </div>
      </div>
      <h6>
      </h6>
    </nav>
  )
}

export default ProgressBar
