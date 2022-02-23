import React, {useEffect} from 'react'
import { FaMicrophone, FaRegChartBar, FaChartLine, FaFacebookF, FaTwitter, FaDribbble, FaGoogle, 
FaCheck  } 
from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Particles from "react-tsparticles";

// Animation on scroll
import Aos from 'aos';
import 'aos/dist/aos.css'

function Home() {

  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  useEffect(() => {
    Aos.init();
  }, [])
  
// Animation on scroll end
  return (
    <>
    <section id="home" className="w3l-banner py-5">

      {/* React Particles */}

      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        // background: {
        //   color: {
        //     value: "#0d47a1",
        //   },
        // },
        fpsLimit: 800,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />

      <div className="container py-lg-5 py-md-4">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-12 mt-lg-0 mt-4">
            <span className="title-small mb-2">Blockchain for All</span>
            <h3 className="mb-2 title-big mb-4">The Blockmec Protocol </h3>
            <p className="justify" >We are the blockchain support enterprise tha empowers individuals, 
              companies and developers to be able to innovate their business 
              with Blockmec protocol on any blockchain. </p>
            <div className="mt-sm-5 mt-4">
              {/* <a className="btn btn-outline-primary btn-style mr-2" href="#url"> Read more <span className="fa fa-chevron-right" /></a> */}
              <Link to="/about" className="btn btn-outline-kingslayer btn-style mr-2">Read more</Link>
              <a className="btn btn-primary btn-style" href="contact.html"> Get a Quote </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-8 col-sm-10 mt-lg-0 mt-5">
            <div className="img-effect text-lg-center">
              <img src="assets/images/banner.png" alt="banner" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* //banner section */}
    <section className="w3l-homeblock1" id="features">
      <div className="w3-services-ab py-5">
        <div className="container py-lg-5 py-md-4">
          <span className="title-small text-center mb-2">Iterative process</span>
          <h3 className="title-big text-center mb-5">Our Key features</h3>
          <div className="w3-services-grids">
            <div className="row w3-services-right-grid">
              <div className="col-lg-4">
                <img src="assets/images/mobile.png" alt="" className="img-fluid" />
              </div>
              <div className="col-lg-8 mt-lg-0 mt-5">
                <div className="fea-gd-vv row">
                  <div className="col-md-6">
                    <div className="float-lt feature-gd color-orange">
                      <div className="icon">
                        <img src="assets/images/backup.png" alt="" className="img-fluid" />
                      </div>
                      <div className="icon-info">
                        <h5>Data Backup </h5>
                        <p> Lorem ipsum dolor sit amet, dolor elit, sed eiusmod
                          tempor init sit.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-md-0 mt-4">
                    <div className="float-mid feature-gd color-green">
                      <div className="icon">
                        <img src="assets/images/team.png" alt="" className="img-fluid" />
                      </div>
                      <div className="icon-info">
                        <h5>Dedicated team</h5>
                        <p> Lorem ipsum dolor sit amet, dolor elit, sed eiusmod
                          tempor init sit.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-4 pt-md-2">
                    <div className="float-rt feature-gd color-blue">
                      <div className="icon">
                        <img src="assets/images/tags.png" alt="" className="img-fluid" />
                      </div>
                      <div className="icon-info">
                        <h5>Quality deliverance</h5>
                        <p> Lorem ipsum dolor sit amet, dolor elit, sed eiusmod
                          tempor init sit.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-4 pt-md-2">
                    <div className="float-lt feature-gd color-pink">
                      <div className="icon">
                        <img src="assets/images/support.png" alt="" className="img-fluid" />
                      </div>
                      <div className="icon-info">
                        <h5>Excellent support</h5>
                        <p> Lorem ipsum dolor sit amet, dolor elit, sed eiusmod
                          tempor init sit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /bottom-grids*/}
    <section className="w3l-bottom-grids-6 py-5">
      <div className="container py-lg-5 py-md-4">
        <span className="title-small text-center mb-2">Achieve online success</span>
        <h3 className="title-big text-center mb-5">Guiding your business</h3>
        <div className="grids-area-hny main-cont-wthree-fea row">
          <div  className="col-lg-4 col-md-6 grids-feature">
            <div className="area-box">
              <span className="fa"> <FaMicrophone /> </span>
              <h4><a href="#feature" className="title-head">Mission Statement</a></h4>
              <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4">
            <div className="area-box box-active">
              <span className="fa"> <FaRegChartBar /> </span>
              <h4><a href="#feature" className="title-head">Situation analysis</a></h4>
              <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-4">
            <div className="area-box">
              <span className="fa"> <FaChartLine /> </span>
              <h4><a href="#feature" className="title-head">Marketing strategy</a></h4>
              <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* //bottom-grids*/}
    {/* home page block2 grids */}
    <section className="w3l-grids-3 py-5">
      <div className="container py-lg-5 py-md-4">
        <div className="row bottom-ab-grids">
          <div className="col-lg-6 bottom-ab-left">
            <h3 className="title-big mb-4">We create a new standard for businesses</h3>
            <p className>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio voluptatem
              tenetur consequatur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia. </p>
            <ul className="cont-4 mt-4">
              {/* <li><span className="fa" ></span><FaCheck />Pharetra massa init ultricies labore dolor amet</li>
              <li><span className="fa" ></span><FaCheck />Dolore magna aliqua init sodales tempor</li>
              <li><span className="fa" ></span><FaCheck />Incididunt ut labore et, pharetra massa</li> */}
            </ul>
            <a href="about.html" className="btn btn-style btn-primary mt-lg-5 mt-4">Read More</a>
          </div>
          <div className="col-lg-6 client-grids mt-lg-0 mt-5">
            <div className="clients-grid align-self">
              <div className="icon">
                <img src="assets/images/slack.png" alt="" className="img-fluid" />
              </div>
              <div className="icon">
                <img src="assets/images/shopify.png" alt="" className="img-fluid" />
              </div>
              <div className="icon">
                <img src="assets/images/netflix.png" alt="" className="img-fluid" />
              </div>
              <div className="icon">
                <img src="assets/images/github.png" alt="" className="img-fluid" />
              </div>
              <div className="icon">
                <img src="assets/images/chimp.png" alt="" className="img-fluid" />
              </div>
              <div className="icon">
                <img src="assets/images/disney.png" alt="" className="img-fluid" />
              </div>
              <div className="icon">
                <img src="assets/images/flipkart.png" alt="" className="img-fluid" />
              </div>
              <div className="icon">
                <img src="assets/images/woocomerce.png" alt="" className="img-fluid" />
              </div>
              <div className="icon">
                <img src="assets/images/amazon.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* //home page block2 grids */}
    {/* stats */}
    <section className="w3l-stats py-5" id="stats">
      <div className="gallery-inner container py-lg-5 py-md-4">
        <div className="row stats-con">
          <div className="col-md-3 col-6 stats_info counter_grid">
            <p className="counter">86</p>
            <h3>Apps developed</h3>
          </div>
          <div className="col-md-3 col-6 stats_info counter_grid1">
            <p className="counter">3825</p>
            <h3>Websites designed</h3>
          </div>
          <div className="col-md-3 col-6 stats_info counter_grid mt-md-0 mt-4">
            <p className="counter">1300</p>
            <h3>Happy clients</h3>
          </div>
          <div className="col-md-3 col-6 stats_info counter_grid2 mt-md-0 mt-4">
            <p className="counter">45</p>
            <h3>Web designers</h3>
          </div>
        </div>
      </div>
    </section>
    {/* //stats */}
    {/* services page block 2 */}
    <section className="w3l-features py-5" id="work">
      <div className="call-w3 py-lg-5 py-md-4">
        <div className="container">
          <div className="row main-cont-wthree-2">
            <div className="col-lg-6 feature-grid-left">
              <h3 className="title-big mb-md-4 mb-2">Who we Work with</h3>
              <p className="text-para">Curabitur id gravida risus. Fusce eget ex fermentum, ultricies nisi ac sed,
                lacinia est. Quisque ut lectus consequat, venenatis eros et, sed commodo risus. Nullam sit 
                amet laoreet elit. Suspendisse non init magnaa velit efficitur, dolor eget ex fermentum. </p>
              <a href="#url" className="btn btn-primary btn-style mt-lg-5 mt-4">Discover More</a>
            </div>
            <div className="col-lg-6 feature-grid-right mt-lg-0 mt-5">
              <div className="call-grids-w3 d-grid">
                <div className="grids-1 box-wrap">
                  <div className="icon">
                    <img src="assets/images/team.png" alt="" className="img-fluid" />
                  </div>
                  <h4><a href="#feature" className="title-head">Start Up Business</a></h4>
                </div>
                <div className="grids-1 box-wrap">
                  <div className="icon">
                    <img src="assets/images/tags.png" alt="" className="img-fluid" />
                  </div>
                  <h4><a href="#feature" className="title-head">Medium Business</a></h4>
                </div>
                <div className="grids-1 box-wrap">
                  <div className="icon">
                    <img src="assets/images/backup.png" alt="" className="img-fluid" />
                  </div>
                  <h4><a href="#feature" className="title-head">Enterprise</a></h4>
                </div>
                <div className="grids-1 box-wrap">
                  <div className="icon">
                    <img src="assets/images/support.png" alt="" className="img-fluid" />
                  </div>
                  <h4><a href="#feature" className="title-head">Web Agencies</a></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* //services page block 2 */}
    <section className="w3l-clients py-5" id="clients">
      <div className="call-w3">
        <div className="container">
          <div className="company-logos text-center">
            <div className="row logos">
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <img src="assets/images/logo1.png" alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <img src="assets/images/logo2.png" alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-sm-0 mt-4">
                <img src="assets/images/logo3.png" alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-md-0 mt-4">
                <img src="assets/images/logo4.png" alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-lg-0 mt-4">
                <img src="assets/images/logo5.png" alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-lg-0 mt-4">
                <img src="assets/images/logo1.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="w3l-follow-social py-5">
      <div className="container">
        <div className="social-accounts">
          <div className="align-self">
            <h4>Don’t miss to follow us on our Social networks.</h4>
          </div>
          <div className="text-lg-right">
            <ul className="social-icons">
              <li className="facebook">
                <a href="#link" title="Facebook">
                  <span className="fa" aria-hidden="true"><FaFacebookF /></span> 
                </a>
              </li>
              <li className="twitter">
                <a href="#link" title="Twitter">
                  <span className="fa" aria-hidden="true" ><FaTwitter /></span>
                </a>
              </li>
              <li className="dribbble">
                <a href="#link" title="Dribbble">
                  <span className="fa" aria-hidden="true" ><FaDribbble /></span> 
                </a>
              </li>
              <li className="google mr-0">
                <a href="#link" title="Google">
                  <span className="fa" aria-hidden="true" ><FaGoogle /></span> 
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Home