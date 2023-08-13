import Footer from "./Footer";
import NavBar from "./NavBar";

function MyFreelancerPayments() {
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
                    <a
                      className="nav-link active"
                      href="my_freelancer_payments.html"
                    >
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
                            href="#payment"
                            id="payment-tab"
                            data-toggle="tab"
                          >
                            Payments
                          </a>
                        </li>
                        <li className="nav-item job_nav_item">
                          <a
                            className="nav-link"
                            href="#transaction"
                            id="transaction-tab"
                            data-toggle="tab"
                          >
                            Transactions
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="payment"
                        role="tabpanel"
                      >
                        <div
                          className="add-ons-dt accordion"
                          id="accordionExample"
                        >
                          <div className="bookmark_card">
                            <button
                              className="bookmark_collapse"
                              data-toggle="collapse"
                              data-target="#collapse1"
                              aria-expanded="true"
                              aria-controls="collapse1"
                            >
                              Earnings
                            </button>
                            <div id="collapse1" className="collapse show">
                              <div className="card-body">
                                <div className="payment_dt">
                                  <div className="earning_dt">
                                    <div className="earning_left">
                                      <h6>Your Earnings</h6>
                                      <div className="earn_amount">$1500</div>
                                    </div>
                                    <div className="earning_right">
                                      <p>
                                        Wallet<a href="#">(Change)</a>
                                      </p>
                                      <img src="images/payoneer.png" alt="" />
                                    </div>
                                  </div>
                                  <button className="withdraw_btn">
                                    WITHDRAW PAYMENT
                                  </button>
                                </div>
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
                              Send Payment
                            </button>
                            <div id="collapse2" className="collapse show">
                              <div className="card-body">
                                <div className="send_payment_dt">
                                  <div className="post_job_body">
                                    <div className="form-group">
                                      <label className="label15">Amount*</label>
                                      <input
                                        type="text"
                                        className="job-input"
                                        placeholder="Enter Amount"
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label className="label15">
                                        Send To*
                                      </label>
                                      <input
                                        type="email"
                                        className="job-input"
                                        placeholder="Enter Email Address"
                                      />
                                    </div>
                                  </div>
                                  <div className="protection">
                                    <i className="fas fa-shield-alt" />
                                    With Jobby payment protection, only pay for
                                    work delivered.
                                  </div>
                                  <div className="post_job_body">
                                    <div className="ui radio checkbox apply_check">
                                      <input
                                        type="radio"
                                        name="example1"
                                        defaultChecked
                                      />
                                      <label
                                        style={{ color: "#242424 !important" }}
                                      >
                                        Credit or Debit Cards
                                      </label>
                                    </div>
                                    <div className="form-group">
                                      <label className="label15">
                                        Card Number*
                                      </label>
                                      <input
                                        type="text"
                                        className="job-input"
                                        placeholder="Enter Card Number"
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label className="label15">
                                        Full Name*
                                      </label>
                                      <input
                                        type="text"
                                        className="job-input"
                                        placeholder="Enter Full Name"
                                      />
                                    </div>
                                    <div className="fdsf452">
                                      <div className="row">
                                        <div className="col-lg-6">
                                          <div className="form-group">
                                            <label className="label15">
                                              Expiring*
                                            </label>
                                            <input
                                              type="text"
                                              className="job-input datepicker-here"
                                              data-language="en"
                                              data-min-view="months"
                                              data-view="months"
                                              data-date-format="MM yyyy"
                                              placeholder="Expiring"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-lg-6">
                                          <div className="form-group">
                                            <label className="label15">
                                              Cvv*
                                            </label>
                                            <input
                                              type="text"
                                              className="job-input"
                                              placeholder="Enter Cvv"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="post_job_body lineppyl">
                                    <div className="ui radio checkbox apply_check">
                                      <input type="radio" name="example1" />
                                      <label
                                        style={{ color: "#242424 !important" }}
                                      >
                                        Paypal
                                      </label>
                                    </div>
                                    <div className="form-group">
                                      <label className="label15">
                                        Email Address*
                                      </label>
                                      <input
                                        type="email"
                                        className="job-input"
                                        placeholder="Enter Email Address"
                                      />
                                    </div>
                                    <button className="withdraw_btn">
                                      CONTINUE
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="transaction">
                        <div className="view_chart">
                          <div className="view_chart_header">
                            <h4>Transactions</h4>
                          </div>
                          <div className="transaction_body">
                            <div className="table-responsive-md">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    <th scope="col">Users</th>
                                    <th scope="col">Projects</th>
                                    <th scope="col">Payment</th>
                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">
                                      <div className="user_dt_trans">
                                        <div className="aadd14">
                                          Johnson Doe
                                        </div>
                                        <p>
                                          ID No.<a href="#">123456</a>
                                        </p>
                                      </div>
                                    </th>
                                    <td>
                                      <div className="user_dt_trans">
                                        <div className="aadd14">
                                          Travel Wordpress Theme
                                        </div>
                                        <p>
                                          Date :<span>20 oct 2019</span>
                                        </p>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="user_dt_trans">
                                        <div className="aadd14">Paypal</div>
                                        <p>$800</p>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="trans_badge">Pending</div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <div className="user_dt_trans">
                                        <div className="aadd14">
                                          Rock William
                                        </div>
                                        <p>
                                          ID No.<a href="#">123450</a>
                                        </p>
                                      </div>
                                    </th>
                                    <td>
                                      <div className="user_dt_trans">
                                        <div className="aadd14">
                                          Real Estate Psd Template
                                        </div>
                                        <p>
                                          Date :<span>18 oct 2019</span>
                                        </p>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="user_dt_trans">
                                        <div className="aadd14">
                                          Credit Card
                                        </div>
                                        <p>$1200</p>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="trans_badge">
                                        Received
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <div className="user_dt_trans">
                                        <div className="aadd14">
                                          Jassica Wiliam
                                        </div>
                                        <p>
                                          ID No.<a href="#">123445</a>
                                        </p>
                                      </div>
                                    </th>
                                    <td>
                                      <div className="user_dt_trans">
                                        <div className="aadd14">
                                          Chatting Android App
                                        </div>
                                        <p>
                                          Date :<span>16 oct 2019</span>
                                        </p>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="user_dt_trans">
                                        <div className="aadd14">
                                          Credit Card
                                        </div>
                                        <p>$2500</p>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="trans_badge">Send</div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <div className="user_dt_trans">
                                        <div className="aadd14">
                                          Albert Smith
                                        </div>
                                        <p>
                                          ID No.<a href="#">123405</a>
                                        </p>
                                      </div>
                                    </th>
                                    <td>
                                      <div className="user_dt_trans">
                                        <div className="aadd14">
                                          Hotel Booking Html Template
                                        </div>
                                        <p>
                                          Date :<span>15 oct 2019</span>
                                        </p>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="user_dt_trans">
                                        <div className="aadd14">Paypal</div>
                                        <p>$2500</p>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="trans_badge">Send</div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
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

export default MyFreelancerPayments;
