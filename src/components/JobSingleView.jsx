import Footer from "./Footer";
import NavBar from "./NavBar";

function JobSingleView() {
  return (
    <div>

      <title>Jobby - Job Single View</title>

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
      {/* Apply Job Model Start */}
      <div className="apply_job_form">
        <div
          className="modal fade"
          id="applyjobModal"
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog modal-jb" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Apply Job Now
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
                  <h3>Attach File With CV C Apply by Jobby Profile</h3>
                  <div className="form_inputs">
                    <div className="form-group">
                      <input
                        type="text"
                        className="job-input"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="job-input"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="file-form">
                      <input type="file" id="file" />
                      <label htmlFor="file">Change Image</label>
                      <p>Upload your cv / resume file. Max file size : 3MB</p>
                    </div>
                    <div className="ui checkbox apply_check">
                      <input type="checkbox" />
                      <label style={{ color: "#242424 !important" }}>
                        Apply by Jobby Profile.
                      </label>
                    </div>
                    <div className="apply_btn150">
                      <button className="apply_job50" type="button">
                        APPLY NOW
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
      {/* Apply Job Model End */}
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
                <li className="breadcrumb-item">
                  <a href="browse_jobs.html">Browser Jobs</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Job Single View
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
            <div className="col-lg-9 col-md-8">
              <div className="view_details">
                <ul>
                  <li>
                    <div className="vw_items">
                      <i className="fas fa-eye" />
                      <div className="vw_item_text">
                        <h6>Views</h6>
                        <span>135</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="vw_items">
                      <i className="fas fa-users" />
                      <div className="vw_item_text">
                        <h6>Applicants</h6>
                        <span>4</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="vw_items">
                      <i className="fas fa-briefcase" />
                      <div className="vw_item_text">
                        <h6>Job Type</h6>
                        <span>Full Time</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="vw_items">
                      <i className="far fa-money-bill-alt" />
                      <div className="vw_item_text">
                        <h6>Salary</h6>
                        <span>$599 - Manual</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="vw_items">
                      <i className="far fa-clock" />
                      <div className="vw_item_text">
                        <h6>Post Date</h6>
                        <span>4 days ago</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="job-item ptrl_2 mt-20">
                <div className="job-top-dt">
                  <div className="job-left-dt">
                    <img src="images/homepage/latest-jobs/img-1.jpg" alt="" />
                    <div className="job-ut-dts">
                      <a href="#">
                        <h4>John Doe</h4>
                      </a>
                      <span>
                        <i className="fas fa-map-marker-alt" /> New York City
                      </span>
                    </div>
                  </div>
                  <div className="job-right-dt">
                    <div className="job-price">$599</div>
                    <div className="job-fp">Full Time</div>
                  </div>
                </div>
                <div className="job-des-dt">
                  <h4>UX Designer</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas ornare nisi id mi pulvinar tristique. Donec id erat
                    condimentum, posuere nibh a, convallis odio. Aenean et
                    tellus risus. Morbi vitae mauris sit amet metus porta
                    varius. Suspendisse potenti. Cras felis ipsum, tristique sit
                    amet tortor at, convallis finibus velit. Aenean eget sapien
                    at quam suscipit posuere. Phasellus gravida eleifend leo, ac
                    dictum elit tincidunt vitae. Aliquam enim nulla, efficitur a
                    augue ut, ultrices convallis ipsum. Integer id ex hendrerit,
                    dapibus lectus condimentum, tincidunt lorem. Ut eleifend
                    varius posuere. Sed non pharetra odio. Phasellus rhoncus
                    egestas dui, eget interdum tellus volutpat in. Phasellus
                    laoreet quam id euismod tristique.
                  </p>
                  <div className="job-skills">
                    <a href="#">UX</a>
                    <a href="#">UI</a>
                    <a href="#">Photoshop</a>
                    <a href="#">Illustrator</a>
                    <a href="#">Corel Draw</a>
                    <a href="#">Graphic Design</a>
                  </div>
                </div>
                <div className="job_dts">
                  <h4>Requirements</h4>
                  <ul>
                    <li>
                      <div className="job_dt_1">
                        <h6>Availability :</h6>
                        <span>Full Time</span>
                      </div>
                    </li>
                    <li>
                      <div className="job_dt_1">
                        <h6>Experience Level :</h6>
                        <span>Intermediate (3 year - 5 year)</span>
                      </div>
                    </li>
                    <li>
                      <div className="job_dt_1">
                        <h6>Languages :</h6>
                        <span>English</span>
                      </div>
                    </li>
                    <li>
                      <div className="job_dt_1">
                        <h6>Qualification </h6>
                        <span>Bachelor Degree</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <button
                  className="apply_job"
                  type="button"
                  data-toggle="modal"
                  data-target="#applyjobModal"
                >
                  APPLY NOW
                </button>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mainpage">
              <button
                className="apply_job_rt mtp_30"
                type="button"
                data-toggle="modal"
                data-target="#applyjobModal"
              >
                APPLY NOW
              </button>
              <div className="bookmark_rt">
                <button className="bookmark1 mr-3" title="bookmark">
                  <i className="fas fa-heart" />
                </button>
                BOOKMARK
              </div>
              <ul className="social-links">
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
            <div className="col-12">
              <div className="find-lts-jobs">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-12">
                      <div className="main-heading">
                        <h2>Similar Jobs</h2>
                        <div className="line-shape1">
                          <img src="images/line.svg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-12">
                      <div className="lts-jobs-slider">
                        <div className="owl-carousel jobs-owl owl-theme">
                          <div className="item">
                            <div className="job-item">
                              <div className="job-top-dt">
                                <div className="job-left-dt">
                                  <img
                                    src="images/homepage/latest-jobs/img-1.jpg"
                                    alt=""
                                  />
                                  <div className="job-ut-dts">
                                    <a href="#">
                                      <h4>John Doe</h4>
                                    </a>
                                    <span>
                                      <i className="fas fa-map-marker-alt" />{" "}
                                      New York City
                                    </span>
                                  </div>
                                </div>
                                <div className="job-right-dt">
                                  <div className="job-price">$599</div>
                                  <div className="job-fp">Full Time</div>
                                </div>
                              </div>
                              <div className="job-des-dt">
                                <h4>UX Designer</h4>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Etiam cursus pulvinar dolor
                                  nec...
                                </p>
                                <div className="job-skills">
                                  <a href="#">UX</a>
                                  <a href="#">UI</a>
                                  <a href="#">Photoshop</a>
                                  <a href="#" className="more-skills">
                                    +4
                                  </a>
                                </div>
                              </div>
                              <div className="job-buttons">
                                <ul className="link-btn">
                                  <li>
                                    <a
                                      href="#"
                                      className="link-j1"
                                      title="Apply Now"
                                    >
                                      APPLY NOW
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="link-j1"
                                      title="View Job"
                                    >
                                      View Job
                                    </a>
                                  </li>
                                  <li className="bkd-pm">
                                    <button
                                      className="bookmark1"
                                      title="bookmark"
                                    >
                                      <i className="fas fa-heart" />
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="item">
                            <div className="job-item">
                              <div className="job-top-dt">
                                <div className="job-left-dt">
                                  <img
                                    src="images/homepage/latest-jobs/img-2.jpg"
                                    alt=""
                                  />
                                  <div className="job-ut-dts">
                                    <a href="#">
                                      <h4>Johnson Smith</h4>
                                    </a>
                                    <span>
                                      <i className="fas fa-map-marker-alt" />{" "}
                                      India
                                    </span>
                                  </div>
                                </div>
                                <div className="job-right-dt">
                                  <div className="job-price">$50/hr</div>
                                  <div className="job-fp job-prt">
                                    Part Time
                                  </div>
                                </div>
                              </div>
                              <div className="job-des-dt">
                                <h4>PHP Developer</h4>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Etiam cursus pulvinar dolor
                                  nec...
                                </p>
                                <div className="job-skills">
                                  <a href="#">Php</a>
                                  <a href="#">Sql</a>
                                  <a href="#">Javascript</a>
                                  <a href="#" className="more-skills">
                                    +4
                                  </a>
                                </div>
                              </div>
                              <div className="job-buttons">
                                <ul className="link-btn">
                                  <li>
                                    <a
                                      href="#"
                                      className="link-j1"
                                      title="Apply Now"
                                    >
                                      APPLY NOW
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="link-j1"
                                      title="View Job"
                                    >
                                      View Job
                                    </a>
                                  </li>
                                  <li className="bkd-pm">
                                    <button
                                      className="bookmark1"
                                      title="bookmark"
                                    >
                                      <i className="fas fa-heart" />
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="item">
                            <div className="job-item">
                              <div className="job-top-dt">
                                <div className="job-left-dt">
                                  <img
                                    src="images/homepage/latest-jobs/img-3.jpg"
                                    alt=""
                                  />
                                  <div className="job-ut-dts">
                                    <a href="#">
                                      <h4>Envato</h4>
                                    </a>
                                    <span>
                                      <i className="fas fa-map-marker-alt" />{" "}
                                      Australia
                                    </span>
                                  </div>
                                </div>
                                <div className="job-right-dt">
                                  <div className="job-price">$900</div>
                                  <div className="job-fp">Full Time</div>
                                </div>
                              </div>
                              <div className="job-des-dt">
                                <h4>Wordpress Developer</h4>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Etiam cursus pulvinar dolor
                                  nec...
                                </p>
                                <div className="job-skills">
                                  <a href="#">Html</a>
                                  <a href="#">Css</a>
                                  <a href="#">Wordpress</a>
                                  <a href="#" className="more-skills">
                                    +4
                                  </a>
                                </div>
                              </div>
                              <div className="job-buttons">
                                <ul className="link-btn">
                                  <li>
                                    <a
                                      href="#"
                                      className="link-j1"
                                      title="Apply Now"
                                    >
                                      APPLY NOW
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="link-j1"
                                      title="View Job"
                                    >
                                      View Job
                                    </a>
                                  </li>
                                  <li className="bkd-pm">
                                    <button
                                      className="bookmark1"
                                      title="bookmark"
                                    >
                                      <i className="fas fa-heart" />
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="item">
                            <div className="job-item">
                              <div className="job-top-dt">
                                <div className="job-left-dt">
                                  <img
                                    src="images/homepage/latest-jobs/img-4.jpg"
                                    alt=""
                                  />
                                  <div className="job-ut-dts">
                                    <a href="#">
                                      <h4>Joy Smith</h4>
                                    </a>
                                    <span>
                                      <i className="fas fa-map-marker-alt" />{" "}
                                      India
                                    </span>
                                  </div>
                                </div>
                                <div className="job-right-dt">
                                  <div className="job-price">$500</div>
                                  <div className="job-fp">Full Time</div>
                                </div>
                              </div>
                              <div className="job-des-dt">
                                <h4>Graphic Designer</h4>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Etiam cursus pulvinar dolor
                                  nec...
                                </p>
                                <div className="job-skills">
                                  <a href="#">Illistrator</a>
                                  <a href="#">Photoshop</a>
                                  <a href="#" className="more-skills">
                                    +4
                                  </a>
                                </div>
                              </div>
                              <div className="job-buttons">
                                <ul className="link-btn">
                                  <li>
                                    <a
                                      href="#"
                                      className="link-j1"
                                      title="Apply Now"
                                    >
                                      APPLY NOW
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="link-j1"
                                      title="View Job"
                                    >
                                      View Job
                                    </a>
                                  </li>
                                  <li className="bkd-pm">
                                    <button
                                      className="bookmark1"
                                      title="bookmark"
                                    >
                                      <i className="fas fa-heart" />
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="item">
                            <div className="job-item">
                              <div className="job-top-dt">
                                <div className="job-left-dt">
                                  <img
                                    src="images/homepage/latest-jobs/img-5.jpg"
                                    alt=""
                                  />
                                  <div className="job-ut-dts">
                                    <a href="#">
                                      <h4>Jassica William</h4>
                                    </a>
                                    <span>
                                      <i className="fas fa-map-marker-alt" />{" "}
                                      Australia
                                    </span>
                                  </div>
                                </div>
                                <div className="job-right-dt">
                                  <div className="job-price">$300</div>
                                  <div className="job-fp">Full Time</div>
                                </div>
                              </div>
                              <div className="job-des-dt">
                                <h4>Delivery Boy</h4>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Etiam cursus pulvinar dolor
                                  nec...
                                </p>
                                <div className="job-skills">
                                  <a href="#">Delivery</a>
                                  <a href="#">Local</a>
                                  <a href="#">Graduation</a>
                                </div>
                              </div>
                              <div className="job-buttons">
                                <ul className="link-btn">
                                  <li>
                                    <a
                                      href="#"
                                      className="link-j1"
                                      title="Apply Now"
                                    >
                                      APPLY NOW
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="link-j1"
                                      title="View Job"
                                    >
                                      View Job
                                    </a>
                                  </li>
                                  <li className="bkd-pm">
                                    <button
                                      className="bookmark1"
                                      title="bookmark"
                                    >
                                      <i className="fas fa-heart" />
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="item">
                            <div className="job-item">
                              <div className="job-top-dt">
                                <div className="job-left-dt">
                                  <img
                                    src="images/homepage/latest-jobs/img-6.jpg"
                                    alt=""
                                  />
                                  <div className="job-ut-dts">
                                    <a href="#">
                                      <h4>Gambolthemes</h4>
                                    </a>
                                    <span>
                                      <i className="fas fa-map-marker-alt" />{" "}
                                      India
                                    </span>
                                  </div>
                                </div>
                                <div className="job-right-dt">
                                  <div className="job-price">$60/hr</div>
                                  <div className="job-fp">Full Time</div>
                                </div>
                              </div>
                              <div className="job-des-dt">
                                <h4>Front End Developer</h4>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Etiam cursus pulvinar dolor
                                  nec...
                                </p>
                                <div className="job-skills">
                                  <a href="#">Html</a>
                                  <a href="#">Css</a>
                                  <a href="#">Boostrap</a>
                                  <a href="#" className="more-skills">
                                    +4
                                  </a>
                                </div>
                              </div>
                              <div className="job-buttons">
                                <ul className="link-btn">
                                  <li>
                                    <a
                                      href="#"
                                      className="link-j1"
                                      title="Apply Now"
                                    >
                                      APPLY NOW
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="link-j1"
                                      title="View Job"
                                    >
                                      View Job
                                    </a>
                                  </li>
                                  <li className="bkd-pm">
                                    <button
                                      className="bookmark1"
                                      title="bookmark"
                                    >
                                      <i className="fas fa-heart" />
                                    </button>
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
    </div>
  );
}

export default JobSingleView;
