import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillPersonFill } from 'react-icons/bs';
import './Header.css';
import LogoutDropdown from './LogoutDropdown';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" style={{ height: '127px' }}>
      <Container className="justify-content-between h-100">
        <Navbar.Brand>USER ID : 06PPD125</Navbar.Brand>
        <Navbar.Brand id='user'><span style={{ marginRight: '10px',  fontSize:'25px',paddingBottom:'10px'}}> 
        <BsFillPersonFill /> 
      </span> User Name
        <LogoutDropdown/>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
