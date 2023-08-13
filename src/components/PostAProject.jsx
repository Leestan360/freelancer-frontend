import Footer from "./Footer";
import NavBar from "./NavBar";

function PostAProject() {
  return (
    <div>

      <title>Jobby - Post a Project</title>

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
                  Post a Project
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
                <h2>Post a Project</h2>
                <div className="line-shape1">
                  <img src="images/line.svg" alt="" />
                </div>
              </div>
              <div className="post501">
                <form>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="label15">Project Name*</label>
                        <input
                          type="text"
                          className="job-input"
                          placeholder="Project Name Here"
                        />
                      </div>
                      <div className="form-group">
                        <label className="label15">Project Description*</label>
                        <textarea
                          className="textarea_input"
                          placeholder="Type Description"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="requires">
                        What are the Project requirements
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Project Category*</label>
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
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="label15">Budget*</label>
                        <div className="ui fluid search selection dropdown skills-search">
                          <input name="tags" type="hidden" defaultValue />
                          <i className="dropdown icon" />
                          <input
                            className="search"
                            autoComplete="off"
                            tabIndex={0}
                          />
                          <span className="sizer" style={{}} />
                          <div className="default text">Hourly Price</div>
                          <div className="menu transition hidden" tabIndex={-1}>
                            <div className="item selected" data-value="hp1">
                              Hourly Price
                            </div>
                            <div className="item selected" data-value="fp2">
                              Fixed Price
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
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
                            <i className="fas fa-map-marker-alt" />
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
                        Post a Project
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
                  <h4>01. Is there a fee to post a project?</h4>
                  <p>
                    There are pricing plans monthly and yearly for project on
                    Jobby. It is a paid service that we offer bith for the
                    employer and the freelancer.
                  </p>
                </div>
                <div className="jp_faq_item">
                  <h4>02. How do I find freelancers for my project?</h4>
                  <p>
                    Posting a project on Jobby will get your project in front of
                    the most qualified freelancers and agencies by bids. You
                    will then get bids for the project with the applicant’s
                    details and reasons why they are the best fit for the
                    projects. You can also search for freelancers and invite
                    them to apply.
                  </p>
                </div>
                <div className="jp_faq_item">
                  <h4>03. How do I pay freelancers &amp; agencies?</h4>
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

export default PostAProject;
