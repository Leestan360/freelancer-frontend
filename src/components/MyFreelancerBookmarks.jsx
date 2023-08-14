import { Helmet } from "react-helmet";
import Footer from "./Footer";
import NavBar from "./NavBar";

function MyFreelancerBookmarks() {
  return (
    <div>
      <Helmet>
        <title>Jobby - My Freelancer Dashboard</title>
      </Helmet>

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
                    <a className="nav-link" href="/my-freelancer-dashboard">
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="/my-freelancer-profile"
                    >
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/my-freelancer-portfolio">
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/my-freelancer-notifications">
                      Notifications
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/my-freelancer-messages">
                      Messages
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/my-freelancer-bookmarks">
                      Bookmarks
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/my-freelancer-jobs">
                      Jobs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/my-freelancer-bids">
                      Bids
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/my-freelancer-reviews">
                      Reviews
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/my-freelancer-payments">
                      Payment
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/my-freelancer-setting">
                      <i className="fas fa-cog" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="all_bookmarks">
                <div className="add-ons-dt accordion" id="accordionExample">
                  <div className="bookmark_card">
                    <button
                      className="bookmark_collapse"
                      data-toggle="collapse"
                      data-target="#collapse1"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      Bookmarked Jobs
                    </button>
                    <div id="collapse1" className="collapse show">
                      <div className="card-body">
                        <ul className="all_applied_jobs jobs_bookmarks">
                          <li>
                            <div className="row">
                              <div className="col-md-10">
                                <div className="applied_item">
                                  <h4>Wordpress Developer</h4>
                                  <ul className="view_dt_job">
                                    <li>
                                      <div className="vw1254">
                                        <i className="fas fa-map-marker-alt" />
                                        Australia
                                      </div>
                                    </li>
                                    <li>
                                      <div className="vw1254">
                                        <i className="fas fa-briefcase" />
                                        Full Time
                                      </div>
                                    </li>
                                    <li>
                                      <div className="vw1254">
                                        <i className="far fa-money-bill-alt" />
                                        $599 - Manual
                                      </div>
                                    </li>
                                    <li>
                                      <div className="vw1254">
                                        <i className="far fa-clock" />1 day ago
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <a href="#" className="delete_icon">
                                  <i className="far fa-trash-alt" />
                                </a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="row">
                              <div className="col-md-10">
                                <div className="applied_item">
                                  <h4>Php Developer</h4>
                                  <ul className="view_dt_job">
                                    <li>
                                      <div className="vw1254">
                                        <i className="fas fa-map-marker-alt" />
                                        Australia
                                      </div>
                                    </li>
                                    <li>
                                      <div className="vw1254">
                                        <i className="fas fa-briefcase" />
                                        Full Time
                                      </div>
                                    </li>
                                    <li>
                                      <div className="vw1254">
                                        <i className="far fa-money-bill-alt" />
                                        $50 / hr
                                      </div>
                                    </li>
                                    <li>
                                      <div className="vw1254">
                                        <i className="far fa-clock" />1 day ago
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <a href="#" className="delete_icon">
                                  <i className="far fa-trash-alt" />
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bookmark_card">
                    <button
                      className="bookmark_collapse"
                      data-toggle="collapse"
                      data-target="#collapse2"
                      aria-expanded="true"
                      aria-controls="collapse2"
                    >
                      Bookmarked Projetcs
                    </button>
                    <div id="collapse2" className="collapse show">
                      <div className="card-body">
                        <ul className="all_applied_jobs jobs_bookmarks">
                          <li>
                            <div className="row">
                              <div className="col-md-10">
                                <div className="applied_item">
                                  <h4>I Need a Travel Wordpress Theme</h4>
                                  <ul className="view_dt_job">
                                    <li>
                                      <div className="vw1254">
                                        <i className="fas fa-map-marker-alt" />
                                        New York
                                      </div>
                                    </li>
                                    <li>
                                      <div className="vw1254">
                                        <i className="fas fa-shield-alt" />
                                        Verified
                                      </div>
                                    </li>
                                    <li>
                                      <div className="vw1254">
                                        <i className="far fa-money-bill-alt" />
                                        $599 - $2500
                                      </div>
                                    </li>
                                    <li>
                                      <div className="vw1254">
                                        <i className="far fa-clock" />1 day ago
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <a href="#" className="delete_icon">
                                  <i className="far fa-trash-alt" />
                                </a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="row">
                              <div className="col-md-10">
                                <div className="applied_item">
                                  <h4>I Need a Real Estate Psd Template</h4>
                                  <ul className="view_dt_job">
                                    <li>
                                      <div className="vw1254">
                                        <i className="fas fa-map-marker-alt" />
                                        New York
                                      </div>
                                    </li>
                                    <li>
                                      <div className="vw1254">
                                        <i className="fas fa-shield-alt" />
                                        Verified
                                      </div>
                                    </li>
                                    <li>
                                      <div className="vw1254">
                                        <i className="far fa-money-bill-alt" />
                                        $200 - $1000
                                      </div>
                                    </li>
                                    <li>
                                      <div className="vw1254">
                                        <i className="far fa-clock" />2 day ago
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <a href="#" className="delete_icon">
                                  <i className="far fa-trash-alt" />
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bookmark_card">
                    <button
                      className="bookmark_collapse"
                      data-toggle="collapse"
                      data-target="#collapse3"
                      aria-expanded="true"
                      aria-controls="collapse3"
                    >
                      Bookmarked Freelancers
                    </button>
                    <div id="collapse3" className="collapse show">
                      <div className="card-body">
                        <ul className="all_applied_jobs jobs_bookmarks">
                          <li>
                            <div className="job-center-dt">
                              <div className="row">
                                <div className="col-lg-2 bookmark_img">
                                  <img
                                    src="images/homepage/candidates/img-1.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="col-lg-3">
                                  <div className="job-urs-dts tt_left">
                                    <a href="#">
                                      <h4>John Doe</h4>
                                    </a>
                                    <span>UX Designer</span>
                                    <div className="avialable">
                                      Available Full Time
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="rating-location ff_rating">
                                    <div className="left-rating">
                                      <div className="rtitle">Rating</div>
                                      <div className="star">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <span>4.9</span>
                                      </div>
                                    </div>
                                    <div className="right-location">
                                      <div className="text-left">
                                        <div className="rtitle">Location</div>
                                        <span>
                                          <i className="fas fa-map-marker-alt" />{" "}
                                          New York City
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-1">
                                  <a href="#" className="delete_icon mtb_4">
                                    <i className="far fa-trash-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="job-center-dt">
                              <div className="row">
                                <div className="col-lg-2 bookmark_img">
                                  <img
                                    src="images/homepage/candidates/img-2.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="col-lg-3">
                                  <div className="job-urs-dts tt_left">
                                    <a href="#">
                                      <h4>Albert Dua</h4>
                                    </a>
                                    <span>Wordpress Developer</span>
                                    <div className="avialable">
                                      Available Part Time
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="rating-location ff_rating">
                                    <div className="left-rating">
                                      <div className="rtitle">Rating</div>
                                      <div className="star">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <span>4.9</span>
                                      </div>
                                    </div>
                                    <div className="right-location">
                                      <div className="text-left">
                                        <div className="rtitle">Location</div>
                                        <span>
                                          <i className="fas fa-map-marker-alt" />{" "}
                                          New York City
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-1">
                                  <a href="#" className="delete_icon mtb_4">
                                    <i className="far fa-trash-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bookmark_card">
                    <button
                      className="bookmark_collapse"
                      data-toggle="collapse"
                      data-target="#collapse4"
                      aria-expanded="true"
                      aria-controls="collapse4"
                    >
                      Bookmarked Companies
                    </button>
                    <div id="collapse4" className="collapse show">
                      <div className="card-body">
                        <p className="cmpny_saved">No Company Bookmarked</p>
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

export default MyFreelancerBookmarks;
