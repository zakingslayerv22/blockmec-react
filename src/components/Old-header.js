import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';

function Header() {
  return (
    <header id="site-header" className="fixed-top">
  <section className="w3l-header-4">
      <div className="container">
          <Nav className="navbar navbar-expand-lg navbar-light">
              <h1><a className="navbar-brand" href="index.html"><span className="fa fa-newspaper-o" aria-hidden="true"></span>
                      Corpo<span>Link</span>
                  </a></h1>
              <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="fa icon-expand fa-bars"></span>
                  <span className="fa icon-close fa-times"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                      <li className="nav-item active">
                          <a className="nav-link" href="index.html">Home </a>
                      </li>
                      <li className="nav-item @@about__active">
                          <a className="nav-link" href="about.html">About</a>
                      </li>
                      <li className="nav-item @@services__active">
                          <a className="nav-link" href="services.html">Services</a>
                      </li>
                  </ul>
                  <ul className="navbar-nav search-right mt-lg-0 mt-2">
                      <li className="nav-item mr-3" title="Search"><a href="#search" className="btn search-search">
                              <span className="fa fa-search" aria-hidden="true"></span></a></li>
                      <li className="nav-item"><a href="contact.html"
                              className="btn btn-primary d-none d-lg-block btn-style mr-2">Contact Us</a></li>
                  </ul>

                  {/* <!-- //toggle switch for light and dark theme -->
                  <!-- search popup --> */}
                  <div id="search" className="pop-overlay">
                      <div className="popup">
                          <form action="#" method="GET" className="d-sm-flex">
                              <input type="search" placeholder="Search.." name="search" required="required" autofocus />
                              <button type="submit">Search</button>
                              <a className="close" href="#url">&times;</a>
                          </form>
                      </div>
                  </div>
                  {/* <!-- /search popup --> */}
              </div>
              {/* <!-- toggle switch for light and dark theme --> */}
              <div className="mobile-position">
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
              </div>
          </Nav>
      </div>
  </section>
</header>
  )
}

export default Header