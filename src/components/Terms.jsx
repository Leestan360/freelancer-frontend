import { Helmet } from "react-helmet";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Terms() {
  return (
    <div>
      <Helmet>
        <title>Jobby - Terms of Service</title>
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
                  Terms of Service
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
                <h2>Jobby Terms of Service</h2>
                <div className="line-shape1">
                  <img src="images/line.svg" alt="" />
                </div>
              </div>
              <div className="policy_des">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris a ante erat. Sed commodo ipsum sed augue suscipit, eget
                  malesuada sem dignissim. Cras id lorem sagittis ex convallis
                  rutrum a blandit orci. Curabitur rutrum pretium purus id
                  facilisis. Cras tempus, felis quis fermentum luctus, elit
                  lacus porta lectus, vitae fringilla nisl leo dapibus dolor.
                  Donec convallis finibus velit, et rutrum dolor scelerisque sit
                  amet. Etiam posuere urna sit amet erat imperdiet, eget tempor
                  leo ullamcorper. Nunc laoreet dui eget quam efficitur, non
                  fermentum nisi eleifend. Pellentesque fringilla tortor eget
                  auctor rhoncus. Donec faucibus dui velit, non vulputate ante
                  ultrices sit amet. Praesent risus diam, luctus et dictum ut,
                  lobortis vel mi.
                </p>
                <div className="policy_des10">
                  <h4>1. Definitions</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris a ante erat. Sed commodo ipsum sed augue suscipit,
                    eget malesuada sem dignissim. Cras id lorem sagittis ex
                    convallis rutrum a blandit orci. Curabitur rutrum pretium
                    purus id facilisis. Cras tempus, felis quis fermentum
                    luctus, elit lacus porta lectus, vitae fringilla nisl leo
                    dapibus dolor. Donec convallis finibus velit, et rutrum
                    dolor scelerisque sit amet. Etiam posuere urna sit amet erat
                    imperdiet, eget tempor leo ullamcorper. Nunc laoreet dui
                    eget quam efficitur, non fermentum nisi eleifend.
                    Pellentesque fringilla tortor eget auctor rhoncus. Donec
                    faucibus dui velit, non vulputate ante ultrices sit amet.
                    Praesent risus diam, luctus et dictum ut, lobortis vel mi.
                  </p>
                </div>
                <div className="policy_des10">
                  <h4>
                    2. License for use of the service; identity authentication
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris a ante erat. Sed commodo ipsum sed augue suscipit,
                    eget malesuada sem dignissim. Cras id lorem sagittis ex
                    convallis rutrum a blandit orci. Curabitur rutrum pretium
                    purus id facilisis. Cras tempus, felis quis fermentum
                    luctus, elit lacus porta lectus, vitae fringilla nisl leo
                    dapibus dolor. Donec convallis finibus velit, et rutrum
                    dolor scelerisque sit amet. Etiam posuere urna sit amet erat
                    imperdiet, eget tempor leo ullamcorper. Nunc laoreet dui
                    eget quam efficitur, non fermentum nisi eleifend.
                    Pellentesque fringilla tortor eget auctor rhoncus. Donec
                    faucibus dui velit, non vulputate ante ultrices sit amet.
                    Praesent risus diam, luctus et dictum ut, lobortis vel mi.
                  </p>
                </div>
                <div className="policy_des10">
                  <h4>3. Installation, customization, and updates</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris a ante erat. Sed commodo ipsum sed augue suscipit,
                    eget malesuada sem dignissim. Cras id lorem sagittis ex
                    convallis rutrum a blandit orci. Curabitur rutrum pretium
                    purus id facilisis. Cras tempus, felis quis fermentum
                    luctus, elit lacus porta lectus, vitae fringilla nisl leo
                    dapibus dolor. Donec convallis finibus velit, et rutrum
                    dolor scelerisque sit amet. Etiam posuere urna sit amet erat
                    imperdiet, eget tempor leo ullamcorper. Nunc laoreet dui
                    eget quam efficitur, non fermentum nisi eleifend.
                    Pellentesque fringilla tortor eget auctor rhoncus. Donec
                    faucibus dui velit, non vulputate ante ultrices sit amet.
                    Praesent risus diam, luctus et dictum ut, lobortis vel mi.
                  </p>
                </div>
                <div className="policy_des10">
                  <h4>4. Term and fees</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris a ante erat. Sed commodo ipsum sed augue suscipit,
                    eget malesuada sem dignissim. Cras id lorem sagittis ex
                    convallis rutrum a blandit orci. Curabitur rutrum pretium
                    purus id facilisis. Cras tempus, felis quis fermentum
                    luctus, elit lacus porta lectus, vitae fringilla nisl leo
                    dapibus dolor. Donec convallis finibus velit, et rutrum
                    dolor scelerisque sit amet. Etiam posuere urna sit amet erat
                    imperdiet, eget tempor leo ullamcorper. Nunc laoreet dui
                    eget quam efficitur, non fermentum nisi eleifend.
                    Pellentesque fringilla tortor eget auctor rhoncus. Donec
                    faucibus dui velit, non vulputate ante ultrices sit amet.
                    Praesent risus diam, luctus et dictum ut, lobortis vel mi.
                  </p>
                </div>
                <div className="policy_des10">
                  <h4>5. Termination</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris a ante erat. Sed commodo ipsum sed augue suscipit,
                    eget malesuada sem dignissim. Cras id lorem sagittis ex
                    convallis rutrum a blandit orci. Curabitur rutrum pretium
                    purus id facilisis. Cras tempus, felis quis fermentum
                    luctus, elit lacus porta lectus, vitae fringilla nisl leo
                    dapibus dolor. Donec convallis finibus velit, et rutrum
                    dolor scelerisque sit amet. Etiam posuere urna sit amet erat
                    imperdiet, eget tempor leo ullamcorper. Nunc laoreet dui
                    eget quam efficitur, non fermentum nisi eleifend.
                    Pellentesque fringilla tortor eget auctor rhoncus. Donec
                    faucibus dui velit, non vulputate ante ultrices sit amet.
                    Praesent risus diam, luctus et dictum ut, lobortis vel mi.
                  </p>
                </div>
                <div className="policy_des10">
                  <h4>6. Proprietary nature of the service</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris a ante erat. Sed commodo ipsum sed augue suscipit,
                    eget malesuada sem dignissim. Cras id lorem sagittis ex
                    convallis rutrum a blandit orci. Curabitur rutrum pretium
                    purus id facilisis. Cras tempus, felis quis fermentum
                    luctus, elit lacus porta lectus, vitae fringilla nisl leo
                    dapibus dolor. Donec convallis finibus velit, et rutrum
                    dolor scelerisque sit amet. Etiam posuere urna sit amet erat
                    imperdiet, eget tempor leo ullamcorper. Nunc laoreet dui
                    eget quam efficitur, non fermentum nisi eleifend.
                    Pellentesque fringilla tortor eget auctor rhoncus. Donec
                    faucibus dui velit, non vulputate ante ultrices sit amet.
                    Praesent risus diam, luctus et dictum ut, lobortis vel mi.
                  </p>
                </div>
                <div className="policy_des10">
                  <h4>7. Consent to use of data</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris a ante erat. Sed commodo ipsum sed augue suscipit,
                    eget malesuada sem dignissim. Cras id lorem sagittis ex
                    convallis rutrum a blandit orci. Curabitur rutrum pretium
                    purus id facilisis. Cras tempus, felis quis fermentum
                    luctus, elit lacus porta lectus, vitae fringilla nisl leo
                    dapibus dolor. Donec convallis finibus velit, et rutrum
                    dolor scelerisque sit amet. Etiam posuere urna sit amet erat
                    imperdiet, eget tempor leo ullamcorper. Nunc laoreet dui
                    eget quam efficitur, non fermentum nisi eleifend.
                    Pellentesque fringilla tortor eget auctor rhoncus. Donec
                    faucibus dui velit, non vulputate ante ultrices sit amet.
                    Praesent risus diam, luctus et dictum ut, lobortis vel mi.
                  </p>
                </div>
                <div className="policy_des10">
                  <h4>8. Content and linking to other websites</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris a ante erat. Sed commodo ipsum sed augue suscipit,
                    eget malesuada sem dignissim. Cras id lorem sagittis ex
                    convallis rutrum a blandit orci. Curabitur rutrum pretium
                    purus id facilisis. Cras tempus, felis quis fermentum
                    luctus, elit lacus porta lectus, vitae fringilla nisl leo
                    dapibus dolor. Donec convallis finibus velit, et rutrum
                    dolor scelerisque sit amet. Etiam posuere urna sit amet erat
                    imperdiet, eget tempor leo ullamcorper. Nunc laoreet dui
                    eget quam efficitur, non fermentum nisi eleifend.
                    Pellentesque fringilla tortor eget auctor rhoncus. Donec
                    faucibus dui velit, non vulputate ante ultrices sit amet.
                    Praesent risus diam, luctus et dictum ut, lobortis vel mi.
                  </p>
                </div>
                <div className="policy_des10">
                  <h4>9. User content</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris a ante erat. Sed commodo ipsum sed augue suscipit,
                    eget malesuada sem dignissim. Cras id lorem sagittis ex
                    convallis rutrum a blandit orci. Curabitur rutrum pretium
                    purus id facilisis. Cras tempus, felis quis fermentum
                    luctus, elit lacus porta lectus, vitae fringilla nisl leo
                    dapibus dolor. Donec convallis finibus velit, et rutrum
                    dolor scelerisque sit amet. Etiam posuere urna sit amet erat
                    imperdiet, eget tempor leo ullamcorper. Nunc laoreet dui
                    eget quam efficitur, non fermentum nisi eleifend.
                    Pellentesque fringilla tortor eget auctor rhoncus. Donec
                    faucibus dui velit, non vulputate ante ultrices sit amet.
                    Praesent risus diam, luctus et dictum ut, lobortis vel mi.
                  </p>
                </div>
                <div className="policy_des10">
                  <h4>
                    10. International users consent to cross-border transfers of
                    personal information
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris a ante erat. Sed commodo ipsum sed augue suscipit,
                    eget malesuada sem dignissim. Cras id lorem sagittis ex
                    convallis rutrum a blandit orci. Curabitur rutrum pretium
                    purus id facilisis. Cras tempus, felis quis fermentum
                    luctus, elit lacus porta lectus, vitae fringilla nisl leo
                    dapibus dolor. Donec convallis finibus velit, et rutrum
                    dolor scelerisque sit amet. Etiam posuere urna sit amet erat
                    imperdiet, eget tempor leo ullamcorper. Nunc laoreet dui
                    eget quam efficitur, non fermentum nisi eleifend.
                    Pellentesque fringilla tortor eget auctor rhoncus. Donec
                    faucibus dui velit, non vulputate ante ultrices sit amet.
                    Praesent risus diam, luctus et dictum ut, lobortis vel mi.
                  </p>
                </div>
                <div className="policy_des10">
                  <h4>11. Refund policy</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris a ante erat. Sed commodo ipsum sed augue suscipit,
                    eget malesuada sem dignissim. Cras id lorem sagittis ex
                    convallis rutrum a blandit orci. Curabitur rutrum pretium
                    purus id facilisis. Cras tempus, felis quis fermentum
                    luctus, elit lacus porta lectus, vitae fringilla nisl leo
                    dapibus dolor. Donec convallis finibus velit, et rutrum
                    dolor scelerisque sit amet. Etiam posuere urna sit amet erat
                    imperdiet, eget tempor leo ullamcorper. Nunc laoreet dui
                    eget quam efficitur, non fermentum nisi eleifend.
                    Pellentesque fringilla tortor eget auctor rhoncus. Donec
                    faucibus dui velit, non vulputate ante ultrices sit amet.
                    Praesent risus diam, luctus et dictum ut, lobortis vel mi.
                  </p>
                </div>
                <div className="policy_des10">
                  <h4>12. Legal notice</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris a ante erat. Sed commodo ipsum sed augue suscipit,
                    eget malesuada sem dignissim. Cras id lorem sagittis ex
                    convallis rutrum a blandit orci. Curabitur rutrum pretium
                    purus id facilisis. Cras tempus, felis quis fermentum
                    luctus, elit lacus porta lectus, vitae fringilla nisl leo
                    dapibus dolor. Donec convallis finibus velit, et rutrum
                    dolor scelerisque sit amet. Etiam posuere urna sit amet erat
                    imperdiet, eget tempor leo ullamcorper. Nunc laoreet dui
                    eget quam efficitur, non fermentum nisi eleifend.
                    Pellentesque fringilla tortor eget auctor rhoncus. Donec
                    faucibus dui velit, non vulputate ante ultrices sit amet.
                    Praesent risus diam, luctus et dictum ut, lobortis vel mi.
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

export default Terms;
