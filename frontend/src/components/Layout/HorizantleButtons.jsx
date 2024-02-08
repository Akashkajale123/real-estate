import {React,useState} from 'react'
import './HorizantleButtons.css'
const HorizantleButtons = () => {
    const [currentPage, setCurrentPage] = useState("basicInfoFrom");
  return (
    <div>
        <h2 id='headline'>Add new Property</h2>
        <div id="horizantle_bar" style={{width: 1115, height: 70, background: 'white', boxShadow: '10px 14px 70px rgba(0, 0, 0, 0.03)', borderRadius: 500,border:'1px solid black', margin:'31px 0px 0px 75px'}} >
            <div className="box"></div>
            <div className="number">1</div>
            <div  className='form' id="basicInfoFrom">Basic Info</div>
            <div className="number">2</div>
            <div className='form' id="propertyDetailsInfoForm">Property_Detail</div>
            <div className="number">3</div>
            <div className='form' id="generalInfoForm">General Info</div>
            <div className="number">4</div>
            <div className='form' id="locationInfoForm">Location Info</div>
        </div>
       

    </div> 
  )
}

export default HorizantleButtons
