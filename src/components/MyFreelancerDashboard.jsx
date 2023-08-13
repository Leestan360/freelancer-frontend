import Footer from "./Footer";
import NavBar from "./NavBar";

function MyFreelancerDashboard() {
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
      {/* Add Note Model Start */}
      <div className="apply_job_form">
        <div
          className="modal fade"
          id="addnoteModal"
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog modal-jb" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Note
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
                  <h3>Do Not Forget.</h3>
                  <div className="form_inputs">
                    <div className="form-group">
                      <div className="ui fluid search selection dropdown skills-search">
                        <input name="tags" type="hidden" defaultValue />
                        <i className="dropdown icon" />
                        <input
                          className="search"
                          autoComplete="off"
                          tabIndex={0}
                        />
                        <span className="sizer" style={{}} />
                        <div className="default text">Priorty</div>
                        <div className="menu transition hidden" tabIndex={-1}>
                          <div className="item selected" data-value="Job1">
                            High Priorty
                          </div>
                          <div className="item" data-value="Job2">
                            Medium Priorty
                          </div>
                          <div className="item" data-value="Job3">
                            Low Priorty
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="note-input"
                        placeholder="Note"
                        defaultValue={""}
                      />
                    </div>
                    <div className="apply_btn150">
                      <button className="apply_job50" type="button">
                        ADD NOTE
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
      </div>
      {/* Add Note Model End */}
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
                    <a
                      className="nav-link active"
                      href="my_freelancer_dashboard.html"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="my_freelancer_profile.html">
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="my_freelancer_portfolio.html">
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
              <div className="total_1254">
                <div className="row">
                  <div className="col-lg-4 col-12">
                    <div className="collection_item">
                      <div className="coll_icon">
                        <i className="fas fa-suitcase col_icon1" />
                      </div>
                      <h4>Applied Jobs</h4>
                      <span>30</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12">
                    <div className="collection_item">
                      <div className="coll_icon">
                        <i className="fas fa-bullseye col_icon2" />
                      </div>
                      <h4>Task Bids Won</h4>
                      <span>10</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12">
                    <div className="collection_item">
                      <div className="coll_icon">
                        <i className="fas fa-heart col_icon3" />
                      </div>
                      <h4>Favourites</h4>
                      <span>20</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="view_chart">
                <div className="view_chart_header">
                  <h4 className="mt-2">Your Profile View</h4>
                  <div className="date_selector">
                    <div className="ui selection dropdown skills-search vchrt-dropdown">
                      <input
                        name="gender"
                        type="hidden"
                        defaultValue="default"
                      />
                      <i className="dropdown icon d-icon" />
                      <div className="text">Last 6 Months</div>
                      <div className="menu">
                        <div className="item" data-value={0}>
                          Last 6 Months
                        </div>
                        <div className="item" data-value={1}>
                          This Year
                        </div>
                        <div className="item" data-value={2}>
                          This Month
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="view_chart_body">
                  <canvas
                    id="chart"
                    width={890}
                    height={300}
                    className="chartjs-render-monitor"
                  />
                </div>
              </div>
              <div className="dsh150">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="view_chart">
                      <div className="view_chart_header">
                        <h4>Static Analytics</h4>
                      </div>
                      <div className="view_chart_body">
                        <div className="pie_chart_view">
                          <canvas
                            id="pieChart"
                            width={607}
                            height={303}
                            className="chartjs-render-monitor"
                          />
                        </div>
                        <ul className="static_list">
                          <li>
                            <div className="static_items">
                              <div className="static_left">
                                <div
                                  className="color_box"
                                  style={{ backgroundColor: "#ff4500" }}
                                />
                                <h6>Applied Jobs</h6>
                              </div>
                              <div className="static_right">
                                <span>30</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="static_items">
                              <div className="static_left">
                                <div
                                  className="color_box"
                                  style={{ backgroundColor: "#49d086" }}
                                />
                                <h6>Posted Jobs</h6>
                              </div>
                              <div className="static_right">
                                <span>20</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="static_items">
                              <div className="static_left">
                                <div
                                  className="color_box"
                                  style={{ backgroundColor: "#b81b7f" }}
                                />
                                <h6>Active Bids</h6>
                              </div>
                              <div className="static_right">
                                <span>10</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="static_items">
                              <div className="static_left">
                                <div
                                  className="color_box"
                                  style={{ backgroundColor: "#efa80f" }}
                                />
                                <h6>Favourite Jobs</h6>
                              </div>
                              <div className="static_right">
                                <span>20</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="view_chart">
                      <div className="view_chart_header">
                        <h4>Notes</h4>
                      </div>
                      <div className="view_chart_body">
                        <ul className="all_notes scrollstyle_4">
                          <li>
                            <div className="note_item">
                              <div className="note_left">
                                <div className="priorty">High Priorty</div>
                              </div>
                              <div className="note_right">
                                <button className="note_btn">
                                  <i className="far fa-edit" />
                                </button>
                                <button className="note_btn">
                                  <i className="far fa-trash-alt" />
                                </button>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc quis accumsan mi.
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="note_item">
                              <div className="note_left">
                                <div className="priorty priorty_low">
                                  Low Priorty
                                </div>
                              </div>
                              <div className="note_right">
                                <button className="note_btn">
                                  <i className="far fa-edit" />
                                </button>
                                <button className="note_btn">
                                  <i className="far fa-trash-alt" />
                                </button>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc quis accumsan mi.
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="note_item">
                              <div className="note_left">
                                <div className="priorty">High Priorty</div>
                              </div>
                              <div className="note_right">
                                <button className="note_btn">
                                  <i className="far fa-edit" />
                                </button>
                                <button className="note_btn">
                                  <i className="far fa-trash-alt" />
                                </button>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc quis accumsan mi.
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="note_item">
                              <div className="note_left">
                                <div className="priorty priorty_medium">
                                  Medium Priorty
                                </div>
                              </div>
                              <div className="note_right">
                                <button className="note_btn">
                                  <i className="far fa-edit" />
                                </button>
                                <button className="note_btn">
                                  <i className="far fa-trash-alt" />
                                </button>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc quis accumsan mi.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="add_note">
                        <button
                          className="add_note_btn"
                          type="button"
                          data-toggle="modal"
                          data-target="#addnoteModal"
                        >
                          Add Note
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dsh150">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="view_chart">
                      <div className="view_chart_header">
                        <h4>Applied Jobs</h4>
                      </div>
                      <div className="view_applied_jobs_body">
                        <ul className="all_applied_jobs scrollstyle_4">
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
                                <button className="apled_btn50">Applied</button>
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
                                <button className="apled_btn50">Applied</button>
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
                                <button className="apled_btn50">Applied</button>
                              </div>
                            </div>
                          </li>
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
                                    $700 - Manual
                                  </div>
                                </li>
                                <li>
                                  <div className="vw1254">
                                    <i className="far fa-clock" />5 day ago
                                  </div>
                                </li>
                              </ul>
                              <div className="btn_link23">
                                <button className="apled_btn50">Applied</button>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <a href="#" className="btn-veiw10">
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="view_chart">
                      <div className="view_chart_header">
                        <h4>Order Plans Summery</h4>
                      </div>
                      <div className="view_applied_jobs_body">
                        <ul className="all_paid_plans scrollstyle_4">
                          <li>
                            <div className="plan_dts">
                              <div className="plan_dt_left">
                                <h4>Professional Plans</h4>
                                <p>Order No : #12345</p>
                                <p>Date : 10 October 2018</p>
                              </div>
                              <div className="plan_dt_right">
                                <button className="paid_btn">Paid</button>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="plan_dts">
                              <div className="plan_dt_left">
                                <h4>Professional Plans</h4>
                                <p>Order No : #12358</p>
                                <p>Date : 10 September 2018</p>
                              </div>
                              <div className="plan_dt_right">
                                <button className="paid_btn">Paid</button>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="plan_dts">
                              <div className="plan_dt_left">
                                <h4>Professional Plans</h4>
                                <p>Order No : #12358</p>
                                <p>Date : 10 August 2018</p>
                              </div>
                              <div className="plan_dt_right">
                                <button className="paid_btn">Paid</button>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="plan_dts">
                              <div className="plan_dt_left">
                                <h4>Professional Plans</h4>
                                <p>Order No : #12365</p>
                                <p>Date : 10 July 2018</p>
                              </div>
                              <div className="plan_dt_right">
                                <button className="paid_btn">Paid</button>
                              </div>
                            </div>
                          </li>
                        </ul>
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

export default MyFreelancerDashboard;
