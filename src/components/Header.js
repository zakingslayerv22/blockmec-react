import logo from './assets/logo.svg';
import React from 'react'
import { Nav, Navbar, NavLink, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
            
         <img src={logo} width="70px" height="70px" /> {' '}
         Blockmec
                  
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav>
            <NavLink><Link to="/">Home</Link></NavLink>
            <NavLink><Link to="/about">About</Link></NavLink>
            <NavLink><Link to="/services">Services</Link></NavLink>
            <NavLink><Link to="/contact">Contact Us</Link></NavLink>
        </Nav>
        <Button variant="outline-success" href="/" >Connect Wallet</Button>
        </Navbar.Collapse>

        {/* <div className="mobile-position">
                  <nav className="navigation">
                      <div className="theme-switch-wrapper">
                          <label className="theme-switch" for="checkbox">
                              <input type="checkbox" id="checkbox" />
                              <div className="mode-container">
                                  <i className="gg-sun"></i>
                                  <i className="gg-moon"></i>
                              </div>
                          </label>
                      </div>
                  </nav>
              </div> */}


    </Navbar>
  )
}

export default Header