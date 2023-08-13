import Footer from "./Footer";

function Signin() {
  return (
    <div>

      <title>Jobby - Sign In</title>

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
      <header>
        <div className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className>
                  <div className="top-header-full">
                    <div className="top-left-hd">
                      <ul>
                        <li>
                          <div className="wlcm-text">Welcome to Jobby</div>
                        </li>
                        <li>
                          <div className="lang-icon dropdown">
                            <i className="fas fa-globe ln-glb" />
                            <a
                              href="#"
                              className="icon15 dropdown-toggle-no-caret"
                              role="button"
                              data-toggle="dropdown"
                            >
                              EN <i className="fas fa-caret-down p-crt" />
                            </a>
                            <div className="dropdown-menu lanuage-dropdown dropdown-menu-left">
                              <a className="link-item" href="#">
                                EN
                              </a>
                              <a className="link-item" href="#">
                                DE
                              </a>
                              <a className="link-item" href="#">
                                RU
                              </a>
                              <a className="link-item" href="#">
                                ES
                              </a>
                              <a className="link-item" href="#">
                                FR
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="top-right-hd">
                      <a href="#" className="login_btn">
                        <i className="fas fa-lock" /> Login
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark1 justify-content-sm-start">
                  <a
                    className="order-1 order-lg-0 ml-lg-0 ml-3 mr-auto"
                    href="index.html"
                  >
                    <img src="images/logo.svg" alt="" />
                  </a>
                  <button
                    className="navbar-toggler align-self-start"
                    type="button"
                  >
                    <i className="fas fa-bars" />
                  </button>
                  <div
                    className="collapse navbar-collapse d-flex flex-column flex-lg-row flex-xl-row justify-content-lg-end bg-dark1 p-3 p-lg-0 mt1-5 mt-lg-0 mobileMenu"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav align-self-stretch">
                      <li className="nav-item active">
                        <a className="nav-link" href="index.html">
                          Home <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          href="#"
                          className="nav-link dropdown-toggle-no-caret"
                          role="button"
                          data-toggle="dropdown"
                        >
                          Find Jobs
                        </a>
                        <div className="dropdown-menu pages-dropdown">
                          <a className="link-item" href="browse_jobs.html">
                            Browse Jobs
                          </a>
                          <a className="link-item" href="job_single_view.html">
                            Single Job View
                          </a>
                          <a className="link-item" href="post_a_job.html">
                            Post a Job
                          </a>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          href="#"
                          className="nav-link dropdown-toggle-no-caret"
                          role="button"
                          data-toggle="dropdown"
                        >
                          Find Work
                        </a>
                        <div className="dropdown-menu pages-dropdown">
                          <a className="link-item" href="browse_projects.html">
                            Browse Projects
                          </a>
                          <a
                            className="link-item"
                            href="project_single_view.html"
                          >
                            Single Project View
                          </a>
                          <a className="link-item" href="post_a_project.html">
                            Post a Project
                          </a>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          href="#"
                          className="nav-link dropdown-toggle-no-caret"
                          role="button"
                          data-toggle="dropdown"
                        >
                          Find Companies
                        </a>
                        <div className="dropdown-menu pages-dropdown">
                          <a className="link-item" href="browse_companies.html">
                            Browse Companies
                          </a>
                          <a
                            className="link-item"
                            href="other_company_profile.html"
                          >
                            Company Profile
                          </a>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          href="#"
                          className="nav-link dropdown-toggle-no-caret"
                          role="button"
                          data-toggle="dropdown"
                        >
                          Find Freelancers
                        </a>
                        <div className="dropdown-menu pages-dropdown">
                          <a
                            className="link-item"
                            href="browse_freelancers.html"
                          >
                            Browse Freelancers
                          </a>
                          <a
                            className="link-item"
                            href="other_freelancer_profile.html"
                          >
                            Freelancer Profile
                          </a>
                        </div>
                      </li>
                      <li className="nav-item dropdown pages152">
                        <a
                          href="#"
                          className="nav-link dropdown-toggle-no-caret"
                          role="button"
                          data-toggle="dropdown"
                        >
                          Pages <i className="fas fa-caret-down p-crt" />
                        </a>
                        <div className="dropdown-menu pages-dropdown">
                          <a className="link-item" href="about.html">
                            About
                          </a>
                          <a className="link-item" href="our_blog.html">
                            Our Blog
                          </a>
                          <a className="link-item" href="blog_single_view.html">
                            Signle Blog View
                          </a>
                          <a className="link-item" href="pricing_plans.html">
                            Pricing Plans
                          </a>
                          <a className="link-item" href="checkout.html">
                            Checkout
                          </a>
                          <a className="link-item" href="plan_invoice.html">
                            Invoice Slip
                          </a>
                          <a className="link-item" href="sign_in.html">
                            Sign in
                          </a>
                          <a className="link-item" href="sign_up.html">
                            Sign up
                          </a>
                          <a
                            className="link-item"
                            href="sign_up_select_profile.html"
                          >
                            Sign up Select Profiles
                          </a>
                          <a
                            className="link-item"
                            href="sign_up_freelancer_profile.html"
                          >
                            Create Freelancer Profile
                          </a>
                          <a
                            className="link-item"
                            href="sign_up_company_profile.html"
                          >
                            Create Company Profile
                          </a>
                          <a className="link-item" href="contact_us.html">
                            Contact
                          </a>
                          <a className="link-item" href="help_center.html">
                            Help Center
                          </a>
                        </div>
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="search-link"
                      role="button"
                      data-toggle="modal"
                      data-target="#searchModal"
                    >
                      <i className="fas fa-search" />
                    </a>
                    <a href="post_a_job.html" className="add-post">
                      Post a Job
                    </a>
                    <a href="post_a_project.html" className="add-task">
                      Post a Task
                    </a>
                  </div>
                  <div className="responsive-search order-1">
                    <input
                      type="text"
                      className="rsp-search"
                      placeholder="Search..."
                    />
                    <i className="fas fa-search r-sh1" />
                  </div>
                </nav>
                <div className="overlay" />
              </div>
            </div>
          </div>
        </div>
      </header>
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
                  onclick="window.location.href = 'index.html';"
                >
                  Sign in Now
                </button>
                <div className="done145">
                  <div className="done146">
                    Need an account?
                    <a href="sign_up.html">
                      Join us Now
                      <i className="fas fa-angle-double-right" />
                    </a>
                  </div>
                  <div className="done147">
                    <a href="forgot_password.html">Forgot Password?</a>
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
