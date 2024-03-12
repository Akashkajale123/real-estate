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
    backgroundColor: '#FAFBFC',
    border: 'none',
    minWidth: 'unset', // Allow the button to adjust its width based on content
    maxWidth: 'unset', // Allow the button to adjust its width based on content
    marginRight:'40px',
};

  

  
  return (
    <Dropdown show={showDropdown} onToggle={setShowDropdown}  style={{marginRight:'50px' ,width:'25px'}}>
      <Dropdown.Toggle id="dropdown-basic"  style={dropdownToggleStyle}  >
  
      </Dropdown.Toggle>

      <Dropdown.Menu  style={{minWidth:'unset',maxWidth:'unset'}}>
        <Dropdown.Item onClick={handleLogout} style={{color:'red'}} >Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LogoutDropdown;
