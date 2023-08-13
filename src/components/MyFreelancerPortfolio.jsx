import Footer from "./Footer";
import NavBar from "./NavBar";

function MyFreelancerPortfolio() {
  return (
    <div>

      <title>Jobby - My Freelancer Dashboard</title>

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
      {/* Add Portfolio Model Start */}
      <div className="apply_job_form">
        <div
          className="modal fade"
          id="addportfolioModal"
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog modal-jb" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Portfolio
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="jb_frm">
                  <h3>Simple &amp; Best Way To Showcase Your Work</h3>
                  <div className="form_inputs">
                    <div className="form-group">
                      <input
                        type="text"
                        className="job-input"
                        placeholder="Title"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="job-input"
                        placeholder="http://behance.net/portfolio_name"
                      />
                    </div>
                    <div className="file-form">
                      <input type="file" id="file2" />
                      <label htmlFor="file">Browse File</label>
                      <p>Size : 270x200 | Max Less Then1 MB</p>
                    </div>
                  </div>
                  <div className="apply_btn150">
                    <button className="apply_job50" type="button">
                      Add Portfolio
                    </button>
                    <button
                      className="apply_job_close"
                      type="button"
                      data-dismiss="modal"
                    >
                      CANCEL
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Portfolio Model End */}
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
                  My Account
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
                  <img src="images/homepage/candidates/img-1.jpg" alt="" />
                  <div className="job-urs-dts">
                    <div className="dp_upload">
                      <input type="file" id="file" />
                      <label htmlFor="file">Upload Photo</label>
                    </div>
                    <h4>John Doe</h4>
                    <span>UX Designer</span>
                    <div className="avialable">
                      Available Full Time
                      <a href="#">
                        <i className="far fa-edit" />
                      </a>
                    </div>
                  </div>
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
                    <span>85%</span>
                    <div className="progress skill_process">
                      <div
                        className="progress-bar progress_bar_skills"
                        role="progressbar"
                        style={{ width: "85%" }}
                        aria-valuenow={85}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <a href="#" className="skiils_button">
                    Complete Required Skills
                  </a>
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
                  <div className="social_right3">
                    <a href="#">
                      <i className="far fa-edit" />
                    </a>
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
              <div className="account_heading">
                <div className="account_hd_left">
                  <h2>Manage Your Account</h2>
                </div>
                <div className="account_hd_right">
                  <a href="#" className="main_lg_btn">
                    Logout
                  </a>
                </div>
              </div>
              <div className="account_tabs">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a className="nav-link" href="my_freelancer_dashboard.html">
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="my_freelancer_profile.html">
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="my_freelancer_portfolio.html"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="my_freelancer_notifications.html"
                    >
                      Notifications
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="my_freelancer_messages.html">
                      Messages
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="my_freelancer_bookmarks.html">
                      Bookmarks
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="my_freelancer_jobs.html">
                      Jobs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="my_freelancer_bids.html">
                      Bids
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="my_freelancer_reviews.html">
                      Reviews
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="my_freelancer_payments.html">
                      Payment
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="my_freelancer_setting.html">
                      <i className="fas fa-cog" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="portfolio_heading">
                <div className="portfolio_left">
                  <h4>Portfolio</h4>
                </div>
                <div className="portfolio_right">
                  <button
                    className="add_portfolio_btn"
                    type="button"
                    data-toggle="modal"
                    data-target="#addportfolioModal"
                  >
                    Add Portfolio
                  </button>
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
                            <button className="delete_portfolio_btn">
                              <i className="far fa-trash-alt" />
                            </button>
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
                            <button className="delete_portfolio_btn">
                              <i className="far fa-trash-alt" />
                            </button>
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
                            <button className="delete_portfolio_btn">
                              <i className="far fa-trash-alt" />
                            </button>
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
                            <button className="delete_portfolio_btn">
                              <i className="far fa-trash-alt" />
                            </button>
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
                            <button className="delete_portfolio_btn">
                              <i className="far fa-trash-alt" />
                            </button>
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
                            <button className="delete_portfolio_btn">
                              <i className="far fa-trash-alt" />
                            </button>
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

export default MyFreelancerPortfolio;
