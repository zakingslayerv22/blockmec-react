import React from 'react'
import { FaHeadphones, FaLaptop, FaLightbulb, FaPencilAlt } from 'react-icons/fa'

function About() {
  return (
    <>
        <section className="w3l-content-6" id="about" >
          {/* /content-6-main*/}
          <div className="content-6-mian py-5" >
            <div className="container py-lg-5 py-md-4">
              <div className="content-info-in row">
                <div className="content-gd col-lg-6 pr-lg-4">
                  <div className="title-content text-left mb-sm-4 mb-3">
                    <h3 className="title-small">Who We Are</h3>
                    <h3 className="title-big ">We have industry experience.</h3>
                  </div>
                  <h4 className="mb-sm-4 mb-3">"Providing Blockchain Solutions.</h4>
                  <p className="justify">Blockmec enterprise furnishes businesses with a complete perspective 
                    of blockchain topography and its potential significances. We support you at 
                    every step of blockchain adoption, from design thinking-driven evaluation to 
                    assessing blockchain solution from various proportion, creating 
                    proof-of-concepts and pilot development to complete implementation of solution. 
                    Our expertise, technology-agnostic approach, purpose-built architectures and 
                    end-to-end delivery accelerate your enterprise blockchain deployments.
                    Blockmec technology  is empowering enterprises and businesses with accountability,
                    immutability, scalability, security, ease of use, and control, radically 
                    transforming the course of their business </p>
                </div>
                <div className="content-gd col-lg-6 pl-lg-4 pl-lg-5 mt-lg-0 mt-md-5 mt-4">
                  <img src="assets/images/blockmec-images/about.jpg" alt="about" className="radius-image img-fluid" />
                </div>
              </div>
            </div>
          </div></section>
        {/* //content-6*/}
        <section className="w3l-specification-6 py-5">
          {/* /specification-6*/}
          <div className="specification-6-mian py-lg-5 py-md-4">
            <div className="container">
              <div className="align-counter-6-inf-cols row" style={{

                background: 'url(assets/images/bg.jpg) no-repeat 0px 0px'
             }}>
                <div className="counter-6-inf-left col-lg-6">
                  <h3 className="title-big">Meet with us to success dream business</h3>
                </div>
                <div className="counter-6-inf-right col-lg-6">
                  <div className="specification">
                    <div className="specification-icon">
                      <span className="fa"><FaPencilAlt/></span>
                    </div>
                    <div className="specification-info">	
                      <h6><a href="blog-single.html">Design &amp; Developing</a></h6>
                      <p>Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio adipisicing elit.</p>
                    </div>
                  </div>
                  <div className="specification">
                    <div className="specification-icon">
                      <span className="fa"><FaLaptop /></span>
                    </div>
                    <div className="specification-info">	
                      <h6><a href="blog-single.html">Responsive Design</a></h6>
                      <p>Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio elit.</p>
                    </div>
                  </div>
                  <div className="specification">
                    <div className="specification-icon">
                      <span className="fa" ><FaHeadphones /></span>
                    </div>
                    <div className="specification-info">	
                      <h6><a href="blog-single.html">Excellent Support</a></h6>
                      <p>Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio adipisicing elit.</p>
                    </div>
                  </div>
                  <div className="specification last-one">
                    <div className="specification-icon">
                      <span className="fa" ><FaLightbulb /></span>
                    </div>
                    <div className="specification-info">	
                      <h6><a href="blog-single.html">Quality Deliverance</a></h6>
                      <p>Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //specification-6*/}

        {/* Section Starts here */}
        {/* <section className="w3l-content-6" id="skills"> */}
          {/* /content-6-section */}
          {/* <div className="content-6-mian py-5">
            <div className="container py-lg-5 py-md-4">
              <div className="content-info-in row">
                <div className="content-gd col-lg-5">
                  <h3 className="title-big mb-3">Responsive designs that will fit in any website</h3>
                  <p>Lorem ipsum dolor sit amet, suscipit totam animi consequatur saepe Ea consequuntur. </p>
                </div>
                <div className="content-gd col-lg-7 mt-lg-0 mt-5">
                  <div className="progress-info info1">
                    <h6 className="progress-tittle">Pixel perfect design <span className>80%</span></h6>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '80%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                      </div>
                    </div>
                  </div>
                  <div className="progress-info info2">
                    <h6 className="progress-tittle">Responsive Web design <span className>95%</span>
                    </h6>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '95%'}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
                      </div>
                    </div>
                  </div>
                  <div className="progress-info info3">
                    <h6 className="progress-tittle">Marketing Management <span className>75%</span></h6>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '75%'}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
                      </div>
                    </div>
                  </div>
                  <div className="progress-info info4 mb-0">
                    <h6 className="progress-tittle">Web Development <span className>85%</span></h6>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '85%'}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* And ends here */}

        {/* //content-6-section */}
        {/* middle */}
        <div className="w3l-middle py-5" style={{
          background: 'url(assets/images/images/about.png) no-repeat center' 
        }}>
          <div className="container py-lg-5 py-md-4">
            <div className="welcome-left">
              <h3 className="title-small">Creativity goals</h3>
              <h3 className="title-big mb-4">We conceive and translate our clients dreams into reality.</h3>
              <p className="pr-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. </p>
              <div className="buttons mt-md-5 mt-4">
                <a href="about.html" className="btn btn-style btn-primary mr-2">Read More</a>
                <a href="contact.html" className="btn btn-style btn-white ml-2">Get a quote</a>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default About