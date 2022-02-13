import React from 'react'

function Footer() {
  return (
    <section className="w3l-footer">
  <footer className="footer-28">
    <div className="footer-bg-layer">
      <div className="container py-lg-3">
        <div className="row footer-top-28">
          <div className="col-lg-5 footer-list-28 mt-5">
            <h6 className="footer-title-28">Contact information</h6>
            <ul>
              <li>
                <p><strong>Address</strong> : #135 block, Barnard St. Brooklyn, London 10036, UK</p>
              </li>
              <li>
                <p><strong>Phone</strong> : <a href="tel:+(12)234-11-24">+(12)234-11-24</a></p>
              </li>
              <li>
                <p><strong>Email</strong> : <a href="mailto:example@mail.com">example@mail.com</a></p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7">
            <div className="row">
              <div className="col-sm-4 col-6 footer-list-28 mt-5">
                <h6 className="footer-title-28">Company</h6>
                <ul>
                  <li><a href="about.html">About Company</a></li>
                  <li><a href="#blog">Latest Blog Posts</a></li>
                  <li><a href="services.html">Our Services</a></li>
                  <li><a href="#job">Job Opportunities</a></li>
                </ul>
              </div>
              <div className="col-sm-4 col-6 footer-list-28 mt-5">
                <h6 className="footer-title-28">Quick Links</h6>
                <ul>
                  <li><a href="contact.html">Get in touch</a></li>
                  <li><a href="#creat">Create account</a></li>
                  <li><a href="#careers">Careers</a></li>
                  <li><a href="#feedback">Site Feedack</a></li>
                </ul>
              </div>
              <div className="col-sm-4 footer-list-28 mt-5">
                <h6 className="footer-title-28">Categories</h6>
                <ul>
                  <li><a href="#URL">Creative tech</a></li>
                  <li><a href="#URL">General info</a></li>
                  <li><a href="#URL">Valuable Insights</a></li>
                  <li><a href="#URL">Our events</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="midd-footer-28 align-center py-4 mt-5">
        <div className="container">
          <p className="copy-footer-28 text-center"> &copy; 2020 CorpoLink. All Rights Reserved. Design by <a
              href="https://w3layouts.com/">W3Layouts</a></p>
        </div>
      </div>
    </div>
    {/* <!-- move top --> */}
    <button id="movetop" title="Go to top">
      <span className="fa fa-angle-up"></span>
    </button>
    
    {/* <!-- /move top --> */}
  </footer>
  </section>
  )
}

export default Footer