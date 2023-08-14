function Footer() {
  return (
    <footer className="footer">
      <div className="subscribe-newsletter">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-md-6">
              <div className="subcribes">
                <div className="text-step1">
                  <h4>Subscribe to Newsletter</h4>
                  <div
                    className="btext-heading mt-2"
                    style={{ color: "#acacac", fontSize: "14px" }}
                  >
                    <i className="fas fa-check-circle" />
                    Cras nunc mauris, rhoncus eu justo at, egestas sagittis
                    felis. Ut sed feugiat eros.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="subcribe-input">
                <input
                  className="nltr-input"
                  type="email"
                  placeholder="Your Email Address"
                />
                <button className="s-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="about-jobby">
              <a href="/">
                <img src="images/logo1.svg" alt="" />
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                eu purus et diam blandit vehicula sit amet sed metus. Fusce
                condimentum non neque at fringilla. Aenean malesuada aliquet
                tincidunt.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="footer-links">
              <h4>About</h4>
              <ul>
                <li>
                  <a href="/about-us">About Us</a>
                </li>
                <li>
                  <a href="/signin">Login</a>
                </li>
                <li>
                  <a href="/my-freelancer-profile">My Account</a>
                </li>
                <li>
                  <a href="/contact-us">Contact</a>
                </li>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="footer-links">
              <h4>For Companies</h4>
              <ul>
                <li>
                  <a href="/browse-freelancers">Browse Freelancers</a>
                </li>
                <li>
                  <a href="/post-a-job">Post a Job</a>
                </li>
                <li>
                  <a href="/post-a-project">Post a Project</a>
                </li>
                <li>
                  <a href="/pricing-plans">Pricing Plans</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="footer-links">
              <h4>For Candidates</h4>
              <ul>
                <li>
                  <a href="/browse-jobs">Browse Jobs</a>
                </li>
                <li>
                  <a href="/my-freelancer-jobs">Jobs Alerts</a>
                </li>
                <li>
                  <a href="/my-freelancer-jobs">Applied Jobs</a>
                </li>
                <li>
                  <a href="/my-freelancer-bookmarks">Bookmarks</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-social">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="copyright">
                <i className="far fa-copyright" />
                Copyright 2019 <span>Jobby</span> by{" "}
                <a href="#">Gambolthemes</a>. All Right Reserved.
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="social-icons">
                <ul>
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
