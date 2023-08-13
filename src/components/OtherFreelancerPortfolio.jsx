import Footer from "./Footer";
import NavBar from "./NavBar";

function OtherFreelancerPortfolio() {
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
                      className="nav-link"
                      href="other_freelancer_profile.html"
                    >
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
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
              <div className="portfolio_heading">
                <div className="portfolio_left">
                  <h4>Portfolio</h4>
                </div>
              </div>
              <div className="dsh150">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="portfolio_item">
                      <div className="portfolio_img">
                        <img src="images/portfolio/img-1.jpg" alt="" />
                        <div className="portfolio_overlay">
                          <div className="overlay_items">
                            <a href="#" target="_blank">
                              <i className="fas fa-external-link-alt" />
                              Live Preview
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="portfolio_title">
                        <i className="fas fa-image" />
                        Portfolio Name Here
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="portfolio_item">
                      <div className="portfolio_img">
                        <img src="images/portfolio/img-2.jpg" alt="" />
                        <div className="portfolio_overlay">
                          <div className="overlay_items">
                            <a href="#" target="_blank">
                              <i className="fas fa-external-link-alt" />
                              Live Preview
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="portfolio_title">
                        <i className="fas fa-image" />
                        Portfolio Name Here
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="portfolio_item">
                      <div className="portfolio_img">
                        <img src="images/portfolio/img-3.jpg" alt="" />
                        <div className="portfolio_overlay">
                          <div className="overlay_items">
                            <a href="#" target="_blank">
                              <i className="fas fa-external-link-alt" />
                              Live Preview
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="portfolio_title">
                        <i className="fas fa-image" />
                        Portfolio Name Here
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="portfolio_item">
                      <div className="portfolio_img">
                        <img src="images/portfolio/img-4.jpg" alt="" />
                        <div className="portfolio_overlay">
                          <div className="overlay_items">
                            <a href="#" target="_blank">
                              <i className="fas fa-external-link-alt" />
                              Live Preview
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="portfolio_title">
                        <i className="fas fa-image" />
                        Portfolio Name Here
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="portfolio_item">
                      <div className="portfolio_img">
                        <img src="images/portfolio/img-5.jpg" alt="" />
                        <div className="portfolio_overlay">
                          <div className="overlay_items">
                            <a href="#" target="_blank">
                              <i className="fas fa-external-link-alt" />
                              Live Preview
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="portfolio_title">
                        <i className="fas fa-image" />
                        Portfolio Name Here
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="portfolio_item">
                      <div className="portfolio_img">
                        <img src="images/portfolio/img-6.jpg" alt="" />
                        <div className="portfolio_overlay">
                          <div className="overlay_items">
                            <a href="#" target="_blank">
                              <i className="fas fa-external-link-alt" />
                              Live Preview
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="portfolio_title">
                        <i className="fas fa-image" />
                        Portfolio Name Here
                      </div>
                    </div>
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

export default OtherFreelancerPortfolio;
