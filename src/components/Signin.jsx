import { Helmet } from "react-helmet";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Signin() {
  return (
    <div>
      <Helmet>
        <title>Jobby - Sign In</title>
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
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Sign In
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
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <div className="lg_form">
                <div className="main-heading">
                  <h2>Sign in to Jobby</h2>
                  <div className="line-shape1">
                    <img src="images/line.svg" alt="" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="label15">Email Address*</label>
                  <input
                    type="email"
                    className="job-input"
                    placeholder="Enter Email Address"
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
                <button
                  className="lr_btn"
                  type="submit"
                  onclick="window.location.href = '/';"
                >
                  Sign in Now
                </button>
                <div className="done145">
                  <div className="done146">
                    Need an account?
                    <a href="/signup">
                      Join us Now
                      <i className="fas fa-angle-double-right" />
                    </a>
                  </div>
                  <div className="done147">
                    <a href="/forgot-password">Forgot Password?</a>
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

export default Signin;
