import { Helmet } from "react-helmet";
import Footer from "./Footer";
import NavBar from "./NavBar";

function HelpCenter() {
  return (
    <div>
      <Helmet>
        <title>Jobby - Help Center</title>
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
                  Help Center
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
            <div className="col-md-12">
              <div className="main-heading">
                <h2>Help Center</h2>
                <div className="line-shape1">
                  <img src="images/line.svg" alt="" />
                </div>
              </div>
              <div className="search_help">
                <input
                  className="hsrhinput"
                  type="text"
                  placeholder="Search Any Question"
                />
                <button className="help_btn">Search</button>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="faq_left">
                <h4>FAQ</h4>
                <ul className="nav faq_nav nav-tabs">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      All
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Getting Started
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Companies
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Freelancers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Jobs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Message Center
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Payment
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Delete Account
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 col-md-8">
              <div className="faq_right">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="faq1485">
                      <div className="faq_heading">
                        <h4>Getting Started</h4>
                        <div className="line-shape1">
                          <img src="images/line.svg" alt="" />
                        </div>
                      </div>
                      <div className="faq_more">
                        <a href="#">View More</a>
                      </div>
                      <ul className="faq_links">
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Cras id lorem sagittis ex convallis rutrum a blandit
                            orci?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Nunc laoreet dui eget quam efficitur?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Urabitur pharetra, lorem et venenatis consequa?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Vestibulum ullamcorper ornare molestie?
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="faq1485">
                      <div className="faq_heading">
                        <h4>Companies</h4>
                        <div className="line-shape1">
                          <img src="images/line.svg" alt="" />
                        </div>
                      </div>
                      <div className="faq_more">
                        <a href="#">View More</a>
                      </div>
                      <ul className="faq_links">
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Cras id lorem sagittis ex convallis rutrum a blandit
                            orci?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Nunc laoreet dui eget quam efficitur?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Urabitur pharetra, lorem et venenatis consequa?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Vestibulum ullamcorper ornare molestie?
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="faq1485">
                      <div className="faq_heading">
                        <h4>Freelancers</h4>
                        <div className="line-shape1">
                          <img src="images/line.svg" alt="" />
                        </div>
                      </div>
                      <div className="faq_more">
                        <a href="#">View More</a>
                      </div>
                      <ul className="faq_links">
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Cras id lorem sagittis ex convallis rutrum a blandit
                            orci?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Nunc laoreet dui eget quam efficitur?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Urabitur pharetra, lorem et venenatis consequa?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Vestibulum ullamcorper ornare molestie?
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="faq1485">
                      <div className="faq_heading">
                        <h4>Jobs</h4>
                        <div className="line-shape1">
                          <img src="images/line.svg" alt="" />
                        </div>
                      </div>
                      <div className="faq_more">
                        <a href="#">View More</a>
                      </div>
                      <ul className="faq_links">
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Cras id lorem sagittis ex convallis rutrum a blandit
                            orci?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Nunc laoreet dui eget quam efficitur?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Urabitur pharetra, lorem et venenatis consequa?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Vestibulum ullamcorper ornare molestie?
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="faq1485">
                      <div className="faq_heading">
                        <h4>Projects</h4>
                        <div className="line-shape1">
                          <img src="images/line.svg" alt="" />
                        </div>
                      </div>
                      <div className="faq_more">
                        <a href="#">View More</a>
                      </div>
                      <ul className="faq_links">
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Cras id lorem sagittis ex convallis rutrum a blandit
                            orci?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Nunc laoreet dui eget quam efficitur?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Urabitur pharetra, lorem et venenatis consequa?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Vestibulum ullamcorper ornare molestie?
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="faq1485">
                      <div className="faq_heading">
                        <h4>Message Center</h4>
                        <div className="line-shape1">
                          <img src="images/line.svg" alt="" />
                        </div>
                      </div>
                      <div className="faq_more">
                        <a href="#">View More</a>
                      </div>
                      <ul className="faq_links">
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Cras id lorem sagittis ex convallis rutrum a blandit
                            orci?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Nunc laoreet dui eget quam efficitur?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Urabitur pharetra, lorem et venenatis consequa?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Vestibulum ullamcorper ornare molestie?
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="faq1485">
                      <div className="faq_heading">
                        <h4>Payment</h4>
                        <div className="line-shape1">
                          <img src="images/line.svg" alt="" />
                        </div>
                      </div>
                      <div className="faq_more">
                        <a href="#">View More</a>
                      </div>
                      <ul className="faq_links">
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Cras id lorem sagittis ex convallis rutrum a blandit
                            orci?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Nunc laoreet dui eget quam efficitur?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Urabitur pharetra, lorem et venenatis consequa?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Vestibulum ullamcorper ornare molestie?
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="faq1485">
                      <div className="faq_heading">
                        <h4>Delete Account</h4>
                        <div className="line-shape1">
                          <img src="images/line.svg" alt="" />
                        </div>
                      </div>
                      <div className="faq_more">
                        <a href="#">View More</a>
                      </div>
                      <ul className="faq_links">
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Cras id lorem sagittis ex convallis rutrum a blandit
                            orci?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Nunc laoreet dui eget quam efficitur?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Urabitur pharetra, lorem et venenatis consequa?
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-file-alt" />
                            Vestibulum ullamcorper ornare molestie?
                          </a>
                        </li>
                      </ul>
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

export default HelpCenter;
