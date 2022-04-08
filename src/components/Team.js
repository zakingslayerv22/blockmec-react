import React, {useState} from 'react'; 

import { FaMicrophone, FaRegChartBar, FaChartLine, FaFacebookF, FaTwitter, FaInstagram, FaGoogle, 
    FaCheck  }  from 'react-icons/fa';

function Team({description}) {

const [teams, setTeams] = useState([
    {
        id: 1,
        title: "Peter Parker",
        job: "Spider Man",
        facebook: '',
        instagram: '',
        twitter: ''
    },

    {
        id: 1,
        title: "Tony Stark",
        job: "Iron Man",
        facebook: '',
        instagram: '',
        twitter: ''
    },
    {
        id: 1,
        title: "Steve Rogers",
        job: "Captain America",
        facebook: '',
        instagram: '',
        twitter: ''
    },
    {
        id: 1,
        title: "Bruce Banner",
        job: "The Hulk",
        facebook: '',
        instagram: '',
        twitter: ''
    }
]);

  return (
    <section className="w3l-team-main" id="team">
    <div className="team py-5">
        <div className="container py-lg-5">
            <h3 className="title-big text-center">{description} </h3>
            <div className="row team-row mt-md-5 mt-4">
                <div className="col-lg-3 col-6 team-wrap">
                    <div className="team-member text-center">
                        <div className="team-img">
                            {/* <img src="assets/images/team1.jpg" alt="" className="radius-image" /> */}
                            <img src="assets/images/blockmec-team1.png" alt="" className="radius-image" />
                            {/* <img src="assets/images/blockmec-images/team/team1.png" alt="" className="radius-image" /> */}
                            <div className="overlay-team">
                                <div className="team-details text-center">
                                    <div className="socials mt-20">
                                        <a href="#url">
                                            <span className="facebook-f"><FaFacebookF /></span>
                                        </a>
                                        <a href="#url">
                                            <span className="twitter"><FaTwitter /></span>
                                        </a>
                                        <a href="#url">
                                            <span className="instagram"><FaInstagram /></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#url" className="team-title">Akachukwu Nwabueze</a>
                        <p>CEO and Co-founder</p>
                    </div>
                </div>
                {/* <!-- end team member --> */}

                <div className="col-lg-3 col-6 team-wrap">
                    <div className="team-member text-center">
                        <div className="team-img">
                        {/* <img src="assets/images/team3.jpg" alt="" className="radius-image" /> */}
                            <img src="assets/images/blockmec-team2.png" alt="team2" className="radius-image" />
                            {/* <img src="assets/images/blockmec-images/team/team2.png" alt="team2" className="radius-image" /> */}
                            <div className="overlay-team">
                                <div className="team-details text-center">
                                    <div className="socials mt-20">
                                    <a href="#url">
                                            <span className="facebook-f"><FaFacebookF /></span>
                                        </a>
                                        <a href="#url">
                                            <span className="twitter"><FaTwitter /></span>
                                        </a>
                                        <a href="#url">
                                            <span className="instagram"><FaInstagram /></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#url" className="team-title">Bushrah Balogun</a>
                        <p>COO</p>
                    </div>
                </div>
                {/* <!-- end team member --> */}

                <div className="col-lg-3 col-6 team-wrap mt-lg-0 mt-5">
                    <div className="team-member last text-center">
                        <div className="team-img">
                            {/* <img src="assets/images/team2.jpg" alt="" className="radius-image" /> */}
                            <img src="assets/images/blockmec-team3.png" alt="team3" className="radius-image" />
                            {/* <img src="assets/images/blockmec-images/team/team3.png" alt="" className="radius-image" /> */}
                            <div className="overlay-team">
                                <div className="team-details text-center">
                                    <div className="socials mt-20">
                                    <a href="#url">
                                            <span className="facebook-f"><FaFacebookF /></span>
                                        </a>
                                        <a href="#url">
                                            <span className="twitter"><FaTwitter /></span>
                                        </a>
                                        <a href="#url">
                                            <span className="instagram"><FaInstagram /></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#url" className="team-title">Nwabueze Stephen</a>
                        <p>Product Manager and Co-founder </p>
                    </div>
                </div>
                {/* <!-- end team member --> */}

                <div className="col-lg-3 col-6 team-wrap mt-lg-0 mt-5">
                    <div className="team-member last text-center">
                        <div className="team-img">
                            {/* <img src="assets/images/team4.jpg" alt="" className="radius-image" /> */}
                            <img src="assets/images/blockmec-team4.png" alt="team4" className="radius-image" />
                            {/* <img src="assets/images/blockmec-images/team/team4.png" alt="" className="radius-image" /> */}
                            <div className="overlay-team">
                                <div className="team-details text-center">
                                    <div className="socials mt-20">
                                    <a href="#url">
                                            <span className="facebook-f"><FaFacebookF /></span>
                                        </a>
                                        <a href="#url">
                                            <span className="twitter"><FaTwitter /></span>
                                        </a>
                                        <a href="#url">
                                            <span className="instagram"><FaInstagram /></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#url" className="team-title">Hanna Francis</a>
                        <p>Policy Manager </p>
                    </div>
                </div>
                {/* <!-- end team member --> */}

                <div className="col-lg-3 col-6 team-wrap">
                    <div className="team-member text-center">
                        <div className="team-img">
                            {/* <img src="assets/images/team1.jpg" alt="" className="radius-image" /> */}
                            <img src="assets/images/blockmec-team5.png" alt="team5" className="radius-image" />
                            {/* <img src="assets/images/blockmec-images/team/team5.png" alt="" className="radius-image" /> */}
                            <div className="overlay-team">
                                <div className="team-details text-center">
                                    <div className="socials mt-20">
                                        <a href="#url">
                                            <span className="facebook-f"><FaFacebookF /></span>
                                        </a>
                                        <a href="#url">
                                            <span className="twitter"><FaTwitter /></span>
                                        </a>
                                        <a href="#url">
                                            <span className="instagram"><FaInstagram /></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#url" className="team-title">Abulfathi Ibrahim Saleh</a>
                        <p>Chief of Diversity and Strategy</p>
                    </div>
                </div>
                {/* <!-- end team member --> */}

                <div className="col-lg-3 col-6 team-wrap">
                    <div className="team-member text-center">
                        <div className="team-img">
                            {/* <img src="assets/images/team3.jpg" alt="" className="radius-image" /> */}
                            <img src="assets/images/blockmec-team6.png" alt="team6" className="radius-image" />
                            {/* <img src="assets/images/blockmec-images/team/team6.png" alt="" className="radius-image" /> */}
                            <div className="overlay-team">
                                <div className="team-details text-center">
                                    <div className="socials mt-20">
                                    <a href="#url">
                                            <span className="facebook-f"><FaFacebookF /></span>
                                        </a>
                                        <a href="#url">
                                            <span className="twitter"><FaTwitter /></span>
                                        </a>
                                        <a href="#url">
                                            <span className="instagram"><FaInstagram /></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#url" className="team-title">Aghaonu Johnbosco</a>
                        <p>Public Relations Manager</p>
                    </div>
                </div>
                {/* <!-- end team member --> */}

                <div className="col-lg-3 col-6 team-wrap mt-lg-0 mt-5">
                    <div className="team-member last text-center">
                        <div className="team-img">
                            {/* <img src="assets/images/team22.jpg" alt="incoming" className="radius-image" /> */}
                            <img src="assets/images/blockmec-team7.png" alt="team7" className="radius-image" />
                            {/* <img src="assets/images/blockmec-images/team/team7.png" alt="" className="radius-image" /> */}
                            <div className="overlay-team">
                                <div className="team-details text-center">
                                    <div className="socials mt-20">
                                    <a href="#url">
                                            <span className="facebook-f"><FaFacebookF /></span>
                                        </a>
                                        <a href="#url">
                                            <span className="twitter"><FaTwitter /></span>
                                        </a>
                                        <a href="#url">
                                            <span className="instagram"><FaInstagram /></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#url" className="team-title">Tim Azubuikeh</a>
                        <p>Lead Developer </p>
                    </div>
                </div>
                {/* <!-- end team member --> */}

                <div className="col-lg-3 col-6 team-wrap mt-lg-0 mt-5">
                    <div className="team-member last text-center">
                        <div className="team-img">
                            {/* <img src="assets/images/team4.jpg" alt="" className="radius-image" /> */}
                            <img src="assets/images/blockmec-team8.png" alt="team8" className="radius-image" />
                            {/* <img src="assets/images/blockmec-images/team/team8.png" alt="" className="radius-image" /> */}
                            <div className="overlay-team">
                                <div className="team-details text-center">
                                    <div className="socials mt-20">
                                    <a href="#url">
                                            <span className="facebook-f"><FaFacebookF /></span>
                                        </a>
                                        <a href="#url">
                                            <span className="twitter"><FaTwitter /></span>
                                        </a>
                                        <a href="#url">
                                            <span className="instagram"><FaInstagram /></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#url" className="team-title">Nwaeze King</a>
                        <p>Board Member </p>
                    </div>
                </div>
                {/* <!-- end team member --> */}

            </div>
        </div>
        </div>
</section>
  )
}

export default Team