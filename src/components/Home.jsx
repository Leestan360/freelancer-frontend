import Footer from "./Footer";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div>
      <title>Jobby - Home</title>

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
      {/* Body Start */}
      <main className="body-section">
        <div className="Search-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-3 col-12">
                <div className="form-group mb-0">
                  <input
                    className="search-1"
                    type="text"
                    placeholder="Keywords (e.g. Job Title, Position...)"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-12">
                <div className="form-group mb-0 mt-15">
                  <input
                    className="search-1"
                    type="text"
                    placeholder="Location (e.g. City, Country...)"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-12 mt-15">
                <div className="form-group mb-0">
                  <input
                    className="search-1"
                    type="text"
                    placeholder="Industry (e.g. Design, Art...)"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-12 mt-15">
                <button className="srch-btn" type="submit">
                  Search Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-slider">
          <div className="owl-carousel bnnr-owl owl-theme">
            <div className="item">
              <div className="featured-cities">
                <a href="#">
                  <div className="feature-img">
                    <img src="images/homepage/owl-bnnr/img-1.jpg" alt="" />
                    <div className="overly-bg" />
                  </div>
                </a>
                <a href="#">
                  <div className="featured-text">
                    <div className="city-title">California</div>
                    <ins>125 Jobs</ins>
                  </div>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="featured-cities">
                <a href="#">
                  <div className="feature-img">
                    <img src="images/homepage/owl-bnnr/img-2.jpg" alt="" />
                    <div className="overly-bg" />
                  </div>
                </a>
                <a href="#">
                  <div className="featured-text">
                    <div className="city-title">Austin</div>
                    <ins>200 Jobs</ins>
                  </div>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="featured-cities">
                <a href="#">
                  <div className="feature-img">
                    <img src="images/homepage/owl-bnnr/img-3.jpg" alt="" />
                    <div className="overly-bg" />
                  </div>
                </a>
                <a href="#">
                  <div className="featured-text">
                    <div className="city-title">Los Angeles</div>
                    <ins>25 Jobs</ins>
                  </div>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="featured-cities">
                <a href="#">
                  <div className="feature-img">
                    <img src="images/homepage/owl-bnnr/img-4.jpg" alt="" />
                    <div className="overly-bg" />
                  </div>
                </a>
                <a href="#">
                  <div className="featured-text">
                    <div className="city-title">San francisco</div>
                    <ins>12 Jobs</ins>
                  </div>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="featured-cities">
                <a href="#">
                  <div className="feature-img">
                    <img src="images/homepage/owl-bnnr/img-5.jpg" alt="" />
                    <div className="overly-bg" />
                  </div>
                </a>
                <a href="#">
                  <div className="featured-text">
                    <div className="city-title">Tulsa</div>
                    <ins>190 Jobs</ins>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="achivements">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="achive-text">3M Registered Members</div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="achive-text">786k Jobs Found</div>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                <div className="achive-text">1.2K Best Companies</div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <ul className="post-buttons">
                  <li>
                    <button
                      className="add-job"
                      onclick="window.location.href = 'post_a_job.html';"
                    >
                      Post a Job
                    </button>
                  </li>
                  <li>
                    <button
                      className="add-project"
                      onclick="window.location.href = 'post_a_project.html';"
                    >
                      Post a Work
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="we-offers">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="main-heading">
                  <h2>What We Offers</h2>
                  <span>Offering the Best Deal</span>
                  <div className="line-shape1">
                    <img src="images/line.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="offer-step">
                  <div className="offer-text-dt">
                    <h4>Searching the Best Jobs</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur dictum commodo mi.
                    </p>
                    <a href="#">
                      Read More
                      <i className="fas fa-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="offer-step">
                  <div className="offer-text-dt">
                    <h4>Apply for a Good Job</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur dictum commodo mi.
                    </p>
                    <a href="#">
                      Read More
                      <i className="fas fa-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="offer-step">
                  <div className="offer-text-dt">
                    <h4>More Quality Hires</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur dictum commodo mi.
                    </p>
                    <a href="#">
                      Read More
                      <i className="fas fa-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="offer-step">
                  <div className="offer-text-dt">
                    <h4>Choose Working Hours</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur dictum commodo mi.
                    </p>
                    <a href="#">
                      Read More
                      <i className="fas fa-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="find-lts-jobs">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="main-heading">
                  <h2>Find Latest Jobs</h2>
                  <span>Your Job for a Future</span>
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
                                <i className="fas fa-map-marker-alt" /> New York
                                City
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam cursus pulvinar dolor nec...
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
                              <a href="#" className="link-j1" title="Apply Now">
                                APPLY NOW
                              </a>
                            </li>
                            <li>
                              <a
                                href="job_single_view.html"
                                className="link-j1"
                                title="View Job"
                              >
                                View Job
                              </a>
                            </li>
                            <li className="bkd-pm">
                              <button className="bookmark1" title="bookmark">
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
                                <i className="fas fa-map-marker-alt" /> India
                              </span>
                            </div>
                          </div>
                          <div className="job-right-dt">
                            <div className="job-price">$50/hr</div>
                            <div className="job-fp job-prt">Part Time</div>
                          </div>
                        </div>
                        <div className="job-des-dt">
                          <h4>PHP Developer</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam cursus pulvinar dolor nec...
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
                              <a href="#" className="link-j1" title="Apply Now">
                                APPLY NOW
                              </a>
                            </li>
                            <li>
                              <a
                                href="job_single_view.html"
                                className="link-j1"
                                title="View Job"
                              >
                                View Job
                              </a>
                            </li>
                            <li className="bkd-pm">
                              <button className="bookmark1" title="bookmark">
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam cursus pulvinar dolor nec...
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
                              <a href="#" className="link-j1" title="Apply Now">
                                APPLY NOW
                              </a>
                            </li>
                            <li>
                              <a
                                href="job_single_view.html"
                                className="link-j1"
                                title="View Job"
                              >
                                View Job
                              </a>
                            </li>
                            <li className="bkd-pm">
                              <button className="bookmark1" title="bookmark">
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
                                <i className="fas fa-map-marker-alt" /> India
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam cursus pulvinar dolor nec...
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
                              <a href="#" className="link-j1" title="Apply Now">
                                APPLY NOW
                              </a>
                            </li>
                            <li>
                              <a
                                href="job_single_view.html"
                                className="link-j1"
                                title="View Job"
                              >
                                View Job
                              </a>
                            </li>
                            <li className="bkd-pm">
                              <button className="bookmark1" title="bookmark">
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
                          <h4>Data Science &amp; Analytics</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam cursus pulvinar dolor nec...
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
                              <a href="#" className="link-j1" title="Apply Now">
                                APPLY NOW
                              </a>
                            </li>
                            <li>
                              <a
                                href="job_single_view.html"
                                className="link-j1"
                                title="View Job"
                              >
                                View Job
                              </a>
                            </li>
                            <li className="bkd-pm">
                              <button className="bookmark1" title="bookmark">
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
                                <i className="fas fa-map-marker-alt" /> India
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam cursus pulvinar dolor nec...
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
                              <a href="#" className="link-j1" title="Apply Now">
                                APPLY NOW
                              </a>
                            </li>
                            <li>
                              <a
                                href="job_single_view.html"
                                className="link-j1"
                                title="View Job"
                              >
                                View Job
                              </a>
                            </li>
                            <li className="bkd-pm">
                              <button className="bookmark1" title="bookmark">
                                <i className="fas fa-heart" />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      className="view-links"
                      onclick="window.location.href = '#';"
                    >
                      BROWSE ALL JOBS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="all-categories">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="main-heading">
                  <h2>Choose Category</h2>
                  <span>Find quality talent or agencies</span>
                  <div className="line-shape1">
                    <img src="images/line.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-12">
                <div className="job-categories mt-30">
                  <div className="row no-gutters">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <div className="p-category">
                        <a href="#" title>
                          <img
                            src="images/homepage/categories/icon-5.svg"
                            alt=""
                          />
                          <span>Web, Mobile &amp; Software Dev</span>
                          <p>150 Jobs</p>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <div className="p-category">
                        <a href="#" title>
                          <img
                            src="images/homepage/categories/icon-2.svg"
                            alt=""
                          />
                          <span>Data Science &amp; Analytics</span>
                          <p>120 Jobs</p>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <div className="p-category">
                        <a href="#" title>
                          <img
                            src="images/homepage/categories/icon-3.svg"
                            alt=""
                          />
                          <span>Admin Support</span>
                          <p>290 Jobs</p>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <div className="p-category">
                        <a href="#" title>
                          <img
                            src="images/homepage/categories/icon-4.svg"
                            alt=""
                          />
                          <span>Design &amp; Creative</span>
                          <p>250 Jobs</p>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <div className="p-category">
                        <a href="#" title>
                          <img
                            src="images/homepage/categories/icon-11.svg"
                            alt=""
                          />
                          <span>Accounting &amp; Consulting</span>
                          <p>350 Jobs</p>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <div className="p-category">
                        <a href="#" title>
                          <img
                            src="images/homepage/categories/icon-13.svg"
                            alt=""
                          />
                          <span>Writing</span>
                          <p>90 Jobs</p>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <div className="p-category">
                        <a href="#" title>
                          <img
                            src="images/homepage/categories/icon-14.svg"
                            alt=""
                          />
                          <span>Legal</span>
                          <p>250 Jobs</p>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <div className="p-category">
                        <a href="#" title>
                          <img
                            src="images/homepage/categories/icon-15.svg"
                            alt=""
                          />
                          <span>IT &amp; Networking</span>
                          <p>150 Jobs</p>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <div className="p-category">
                        <a href="#" title>
                          <img
                            src="images/homepage/categories/icon-9.svg"
                            alt=""
                          />
                          <span>Sales &amp; Marketing</span>
                          <p>110 Jobs</p>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <div className="p-category">
                        <a href="#" title>
                          <img
                            src="images/homepage/categories/icon-16.svg"
                            alt=""
                          />
                          <span>Customer Service</span>
                          <p>310 Jobs</p>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <div className="p-category">
                        <a href="#" title>
                          <img
                            src="images/homepage/categories/icon-17.svg"
                            alt=""
                          />
                          <span>Translation</span>
                          <p>410 Jobs</p>
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <div className="p-category">
                        <a href="#" title>
                          <img
                            src="images/homepage/categories/icon-7.svg"
                            alt=""
                          />
                          <span>Engineering &amp; Architecture</span>
                          <p>190 Jobs</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="featured-candidates">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="main-heading">
                  <h2>Featured Candidates</h2>
                  <span>
                    Discover, Intelligent, Experienced, Professional,
                    Trustworthy, Freelancer &amp; Full Time Candidates.
                  </span>
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
                        <div className="job-top-dt1 text-center">
                          <div className="job-center-dt">
                            <img
                              src="images/homepage/candidates/img-1.jpg"
                              alt=""
                            />
                            <div className="job-urs-dts">
                              <a href="#">
                                <h4>John Doe</h4>
                              </a>
                              <span>UX Designer</span>
                              <div className="avialable">
                                Available Full Time
                              </div>
                            </div>
                          </div>
                          <div className="job-price hire-price">$50/hr</div>
                        </div>
                        <div className="rating-location">
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
                                <i className="fas fa-map-marker-alt" /> New York
                                City
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="job-buttons">
                          <ul className="link-btn">
                            <li>
                              <a
                                href="other_freelancer_profile.html"
                                className="link-j1"
                                title="View Profile"
                              >
                                View Profile
                              </a>
                            </li>
                            <li>
                              <a href="#" className="link-j1" title="Hire Me">
                                Hire Me
                              </a>
                            </li>
                            <li className="bkd-pm">
                              <button className="bookmark1" title="bookmark">
                                <i className="fas fa-heart" />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="job-item">
                        <div className="job-top-dt1 text-center">
                          <div className="job-center-dt">
                            <img
                              src="images/homepage/candidates/img-2.jpg"
                              alt=""
                            />
                            <div className="job-urs-dts">
                              <a href="#">
                                <h4>Albert Dua</h4>
                              </a>
                              <span>Wordpress Developer</span>
                              <div className="avialable">
                                Available Full Time
                              </div>
                            </div>
                          </div>
                          <div className="job-price hire-price">$50/hr</div>
                        </div>
                        <div className="rating-location">
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
                                Australia
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="job-buttons">
                          <ul className="link-btn">
                            <li>
                              <a
                                href="other_freelancer_profile.html"
                                className="link-j1"
                                title="View Profile"
                              >
                                View Profile
                              </a>
                            </li>
                            <li>
                              <a href="#" className="link-j1" title="Hire Me">
                                Hire Me
                              </a>
                            </li>
                            <li className="bkd-pm">
                              <button className="bookmark1" title="bookmark">
                                <i className="fas fa-heart" />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="job-item">
                        <div className="job-top-dt1 text-center">
                          <div className="job-center-dt">
                            <img
                              src="images/homepage/candidates/img-3.jpg"
                              alt=""
                            />
                            <div className="job-urs-dts">
                              <a href="#">
                                <h4>Rock William</h4>
                              </a>
                              <span>Php Developer</span>
                              <div className="avialable">
                                Available Full Time
                              </div>
                            </div>
                          </div>
                          <div className="job-price hire-price">$60/hr</div>
                        </div>
                        <div className="rating-location">
                          <div className="left-rating">
                            <div className="rtitle">Rating</div>
                            <div className="star">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <span>5.0</span>
                            </div>
                          </div>
                          <div className="right-location">
                            <div className="text-left">
                              <div className="rtitle">Location</div>
                              <span>
                                <i className="fas fa-map-marker-alt" /> India
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="job-buttons">
                          <ul className="link-btn">
                            <li>
                              <a
                                href="other_freelancer_profile.html"
                                className="link-j1"
                                title="View Profile"
                              >
                                View Profile
                              </a>
                            </li>
                            <li>
                              <a href="#" className="link-j1" title="Hire Me">
                                Hire Me
                              </a>
                            </li>
                            <li className="bkd-pm">
                              <button className="bookmark1" title="bookmark">
                                <i className="fas fa-heart" />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="job-item">
                        <div className="job-top-dt1 text-center">
                          <div className="job-center-dt">
                            <img
                              src="images/homepage/candidates/img-4.jpg"
                              alt=""
                            />
                            <div className="job-urs-dts">
                              <a href="#">
                                <h4>Joy Smith</h4>
                              </a>
                              <span>Android Developer</span>
                              <div className="avialable">
                                Available Full Time
                              </div>
                            </div>
                          </div>
                          <div className="job-price hire-price">$60/hr</div>
                        </div>
                        <div className="rating-location">
                          <div className="left-rating">
                            <div className="rtitle">Rating</div>
                            <div className="star">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <span>5.0</span>
                            </div>
                          </div>
                          <div className="right-location">
                            <div className="text-left">
                              <div className="rtitle">Location</div>
                              <span>
                                <i className="fas fa-map-marker-alt" /> India
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="job-buttons">
                          <ul className="link-btn">
                            <li>
                              <a
                                href="other_freelancer_profile.html"
                                className="link-j1"
                                title="View Profile"
                              >
                                View Profile
                              </a>
                            </li>
                            <li>
                              <a href="#" className="link-j1" title="Hire Me">
                                Hire Me
                              </a>
                            </li>
                            <li className="bkd-pm">
                              <button className="bookmark1" title="bookmark">
                                <i className="fas fa-heart" />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="job-item">
                        <div className="job-top-dt1 text-center">
                          <div className="job-center-dt">
                            <img
                              src="images/homepage/candidates/img-5.jpg"
                              alt=""
                            />
                            <div className="job-urs-dts">
                              <a href="#">
                                <h4>Sanaya Sharma</h4>
                              </a>
                              <span>Accountant manager</span>
                              <div className="avialable">
                                Available Full Time
                              </div>
                            </div>
                          </div>
                          <div className="job-price hire-price">$30/hr</div>
                        </div>
                        <div className="rating-location">
                          <div className="left-rating">
                            <div className="rtitle">Rating</div>
                            <div className="star">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <span>4.0</span>
                            </div>
                          </div>
                          <div className="right-location">
                            <div className="text-left">
                              <div className="rtitle">Location</div>
                              <span>
                                <i className="fas fa-map-marker-alt" /> India
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="job-buttons">
                          <ul className="link-btn">
                            <li>
                              <a
                                href="other_freelancer_profile.html"
                                className="link-j1"
                                title="View Profile"
                              >
                                View Profile
                              </a>
                            </li>
                            <li>
                              <a href="#" className="link-j1" title="Hire Me">
                                Hire Me
                              </a>
                            </li>
                            <li className="bkd-pm">
                              <button className="bookmark1" title="bookmark">
                                <i className="fas fa-heart" />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="job-item">
                        <div className="job-top-dt1 text-center">
                          <div className="job-center-dt">
                            <img
                              src="images/homepage/candidates/img-6.jpg"
                              alt=""
                            />
                            <div className="job-urs-dts">
                              <a href="#">
                                <h4>Jass Singh</h4>
                              </a>
                              <span>Front End Developer</span>
                              <div className="avialable">
                                Available Full Time
                              </div>
                            </div>
                          </div>
                          <div className="job-price hire-price">$25/hr</div>
                        </div>
                        <div className="rating-location">
                          <div className="left-rating">
                            <div className="rtitle">Rating</div>
                            <div className="star">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <span>5.0</span>
                            </div>
                          </div>
                          <div className="right-location">
                            <div className="text-left">
                              <div className="rtitle">Location</div>
                              <span>
                                <i className="fas fa-map-marker-alt" /> India
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="job-buttons">
                          <ul className="link-btn">
                            <li>
                              <a
                                href="other_freelancer_profile.html"
                                className="link-j1"
                                title="View Profile"
                              >
                                View Profile
                              </a>
                            </li>
                            <li>
                              <a href="#" className="link-j1" title="Hire Me">
                                Hire Me
                              </a>
                            </li>
                            <li className="bkd-pm">
                              <button className="bookmark1" title="bookmark">
                                <i className="fas fa-heart" />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      className="view-links"
                      onclick="window.location.href = '#';"
                    >
                      SEE ALL CANDIDATES
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="all-categories">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="main-heading text-left">
                  <h2>Post Jobs</h2>
                  <span>Quick and easy way to advertise.</span>
                  <div className="line-shape1">
                    <img src="images/line.svg" alt="" />
                  </div>
                </div>
                <div className="text152">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque eu purus et diam blandit vehicula sit amet sed
                    metus. Fusce condimentum non neque at fringilla.
                  </p>
                </div>
                <div className="text-steps">
                  <div className="text-step1">
                    <div className="btext-heading">
                      <i className="far fa-check-circle" />
                      Hire for your company.
                    </div>
                    <p>
                      Aenean malesuada aliquet tincidunt. Nam a nisl mi. Fusce
                      ornare fermentum enim, id interdum velit posuere quis.
                    </p>
                    <p></p>
                  </div>
                  <div className="text-step1">
                    <div className="btext-heading">
                      <i className="far fa-check-circle" />
                      Daily out reach to qualified matches.
                    </div>
                    <p>
                      Aenean malesuada aliquet tincidunt. Nam a nisl mi. Fusce
                      ornare fermentum enim, id interdum velit posuere quis.
                    </p>
                    <p></p>
                  </div>
                  <div className="btns15">
                    <button
                      className="btn-152"
                      onclick="window.location.href = 'post_a_job.html';"
                    >
                      Post a Job
                    </button>
                    <button
                      className="btn-153"
                      onclick="window.location.href = '#';"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="main-heading text-left mt-80">
                  <h2>Talented Candidates</h2>
                  <span>
                    Get discoverd by companies looking to hire remote.
                  </span>
                  <div className="line-shape1">
                    <img src="images/line.svg" alt="" />
                  </div>
                </div>
                <div className="text152">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque eu purus et diam blandit vehicula sit amet sed
                    metus. Fusce condimentum non neque at fringilla.
                  </p>
                </div>
                <div className="text-steps">
                  <div className="text-step1">
                    <div className="btext-heading">
                      <i className="far fa-check-circle" />
                      Get your profile listed.
                    </div>
                    <p>
                      Aenean malesuada aliquet tincidunt. Nam a nisl mi. Fusce
                      ornare fermentum enim, id interdum velit posuere quis.
                    </p>
                    <p></p>
                  </div>
                  <div className="text-step1">
                    <div className="btext-heading">
                      <i className="far fa-check-circle" />
                      Customize your profile.
                    </div>
                    <p>
                      Aenean malesuada aliquet tincidunt. Nam a nisl mi. Fusce
                      ornare fermentum enim, id interdum velit posuere quis.
                    </p>
                    <p></p>
                  </div>
                  <div className="btns15">
                    <button
                      className="btn-152"
                      onclick="window.location.href = 'browse_freelancers.html';"
                    >
                      Get Listed
                    </button>
                    <button
                      className="btn-153"
                      onclick="window.location.href = '#';"
                    >
                      Learn More
                    </button>
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
        <FontAwesomeIcon
          icon={faArrowAltCircleUp}
          className="fas fa-arrow-up"
        />
      </button>
      {/* Scroll to Top Button End */}
      {/* Scripts js */}
    </div>
  );
}

export default Home;
