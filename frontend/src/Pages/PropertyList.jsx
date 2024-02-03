import React from "react";
import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi';
import "./PropertyList.css"; // Import CSS file for custom styling if needed
import { BiPlus } from 'react-icons/bi';
const PropertyList = () => {
  return (
<div className="main-content">
<div className="search-input-and-btn">
     <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search PPD ID"
      />
      <BiSearch className="search-icon" />
      
    </div>
   <Link to='/basic-info'> <button id="add-property-btn"> <BiPlus /> Add Property</button></Link>
   </div>
   <table>
    <thead>
        <tr >
            <th>PPD ID</th>
            <th>Image</th>
            <th>Property</th>
            <th>Contact</th>
            <th>Contact</th>
            <th>Views</th>
            <th>Status</th>
            <th>Days Left</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody></tbody>
   </table>
</div>
  );
};

export default PropertyList;
