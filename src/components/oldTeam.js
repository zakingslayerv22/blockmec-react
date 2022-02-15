import React, {useState} from 'react'; 

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
                            <img src="assets/images/team1.jpg" alt="" className="radius-image" />
                            <div className="overlay-team">
                                <div className="team-details text-center">
                                    <div className="socials mt-20">
                                        <a href="#url">
                                            <span className="fa fa-facebook-f"></span>
                                        </a>
                                        <a href="#url">
                                            <span className="fa fa-twitter"></span>
                                        </a>
                                        <a href="#url">
                                            <span className="fa fa-instagram"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#url" className="team-title">Luke jacobs</a>
                        <p>web developer</p>
                    </div>
                </div>
                {/* <!-- end team member --> */}

                <div className="col-lg-3 col-6 team-wrap">
                    <div className="team-member text-center">
                        <div className="team-img">
                            <img src="assets/images/team3.jpg" alt="" className="radius-image" />
                            <div className="overlay-team">
                                <div className="team-details text-center">
                                    <div className="socials mt-20">
                                        <a href="#url">
                                            <span className="fa fa-facebook-f"></span>
                                        </a>
                                        <a href="#url">
                                            <span className="fa fa-twitter"></span>
                                        </a>
                                        <a href="#url">
                                            <span className="fa fa-instagram"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#url" className="team-title">Claire olson</a>
                        <p>android developer</p>
                    </div>
                </div>
                {/* <!-- end team member --> */}

                <div className="col-lg-3 col-6 team-wrap mt-lg-0 mt-5">
                    <div className="team-member last text-center">
                        <div className="team-img">
                            <img src="assets/images/team2.jpg" alt="" className="radius-image" />
                            <div className="overlay-team">
                                <div className="team-details text-center">
                                    <div className="socials mt-20">
                                        <a href="#url">
                                            <span className="fa fa-facebook-f"></span>
                                        </a>
                                        <a href="#url">
                                            <span className="fa fa-twitter"></span>
                                        </a>
                                        <a href="#url">
                                            <span className="fa fa-instagram"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#url" className="team-title">Phillip hunt</a>
                        <p>Software engineer </p>
                    </div>
                </div>
                {/* <!-- end team member --> */}

                <div className="col-lg-3 col-6 team-wrap mt-lg-0 mt-5">
                    <div className="team-member last text-center">
                        <div className="team-img">
                            <img src="assets/images/team4.jpg" alt="" className="radius-image" />
                            <div className="overlay-team">
                                <div className="team-details text-center">
                                    <div className="socials mt-20">
                                        <a href="#url">
                                            <span className="fa fa-facebook-f"></span>
                                        </a>
                                        <a href="#url">
                                            <span className="fa fa-twitter"></span>
                                        </a>
                                        <a href="#url">
                                            <span className="fa fa-instagram"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#url" className="team-title">Sara grant</a>
                        <p>Software engineer </p>
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