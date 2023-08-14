import { Helmet } from "react-helmet";
import Footer from "./Footer";
import NavBar from "./NavBar";

function OtherFreelancerReviews() {
  return (
    <div>
      <Helmet>
        <title>Jobby - Other Company Profile</title>
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
      {/* Add Review Start */}
      <div className="apply_job_form">
        <div
          className="modal fade"
          id="addreviewModal"
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog modal-jb" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Review
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
                  <h3>Write Something About Client</h3>
                  <div className="form_inputs">
                    <div className="form-group">
                      <label className="label15">Rating*</label>
                      <div className="ui fluid search selection dropdown skills-search">
                        <input name="tags" type="hidden" defaultValue />
                        <i className="dropdown icon" />
                        <input
                          className="search"
                          autoComplete="off"
                          tabIndex={0}
                        />
                        <span className="sizer" style={{}} />
                        <div className="default text">Select Stars</div>
                        <div className="menu transition hidden" tabIndex={-1}>
                          <div className="item selected" data-value="review1">
                            5 Stars
                          </div>
                          <div className="item selected" data-value="review1">
                            4 Stars
                          </div>
                          <div className="item selected" data-value="review1">
                            3 Stars
                          </div>
                          <div className="item selected" data-value="review1">
                            2 Stars
                          </div>
                          <div className="item selected" data-value="review1">
                            1 Star
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="note-input"
                        placeholder="Type Text"
                        defaultValue={""}
                      />
                    </div>
                    <div className="apply_btn150">
                      <button className="apply_job50" type="button">
                        ADD REVIEW
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
      {/* Add Review End */}
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
                      className="nav-link"
                      href="other_freelancer_portfolio.html"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="other_freelancer_reviews.html"
                    >
                      Reviews
                    </a>
                  </li>
                </ul>
              </div>
              <div className="view_chart">
                <div className="view_chart_header">
                  <h4 className="mt-1">All Reviews</h4>
                  <div className="review_right">
                    <button
                      className="add_review_btn"
                      type="button"
                      data-toggle="modal"
                      data-target="#addreviewModal"
                    >
                      Add Review
                    </button>
                  </div>
                </div>
                <div className="job_bid_body">
                  <ul className="all_applied_jobs jobs_bookmarks">
                    <li>
                      <div className="applied_candidates_item">
                        <div className="row">
                          <div className="col-xl-7">
                            <div className="applied_candidates_dt">
                              <div className="candi_img">
                                <img
                                  src="images/homepage/candidates/img-2.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="candi_dt">
                                <a href="#">Johnson Dua</a>
                                <div className="candi_cate">UX Designer</div>
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
                          </div>
                        </div>
                        <div className="btn_link24 review_user">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aenean elementum, nibh et aliquam
                            pellentesque, risus libero aliquet dolor, quis
                            hendrerit nisi augue et purus.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="applied_candidates_item">
                        <div className="row">
                          <div className="col-xl-7">
                            <div className="applied_candidates_dt">
                              <div className="candi_img">
                                <img
                                  src="images/homepage/candidates/img-5.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="candi_dt">
                                <a href="#">Jassica William</a>
                                <div className="candi_cate">Freelancer</div>
                                <div className="rating_candi">
                                  Rating
                                  <div className="star">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <span>5.0</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="btn_link24 review_user">
                          <p>
                            Awesome work, definitely will rehire. Poject was
                            completed not only with the requirements, but on
                            time, within our small budget.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="applied_candidates_item">
                        <div className="row">
                          <div className="col-xl-7">
                            <div className="applied_candidates_dt">
                              <div className="candi_img">
                                <img
                                  src="images/homepage/candidates/img-3.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="candi_dt">
                                <a href="#">Joginder Singh</a>
                                <div className="candi_cate">Employer</div>
                                <div className="rating_candi">
                                  Rating
                                  <div className="star">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <span>4.5</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="btn_link24 review_user">
                          <p>
                            Fusce sodales consectetur lacus eu vestibulum. Orci
                            varius natoque penatibus et magnis dis parturient
                            montes, nascetur ridiculus mus. Aenean consequat
                            velit aliquet tortor scelerisque
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
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

export default OtherFreelancerReviews;
