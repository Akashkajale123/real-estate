import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const LogoutDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logging out...");
  };
  const dropdownToggleStyle = {
    fontSize: '1.5rem', // Adjust the font size to reduce the arrow size
    marginLeft: '0.5rem', // Adjust the margin as needed
    width:'50px',
    color:'black',
    backgroundColor: '#f5f5f5',
    border:'none'
     
  };
  

  
  return (
    <Dropdown show={showDropdown} onToggle={setShowDropdown}>
      <Dropdown.Toggle id="dropdown-basic"  style={dropdownToggleStyle} >
  
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item onClick={handleLogout} >Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LogoutDropdown;
