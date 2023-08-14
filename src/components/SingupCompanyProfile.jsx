import { Helmet } from "react-helmet";
import Footer from "./Footer";
import NavBar from "./NavBar";

function SignupCompanyProfile() {
  return (
    <div>
      <Helmet>
        <title>Jobby - Sign Up Company Profile</title>
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
                  Create Company Profile
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
            <div className="col-md-8">
              <div className="main-heading bids_heading">
                <h2>Create Company Profile</h2>
                <div className="line-shape1">
                  <img src="images/line.svg" alt="" />
                </div>
              </div>
              <div className="post501">
                <form>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="label15">Profile Avtar*</label>
                        <div className="avtar_dp">
                          <img src="images/profile_dp.jpg" alt="" />
                        </div>
                        <div className="image-upload-wrap1 ml5">
                          <input
                            className="file-upload-input1"
                            id="file3"
                            type="file"
                            onchange="readURL(this);"
                            accept="image/*"
                          />
                          <div className="drag-text1">Upload Files</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="label15">Company Name*</label>
                        <input
                          type="text"
                          className="job-input"
                          placeholder="Your Company Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Email Address*</label>
                        <input
                          type="email"
                          className="job-input"
                          placeholder="Enter Your Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Launch Date*</label>
                        <div className="smm_input">
                          <input
                            type="text"
                            className="job-input datepicker-here"
                            data-language="en"
                            placeholder="Select Launch Date"
                          />
                          <div className="mix_max">
                            <i className="fas fa-calendar-alt" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="label15">About Description*</label>
                        <div className="description_dtu">
                          <div className="description_actions">
                            <a href="#">
                              <i className="fas fa-bold" />
                            </a>
                            <a href="#">
                              <i className="fas fa-italic" />
                            </a>
                            <a href="#">
                              <i className="fas fa-list-ul" />
                            </a>
                            <a href="#">
                              <i className="fas fa-list-ol" />
                            </a>
                          </div>
                          <textarea
                            className="textarea70"
                            placeholder="Describe your experience, skills, etc. In complete details. This is your chance to show off."
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="label15">Tagline*</label>
                        <input
                          type="email"
                          className="job-input"
                          placeholder="Wordpress Developer"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="label15">Skills*</label>
                        <div className="ui fluid multiple search selection dropdown skills-search">
                          <input name="tags" type="hidden" defaultValue />
                          <i className="dropdown icon" />
                          <input
                            className="search"
                            autoComplete="off"
                            tabIndex={0}
                          />
                          <span className="sizer" style={{}} />
                          <div className="default text">Skills</div>
                          <div className="menu transition hidden" tabIndex={-1}>
                            <div className="item selected" data-value="angular">
                              Angular
                            </div>
                            <div className="item" data-value="css">
                              CSS
                            </div>
                            <div className="item" data-value="design">
                              Graphic Design
                            </div>
                            <div className="item" data-value="ember">
                              Ember
                            </div>
                            <div className="item" data-value="html">
                              HTML
                            </div>
                            <div className="item" data-value="ia">
                              Information Architecture
                            </div>
                            <div className="item" data-value="javascript">
                              Javascript
                            </div>
                            <div className="item" data-value="mech">
                              Mechanical Engineering
                            </div>
                            <div className="item" data-value="meteor">
                              Meteor
                            </div>
                            <div className="item" data-value="node">
                              NodeJS
                            </div>
                            <div className="item" data-value="plumbing">
                              Plumbing
                            </div>
                            <div className="item" data-value="python">
                              Python
                            </div>
                            <div className="item" data-value="rails">
                              Rails
                            </div>
                            <div className="item" data-value="react">
                              React
                            </div>
                            <div className="item" data-value="repair">
                              Kitchen Repair
                            </div>
                            <div className="item" data-value="ruby">
                              Ruby
                            </div>
                            <div className="item" data-value="ui">
                              UI Design
                            </div>
                            <div className="item" data-value="ux">
                              User Experience
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Availability*</label>
                        <div className="ui fluid search selection dropdown skills-search">
                          <input name="tags" type="hidden" defaultValue />
                          <i className="dropdown icon" />
                          <input
                            className="search"
                            autoComplete="off"
                            tabIndex={0}
                          />
                          <span className="sizer" style={{}} />
                          <div className="default text">I’m not sure</div>
                          <div className="menu transition hidden" tabIndex={-1}>
                            <div
                              className="item selected"
                              data-value="Availability1"
                            >
                              Full Time
                            </div>
                            <div
                              className="item selected"
                              data-value="Availability2"
                            >
                              Part Time
                            </div>
                            <div
                              className="item selected"
                              data-value="Availability3"
                            >
                              Not Available
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Experience Level*</label>
                        <div className="ui fluid search selection dropdown skills-search">
                          <input name="tags" type="hidden" defaultValue />
                          <i className="dropdown icon" />
                          <input
                            className="search"
                            autoComplete="off"
                            tabIndex={0}
                          />
                          <span className="sizer" style={{}} />
                          <div className="default text">
                            Select Experience Level
                          </div>
                          <div className="menu transition hidden" tabIndex={-1}>
                            <div className="item" data-value="level1">
                              level 01
                            </div>
                            <div className="item" data-value="level2">
                              level 02
                            </div>
                            <div className="item" data-value="level3">
                              level 03
                            </div>
                            <div className="item" data-value="level4">
                              level 04
                            </div>
                            <div className="item" data-value="level5">
                              level 05
                            </div>
                            <div className="item" data-value="level6">
                              level 06
                            </div>
                            <div className="item" data-value="level7">
                              level 07
                            </div>
                            <div className="item" data-value="level8">
                              level 08
                            </div>
                            <div className="item" data-value="level9">
                              level 09
                            </div>
                            <div className="item" data-value="level10">
                              level 10
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Pay Rate ($/hr)*</label>
                        <div className="smm_input">
                          <input
                            type="text"
                            className="job-input"
                            placeholder="Enter Your Page Rate"
                          />
                          <div className="mix_max">Usd</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Languages*</label>
                        <div className="ui fluid search selection dropdown skills-search">
                          <input name="tags" type="hidden" defaultValue />
                          <i className="dropdown icon" />
                          <input
                            className="search"
                            autoComplete="off"
                            tabIndex={0}
                          />
                          <span className="sizer" style={{}} />
                          <div className="default text">Select Language</div>
                          <div className="menu transition hidden" tabIndex={-1}>
                            <div className="item" data-value="lang1">
                              English
                            </div>
                            <div className="item" data-value="lang2">
                              Hindi
                            </div>
                            <div className="item" data-value="lang3">
                              Punjabi
                            </div>
                            <div className="item" data-value="lang4">
                              Bengali
                            </div>
                            <div className="item" data-value="lang5">
                              Portuguese
                            </div>
                            <div className="item" data-value="lang6">
                              Russian
                            </div>
                            <div className="item" data-value="lang7">
                              Japanese
                            </div>
                            <div className="item" data-value="lang8">
                              Telugu
                            </div>
                            <div className="item" data-value="lang9">
                              French
                            </div>
                            <div className="item" data-value="lang10">
                              German
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="label15">Location*</label>
                        <div className="smm_input">
                          <input
                            type="text"
                            className="job-input"
                            placeholder="Type Address"
                          />
                          <div className="loc_icon">
                            <i className="fas fa-crosshairs" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="label15">Websites*</label>
                        <div className="smm_input5">
                          <input
                            type="text"
                            className="website-input"
                            placeholder="Http://entercompanysite.com"
                          />
                          <div className="loc_icon5">
                            <i className="fas fa-globe" />
                          </div>
                        </div>
                        <div className="smm_input5">
                          <input
                            type="text"
                            className="website-input"
                            placeholder="Http://enterblogsite.com"
                          />
                          <div className="loc_icon5">
                            <i className="far fa-edit" />
                          </div>
                        </div>
                        <div className="smm_input5">
                          <input
                            type="text"
                            className="website-input"
                            placeholder="Http://enterportfoliosite.com"
                          />
                          <div className="loc_icon5">
                            <i className="fas fa-columns" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button className="post_jp_btn" type="submit">
                        Finish Company Profile
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4">
              <div className="main-heading bids_heading pjfaq80">
                <h2>FAQ</h2>
              </div>
              <div className="jp_faq">
                <div className="jp_faq_item">
                  <h4>01. Complete your profile</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque elementum mi at erat egestas, nec porta diam
                    pharetra.
                  </p>
                </div>
                <div className="jp_faq_item">
                  <h4>02. Upload a profile picture</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque elementum mi at erat egestas, nec porta diam
                    pharetra.
                  </p>
                </div>
                <div className="jp_faq_item">
                  <h4>03. Be honest about availability</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque elementum mi at erat egestas, nec porta diam
                    pharetra.
                  </p>
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

export default SignupCompanyProfile;
