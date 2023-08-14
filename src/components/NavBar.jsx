function NavBar() {
  return (
    <header>
    <div className="top-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
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
                <ul>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="icon14 dropdown-toggle-no-caret"
                      role="button"
                      data-toggle="dropdown"
                    >
                      <i className="fas fa-envelope" />
                      <div className="circle-alrt" />
                    </a>
                    <div className="dropdown-menu message-dropdown dropdown-menu-right">
                      <div className="user-request-list">
                        <div className="request-users">
                          <div className="user-request-dt">
                            <a href="#">
                              <img src="images/user-dp-1.jpg" alt="" />
                              <div className="user-title1">
                                Jassica William{" "}
                              </div>
                              <span>Hey How are you John Doe...</span>
                            </a>
                          </div>
                          <div className="time5">2 min ago</div>
                        </div>
                      </div>
                      <div className="user-request-list">
                        <div className="request-users">
                          <div className="user-request-dt">
                            <a href="#">
                              <img src="images/user-dp-1.jpg" alt="" />
                              <div className="user-title1">Rock Smith </div>
                              <span>
                                Interesting Event! I will join this...
                              </span>
                            </a>
                          </div>
                          <div className="time5">5 min ago</div>
                        </div>
                      </div>
                      <div className="user-request-list">
                        <div className="request-users">
                          <div className="user-request-dt">
                            <a href="#">
                              <img src="images/user-dp-1.jpg" alt="" />
                              <div className="user-title1">Joy Doe </div>
                              <span>Hey Sir! What about you...</span>
                            </a>
                          </div>
                          <div className="time5">10 min ago</div>
                        </div>
                      </div>
                      <div className="user-request-list">
                        <a
                          href="/my-freelancer-messages"
                          className="view-all"
                        >
                          View All Messages
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="icon14 dropdown-toggle-no-caret"
                      role="button"
                      data-toggle="dropdown"
                    >
                      <i className="fas fa-bell" />
                      <div className="circle-alrt" />
                    </a>
                    <div className="dropdown-menu message-dropdown dropdown-menu-right">
                      <div className="user-request-list">
                        <div className="request-users">
                          <div className="user-request-dt">
                            <a href="#">
                              <div className="noti-icon">
                                <i className="fas fa-users" />
                              </div>
                              <div className="user-title1">
                                Rock William{" "}
                              </div>
                              <span>
                                applied for a{" "}
                                <ins className="noti-p-link">
                                  Php Developer
                                </ins>
                                .
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="user-request-list">
                        <div className="request-users">
                          <div className="user-request-dt">
                            <a href="#">
                              <div className="noti-icon">
                                <i className="fas fa-bullseye" />
                              </div>
                              <div className="user-title1">
                                Johnson Smith
                              </div>
                              <span>
                                placed a bid on your{" "}
                                <ins className="noti-p-link">
                                  I Need a ...
                                </ins>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="user-request-list">
                        <div className="request-users">
                          <div className="user-request-dt">
                            <a href="#">
                              <div className="noti-icon">
                                <i className="fas fa-exclamation" />
                              </div>
                              <span className="pt-2">
                                Your job listing{" "}
                                <ins className="noti-p-link">
                                  Wordpress Developer
                                </ins>{" "}
                                is expiring.
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="user-request-list">
                        <a
                          href="/my-freelancer-notifications"
                          className="view-all"
                        >
                          View All Notifications
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="account order-1 dropdown">
                      <a
                        href="#"
                        className="account-link dropdown-toggle-no-caret"
                        role="button"
                        data-toggle="dropdown"
                      >
                        <div className="user-dp">
                          <img src="images/dp.jpg" alt="" />
                        </div>
                        <span>Hi! John</span>
                        <i className="fas fa-sort-down" />
                      </a>
                      <div className="dropdown-menu account-dropdown dropdown-menu-right">
                        <a
                          className="link-item"
                          href="/my-freelancer-dashboard"
                        >
                          Dashboard
                        </a>
                        <a
                          className="link-item"
                          href="/my-freelancer-setting"
                        >
                          Setting
                        </a>
                        <a
                          className="link-item"
                          href="/my-freelancer-messages"
                        >
                          My Messages
                        </a>
                        <a
                          className="link-item"
                          href="/my-freelancer-jobs"
                        >
                          My Jobs
                        </a>
                        <a
                          className="link-item"
                          href="/my-freelancer-bids"
                        >
                          My Bids
                        </a>
                        <a
                          className="link-item"
                          href="/my-freelancer-portfolio"
                        >
                          My Portfolio
                        </a>
                        <a
                          className="link-item"
                          href="/my-freelancer-bookmarks"
                        >
                          My Bookmarks
                        </a>
                        <a
                          className="link-item"
                          href="/my-freelancer-payments"
                        >
                          Payments
                        </a>
                        <a className="link-item" href="/signin">
                          Logout
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
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
                href="/"
              >
                <img src="../images/logo.svg" alt="" />
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
                    <a className="nav-link" href="/">
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
                      <a className="link-item" href="/browse-jobs">
                        Browse Jobs
                      </a>
                      <a className="link-item" href="/job-single-view">
                        Single Job View
                      </a>
                      <a className="link-item" href="/post-a-job">
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
                      <a className="link-item" href="/browse-projects">
                        Browse Projects
                      </a>
                      <a
                        className="link-item"
                        href="/project-single-view"
                      >
                        Single Project View
                      </a>
                      <a className="link-item" href="/post-a-project">
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
                      <a className="link-item" href="/browse-companies">
                        Browse Companies
                      </a>
                      <a
                        className="link-item"
                        href="/other-company-profile"
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
                        href="/browse-freelancers"
                      >
                        Browse Freelancers
                      </a>
                      <a
                        className="link-item"
                        href="/other-freelancer-profile"
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
                      <a className="link-item" href="/about-us">
                        About
                      </a>
                      <a className="link-item" href="/our-blog">
                        Our Blog
                      </a>
                      <a className="link-item" href="/blog-single-view">
                        Signle Blog View
                      </a>
                      <a className="link-item" href="/pricing-plans">
                        Pricing Plans
                      </a>
                      <a className="link-item" href="/checkout">
                        Checkout
                      </a>
                      <a className="link-item" href="/plan-invoice">
                        Invoice Slip
                      </a>
                      <a className="link-item" href="/signin">
                        Sign in
                      </a>
                      <a className="link-item" href="/signup">
                        Sign up
                      </a>
                      <a
                        className="link-item"
                        href="/signup-select-profile"
                      >
                        Sign up Select Profiles
                      </a>
                      <a
                        className="link-item"
                        href="/signup-freelancer-profile"
                      >
                        Create Freelancer Profile
                      </a>
                      <a
                        className="link-item"
                        href="/signup-company-profile"
                      >
                        Create Company Profile
                      </a>
                      <a className="link-item" href="/contact-us">
                        Contact
                      </a>
                      <a className="link-item" href="/help-center">
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
                <a href="/post-a-job" className="add-post">
                  Post a Job
                </a>
                <a href="/post-a-project" className="add-task">
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
    <script src="js/jquery.min.js"></script>
		<script src="js/datepicker.min.js"></script>
		<script src="js/i18n/datepicker.en.js"></script>
		<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
		<script src="vendor/OwlCarousel/owl.carousel.js"></script>
		<script src="vendor/semantic/semantic.min.js"></script>
		<script src="js/custom1.js"></script>	
  </header>
  );
}

export default NavBar;
