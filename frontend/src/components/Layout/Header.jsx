import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillPersonFill } from 'react-icons/bs';
import './Header.css';
import LogoutDropdown from './LogoutDropdown';
import { useUserData } from '../../ContextApi/UserContext';

const Header = () => {
  const {userId,userName} = useUserData();
  return (
    <Navbar bg="light" expand="lg" style={{ height: '127px' }}>
      <Container className="justify-content-between h-100">
        <Navbar.Brand>USER ID :- {userId}</Navbar.Brand>
        <Navbar.Brand id='user'><span style={{ marginRight: '10px',  fontSize:'25px',paddingBottom:'10px'}}> 
        <BsFillPersonFill /> 
      </span> {userName}
        <LogoutDropdown/>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
