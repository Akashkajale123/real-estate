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
    <Navbar style={{width:'1045px',height:'60px',position:'fixed',top:'0' ,left:'250px',zIndex:'1',background:'lightCyan'}}>
      <Container className="navbar-container">
        <Navbar.Brand id='userId'>USER ID :- {userId}</Navbar.Brand>
        <Navbar.Brand id='user'><span > 
        <BsFillPersonFill /> 
   
      </span > {userName}
        <LogoutDropdown/>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
