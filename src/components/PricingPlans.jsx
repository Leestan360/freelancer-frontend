import { Helmet } from "react-helmet";
import Footer from "./Footer";
import NavBar from "./NavBar";

function PricingPlans() {
  return (
    <div>
      <Helmet>
        <title>Jobby - Pricing Plans</title>
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
                  Pricing Plans
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
                <h2>Pricing Plans</h2>
                <div className="line-shape1">
                  <img src="images/line.svg" alt="" />
                </div>
              </div>
              <div className="account_tabs all_plans">
                <ul
                  className="nav nav-tabs justify-content-center"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#monthly_tab"
                      id="monthly-tab"
                      data-toggle="tab"
                    >
                      Monthly Pricing Plans
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#yearly_tab"
                      id="yearly-tab"
                      data-toggle="tab"
                    >
                      Yearly Pricing Plans
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="monthly_tab"
                    role="tabpanel"
                  >
                    <div className="plans150">
                      <div className="row">
                        <div className="col-lg-4 col-md-4">
                          <div className="plan_item">
                            <div className="plan_icon">
                              <i className="far fa-dot-circle" />
                            </div>
                            <h4>BASIC PLANS</h4>
                            <div className="plan_price">
                              <span>$30.00</span>
                              <ins>Monthly</ins>
                            </div>
                            <ul className="plan_dt">
                              <li>
                                <p>5 Listing</p>
                              </li>
                              <li>
                                <p>30 days visibility</p>
                              </li>
                              <li>
                                <p>
                                  Suspendisse id odio lobortis, molestie dui a,
                                  aliquam risus. Praesent pulvinar, lectus a
                                  pharetra congue.
                                </p>
                              </li>
                            </ul>
                            <div className="plan_btn">
                              <a href="checkout.html">Purchase Now</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <div className="plan_item">
                            <div className="plan_icon">
                              <i className="far fa-moon" />
                            </div>
                            <h4>STANDARD PLANS</h4>
                            <div className="plan_price">
                              <span>$60.00</span>
                              <ins>Monthly</ins>
                            </div>
                            <ul className="plan_dt">
                              <li>
                                <p>50 Listing</p>
                              </li>
                              <li>
                                <p>30 days visibility</p>
                              </li>
                              <li>
                                <p>
                                  Suspendisse id odio lobortis, molestie dui a,
                                  aliquam risus. Praesent pulvinar, lectus a
                                  pharetra congue.
                                </p>
                              </li>
                            </ul>
                            <div className="plan_btn">
                              <a href="checkout.html">Purchase Now</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <div className="plan_item">
                            <div className="plan_icon">
                              <i className="far fa-gem" />
                            </div>
                            <h4>PROFESSNIONAL PLANS</h4>
                            <div className="plan_price">
                              <span>$200.00</span>
                              <ins>Monthly</ins>
                            </div>
                            <ul className="plan_dt">
                              <li>
                                <p>Unlimited Listing</p>
                              </li>
                              <li>
                                <p>30 days visibility</p>
                              </li>
                              <li>
                                <p>
                                  Suspendisse id odio lobortis, molestie dui a,
                                  aliquam risus. Praesent pulvinar, lectus a
                                  pharetra congue.
                                </p>
                              </li>
                            </ul>
                            <div className="plan_btn">
                              <a href="checkout.html">Purchase Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show"
                    id="yearly_tab"
                    role="tabpanel"
                  >
                    <div className="plans150">
                      <div className="row">
                        <div className="col-lg-4 col-md-4">
                          <div className="plan_item">
                            <div className="plan_icon">
                              <i className="far fa-dot-circle" />
                            </div>
                            <h4>BASIC PLANS</h4>
                            <div className="plan_price">
                              <span>$500.00</span>
                              <ins>Yearly</ins>
                            </div>
                            <ul className="plan_dt">
                              <li>
                                <p>500 Listing</p>
                              </li>
                              <li>
                                <p>365 days visibility</p>
                              </li>
                              <li>
                                <p>
                                  Suspendisse id odio lobortis, molestie dui a,
                                  aliquam risus. Praesent pulvinar, lectus a
                                  pharetra congue.
                                </p>
                              </li>
                            </ul>
                            <div className="plan_btn">
                              <a href="checkout.html">Purchase Now</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <div className="plan_item">
                            <div className="plan_icon">
                              <i className="far fa-moon" />
                            </div>
                            <h4>STANDARD PLANS</h4>
                            <div className="plan_price">
                              <span>$1000.00</span>
                              <ins>Yearly</ins>
                            </div>
                            <ul className="plan_dt">
                              <li>
                                <p>1000 Listing</p>
                              </li>
                              <li>
                                <p>365 days visibility</p>
                              </li>
                              <li>
                                <p>
                                  Suspendisse id odio lobortis, molestie dui a,
                                  aliquam risus. Praesent pulvinar, lectus a
                                  pharetra congue.
                                </p>
                              </li>
                            </ul>
                            <div className="plan_btn">
                              <a href="checkout.html">Purchase Now</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <div className="plan_item">
                            <div className="plan_icon">
                              <i className="far fa-gem" />
                            </div>
                            <h4>PROFESSNIONAL PLANS</h4>
                            <div className="plan_price">
                              <span>$2000.00</span>
                              <ins>Yearly</ins>
                            </div>
                            <ul className="plan_dt">
                              <li>
                                <p>Unlimited Listing</p>
                              </li>
                              <li>
                                <p>365 days visibility</p>
                              </li>
                              <li>
                                <p>
                                  Suspendisse id odio lobortis, molestie dui a,
                                  aliquam risus. Praesent pulvinar, lectus a
                                  pharetra congue.
                                </p>
                              </li>
                            </ul>
                            <div className="plan_btn">
                              <a href="checkout.html">Purchase Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="statement_table">
                <div className="statement_header">
                  <h4>Statements</h4>
                </div>
                <div className="statement_body">
                  <div className="table-responsive-md">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Date</th>
                          <th scope="col">Order ID</th>
                          <th scope="col">Details</th>
                          <th scope="col">Type</th>
                          <th scope="col">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <div className="user_dt_trans">
                              <p>10 December 2019</p>
                            </div>
                          </th>
                          <td>
                            <div className="user_dt_trans">
                              <p>1258963487</p>
                            </div>
                          </td>
                          <td>
                            <div className="user_dt_trans">
                              <div className="aadd14">Professional Plan</div>
                              <a href="#" target="_blank">
                                Invoice : IVIP12023598
                              </a>
                            </div>
                          </td>
                          <td>
                            <div className="user_dt_trans">
                              <p>Monthly</p>
                            </div>
                          </td>
                          <td>
                            <div className="user_dt_trans">
                              <p>$200.00</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div className="user_dt_trans">
                              <p>10 November 2019</p>
                            </div>
                          </th>
                          <td>
                            <div className="user_dt_trans">
                              <p>1258963369</p>
                            </div>
                          </td>
                          <td>
                            <div className="user_dt_trans">
                              <div className="aadd14">Professional Plan</div>
                              <a href="#">Invoice : IVIP12023499</a>
                            </div>
                          </td>
                          <td>
                            <div className="user_dt_trans">
                              <p>Monthly</p>
                            </div>
                          </td>
                          <td>
                            <div className="user_dt_trans">
                              <p>$200.00</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div className="user_dt_trans">
                              <p>10 October 2019</p>
                            </div>
                          </th>
                          <td>
                            <div className="user_dt_trans">
                              <p>1258963287</p>
                            </div>
                          </td>
                          <td>
                            <div className="user_dt_trans">
                              <div className="aadd14">Professional Plan</div>
                              <a href="#" target="_blank">
                                Invoice : IVIP11023405
                              </a>
                            </div>
                          </td>
                          <td>
                            <div className="user_dt_trans">
                              <p>Monthly</p>
                            </div>
                          </td>
                          <td>
                            <div className="user_dt_trans">
                              <p>$200.00</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div className="user_dt_trans">
                              <p>10 October 2018</p>
                            </div>
                          </th>
                          <td>
                            <div className="user_dt_trans">
                              <p>1081.058963287</p>
                            </div>
                          </td>
                          <td>
                            <div className="user_dt_trans">
                              <div className="aadd14">Professional Plan</div>
                              <a href="#" target="_blank">
                                Invoice : IVIP1102587
                              </a>
                            </div>
                          </td>
                          <td>
                            <div className="user_dt_trans">
                              <p>Yearly</p>
                            </div>
                          </td>
                          <td>
                            <div className="user_dt_trans">
                              <p>$2000.00</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default PricingPlans;
