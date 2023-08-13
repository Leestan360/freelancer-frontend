import NavBar from "./NavBar";

function OtherCompanyProfile() {
  return (
    <div>

      <title>Jobby - Other Company Profile</title>

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
                  Other Company Profile
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
                  <img src="images/company/img-5.jpg" alt="" />
                  <div className="job-urs-dts">
                    <h4>WP Market</h4>
                  </div>
                  <ul className="user_btns">
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
                    <li>
                      <a href="#" className="web_link">
                        <i className="fas fa-columns" />
                        www.portfoliosite.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="group_skills_bar">
                  <h6>Profile Completeness</h6>
                  <div className="group_bar1">
                    <span>75%</span>
                    <div className="progress skill_process">
                      <div
                        className="progress-bar progress_bar_skills"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow={75}
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
                        <span>28</span>
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
                        <span>69</span>
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
                      href="other_company_profile.html"
                    >
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="other_company_members.html">
                      Members
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="other_company_reviews.html">
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
      <footer className="footer">
        <div className="subscribe-newsletter">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-6">
                <div className="subcribes">
                  <div className="text-step1">
                    <h4>Subscribe to Newsletter</h4>
                    <div
                      className="btext-heading mt-2"
                      style={{ color: "#acacac", fontSize: "14px" }}
                    >
                      <i className="fas fa-check-circle" />
                      Cras nunc mauris, rhoncus eu justo at, egestas sagittis
                      felis. Ut sed feugiat eros.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="subcribe-input">
                  <input
                    className="nltr-input"
                    type="email"
                    placeholder="Your Email Address"
                  />
                  <button className="s-btn">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="about-jobby">
                <a href="index.html">
                  <img src="images/logo1.svg" alt="" />
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque eu purus et diam blandit vehicula sit amet sed metus.
                  Fusce condimentum non neque at fringilla. Aenean malesuada
                  aliquet tincidunt.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="footer-links">
                <h4>About</h4>
                <ul>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="sign_in.html">Login</a>
                  </li>
                  <li>
                    <a href="my_freelancer_profile.html">My Account</a>
                  </li>
                  <li>
                    <a href="contact_us.html">Contact</a>
                  </li>
                  <li>
                    <a href="privacy_policy.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="Terms.html">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="footer-links">
                <h4>For Companies</h4>
                <ul>
                  <li>
                    <a href="browse_freelancers.html">Browese Freelancers</a>
                  </li>
                  <li>
                    <a href="post_a_job.html">Post a Job</a>
                  </li>
                  <li>
                    <a href="post_a_project.html">Post a Project</a>
                  </li>
                  <li>
                    <a href="pricing_plans.html">Pricing Plans</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="footer-links">
                <h4>For Candidates</h4>
                <ul>
                  <li>
                    <a href="browse_jobs.html">Browese Jobs</a>
                  </li>
                  <li>
                    <a href="my_freelancer_jobs.html">Jobs Alerts</a>
                  </li>
                  <li>
                    <a href="my_freelancer_jobs.html">Applied Jobs</a>
                  </li>
                  <li>
                    <a href="my_freelancer_bookmarks.html">Bookmarks</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-social">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="copyright">
                  <i className="far fa-copyright" />
                  Copyright 2019 <span>Jobby</span> by{" "}
                  <a href="#">Gambolthemes</a>. All Right Reserved.
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="social-icons">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-google-plus-g" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
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

export default OtherCompanyProfile;
