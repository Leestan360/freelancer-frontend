import { Helmet } from "react-helmet";
import Footer from "./Footer";
import NavBar from "./NavBar";

function MyFreelancerJobs() {
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
              <div className="jobs_manage">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="jobs_tabs">
                      <ul
                        className="nav job_nav nav-tabs"
                        id="myTab"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#manage_jobs"
                            id="manage-job-tab"
                            data-toggle="tab"
                          >
                            Manage Jobs
                          </a>
                        </li>
                        <li className="nav-item job_nav_item">
                          <a
                            className="nav-link"
                            href="#applied_jobs"
                            id="applied-job-tab"
                            data-toggle="tab"
                          >
                            Applied Jobs
                          </a>
                        </li>
                        <li className="nav-item job_nav_item">
                          <a
                            className="nav-link"
                            href="#applied_candidates"
                            id="applied-candidate-tab"
                            data-toggle="tab"
                          >
                            Applied Candidates
                          </a>
                        </li>
                        <li className="nav-item job_nav_item">
                          <a
                            className="nav-link"
                            href="#post_job"
                            id="post-job-tab"
                            data-toggle="tab"
                          >
                            Post a Job
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="manage_jobs"
                        role="tabpanel"
                      >
                        <div className="view_chart">
                          <div className="view_chart_header">
                            <h4>Manage Jobs</h4>
                          </div>
                          <div className="job_bid_body">
                            <ul className="all_applied_jobs jobs_bookmarks">
                              <li>
                                <div className="applied_item">
                                  <a href="#">Wordpress Developer</a>
                                  <span className="badge_alrt">
                                    Pending Approval
                                  </span>
                                  <ul className="view_dt_job">
                                    <li>
                                      <div className="vw1254">
                                        <i className="far fa-clock" />
                                        Posted on 3 August 2018
                                      </div>
                                    </li>
                                    <li>
                                      <div className="vw1254">
                                        <i className="far fa-clock" />
                                        Expiring on 3 September 2018
                                      </div>
                                    </li>
                                  </ul>
                                  <div className="btn_link23">
                                    <button className="apled_btn60">
                                      <span className="badge badge-light">
                                        0
                                      </span>
                                      APPLIED CANDIDATES
                                    </button>
                                    <a href="#" className="delete_icon1">
                                      <i className="far fa-trash-alt" />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="applied_item">
                                  <a href="#">Front End Developer</a>
                                  <span className="badge_alrt">Approved</span>
                                  <ul className="view_dt_job">
                                    <li>
                                      <div className="vw1254">
                                        <i className="far fa-clock" />
                                        Posted on 29 July 2018
                                      </div>
                                    </li>
                                    <li>
                                      <div className="vw1254">
                                        <i className="far fa-clock" />
                                        Expiring on 29 August 2018
                                      </div>
                                    </li>
                                  </ul>
                                  <div className="btn_link23">
                                    <button className="apled_btn60">
                                      <span className="badge badge-light">
                                        3
                                      </span>
                                      APPLIED CANDIDATES
                                    </button>
                                    <a href="#" className="delete_icon1">
                                      <i className="far fa-trash-alt" />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="applied_item">
                                  <a href="#">Graphic Designer</a>
                                  <span className="badge_alrt">Expiring</span>
                                  <ul className="view_dt_job">
                                    <li>
                                      <div className="vw1254">
                                        <i className="far fa-clock" />
                                        Posted on 24 July 2018
                                      </div>
                                    </li>
                                    <li>
                                      <div className="vw1254">
                                        <i className="far fa-clock" />
                                        Posted on 24 August 2018
                                      </div>
                                    </li>
                                  </ul>
                                  <div className="btn_link23">
                                    <button className="apled_btn60">
                                      <span className="badge badge-light">
                                        4
                                      </span>
                                      APPLIED CANDIDATES
                                    </button>
                                    <a href="#" className="delete_icon1">
                                      <i className="far fa-trash-alt" />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="applied_item">
                                  <a href="#">Ruby Designer</a>
                                  <span className="badge_alrt">Expiried</span>
                                  <ul className="view_dt_job">
                                    <li>
                                      <div className="vw1254">
                                        <i className="far fa-clock" />
                                        Posted on 26 July 2018
                                      </div>
                                    </li>
                                  </ul>
                                  <div className="btn_link23">
                                    <button className="apled_btn60">
                                      <span className="badge badge-light">
                                        8
                                      </span>
                                      APPLIED CANDIDATES
                                    </button>
                                    <a href="#" className="delete_icon1">
                                      <i className="far fa-trash-alt" />
                                    </a>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="applied_jobs">
                        <div className="view_chart">
                          <div className="view_chart_header">
                            <h4>Applied Jobs</h4>
                          </div>
                          <div className="job_bid_body">
                            <ul className="all_applied_jobs jobs_bookmarks">
                              <li>
                                <div className="applied_item">
                                  <a href="#">Wordpress Developer</a>
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
                                  <div className="btn_link23">
                                    <button className="apled_btn50">
                                      Applied
                                    </button>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="applied_item">
                                  <a href="#">Front End Developer</a>
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
                                        Part Time
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
                                        <i className="far fa-clock" />2 day ago
                                      </div>
                                    </li>
                                  </ul>
                                  <div className="btn_link23">
                                    <button className="apled_btn50">
                                      Applied
                                    </button>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="applied_item">
                                  <a href="#">Back End Developer</a>
                                  <ul className="view_dt_job">
                                    <li>
                                      <div className="vw1254">
                                        <i className="fas fa-map-marker-alt" />
                                        India
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
                                        $1200 - Fixed
                                      </div>
                                    </li>
                                    <li>
                                      <div className="vw1254">
                                        <i className="far fa-clock" />4 day ago
                                      </div>
                                    </li>
                                  </ul>
                                  <div className="btn_link23">
                                    <button className="apled_btn50">
                                      Applied
                                    </button>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="applied_item">
                                  <a href="#">Ui / UX Designer</a>
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
                                        Part Time
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
                                        <i className="far fa-clock" />2 day ago
                                      </div>
                                    </li>
                                  </ul>
                                  <div className="btn_link23">
                                    <button className="apled_btn50">
                                      Applied
                                    </button>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="applied_candidates">
                        <div className="view_chart">
                          <div className="view_chart_header">
                            <h4>Applied Candidates</h4>
                          </div>
                          <div className="job_bid_body">
                            <ul className="all_applied_jobs jobs_bookmarks">
                              <li>
                                <div className="applied_candidates_item">
                                  <div className="applied_candidates_dt">
                                    <div className="candi_img">
                                      <img
                                        src="images/homepage/candidates/img-1.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="candi_dt">
                                      <a href="#">John Doe</a>
                                      <div className="candi_cate">
                                        UX Designer
                                      </div>
                                      <div className="rating_candi">
                                        Rating
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
                                  </div>
                                  <div className="btn_link24">
                                    <button className="apled_btn50">
                                      Download CV
                                    </button>
                                    <button className="apled_btn70">
                                      Message
                                    </button>
                                    <a href="#" className="delete_icon1">
                                      <i className="far fa-trash-alt" />
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="applied_candidates_item">
                                  <div className="applied_candidates_dt">
                                    <div className="candi_img">
                                      <img
                                        src="images/homepage/candidates/img-2.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="candi_dt">
                                      <a href="#">Rock William</a>
                                      <div className="candi_cate">
                                        Front End Developer
                                      </div>
                                      <div className="rating_candi">
                                        Rating
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
                                  </div>
                                  <div className="btn_link24">
                                    <button className="apled_btn50">
                                      Download CV
                                    </button>
                                    <button className="apled_btn70">
                                      Message
                                    </button>
                                    <a href="#" className="delete_icon1">
                                      <i className="far fa-trash-alt" />
                                    </a>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="post_job"
                        role="tabpanel"
                      >
                        <div className="view_chart">
                          <div className="view_chart_header">
                            <h4>Post a Job</h4>
                          </div>
                          <div className="post_job_body">
                            <form>
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label className="label15">Job Name*</label>
                                    <input
                                      type="text"
                                      className="job-input"
                                      placeholder="Job Name Here"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label className="label15">
                                      Job Description*
                                    </label>
                                    <textarea
                                      className="textarea_input"
                                      placeholder="Type Description"
                                      defaultValue={""}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="requires">
                                    What are the job requirements
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label className="label15">Job Type*</label>
                                    <div className="ui fluid search selection dropdown skills-search">
                                      <input
                                        name="tags"
                                        type="hidden"
                                        defaultValue
                                      />
                                      <i className="dropdown icon" />
                                      <input
                                        className="search"
                                        autoComplete="off"
                                        tabIndex={0}
                                      />
                                      <span className="sizer" style={{}} />
                                      <div className="default text">
                                        Select a job
                                      </div>
                                      <div
                                        className="menu transition hidden"
                                        tabIndex={-1}
                                      >
                                        <div
                                          className="item selected"
                                          data-value="Job1"
                                        >
                                          Job Type 01
                                        </div>
                                        <div className="item" data-value="Job2">
                                          Job Type 02
                                        </div>
                                        <div className="item" data-value="Job3">
                                          Job Type 03
                                        </div>
                                        <div className="item" data-value="Job4">
                                          Job Type 04
                                        </div>
                                        <div className="item" data-value="Job5">
                                          Job Type 05
                                        </div>
                                        <div className="item" data-value="Job6">
                                          Job Type 06
                                        </div>
                                        <div className="item" data-value="Job7">
                                          Job Type 07
                                        </div>
                                        <div className="item" data-value="Job8">
                                          Job Type 08
                                        </div>
                                        <div className="item" data-value="Job9">
                                          Job Type 09
                                        </div>
                                        <div
                                          className="item"
                                          data-value="Job10"
                                        >
                                          Job Type 10
                                        </div>
                                        <div
                                          className="item"
                                          data-value="Job11"
                                        >
                                          Job Type 11
                                        </div>
                                        <div
                                          className="item"
                                          data-value="Job12"
                                        >
                                          Job Type 12
                                        </div>
                                        <div
                                          className="item"
                                          data-value="Job13"
                                        >
                                          Job Type 13
                                        </div>
                                        <div
                                          className="item"
                                          data-value="Job14"
                                        >
                                          Job Type 14
                                        </div>
                                        <div
                                          className="item"
                                          data-value="Job15"
                                        >
                                          Job Type 15
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label className="label15">
                                      Job Category*
                                    </label>
                                    <div className="ui fluid search selection dropdown skills-search">
                                      <input
                                        name="tags"
                                        type="hidden"
                                        defaultValue
                                      />
                                      <i className="dropdown icon" />
                                      <input
                                        className="search"
                                        autoComplete="off"
                                        tabIndex={0}
                                      />
                                      <span className="sizer" style={{}} />
                                      <div className="default text">
                                        Select Category
                                      </div>
                                      <div
                                        className="menu transition hidden"
                                        tabIndex={-1}
                                      >
                                        <div
                                          className="item selected"
                                          data-value="Job1"
                                        >
                                          Category 01
                                        </div>
                                        <div
                                          className="item"
                                          data-value="Category2"
                                        >
                                          Category 02
                                        </div>
                                        <div
                                          className="item"
                                          data-value="Category3"
                                        >
                                          Category 03
                                        </div>
                                        <div
                                          className="item"
                                          data-value="Category4"
                                        >
                                          Category 04
                                        </div>
                                        <div
                                          className="item"
                                          data-value="Category5"
                                        >
                                          Category 05
                                        </div>
                                        <div
                                          className="item"
                                          data-value="Category6"
                                        >
                                          Category 06
                                        </div>
                                        <div
                                          className="item"
                                          data-value="Category7"
                                        >
                                          Category 07
                                        </div>
                                        <div
                                          className="item"
                                          data-value="Category8"
                                        >
                                          Category 08
                                        </div>
                                        <div
                                          className="item"
                                          data-value="Category9"
                                        >
                                          Category 09
                                        </div>
                                        <div
                                          className="item"
                                          data-value="Category10"
                                        >
                                          Category 10
                                        </div>
                                        <div
                                          className="item"
                                          data-value="Category11"
                                        >
                                          Category 11
                                        </div>
                                        <div
                                          className="item"
                                          data-value="Category12"
                                        >
                                          Category 12
                                        </div>
                                        <div
                                          className="item"
                                          data-value="Category13"
                                        >
                                          Category 13
                                        </div>
                                        <div
                                          className="item"
                                          data-value="Category14"
                                        >
                                          Category 14
                                        </div>
                                        <div
                                          className="item"
                                          data-value="Category15"
                                        >
                                          Category 15
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label className="label15">
                                      Availability*
                                    </label>
                                    <div className="ui fluid search selection dropdown skills-search">
                                      <input
                                        name="tags"
                                        type="hidden"
                                        defaultValue
                                      />
                                      <i className="dropdown icon" />
                                      <input
                                        className="search"
                                        autoComplete="off"
                                        tabIndex={0}
                                      />
                                      <span className="sizer" style={{}} />
                                      <div className="default text">
                                        I’m not sure
                                      </div>
                                      <div
                                        className="menu transition hidden"
                                        tabIndex={-1}
                                      >
                                        <div
                                          className="item selected"
                                          data-value="Availability1"
                                        >
                                          Full Time
                                        </div>
                                        <div
                                          className="item selected"
                                          data-value="Availability2"
                                        >
                                          Part Time
                                        </div>
                                        <div
                                          className="item selected"
                                          data-value="Availability3"
                                        >
                                          Not Available
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label className="label15">
                                      Experience Level*
                                    </label>
                                    <div className="ui fluid search selection dropdown skills-search">
                                      <input
                                        name="tags"
                                        type="hidden"
                                        defaultValue
                                      />
                                      <i className="dropdown icon" />
                                      <input
                                        className="search"
                                        autoComplete="off"
                                        tabIndex={0}
                                      />
                                      <span className="sizer" style={{}} />
                                      <div className="default text">
                                        Select Experience Level
                                      </div>
                                      <div
                                        className="menu transition hidden"
                                        tabIndex={-1}
                                      >
                                        <div
                                          className="item"
                                          data-value="level1"
                                        >
                                          level 01
                                        </div>
                                        <div
                                          className="item"
                                          data-value="level2"
                                        >
                                          level 02
                                        </div>
                                        <div
                                          className="item"
                                          data-value="level3"
                                        >
                                          level 03
                                        </div>
                                        <div
                                          className="item"
                                          data-value="level4"
                                        >
                                          level 04
                                        </div>
                                        <div
                                          className="item"
                                          data-value="level5"
                                        >
                                          level 05
                                        </div>
                                        <div
                                          className="item"
                                          data-value="level6"
                                        >
                                          level 06
                                        </div>
                                        <div
                                          className="item"
                                          data-value="level7"
                                        >
                                          level 07
                                        </div>
                                        <div
                                          className="item"
                                          data-value="level8"
                                        >
                                          level 08
                                        </div>
                                        <div
                                          className="item"
                                          data-value="level9"
                                        >
                                          level 09
                                        </div>
                                        <div
                                          className="item"
                                          data-value="level10"
                                        >
                                          level 10
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label className="label15">
                                      Salary Min*
                                    </label>
                                    <div className="smm_input">
                                      <input
                                        type="text"
                                        className="job-input"
                                        placeholder="Min"
                                      />
                                      <div className="mix_max">Usd</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label className="label15">
                                      Salary Max*
                                    </label>
                                    <div className="smm_input">
                                      <input
                                        type="text"
                                        className="job-input"
                                        placeholder="Max"
                                      />
                                      <div className="mix_max">Usd</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label className="label15">Location*</label>
                                    <div className="smm_input">
                                      <input
                                        type="text"
                                        className="job-input"
                                        placeholder="Type Address"
                                      />
                                      <div className="loc_icon">
                                        <i className="fas fa-map-marker-alt" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label className="label15">
                                      Languages*
                                    </label>
                                    <div className="ui fluid search selection dropdown skills-search">
                                      <input
                                        name="tags"
                                        type="hidden"
                                        defaultValue
                                      />
                                      <i className="dropdown icon" />
                                      <input
                                        className="search"
                                        autoComplete="off"
                                        tabIndex={0}
                                      />
                                      <span className="sizer" style={{}} />
                                      <div className="default text">
                                        Select Language
                                      </div>
                                      <div
                                        className="menu transition hidden"
                                        tabIndex={-1}
                                      >
                                        <div
                                          className="item"
                                          data-value="lang1"
                                        >
                                          English
                                        </div>
                                        <div
                                          className="item"
                                          data-value="lang2"
                                        >
                                          Hindi
                                        </div>
                                        <div
                                          className="item"
                                          data-value="lang3"
                                        >
                                          Punjabi
                                        </div>
                                        <div
                                          className="item"
                                          data-value="lang4"
                                        >
                                          Bengali
                                        </div>
                                        <div
                                          className="item"
                                          data-value="lang5"
                                        >
                                          Portuguese
                                        </div>
                                        <div
                                          className="item"
                                          data-value="lang6"
                                        >
                                          Russian
                                        </div>
                                        <div
                                          className="item"
                                          data-value="lang7"
                                        >
                                          Japanese
                                        </div>
                                        <div
                                          className="item"
                                          data-value="lang8"
                                        >
                                          Telugu
                                        </div>
                                        <div
                                          className="item"
                                          data-value="lang9"
                                        >
                                          French
                                        </div>
                                        <div
                                          className="item"
                                          data-value="lang10"
                                        >
                                          German
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label className="label15">Skills*</label>
                                    <div className="ui fluid multiple search selection dropdown skills-search">
                                      <input
                                        name="tags"
                                        type="hidden"
                                        defaultValue
                                      />
                                      <i className="dropdown icon" />
                                      <input
                                        className="search"
                                        autoComplete="off"
                                        tabIndex={0}
                                      />
                                      <span className="sizer" style={{}} />
                                      <div className="default text">Skills</div>
                                      <div
                                        className="menu transition hidden"
                                        tabIndex={-1}
                                      >
                                        <div
                                          className="item selected"
                                          data-value="angular"
                                        >
                                          Angular
                                        </div>
                                        <div className="item" data-value="css">
                                          CSS
                                        </div>
                                        <div
                                          className="item"
                                          data-value="design"
                                        >
                                          Graphic Design
                                        </div>
                                        <div
                                          className="item"
                                          data-value="ember"
                                        >
                                          Ember
                                        </div>
                                        <div className="item" data-value="html">
                                          HTML
                                        </div>
                                        <div className="item" data-value="ia">
                                          Information Architecture
                                        </div>
                                        <div
                                          className="item"
                                          data-value="javascript"
                                        >
                                          Javascript
                                        </div>
                                        <div className="item" data-value="mech">
                                          Mechanical Engineering
                                        </div>
                                        <div
                                          className="item"
                                          data-value="meteor"
                                        >
                                          Meteor
                                        </div>
                                        <div className="item" data-value="node">
                                          NodeJS
                                        </div>
                                        <div
                                          className="item"
                                          data-value="plumbing"
                                        >
                                          Plumbing
                                        </div>
                                        <div
                                          className="item"
                                          data-value="python"
                                        >
                                          Python
                                        </div>
                                        <div
                                          className="item"
                                          data-value="rails"
                                        >
                                          Rails
                                        </div>
                                        <div
                                          className="item"
                                          data-value="react"
                                        >
                                          React
                                        </div>
                                        <div
                                          className="item"
                                          data-value="repair"
                                        >
                                          Kitchen Repair
                                        </div>
                                        <div className="item" data-value="ruby">
                                          Ruby
                                        </div>
                                        <div className="item" data-value="ui">
                                          UI Design
                                        </div>
                                        <div className="item" data-value="ux">
                                          User Experience
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label className="label15">
                                      Upload Files*
                                    </label>
                                    <div className="image-upload-wrap1">
                                      <input
                                        className="file-upload-input1"
                                        id="file2"
                                        type="file"
                                        onchange="readURL(this);"
                                        accept="image/*"
                                      />
                                      <div className="drag-text1">
                                        Upload Files
                                      </div>
                                    </div>
                                    <p className="upload_dt">
                                      Images, Pdf and MS Word Filess
                                    </p>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <button className="post_jp_btn" type="submit">
                                    Post a Job
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
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
export default MyFreelancerJobs;
