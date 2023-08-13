import Footer from "./Footer";
import NavBar from "./NavBar";

function CompanyMessages() {
  return (
    <div>

      <title>Jobby - Company Dashboard</title>

      <link href="css/jquery.mCustomScrollbar.min.css" rel="stylesheet" />

      {/* Map Box */}
 
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
                  <img src="images/homepage/candidates/img-7.jpg" alt="" />
                  <div className="job-urs-dts">
                    <div className="dp_upload">
                      <input type="file" id="file" />
                      <label htmlFor="file">Upload Photo</label>
                    </div>
                    <h4>Gambolthemes</h4>
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
                    <a className="nav-link" href="company_dashboard.html">
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="company_profile.html">
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="company_members.html">
                      Members
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="company_notifications.html">
                      Notifications
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="company_messages.html">
                      Messages
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="company_bookmarks.html">
                      Bookmarks
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="company_jobs.html">
                      Jobs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="company_bids.html">
                      Bids
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="company_reviews.html">
                      Reviews
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="company_payments.html">
                      Payment
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="company_setting.html">
                      <i className="fas fa-cog" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="messages-sec">
                <div className="row no-gutters">
                  <div className="col-xl-4">
                    <div className="msgs-list mb30">
                      <div className="msg-title1">
                        <div className="srch_br">
                          <input
                            className="list_search"
                            type="text"
                            placeholder="Search"
                          />
                          <i className="fas fa-search list_srch_icon" />
                        </div>
                      </div>
                      {/*msg-title end*/}
                      <div className="messages-list scrollstyle_4">
                        <ul>
                          <li className="active">
                            <div className="usr-msg-details">
                              <div className="usr-ms-img">
                                <img src="images/messages/dp-1.jpg" alt="" />
                                <span className="msg-status" />
                              </div>
                              <div className="usr-mg-info">
                                <h3>Johnson Smith</h3>
                                <p>Thanks for the hired me...</p>
                              </div>
                              {/*usr-mg-info end*/}
                              <span className="posted_time">1:55 PM</span>
                              <span className="msg-notifc">1</span>
                            </div>
                            {/*usr-msg-details end*/}
                          </li>
                          <li>
                            <div className="usr-msg-details">
                              <div className="usr-ms-img">
                                <img src="images/messages/dp-2.jpg" alt="" />
                                <span className="msg-status" />
                              </div>
                              <div className="usr-mg-info">
                                <h3>Rock William</h3>
                                <p>Thanks</p>
                              </div>
                              {/*usr-mg-info end*/}
                              <span className="posted_time">1:55 PM</span>
                            </div>
                            {/*usr-msg-details end*/}
                          </li>
                          <li>
                            <div className="usr-msg-details">
                              <div className="usr-ms-img">
                                <img src="images/messages/dp-3.jpg" alt="" />
                                <span className="msg-status" />
                              </div>
                              <div className="usr-mg-info">
                                <h3>Jass Singh</h3>
                                <p>Payment Received?</p>
                              </div>
                              {/*usr-mg-info end*/}
                              <span className="posted_time">1:55 PM</span>
                            </div>
                            {/*usr-msg-details end*/}
                          </li>
                          <li>
                            <div className="usr-msg-details">
                              <div className="usr-ms-img">
                                <img src="images/messages/dp-4.jpg" alt="" />
                                <span className="msg-status" />
                              </div>
                              <div className="usr-mg-info">
                                <h3>Norman Kenney</h3>
                                <p>Hi! How are you?</p>
                              </div>
                              {/*usr-mg-info end*/}
                              <span className="posted_time">1:55 PM</span>
                            </div>
                            {/*usr-msg-details end*/}
                          </li>
                        </ul>
                      </div>
                      {/*messages-list end*/}
                    </div>
                    {/*msgs-list end*/}
                  </div>
                  <div className="col-xl-8 col-md-12 mission-slider">
                    <div className="main-conversation-box">
                      <div className="message-bar-head">
                        <div className="usr-msg-details">
                          <div className="usr-ms-img">
                            <img src="images/messages/dp-1.jpg" alt="" />
                          </div>
                          <div className="usr-mg-info">
                            <h3>John Doe</h3>
                            <p>Online</p>
                          </div>
                          {/*usr-mg-info end*/}
                        </div>
                        <a href="#" title className="ed-opts-open">
                          <i className="far fa-trash-alt" />
                        </a>
                      </div>
                      {/*message-bar-head end*/}
                      <div className="messages-line scrollstyle_4">
                        <div className="mCustomScrollbar">
                          <div className="main-message-box ta-right">
                            <div className="message-dt">
                              <div className="message-inner-dt">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Donec rutrum congue leo eget
                                  malesuada. Vivamus suscipit tortor eget felis
                                  porttitor.
                                </p>
                              </div>
                              {/*message-inner-dt end*/}
                              <span>Sat, Aug 23, 1:08 PM</span>
                            </div>
                            {/*message-dt end*/}
                          </div>
                          {/*main-message-box end*/}
                          <div className="main-message-box st3">
                            <div className="message-dt st3">
                              <div className="message-inner-dt">
                                <p>Cras ultricies ligula.</p>
                              </div>
                              {/*message-inner-dt end*/}
                              <span>5 minutes ago</span>
                            </div>
                            {/*message-dt end*/}
                          </div>
                          {/*main-message-box end*/}
                          <div className="main-message-box ta-right">
                            <div className="message-dt">
                              <div className="message-inner-dt">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Donec rutrum congue leo eget
                                  malesuada. Vivamus suscipit tortor eget felis
                                  porttitor.
                                </p>
                              </div>
                              {/*message-inner-dt end*/}
                              <span>Sat, Aug 23, 1:08 PM</span>
                            </div>
                            {/*message-dt end*/}
                          </div>
                          {/*main-message-box end*/}
                          <div className="main-message-box st3">
                            <div className="message-dt st3">
                              <div className="message-inner-dt">
                                <p>Lorem ipsum dolor sit amet</p>
                              </div>
                              {/*message-inner-dt end*/}
                              <span>2 minutes ago</span>
                            </div>
                            {/*message-dt end*/}
                          </div>
                          {/*main-message-box end*/}
                          <div className="main-message-box ta-right">
                            <div className="message-dt">
                              <div className="message-inner-dt">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Donec rutrum congue leo eget
                                  malesuada. Vivamus suscipit tortor eget felis
                                  porttitor.
                                </p>
                              </div>
                              {/*message-inner-dt end*/}
                              <span>Sat, Aug 23, 1:08 PM</span>
                            </div>
                            {/*message-dt end*/}
                          </div>
                          {/*main-message-box end*/}
                          <div className="main-message-box st3">
                            <div className="message-dt st3">
                              <div className="message-inner-dt">
                                <p>....</p>
                              </div>
                              {/*message-inner-dt end*/}
                              <span>Typing...</span>
                            </div>
                            {/*message-dt end*/}
                          </div>
                          {/*main-message-box end*/}
                        </div>
                      </div>
                      {/*messages-line end*/}
                      <div className="message-send-area">
                        <form>
                          <div className="mf-field">
                            <input
                              type="text"
                              name="message"
                              placeholder="Type a message here"
                            />
                            <button type="submit">Send</button>
                          </div>
                        </form>
                      </div>
                      {/*message-send-area end*/}
                    </div>
                    {/*main-conversation-box end*/}
                  </div>
                </div>
              </div>
              {/*messages-sec end*/}
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

export default CompanyMessages;
