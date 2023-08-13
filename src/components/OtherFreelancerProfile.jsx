import Footer from "./Footer";
import NavBar from "./NavBar";

function OtherFreelancerProfile() {
  return (
    <div>

      <title>Jobby - Other Freelancer Profile</title>
   
      {/* Search Model Start */}
      <div
        className="modal srch-model fade"
        id="searchModal"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header sheader">
              <button
                type="button"
                className="close srch-close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="srch-input"
                placeholder="Search Keywords..."
              />
            </div>
          </div>
        </div>
      </div>
      {/* Search Model End */}
      {/* Header Start */}
      <NavBar />
      {/* Header End */}
      {/* Title Start */}
      <div className="title-bar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ol className="title-bar-text">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Other Freelancer Profile
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* Title Start */}
      {/* Body Start */}
      <main className="browse-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="account_dt_left">
                <div className="job-center-dt">
                  <img src="images/homepage/candidates/img-3.jpg" alt="" />
                  <div className="job-urs-dts">
                    <h4>Rock William</h4>
                    <span>UX Designer</span>
                    <div className="avialable">Available Full Time</div>
                  </div>
                  <ul className="user_btns">
                    <li>
                      <button className="hire_btn" type="button">
                        Hire Me
                      </button>
                    </li>
                    <li>
                      <button className="hire_btn" type="button">
                        Message
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="my_websites">
                  <ul>
                    <li>
                      <a href="#" className="web_link">
                        <i className="fas fa-globe" />
                        www.companysite.com
                      </a>
                    </li>
                    <li>
                      <a href="#" className="web_link">
                        <i className="far fa-edit" />
                        www.blogsite.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="group_skills_bar">
                  <h6>Profile Completeness</h6>
                  <div className="group_bar1">
                    <span>90%</span>
                    <div className="progress skill_process">
                      <div
                        className="progress-bar progress_bar_skills"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
                <div className="rlt_section">
                  <div className="rtl_left">
                    <h6>Rating</h6>
                  </div>
                  <div className="rtl_right">
                    <div className="star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span>4.9</span>
                    </div>
                  </div>
                </div>
                <div className="rlt_section">
                  <div className="rtl_left">
                    <h6>Location</h6>
                  </div>
                  <div className="rtl_right">
                    <span>
                      <i className="fas fa-map-marker-alt lc_icon" /> Ludhiana,
                      India
                    </span>
                  </div>
                  <div className="my_location">
                    <div id="map" />
                  </div>
                  <ul className="rlt_section2">
                    <li>
                      <div className="rtl_left2">
                        <h6>Hourly Rate</h6>
                      </div>
                      <div className="rtl_right2">
                        <span>$50 / hr</span>
                      </div>
                    </li>
                    <li>
                      <div className="rtl_left2">
                        <h6>Age</h6>
                      </div>
                      <div className="rtl_right2">
                        <span>30</span>
                      </div>
                    </li>
                    <li>
                      <div className="rtl_left2">
                        <h6>Experenice</h6>
                      </div>
                      <div className="rtl_right2">
                        <span>5 Year</span>
                      </div>
                    </li>
                    <li>
                      <div className="rtl_left2">
                        <h6>Job Done</h6>
                      </div>
                      <div className="rtl_right2">
                        <span>85</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="social_section3 mb80">
                  <div className="social_leftt3">
                    <h6>Contact Social Account</h6>
                  </div>
                  <ul className="social_accounts">
                    <li>
                      <a href="#" className="social_links">
                        <i className="fab fa-facebook-f f1" />
                        http://facebook.com/johndoe
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social_links">
                        <i className="fab fa-twitter t1" />
                        http://twitter.com/johndoe
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social_links">
                        <i className="fab fa-linkedin-in l1" />
                        http://linkedin.com/johndoe
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social_links">
                        <i className="fab fa-dribbble d1" />
                        http://dribbble.com/johndoe
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social_links">
                        <i className="fab fa-behance b1" />
                        http://behance.net/johndoe
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social_links">
                        <i className="fab fa-github g1" />
                        http://github.com/johndoe
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 mainpage">
              <div className="account_tabs">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="other_freelancer_profile.html"
                    >
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="other_freelancer_portfolio.html"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="other_freelancer_reviews.html"
                    >
                      Reviews
                    </a>
                  </li>
                </ul>
              </div>
              <div className="view_chart">
                <div className="view_chart_header">
                  <h4>About</h4>
                </div>
                <div className="view_chart_body">
                  <p className="user_about_des">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc quis accumsan mi. Nam nulla lorem, consectetur eu augue
                    nec, laoreet viverra augue. Curabitur quis nisi nec enim
                    tempor tincidunt sit amet eu elit. Aliquam metus massa,
                    vehicula vel nisi quis, eleifend hendrerit velit. Maecenas
                    nunc nunc, ultricies non accumsan sit amet, varius non dui.
                    Pellentesque ipsum justo, mollis et posuere at, viverra
                    porta nisl. Cras accumsan cursus tellus luctus congue.
                    Maecenas sed feugiat dolor. In ipsum sapien, congue vitae
                    congue ac, cursus nec mauris. Integer fringilla mi urna, id
                    efficitur ligula interdum quis. Ut vehicula imperdiet elit,
                    quis condimentum est aliquam ac. Nunc tortor elit, imperdiet
                    ac tellus ut, accumsan interdum dui. Duis fermentum
                    tincidunt massa, sodales tempus sapien euismod quis.
                    Vestibulum suscipit ex ex, nec euismod leo eleifend eget.
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Integer tincidunt sodales augue, ut consequat
                    libero blandit non. Suspendisse id dolor vel lorem bibendum
                    luctus sit amet a odio. Vestibulum varius viverra ipsum quis
                    rhoncus. Praesent bibendum dictum ex. Quisque eu laoreet
                    leo.
                  </p>
                </div>
              </div>
              <div className="view_chart">
                <div className="view_chart_header">
                  <h4>Skills</h4>
                </div>
                <div className="view_chart_body">
                  <div className="job-skills">
                    <a href="#">HTML</a>
                    <a href="#">CSS</a>
                    <a href="#">Wordpress</a>
                    <a href="#">Javascript</a>
                    <a href="#">Jquery</a>
                    <a href="#">Plugins</a>
                  </div>
                </div>
              </div>
              <div className="view_chart">
                <div className="view_chart_header">
                  <h4>Language</h4>
                </div>
                <div className="view_chart_body">
                  <div className="job-skills">
                    <a href="#" className="more-skills">
                      English
                    </a>
                    <a href="#" className="more-skills">
                      Punjabi
                    </a>
                    <a href="#" className="more-skills">
                      Hindi
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Body End */}
      {/* footer Start */}
      <Footer />
      {/* footer End */}
      {/* Scroll to Top Button Start */}
      <button onclick="topFunction()" id="pageup" title="Go to top">
        <i className="fas fa-arrow-up" />
      </button>
      {/* Scroll to Top Button End */}
      {/* Scripts js */}
      {/* Map Box JS */}
    </div>
  );
}

export default OtherFreelancerProfile;
