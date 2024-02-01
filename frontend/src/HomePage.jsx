import React from 'react'
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Homepage </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, rerum.</p>
      <Link to='/page1'><button>Navigate to page1</button></Link>
    </div>
  )
}

export default HomePage
