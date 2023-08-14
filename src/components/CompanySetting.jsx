import { Helmet } from "react-helmet";
import Footer from "./Footer";
import NavBar from "./NavBar";

function CompanySetting() {
  return (
    <div>
      <Helmet>
        <title>Jobby - Company Dashboard</title>
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
                    <a className="nav-link" href="company_messages.html">
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
                    <a className="nav-link active" href="company_setting.html">
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
                            href="#my_profile"
                            id="my-profile-tab"
                            data-toggle="tab"
                          >
                            My Profile
                          </a>
                        </li>
                        <li className="nav-item job_nav_item">
                          <a
                            className="nav-link"
                            href="#social_accounts"
                            id="social-accounts-tab"
                            data-toggle="tab"
                          >
                            Social Accounts
                          </a>
                        </li>
                        <li className="nav-item job_nav_item">
                          <a
                            className="nav-link"
                            href="#change_password"
                            id="change-password-tab"
                            data-toggle="tab"
                          >
                            Change Password
                          </a>
                        </li>
                        <li className="nav-item job_nav_item">
                          <a
                            className="nav-link"
                            href="#delete_account"
                            id="delete-account-tab"
                            data-toggle="tab"
                          >
                            Deactivate Account
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="my_profile"
                        role="tabpanel"
                      >
                        <div className="view_chart">
                          <div className="view_chart_header">
                            <h4>My Profile</h4>
                          </div>
                          <div className="post_job_body">
                            <form>
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label className="label15">
                                      Profile Avtar*
                                    </label>
                                    <div className="avtar_dp">
                                      <img src="images/profile_dp.jpg" alt="" />
                                    </div>
                                    <div className="image-upload-wrap1 ml5">
                                      <input
                                        className="file-upload-input1"
                                        id="file3"
                                        type="file"
                                        onchange="readURL(this);"
                                        accept="image/*"
                                      />
                                      <div className="drag-text1">
                                        Upload Files
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label className="label15">
                                      Company Name*
                                    </label>
                                    <input
                                      type="text"
                                      className="job-input"
                                      placeholder="Your Company Name"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label className="label15">
                                      Email Address*
                                    </label>
                                    <input
                                      type="email"
                                      className="job-input"
                                      placeholder="Enter Your Email Address"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label className="label15">
                                      Launch Date*
                                    </label>
                                    <div className="smm_input">
                                      <input
                                        type="text"
                                        className="job-input datepicker-here"
                                        data-language="en"
                                        placeholder="Select Launch Date"
                                      />
                                      <div className="mix_max">
                                        <i className="fas fa-calendar-alt" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label className="label15">
                                      About Description*
                                    </label>
                                    <div className="description_dtu">
                                      <div className="description_actions">
                                        <a href="#">
                                          <i className="fas fa-bold" />
                                        </a>
                                        <a href="#">
                                          <i className="fas fa-italic" />
                                        </a>
                                        <a href="#">
                                          <i className="fas fa-list-ul" />
                                        </a>
                                        <a href="#">
                                          <i className="fas fa-list-ol" />
                                        </a>
                                      </div>
                                      <textarea
                                        className="textarea70"
                                        placeholder="Describe your experience, skills, etc. In complete details. This is your chance to show off."
                                        defaultValue={""}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label className="label15">Tagline*</label>
                                    <input
                                      type="email"
                                      className="job-input"
                                      placeholder="Wordpress Developer"
                                    />
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
                                      Pay Rate ($/hr)*
                                    </label>
                                    <div className="smm_input">
                                      <input
                                        type="text"
                                        className="job-input"
                                        placeholder="Enter Your Page Rate"
                                      />
                                      <div className="mix_max">Usd</div>
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
                                    <label className="label15">Location*</label>
                                    <div className="smm_input">
                                      <input
                                        type="text"
                                        className="job-input"
                                        placeholder="Type Address"
                                      />
                                      <div className="loc_icon">
                                        <i className="fas fa-crosshairs" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label className="label15">Websites*</label>
                                    <div className="smm_input5">
                                      <input
                                        type="text"
                                        className="website-input"
                                        placeholder="Http://entercompanysite.com"
                                      />
                                      <div className="loc_icon5">
                                        <i className="fas fa-globe" />
                                      </div>
                                    </div>
                                    <div className="smm_input5">
                                      <input
                                        type="text"
                                        className="website-input"
                                        placeholder="Http://enterblogsite.com"
                                      />
                                      <div className="loc_icon5">
                                        <i className="far fa-edit" />
                                      </div>
                                    </div>
                                    <div className="smm_input5">
                                      <input
                                        type="text"
                                        className="website-input"
                                        placeholder="Http://enterportfoliosite.com"
                                      />
                                      <div className="loc_icon5">
                                        <i className="fas fa-columns" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <button className="post_jp_btn" type="submit">
                                    SAVE CHANGES
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="social_accounts">
                        <div className="view_chart">
                          <div className="view_chart_header">
                            <h4>Social Accounts</h4>
                          </div>
                          <div className="social200">
                            <form>
                              <ul>
                                <li>
                                  <div className="social201">
                                    <input
                                      className="scl_input"
                                      type="text"
                                      placeholder="Http://facebook.com/johndoe..."
                                    />
                                    <div className="icon143 f1">
                                      <i className="fab fa-facebook-f" />
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="social201">
                                    <input
                                      className="scl_input"
                                      type="text"
                                      placeholder="Http://twitter.com/johndoe..."
                                    />
                                    <div className="icon143 t1">
                                      <i className="fab fa-twitter" />
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="social201">
                                    <input
                                      className="scl_input"
                                      type="text"
                                      placeholder="Http://googleplus.com/johndoe..."
                                    />
                                    <div className="icon143 go1">
                                      <i className="fab fa-google-plus-g" />
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="social201">
                                    <input
                                      className="scl_input"
                                      type="text"
                                      placeholder="Http://youtube.com/johndoe..."
                                    />
                                    <div className="icon143 y1">
                                      <i className="fab fa-youtube" />
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="social201">
                                    <input
                                      className="scl_input"
                                      type="text"
                                      placeholder="Http://linkedin.com/johndoe..."
                                    />
                                    <div className="icon143 l1">
                                      <i className="fab fa-linkedin-in l1" />
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="social201">
                                    <input
                                      className="scl_input"
                                      type="text"
                                      placeholder="Http://instagram.com/johndoe..."
                                    />
                                    <div className="icon143 i1">
                                      <i className="fab fa-instagram" />
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="social201">
                                    <input
                                      className="scl_input"
                                      type="text"
                                      placeholder="Http://dribbble.com/johndoe..."
                                    />
                                    <div className="icon143 d1">
                                      <i className="fab fa-dribbble d1" />
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="social201">
                                    <input
                                      className="scl_input"
                                      type="text"
                                      placeholder="Http://behance.net/johndoe..."
                                    />
                                    <div className="icon143 b1">
                                      <i className="fab fa-behance b1" />
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="social201">
                                    <input
                                      className="scl_input"
                                      type="text"
                                      placeholder="Http://github.com/johndoe..."
                                    />
                                    <div className="icon143 g1">
                                      <i className="fab fa-github g1" />
                                    </div>
                                  </div>
                                </li>
                              </ul>
                              <button className="post_jp_btn" type="submit">
                                SAVE CHANGES
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="change_password">
                        <div className="view_chart">
                          <div className="view_chart_header">
                            <h4>Change Password</h4>
                          </div>
                          <div className="post_job_body">
                            <form>
                              <div className="form-group">
                                <label className="label15">Old Password*</label>
                                <input
                                  type="password"
                                  className="job-input"
                                  placeholder="Enter Old Password"
                                />
                              </div>
                              <div className="form-group">
                                <label className="label15">New Password*</label>
                                <input
                                  type="password"
                                  className="job-input"
                                  placeholder="Enter New Password"
                                />
                              </div>
                              <div className="form-group">
                                <label className="label15">
                                  Repeat New Password*
                                </label>
                                <input
                                  type="password"
                                  className="job-input"
                                  placeholder="Enter Repeat New Password"
                                />
                              </div>
                              <button className="post_jp_btn" type="submit">
                                Change Password
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="delete_account"
                        role="tabpanel"
                      >
                        <div className="view_chart">
                          <div className="view_chart_header">
                            <h4>Deactivate Account</h4>
                          </div>
                          <div className="post_job_body">
                            <form>
                              <div className="form-group">
                                <label className="label15">
                                  Please Explain Further**
                                </label>
                                <textarea
                                  className="textarea_input"
                                  placeholder="Type"
                                  defaultValue={""}
                                />
                              </div>
                              <div className="form-group">
                                <label className="label15">Password*</label>
                                <input
                                  type="password"
                                  className="job-input"
                                  placeholder="Enter Password"
                                />
                              </div>
                              <div className="email_chk">
                                <div className="ui checkbox apply_check">
                                  <input type="checkbox" />
                                  <label
                                    style={{ color: "#242424 !important" }}
                                  >
                                    Email Option Out.
                                  </label>
                                </div>
                              </div>
                              <button className="post_jp_btn" type="submit">
                                Deactivate Account
                              </button>
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

export default CompanySetting;
