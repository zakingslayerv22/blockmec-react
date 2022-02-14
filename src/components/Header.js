import logo from './assets/logo.svg';
import React from 'react'
import { Nav, Navbar, NavLink, Button } from 'react-bootstrap';

function Header() {
  return (
    <Navbar sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
            
         <img src={logo} width="70px" height="70px" /> {' '}
         Logo 
                  
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav>
            <NavLink href="/">Home</NavLink>
            <NavLink href="about.html">About</NavLink>
            <NavLink href="services.html">Services</NavLink>
            <NavLink href="services.html">Contact Us</NavLink>
        </Nav>
        <Button variant="outline-success" >Search</Button>
        </Navbar.Collapse>

    </Navbar>
  )
}

export default Header