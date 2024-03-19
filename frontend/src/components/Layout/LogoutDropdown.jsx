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
    width:'20px',
    height:'30px',
    color:'black',
    backgroundColor:'lightCyan',
    border:'none'

    

};

const dropdownMenuStyle = {
  minWidth: '10px'
};

  
  return (
    <Dropdown show={showDropdown} onToggle={setShowDropdown}  >
      <Dropdown.Toggle id="dropdown-basic"  style={dropdownToggleStyle}  >
  
      </Dropdown.Toggle>

      <Dropdown.Menu  style={dropdownMenuStyle}>
        <Dropdown.Item onClick={handleLogout} style={{color:'red',fontSize:'10px'}} >Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LogoutDropdown;
