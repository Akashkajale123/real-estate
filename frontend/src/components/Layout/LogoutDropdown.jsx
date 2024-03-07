import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LogoutDropdown = () => {
    const navigate=useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    // Implement your logout logic here
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    console.log("Logging out...");
    navigate("/");
    
  };
  const dropdownToggleStyle = {
    fontSize: '0.85rem', // Adjust the font size to reduce the arrow size
    marginLeft: '0.2rem', // Adjust the margin as needed
    width: '20px',
    color: 'black',
    backgroundColor: '#f5f5f5',
    border: 'none',
    minWidth: 'unset', // Allow the button to adjust its width based on content
    maxWidth: 'unset', // Allow the button to adjust its width based on content
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
