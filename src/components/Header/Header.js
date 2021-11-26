import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {

  const activeStyle = {
    fontWeight: "bold",
    color: "red",
    textDecoration:"none",
    fontSize:"20px",
    
}

  return (
    <div>

      <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">
      <h3>IT-Zone</h3>
    </Navbar.Brand>
    <Nav className="me-auto">
      <NavLink to='/home' style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px",}} activeStyle={activeStyle}>Home</NavLink>
      <NavLink to='/service' style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px",}} activeStyle={activeStyle}>Service</NavLink>
      <NavLink to='/about' style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px",}} activeStyle={activeStyle}>About</NavLink>
      <NavLink to='/contact' style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px",}} activeStyle={activeStyle}>Contact</NavLink>
    </Nav>
    </Container>
  </Navbar>
    </div>
  );
};

export default Header;