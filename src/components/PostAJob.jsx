import Footer from "./Footer";
import NavBar from "./NavBar";

function PostAJob() {
  return (
    <div>

      <title>Jobby - Post a Job</title>

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
                  Post a Job
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
                <h2>Post a Job</h2>
                <div className="line-shape1">
                  <img src="images/line.svg" alt="" />
                </div>
              </div>
              <div className="post501">
                <form>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="label15">Job Name*</label>
                        <input
                          type="text"
                          className="job-input"
                          placeholder="Job Name Here"
                        />
                      </div>
                      <div className="form-group">
                        <label className="label15">Job Description*</label>
                        <textarea
                          className="textarea_input"
                          placeholder="Type Description"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="requires">
                        What are the job requirements
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Job Type*</label>
                        <div className="ui fluid search selection dropdown skills-search">
                          <input name="tags" type="hidden" defaultValue />
                          <i className="dropdown icon" />
                          <input
                            className="search"
                            autoComplete="off"
                            tabIndex={0}
                          />
                          <span className="sizer" style={{}} />
                          <div className="default text">Select a job</div>
                          <div className="menu transition hidden" tabIndex={-1}>
                            <div className="item selected" data-value="Job1">
                              Job Type 01
                            </div>
                            <div className="item" data-value="Job2">
                              Job Type 02
                            </div>
                            <div className="item" data-value="Job3">
                              Job Type 03
                            </div>
                            <div className="item" data-value="Job4">
                              Job Type 04
                            </div>
                            <div className="item" data-value="Job5">
                              Job Type 05
                            </div>
                            <div className="item" data-value="Job6">
                              Job Type 06
                            </div>
                            <div className="item" data-value="Job7">
                              Job Type 07
                            </div>
                            <div className="item" data-value="Job8">
                              Job Type 08
                            </div>
                            <div className="item" data-value="Job9">
                              Job Type 09
                            </div>
                            <div className="item" data-value="Job10">
                              Job Type 10
                            </div>
                            <div className="item" data-value="Job11">
                              Job Type 11
                            </div>
                            <div className="item" data-value="Job12">
                              Job Type 12
                            </div>
                            <div className="item" data-value="Job13">
                              Job Type 13
                            </div>
                            <div className="item" data-value="Job14">
                              Job Type 14
                            </div>
                            <div className="item" data-value="Job15">
                              Job Type 15
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Job Category*</label>
                        <div className="ui fluid search selection dropdown skills-search">
                          <input name="tags" type="hidden" defaultValue />
                          <i className="dropdown icon" />
                          <input
                            className="search"
                            autoComplete="off"
                            tabIndex={0}
                          />
                          <span className="sizer" style={{}} />
                          <div className="default text">Select Category</div>
                          <div className="menu transition hidden" tabIndex={-1}>
                            <div className="item selected" data-value="Job1">
                              Category 01
                            </div>
                            <div className="item" data-value="Category2">
                              Category 02
                            </div>
                            <div className="item" data-value="Category3">
                              Category 03
                            </div>
                            <div className="item" data-value="Category4">
                              Category 04
                            </div>
                            <div className="item" data-value="Category5">
                              Category 05
                            </div>
                            <div className="item" data-value="Category6">
                              Category 06
                            </div>
                            <div className="item" data-value="Category7">
                              Category 07
                            </div>
                            <div className="item" data-value="Category8">
                              Category 08
                            </div>
                            <div className="item" data-value="Category9">
                              Category 09
                            </div>
                            <div className="item" data-value="Category10">
                              Category 10
                            </div>
                            <div className="item" data-value="Category11">
                              Category 11
                            </div>
                            <div className="item" data-value="Category12">
                              Category 12
                            </div>
                            <div className="item" data-value="Category13">
                              Category 13
                            </div>
                            <div className="item" data-value="Category14">
                              Category 14
                            </div>
                            <div className="item" data-value="Category15">
                              Category 15
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
                        <label className="label15">Salary Min*</label>
                        <div className="smm_input">
                          <input
                            type="text"
                            className="job-input"
                            placeholder="Min"
                          />
                          <div className="mix_max">Usd</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Salary Max*</label>
                        <div className="smm_input">
                          <input
                            type="text"
                            className="job-input"
                            placeholder="Max"
                          />
                          <div className="mix_max">Usd</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Location*</label>
                        <div className="smm_input">
                          <input
                            type="text"
                            className="job-input"
                            placeholder="Type Address"
                          />
                          <div className="loc_icon">
                            <i className="fas fa-map-marker-alt" />
                          </div>
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
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="label15">Upload Files*</label>
                        <div className="image-upload-wrap1">
                          <input
                            className="file-upload-input1"
                            id="file2"
                            type="file"
                            onchange="readURL(this);"
                            accept="image/*"
                          />
                          <div className="drag-text1">Upload Files</div>
                        </div>
                        <p className="upload_dt">
                          Images, Pdf and MS Word Filess
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button className="post_jp_btn" type="submit">
                        Post a Job
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
                  <h4>01. Is there a fee to post a job?</h4>
                  <p>
                    There are pricing plans monthly and yearly for jobs on
                    Jobby. It is a paid service that we offer bith for the
                    employer and the freelancer.
                  </p>
                </div>
                <div className="jp_faq_item">
                  <h4>02. How do I find freelancers for my job?</h4>
                  <p>
                    Posting a job on Jobby will get your job in front of the
                    most qualified freelancers and agencies. You will then get
                    applications for the job with the applicant’s details and
                    reasons why they are the best fit for the job. You can also
                    search for freelancers and invite them to apply.
                  </p>
                </div>
                <div className="jp_faq_item">
                  <h4>03. How do I pay freelancers and agencies?</h4>
                  <p>
                    You’re free to pay your freelancer and agencies. you can pay
                    automatically for their work through Paypal, Payoneer, or
                    (which allows you to pay via credit card, debit card).
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

export default PostAJob;
