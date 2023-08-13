import Footer from "./Footer";
import NavBar from "./NavBar";

function OurBlog() {
  return (
    <div>

      <title>Jobby - Our Blog</title>

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
                  Our Blog
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
                <h2>Our Blog</h2>
                <div className="line-shape1">
                  <img src="images/line.svg" alt="" />
                </div>
              </div>
              <div className="plans150">
                <div className="row">
                  <div className="col-lg-9 col-md-12">
                    <div className="blog_item">
                      <div className="blog_img">
                        <img src="images/blog/img-1.jpg" alt="" />
                      </div>
                      <div className="blog_dt">
                        <div className="blog_body">
                          <div className="blog_left">
                            <p>
                              By <a href="#">John Doe</a>
                            </p>
                          </div>
                          <div className="blog_right">
                            <span>2 October 2018</span>
                          </div>
                          <h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </h4>
                          <p>
                            Mauris sit amet lacus vel purus facilisis cursus sed
                            dignissim dolor. Proin at accumsan augue, a
                            scelerisque ex. Vivamus id dignissim tortor. Donec
                            gravida.
                          </p>
                          <a href="blog_single_view.html" className="read_btn">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-12">
                    <div className="subscribe_blog">
                      <div className="subscribe_body">
                        <div className="blog_logo">
                          <img src="images/blog/blog_logo.svg" alt="" />
                        </div>
                        <h3>Subscribe and Get Updates</h3>
                        <form>
                          <div className="form-group">
                            <input
                              type="email"
                              className="blog10-input"
                              placeholder="Email Address"
                            />
                          </div>
                          <button className="blogbtn142" type="submit">
                            Subscribe Now
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="blog_item">
                      <div className="blog_img1">
                        <img src="images/blog/img-2.jpg" alt="" />
                      </div>
                      <div className="blog_dt1">
                        <div className="blog_body">
                          <div className="blog_left">
                            <p>
                              By <a href="#">John Doe</a>
                            </p>
                          </div>
                          <div className="blog_right">
                            <span>2 October 2018</span>
                          </div>
                          <h4>
                            Quisque non ipsum at lacus luctus volutpat id ac
                            odio.
                          </h4>
                          <p>
                            Mauris sit amet lacus vel purus facilisis cursus sed
                            dignissim dolor. Proin at accumsan augue...
                          </p>
                          <a href="blog_single_view.html" className="read_btn">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="blog_item">
                      <div className="blog_img1">
                        <img src="images/blog/img-3.jpg" alt="" />
                      </div>
                      <div className="blog_dt1">
                        <div className="blog_body">
                          <div className="blog_left">
                            <p>
                              By <a href="#">John Doe</a>
                            </p>
                          </div>
                          <div className="blog_right">
                            <span>2 October 2018</span>
                          </div>
                          <h4>
                            Quisque non ipsum at lacus luctus volutpat id ac
                            odio.
                          </h4>
                          <p>
                            Mauris sit amet lacus vel purus facilisis cursus sed
                            dignissim dolor. Proin at accumsan augue...
                          </p>
                          <a href="blog_single_view.html" className="read_btn">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="blog_item">
                      <div className="blog_img1">
                        <img src="images/blog/img-3.jpg" alt="" />
                      </div>
                      <div className="blog_dt1">
                        <div className="blog_body">
                          <div className="blog_left">
                            <p>
                              By <a href="#">John Doe</a>
                            </p>
                          </div>
                          <div className="blog_right">
                            <span>2 October 2018</span>
                          </div>
                          <h4>
                            Quisque non ipsum at lacus luctus volutpat id ac
                            odio.
                          </h4>
                          <p>
                            Mauris sit amet lacus vel purus facilisis cursus sed
                            dignissim dolor. Proin at accumsan augue...
                          </p>
                          <a href="blog_single_view.html" className="read_btn">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="blog_item">
                      <div className="blog_img1">
                        <img src="images/blog/img-4.jpg" alt="" />
                      </div>
                      <div className="blog_dt1">
                        <div className="blog_body">
                          <div className="blog_left">
                            <p>
                              By <a href="#">John Doe</a>
                            </p>
                          </div>
                          <div className="blog_right">
                            <span>2 October 2018</span>
                          </div>
                          <h4>
                            Quisque non ipsum at lacus luctus volutpat id ac
                            odio.
                          </h4>
                          <p>
                            Mauris sit amet lacus vel purus facilisis cursus sed
                            dignissim dolor. Proin at accumsan augue...
                          </p>
                          <a href="blog_single_view.html" className="read_btn">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="blog_item">
                      <div className="blog_img1">
                        <img src="images/blog/img-5.jpg" alt="" />
                      </div>
                      <div className="blog_dt1">
                        <div className="blog_body">
                          <div className="blog_left">
                            <p>
                              By <a href="#">John Doe</a>
                            </p>
                          </div>
                          <div className="blog_right">
                            <span>2 October 2018</span>
                          </div>
                          <h4>
                            Quisque non ipsum at lacus luctus volutpat id ac
                            odio.
                          </h4>
                          <p>
                            Mauris sit amet lacus vel purus facilisis cursus sed
                            dignissim dolor. Proin at accumsan augue...
                          </p>
                          <a href="blog_single_view.html" className="read_btn">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="blog_item">
                      <div className="blog_img1">
                        <img src="images/blog/img-6.jpg" alt="" />
                      </div>
                      <div className="blog_dt1">
                        <div className="blog_body">
                          <div className="blog_left">
                            <p>
                              By <a href="#">John Doe</a>
                            </p>
                          </div>
                          <div className="blog_right">
                            <span>2 October 2018</span>
                          </div>
                          <h4>
                            Quisque non ipsum at lacus luctus volutpat id ac
                            odio.
                          </h4>
                          <p>
                            Mauris sit amet lacus vel purus facilisis cursus sed
                            dignissim dolor. Proin at accumsan augue...
                          </p>
                          <a href="blog_single_view.html" className="read_btn">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="main-p-pagination">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination">
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="#"
                              aria-label="Previous"
                            >
                              PREV
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link active" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              ...
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              24
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                              NEXT
                            </a>
                          </li>
                        </ul>
                      </nav>
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

export default OurBlog;
