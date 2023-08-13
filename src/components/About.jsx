import Footer from "./Footer";
import NavBar from "./NavBar";

function About() {
  return (
    <div>
      <title>Jobby - About Us</title>
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
                  About Us
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
                <h2>About Us</h2>
                <div className="line-shape1">
                  <img src="images/line.svg" alt="" />
                </div>
              </div>
              <div className="about_des">
                <p>
                  Vivamus tortor nisl, lobortis in, faucibus et, tempus at, dui.
                  Nunc risus. Proin scelerisque augue. Nam ullamcorper.
                  Phasellus id massa. Pellentesque nisl. Pellentesque habitant
                  tuni morbi tristique senectus et netus et malesuada fames ac
                  turpis egestas. Nunc augue. Aenean sed justo non leo vehicula
                  laoreet. Praesent ipsum libero, auctor ac, tempus nec, casion
                  tempor nec, justo cretusi sino zumbua iloseum musumfu lilokuta
                  nabase uchiha itachi suctung from munual pracetamol curom ose
                  testio soel lorem isutm pausm mintest osrit ucii
                </p>
                <p>
                  Maecenas ullamcorper, odio vel tempus egestas, dui orci
                  faucibus orci, sit amet aliquet lectus dolor et quam.
                  Pellentesque consequat luctus purus. Nunc et risus. Etiam a
                  nibh tunil Phasellus dignissim metus eget nisi. Vestibulum
                  sapien dolor, aliquet nec, porta ac, malesuada a, libero.
                  Praesent feugiat purus eget est. Nulla facilisi. Vestibulum
                  tincidunt sapiens eu velit. Mauris purus. Maecenas eget mauris
                  eu orci accumsan feugiat. Pellentesque eget velit. Nunc
                  tincidunt.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="choose_us">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="choose_left">
                  <div className="main-heading bids_heading">
                    <h2>Why Choose Us</h2>
                    <div className="line-shape1">
                      <img src="images/line.svg" alt="" />
                    </div>
                  </div>
                  <div className="choose_des">
                    <p>
                      Fusce dictum mauris nec magna consequat, ut semper leo
                      pulvinar. Cras rhoncus lorem lorem, a fermentum lacus
                      congue vehicula. Nullam luctus mi eget nisl tincidunt
                      lobortis.
                    </p>
                    <ul>
                      <li>
                        <div className="abt142">
                          <i className="fas fa-check-circle" />
                          <p>
                            Cras rhoncus lorem lorem, a fermentum lacus congue
                            vehicula. Nullam luct us mi eget nisl tincidunt
                            lobortis.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="abt142">
                          <i className="fas fa-check-circle" />
                          <p>
                            Cras rhoncus lorem lorem, a fermentum lacus congue
                            vehicula. Nullam luct us mi eget nisl tincidunt
                            lobortis.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="about_video">
                  <iframe
                    src="https://www.youtube.com/embed/TKnufs85hXk"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="our_team">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="main-heading">
                  <h2>Meet Our Team</h2>
                  <div className="line-shape1">
                    <img src="images/line.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="team_item">
                  <div className="team_img">
                    <img src="images/about/team-1.jpg" alt="" />
                  </div>
                  <h4>John Doe</h4>
                  <span>CEO</span>
                  <ul className="team_links">
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
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="team_item">
                  <div className="team_img">
                    <img src="images/about/team-2.jpg" alt="" />
                  </div>
                  <h4>Rock Smith</h4>
                  <span>CTO</span>
                  <ul className="team_links">
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
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="team_item">
                  <div className="team_img">
                    <img src="images/about/team-3.jpg" alt="" />
                  </div>
                  <h4>Jassica William</h4>
                  <span>Senior Developer</span>
                  <ul className="team_links">
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
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="team_item">
                  <div className="team_img">
                    <img src="images/about/team-4.jpg" alt="" />
                  </div>
                  <h4>Johnson</h4>
                  <span>UI/UX Designer</span>
                  <ul className="team_links">
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
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
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
    </div>
  );
}

export default About;
