import Footer from "./Footer";
import NavBar from "./NavBar";

function ContactUs() {
  return (
    <div>

      <title>Jobby - Contact Us</title>

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
                  Contact Us
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* Title Start */}
      {/* Body Start */}
      <main className="contact-section">
        <div className="contact_map">
          <div id="map" />
        </div>
        <div className="contact_info">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact_dts">
                  <h6>
                    Opening a ticket is the fastest and most efficient method of
                    support.
                  </h6>
                  <div className="main-heading bids_heading">
                    <h2>Contact Information</h2>
                    <div className="line-shape1">
                      <img src="images/line.svg" alt="" />
                    </div>
                  </div>
                  <ul className="cinfo10">
                    <li>
                      <p>
                        <span>
                          <i className="fas fa-map-marker-alt" />
                          Address :
                        </span>
                        #1234, Sks Nagar, Near MBD Mall, 141001 Ludhiana,
                        Punjab, India
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>
                          <i className="fas fa-envelope" />
                          Email Address :
                        </span>
                        Support@jobby.com
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact_form">
                  <div className="main-heading">
                    <h2>Open a Ticket</h2>
                    <div className="line-shape1">
                      <img src="images/line.svg" alt="" />
                    </div>
                  </div>
                  <form>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label className="label15">Name*</label>
                          <input
                            type="text"
                            className="job-input"
                            placeholder="Enter Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label className="label15">Email Address*</label>
                          <input
                            type="email"
                            className="job-input"
                            placeholder="Enter Email Address"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label className="label15">Subject*</label>
                          <input
                            type="text"
                            className="job-input"
                            placeholder="Enter Subject"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label className="label15">Message*</label>
                          <textarea
                            className="note-input"
                            placeholder="Text Message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button className="withdraw_btn" type="submit">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
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

export default ContactUs;
