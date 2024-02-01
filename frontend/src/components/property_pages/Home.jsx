import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className="main-box">
    <div className="sidebar">
        <h1 className='logo'>Logo</h1>
        <ul>
            <li > Property</li>
            <li>Assistance</li>
            <li>Received Interest</li>
            <li>Sent Interest</li>
            <li>Property Views</li>
            <li>Tariff  Plan</li>
           
        </ul>
    </div>
    <div className="right">
        <div className="top-bar"></div>
        <div className="main-content"></div>
    </div>
    
    </div>
  )
}

export default Home
