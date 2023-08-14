import { Helmet } from "react-helmet";
import Footer from "./Footer";
import NavBar from "./NavBar";

function ProjectSingleView() {
  return (
    <div>
      <Helmet>
        <title>Jobby - Project Single View</title>
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
                <li className="breadcrumb-item">
                  <a href="browse_projects.html">Browser Projects</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Project Single View
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
                      <i className="fas fa-shield-alt" />
                      <div className="vw_item_text">
                        <h6>Verify</h6>
                        <span>Yes</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="vw_items">
                      <i className="far fa-money-bill-alt" />
                      <div className="vw_item_text">
                        <h6>Budget</h6>
                        <span>$500 - $2000</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="vw_items">
                      <i className="far fa-clock" />
                      <div className="vw_item_text">
                        <h6>Posted Date</h6>
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
                    <div className="job-price">$500 - $2000</div>
                  </div>
                </div>
                <div className="job-des-dt">
                  <h4>I Need a Travel Psd Template</h4>
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
                  <h4>Attachments</h4>
                  <ul className="download_files">
                    <li>
                      <div className="dwn_fls">
                        <div className="dwn-header">
                          <h6>Project Briefing Details</h6>
                        </div>
                        <div className="dwn-footer">
                          <span>PDF</span>
                          <button className="download_button">
                            <i className="fas fa-download" />
                          </button>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dwn_fls">
                        <div className="dwn-header">
                          <h6>Images</h6>
                        </div>
                        <div className="dwn-footer">
                          <span>Zip</span>
                          <button className="download_button">
                            <i className="fas fa-download" />
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="find-lts-jobs">
                <div className="main-heading bids_heading">
                  <h2>Freelancers Bidding</h2>
                  <div className="line-shape1">
                    <img src="images/line.svg" alt="" />
                  </div>
                </div>
                <div className="freelancers_bidings">
                  <div className="job-item mt-30">
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
                            <i className="fas fa-map-marker-alt" /> India
                          </span>
                          <div className="star mt-2">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <span>4.9</span>
                          </div>
                        </div>
                      </div>
                      <div className="job-right-dt job-right-dt78">
                        <div className="job-price job-price78">
                          $500 - $1000
                        </div>
                        <div className="job-fp dy_cl">in 5 days</div>
                      </div>
                    </div>
                  </div>
                  <div className="job-item mt-30">
                    <div className="job-top-dt">
                      <div className="job-left-dt">
                        <img
                          src="images/homepage/latest-jobs/img-7.jpg"
                          alt=""
                        />
                        <div className="job-ut-dts">
                          <a href="#">
                            <h4>Johnson Smith</h4>
                          </a>
                          <span>
                            <i className="fas fa-map-marker-alt" /> New York
                            City
                          </span>
                          <div className="star mt-2">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <span>4.9</span>
                          </div>
                        </div>
                      </div>
                      <div className="job-right-dt job-right-dt78">
                        <div className="job-price job-price78">
                          $500 - $1000
                        </div>
                        <div className="job-fp dy_cl">in 5 days</div>
                      </div>
                    </div>
                  </div>
                  <div className="job-item mt-30">
                    <div className="job-top-dt">
                      <div className="job-left-dt">
                        <img
                          src="images/homepage/latest-jobs/img-4.jpg"
                          alt=""
                        />
                        <div className="job-ut-dts">
                          <a href="#">
                            <h4>Jass singh</h4>
                          </a>
                          <span>
                            <i className="fas fa-map-marker-alt" /> India
                          </span>
                          <div className="star mt-2">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <span>5.0</span>
                          </div>
                        </div>
                      </div>
                      <div className="job-right-dt job-right-dt78">
                        <div className="job-price job-price78">
                          $600 - $1200
                        </div>
                        <div className="job-fp dy_cl">in 5 days</div>
                      </div>
                    </div>
                  </div>
                  <div className="job-item mt-30">
                    <div className="job-top-dt">
                      <div className="job-left-dt">
                        <img
                          src="images/homepage/latest-jobs/img-5.jpg"
                          alt=""
                        />
                        <div className="job-ut-dts">
                          <a href="#">
                            <h4>Jassica WIlliam</h4>
                          </a>
                          <span>
                            <i className="fas fa-map-marker-alt" /> Australia
                          </span>
                          <a href="#" className="vote_rqur mt-2">
                            Minimum of 3 votes required
                          </a>
                        </div>
                      </div>
                      <div className="job-right-dt job-right-dt78">
                        <div className="job-price job-price78">
                          $400 - $1000
                        </div>
                        <div className="job-fp dy_cl">in 5 days</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mainpage">
              <div className="total_days mtp_30">4 days 5 hours left</div>
              <h4 className="bid_title">Bid Now This Job</h4>
              <div className="bid_amount">
                <div className="fltr-items-heading">
                  <div className="fltr-item-left">
                    <h6>
                      Set Your Minimal Rate <span>($)</span>
                    </h6>
                  </div>
                  <div className="fltr-item-right">
                    <a href="#">Clear</a>
                  </div>
                </div>
                <div className="filter-dd">
                  <div className="rg-slider">
                    <input
                      className="rn-slider slider-input"
                      type="hidden"
                      defaultValue="5,500"
                    />
                  </div>
                </div>
              </div>
              <div className="dlvry_days">
                <div className="fltr-items-heading">
                  <div className="fltr-item-left">
                    <h6>Set Your Delivery Time</h6>
                  </div>
                  <div className="fltr-item-right">
                    <a href="#">Clear</a>
                  </div>
                </div>
                <div className="ui fluid search selection dropdown skills-search">
                  <input name="tags" type="hidden" defaultValue />
                  <i className="dropdown icon" />
                  <input className="search" autoComplete="off" tabIndex={0} />
                  <span className="sizer" style={{}} />
                  <div className="default text">Select Days</div>
                  <div className="menu transition hidden" tabIndex={-1}>
                    <div className="item selected" data-value="Job1">
                      5 Days
                    </div>
                    <div className="item" data-value="day1">
                      10 Days
                    </div>
                    <div className="item" data-value="day2">
                      15 Days
                    </div>
                    <div className="item" data-value="day3">
                      20 Days
                    </div>
                    <div className="item" data-value="day4">
                      25 Days
                    </div>
                    <div className="item" data-value="day5">
                      30 Days
                    </div>
                    <div className="item" data-value="day6">
                      50 Days
                    </div>
                    <div className="item" data-value="day7">
                      70 Days
                    </div>
                    <div className="item" data-value="day8">
                      120 Days
                    </div>
                  </div>
                </div>
              </div>
              <button className="apply_job_rt" type="button">
                PLACE A BID
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

export default ProjectSingleView;
