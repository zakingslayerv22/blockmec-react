import React from 'react'
import { Link } from 'react-router-dom';


import { FaMicrophone, FaRegChartBar, FaChartLine, FaFacebookF, FaTwitter, FaDribbble, FaGoogle, 
  FaCheck  } 
  from 'react-icons/fa';


function ServicesBody() {
  return (
    <>
                <section className="w3l-servicesblock1 py-5" id="services">
          <div className="container py-lg-5 py-md-4">
            <h3 className="title-big text-center mb-5">Services we offer</h3>
            <div className="w3-services-grids">
              <div className="fea-gd-vv row">
                <div className="col-lg-3 col-md-6">
                  <div className="feature-gd icon-yellow">
                    <div className="icon">
                      <img src="assets/images/laptop.png" alt="" className="img-fluid" />
                    </div>
                    <div className="icon-info">
                      <a href="#url">Web design<br /> and development </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-md-0 mt-4">
                  <div className="feature-gd icon-vilot">
                    <div className="icon">
                      <img src="assets/images/mobile1.png" alt="" className="img-fluid" />
                    </div>
                    <div className="icon-info">
                      <a href="#url">Mobile app<br /> development</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-lg-0 mt-md-5 mt-4">
                  <div className="feature-gd icon-blue">
                    <div className="icon">
                      <img src="assets/images/android.png" alt="" className="img-fluid" />
                    </div>
                    <div className="icon-info">
                      <a href="#url">Android app<br /> development</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-lg-0 mt-md-5 mt-4">
                  <div className="feature-gd icon-red">
                    <div className="icon">
                      <img src="assets/images/code.png" alt="" className="img-fluid" />
                    </div>
                    <div className="icon-info">
                      <a href="#url">Php Web<br /> development</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-md-5 mt-4">
                  <div className="feature-gd icon-light-green">
                    <div className="icon">
                      <img src="assets/images/iphone.png" alt="" className="img-fluid" />
                    </div>
                    <div className="icon-info">
                      <a href="#url">iOS App<br /> development </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-md-5 mt-4">
                  <div className="feature-gd icon-light-blue">
                    <div className="icon">
                      <img src="assets/images/java.png" alt="" className="img-fluid" />
                    </div>
                    <div className="icon-info">
                      <a href="#url">JQuery &amp; Java<br /> programming</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-md-5 mt-4">
                  <div className="feature-gd icon-dark-green">
                    <div className="icon">
                      <img src="assets/images/chain.png" alt="" className="img-fluid" />
                    </div>
                    <div className="icon-info">
                      <a href="#url">Blockchain<br /> development</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-md-5 mt-4">
                  <div className="feature-gd icon-pink">
                    <div className="icon">
                      <img src="assets/images/program.png" alt="" className="img-fluid" />
                    </div>
                    <div className="icon-info">
                      <a href="#url">.net program<br /> development</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w3l-services py-5">
          <div className="container py-lg-5 py-sm-4">
            <div className="row about-text">
              <div className="col-lg-4">
                <h3 className="title-big" id="blockchains">Everything you need to build your blockchain.</h3>
              </div>
              <div className="col-lg-4 mt-lg-0 mt-3 justify">
                <p>When the technology hit the scene in 2009 with the 
                  release of its first application, the Bitcoin cryptocurrency, 
                  blockchain had a Wild West feel akin to the early days of PC hackers, 
                  making the technology seem risky and unproven for business use. 
                  That began to change about five years ago when a burgeoning open 
                  source community began developing complete enterprise platforms, 
                  including the programmable blockchain, Ethereum.</p>
              </div>
              <div className="col-lg-4 mt-lg-0 mt-3">
                <p className="justify">Blockmec has the key which is an accurate picture of 
                what blockchain really does and doesn't do; the effects of its various 
                deployment options, especially its network architectures; 
                and where the heavy black lines are between blockchain and possibly better 
                alternatives. Blockmec is the only way to get value from blockchain and avoid 
                wasting money on spectacular failures.</p>
              </div>
            </div>
          </div>
        </div>
        <section className="w3l-services1">
          <div id="content-with-photo4-block" className="py-lg-5 pt-5">
            <div className="container pt-lg-5 pt-md-3">
              <div className="cwp4-two row">
                <div className="cwp4-image col-lg-6 mb-lg-0 mb-md-5 mb-4 pr-lg-5 ">
                  <a href="#url" className="d-block"><img src="assets/images/blockmec-images/strategy.jpg" className="radius-image img-fluid" alt="" /></a>
                </div>
                <div className="cwp4-text col-lg-6 ">
                  <div className="icon">
                    <span className="fa"> <FaRegChartBar /> </span>
                  </div>
                  {/* <h3 className="title-big my-3">Strategy &amp; research</h3> */}

                  <h3 className="title-big my-3">Manage It All From A Single Blockchain Tool</h3>
                  <p className="justify">From creating your first project, to managing delivery of a large program, 
                    Blockmec Technology  has your back. Best methods are baked-in, 
                    so you can focus on meeting your goals, not worrying about what is falling 
                    through the cracks. </p>
                  <ul className="cont-4 mt-4">
                    <li><span className="fa"/> <FaCheck />Track Your Code, Bugs, User Stories, And More</li>
                    <li><span className="fa"/> <FaCheck />Bring QA To The Forefront Of Your Development</li>
                    {/* <li><span className="fa"/> <FaCheck />Incididunt ut labore et, pharetra massa</li> */}
                    {/* <li><span className="fa"/> <FaCheck />Vestibulum ante ipsum primis tempor</li> */}
                  </ul>

                  <Link to="/about" className="btn btn-style btn-primary mt-lg-5 mt-4">Read More</Link>
                  {/* <a href="#url" className="btn btn-style btn-primary mt-lg-5 mt-4">Read More</a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w3l-services1">
          <div id="content-with-photo4-block" className="py-lg-5 py-5">
            <div className="container pb-lg-5 pb-md-3">
              <div className="cwp4-two row">
                <div className="cwp4-text col-lg-6 order-lg-1 order-2">
                  <div className="icon">
                    <span className="fa"> <FaChartLine /> </span>
                  </div>
                  <h3 className="title-big my-3">Report &amp; Analysis</h3>
                  <p>Blockmec Enterprise reporting is the creation and distribution of 
                    reports concerning business performance to key decision makers in an 
                    organization. This may include reports on metrics on key performance 
                    indicators or information curated for day-to-day activities. 
                    Enterprise reporting provides users with a comprehensive view of the 
                    business and its performance at a high level with metrics, dashboards,
                    graphs, and other user-friendly business intelligence tools. </p>
                  <ul className="cont-4 mt-4">
                    <li><span className="fa"/> <FaCheck />Enabling better decision making.</li>
                    <li><span className="fa"/> <FaCheck />Delivering great customer experiences.</li>
                    <li><span className="fa"/> <FaCheck />Increasing productivity.</li>
                    <li><span className="fa"/> <FaCheck />Connecting to innovation.</li>
                  </ul>

                  <Link to="/about" className="btn btn-style btn-primary mt-lg-5 mt-4">Read More</Link>
                  {/* <a href="#url" className="btn btn-style btn-primary mt-lg-5 mt-4">Read More</a> */}
                </div>
                <div className="cwp4-image col-lg-6 mt-lg-0 mt-md-5 mt-4 pl-lg-5 order-lg-2 order-1">
                  <a href="#url" className="d-block"><img src="assets/images/blockmec-images/analytics.jpg" className="radius-image img-fluid" alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
    
    </>
  )
}

export default ServicesBody