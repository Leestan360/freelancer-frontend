import Footer from "./Footer";
import NavBar from "./NavBar";

function BrowseProjects() {
  return (
    <div>

      <title>Jobby - Browse Projects</title>

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
                  Browser Projects
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
            <div className="col-lg-4 col-md-5">
              <div className="browser-job-filters">
                <div className="filter-heading">
                  <div className="fh-left">Filters</div>
                  <div className="fh-right">
                    <a href="#">Clear All Filters</a>
                  </div>
                </div>
                <div className="fltr-group">
                  <div className="fltr-items-heading">
                    <div className="fltr-item-left">
                      <h6>Skills</h6>
                    </div>
                    <div className="fltr-item-right">
                      <a href="#">Clear</a>
                    </div>
                  </div>
                  <div className="ui fluid multiple search selection dropdown skills-search">
                    <input name="tags" type="hidden" defaultValue />
                    <i className="dropdown icon" />
                    <input className="search" autoComplete="off" tabIndex={0} />
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
                <div className="fltr-group">
                  <div className="fltr-items-heading">
                    <div className="fltr-item-left">
                      <h6>Availability</h6>
                    </div>
                    <div className="fltr-item-right">
                      <a href="#">Clear</a>
                    </div>
                  </div>
                  <div className="ui form">
                    <div className="grouped fields">
                      <div className="field fltr-radio">
                        <div className="ui radio checkbox">
                          <input
                            type="radio"
                            name="example2"
                            defaultChecked="checked"
                          />
                          <label>Hourly</label>
                        </div>
                      </div>
                      <div className="field">
                        <div className="ui radio checkbox">
                          <input type="radio" name="example2" />
                          <label>Part Time</label>
                        </div>
                      </div>
                      <div className="field">
                        <div className="ui radio checkbox">
                          <input type="radio" name="example2" />
                          <label className="lst-label">Full Time</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fltr-group">
                  <div className="fltr-items-heading">
                    <div className="fltr-item-left">
                      <h6>Job Type</h6>
                    </div>
                    <div className="fltr-item-right">
                      <a href="#">Clear</a>
                    </div>
                  </div>
                  <div className="ui fluid search selection dropdown skills-search">
                    <input name="tags" type="hidden" defaultValue />
                    <i className="dropdown icon" />
                    <input className="search" autoComplete="off" tabIndex={0} />
                    <span className="sizer" style={{}} />
                    <div className="default text">Select a job</div>
                    <div className="menu transition hidden" tabIndex={-1}>
                      <div className="item selected" data-value="Job1">
                        Job 01
                      </div>
                      <div className="item" data-value="Job2">
                        Job 02
                      </div>
                      <div className="item" data-value="Job3">
                        Job 03
                      </div>
                      <div className="item" data-value="Job4">
                        Job 04
                      </div>
                      <div className="item" data-value="Job5">
                        Job 05
                      </div>
                      <div className="item" data-value="Job6">
                        Job 06
                      </div>
                      <div className="item" data-value="Job7">
                        Job 07
                      </div>
                      <div className="item" data-value="Job8">
                        Job 08
                      </div>
                      <div className="item" data-value="Job9">
                        Job 09
                      </div>
                      <div className="item" data-value="Job10">
                        Job 10
                      </div>
                      <div className="item" data-value="Job11">
                        Job 11
                      </div>
                      <div className="item" data-value="Job12">
                        Job 12
                      </div>
                      <div className="item" data-value="Job13">
                        Job 13
                      </div>
                      <div className="item" data-value="Job14">
                        Job 14
                      </div>
                      <div className="item" data-value="Job15">
                        Job 15
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fltr-group">
                  <div className="fltr-items-heading">
                    <div className="fltr-item-left">
                      <h6>
                        Pay Rate <span>($)</span>
                      </h6>
                    </div>
                    <div className="fltr-item-right">
                      <a href="#">Clear</a>
                    </div>
                  </div>
                  <div className="filter-dd">
                    <div className="rg-slider">
                      <input
                        className="rn-slider slider-input"
                        type="hidden"
                        defaultValue="5,500"
                      />
                    </div>
                    <div className="rg-limit">
                      <h4>5</h4>
                      <h4>5000</h4>
                    </div>
                  </div>
                </div>
                <div className="fltr-group">
                  <div className="fltr-items-heading">
                    <div className="fltr-item-left">
                      <h6>Experience Level</h6>
                    </div>
                    <div className="fltr-item-right">
                      <a href="#">Clear</a>
                    </div>
                  </div>
                  <div className="ui fluid search selection dropdown skills-search">
                    <input name="tags" type="hidden" defaultValue />
                    <i className="dropdown icon" />
                    <input className="search" autoComplete="off" tabIndex={0} />
                    <span className="sizer" style={{}} />
                    <div className="default text">Select Experience Level</div>
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
                <div className="fltr-group fltr-gend">
                  <div className="fltr-items-heading">
                    <div className="fltr-item-left">
                      <h6>Location</h6>
                    </div>
                    <div className="fltr-item-right">
                      <a href="#">Clear</a>
                    </div>
                  </div>
                  <div className="ui fluid search selection dropdown skills-search">
                    <input type="hidden" name="country" />
                    <div className="default text">Select Country</div>
                    <i className="dropdown icon" />
                    <div className="menu transition hidden" tabIndex={-1}>
                      <div className="item" data-value="af">
                        <i className="af flag" />
                        Afghanistan
                      </div>
                      <div className="item" data-value="ax">
                        <i className="ax flag" />
                        Aland Islands
                      </div>
                      <div className="item" data-value="al">
                        <i className="al flag" />
                        Albania
                      </div>
                      <div className="item" data-value="dz">
                        <i className="dz flag" />
                        Algeria
                      </div>
                      <div className="item" data-value="as">
                        <i className="as flag" />
                        American Samoa
                      </div>
                      <div className="item" data-value="ad">
                        <i className="ad flag" />
                        Andorra
                      </div>
                      <div className="item" data-value="ao">
                        <i className="ao flag" />
                        Angola
                      </div>
                      <div className="item" data-value="ai">
                        <i className="ai flag" />
                        Anguilla
                      </div>
                      <div className="item" data-value="ag">
                        <i className="ag flag" />
                        Antigua
                      </div>
                      <div className="item" data-value="ar">
                        <i className="ar flag" />
                        Argentina
                      </div>
                      <div className="item" data-value="am">
                        <i className="am flag" />
                        Armenia
                      </div>
                      <div className="item" data-value="aw">
                        <i className="aw flag" />
                        Aruba
                      </div>
                      <div className="item" data-value="au">
                        <i className="au flag" />
                        Australia
                      </div>
                      <div className="item" data-value="at">
                        <i className="at flag" />
                        Austria
                      </div>
                      <div className="item" data-value="az">
                        <i className="az flag" />
                        Azerbaijan
                      </div>
                      <div className="item" data-value="bs">
                        <i className="bs flag" />
                        Bahamas
                      </div>
                      <div className="item" data-value="bh">
                        <i className="bh flag" />
                        Bahrain
                      </div>
                      <div className="item" data-value="bd">
                        <i className="bd flag" />
                        Bangladesh
                      </div>
                      <div className="item" data-value="bb">
                        <i className="bb flag" />
                        Barbados
                      </div>
                      <div className="item" data-value="by">
                        <i className="by flag" />
                        Belarus
                      </div>
                      <div className="item" data-value="be">
                        <i className="be flag" />
                        Belgium
                      </div>
                      <div className="item" data-value="bz">
                        <i className="bz flag" />
                        Belize
                      </div>
                      <div className="item" data-value="bj">
                        <i className="bj flag" />
                        Benin
                      </div>
                      <div className="item" data-value="bm">
                        <i className="bm flag" />
                        Bermuda
                      </div>
                      <div className="item" data-value="bt">
                        <i className="bt flag" />
                        Bhutan
                      </div>
                      <div className="item" data-value="bo">
                        <i className="bo flag" />
                        Bolivia
                      </div>
                      <div className="item" data-value="ba">
                        <i className="ba flag" />
                        Bosnia
                      </div>
                      <div className="item" data-value="bw">
                        <i className="bw flag" />
                        Botswana
                      </div>
                      <div className="item" data-value="bv">
                        <i className="bv flag" />
                        Bouvet Island
                      </div>
                      <div className="item" data-value="br">
                        <i className="br flag" />
                        Brazil
                      </div>
                      <div className="item" data-value="vg">
                        <i className="vg flag" />
                        British Virgin Islands
                      </div>
                      <div className="item" data-value="bn">
                        <i className="bn flag" />
                        Brunei
                      </div>
                      <div className="item" data-value="bg">
                        <i className="bg flag" />
                        Bulgaria
                      </div>
                      <div className="item" data-value="bf">
                        <i className="bf flag" />
                        Burkina Faso
                      </div>
                      <div className="item" data-value="mm">
                        <i className="mm flag" />
                        Burma
                      </div>
                      <div className="item" data-value="bi">
                        <i className="bi flag" />
                        Burundi
                      </div>
                      <div className="item" data-value="tc">
                        <i className="tc flag" />
                        Caicos Islands
                      </div>
                      <div className="item" data-value="kh">
                        <i className="kh flag" />
                        Cambodia
                      </div>
                      <div className="item" data-value="cm">
                        <i className="cm flag" />
                        Cameroon
                      </div>
                      <div className="item" data-value="ca">
                        <i className="ca flag" />
                        Canada
                      </div>
                      <div className="item" data-value="cv">
                        <i className="cv flag" />
                        Cape Verde
                      </div>
                      <div className="item" data-value="ky">
                        <i className="ky flag" />
                        Cayman Islands
                      </div>
                      <div className="item" data-value="cf">
                        <i className="cf flag" />
                        Central African Republic
                      </div>
                      <div className="item" data-value="td">
                        <i className="td flag" />
                        Chad
                      </div>
                      <div className="item" data-value="cl">
                        <i className="cl flag" />
                        Chile
                      </div>
                      <div className="item" data-value="cn">
                        <i className="cn flag" />
                        China
                      </div>
                      <div className="item" data-value="cx">
                        <i className="cx flag" />
                        Christmas Island
                      </div>
                      <div className="item" data-value="cc">
                        <i className="cc flag" />
                        Cocos Islands
                      </div>
                      <div className="item" data-value="co">
                        <i className="co flag" />
                        Colombia
                      </div>
                      <div className="item" data-value="km">
                        <i className="km flag" />
                        Comoros
                      </div>
                      <div className="item" data-value="cg">
                        <i className="cg flag" />
                        Congo Brazzaville
                      </div>
                      <div className="item" data-value="cd">
                        <i className="cd flag" />
                        Congo
                      </div>
                      <div className="item" data-value="ck">
                        <i className="ck flag" />
                        Cook Islands
                      </div>
                      <div className="item" data-value="cr">
                        <i className="cr flag" />
                        Costa Rica
                      </div>
                      <div className="item" data-value="ci">
                        <i className="ci flag" />
                        Cote Divoire
                      </div>
                      <div className="item" data-value="hr">
                        <i className="hr flag" />
                        Croatia
                      </div>
                      <div className="item" data-value="cu">
                        <i className="cu flag" />
                        Cuba
                      </div>
                      <div className="item" data-value="cy">
                        <i className="cy flag" />
                        Cyprus
                      </div>
                      <div className="item" data-value="cz">
                        <i className="cz flag" />
                        Czech Republic
                      </div>
                      <div className="item" data-value="dk">
                        <i className="dk flag" />
                        Denmark
                      </div>
                      <div className="item" data-value="dj">
                        <i className="dj flag" />
                        Djibouti
                      </div>
                      <div className="item" data-value="dm">
                        <i className="dm flag" />
                        Dominica
                      </div>
                      <div className="item" data-value="do">
                        <i className="do flag" />
                        Dominican Republic
                      </div>
                      <div className="item" data-value="ec">
                        <i className="ec flag" />
                        Ecuador
                      </div>
                      <div className="item" data-value="eg">
                        <i className="eg flag" />
                        Egypt
                      </div>
                      <div className="item" data-value="sv">
                        <i className="sv flag" />
                        El Salvador
                      </div>
                      <div className="item" data-value="gb">
                        <i className="gb flag" />
                        England
                      </div>
                      <div className="item" data-value="gq">
                        <i className="gq flag" />
                        Equatorial Guinea
                      </div>
                      <div className="item" data-value="er">
                        <i className="er flag" />
                        Eritrea
                      </div>
                      <div className="item" data-value="ee">
                        <i className="ee flag" />
                        Estonia
                      </div>
                      <div className="item" data-value="et">
                        <i className="et flag" />
                        Ethiopia
                      </div>
                      <div className="item" data-value="eu">
                        <i className="eu flag" />
                        European Union
                      </div>
                      <div className="item" data-value="fk">
                        <i className="fk flag" />
                        Falkland Islands
                      </div>
                      <div className="item" data-value="fo">
                        <i className="fo flag" />
                        Faroe Islands
                      </div>
                      <div className="item" data-value="fj">
                        <i className="fj flag" />
                        Fiji
                      </div>
                      <div className="item" data-value="fi">
                        <i className="fi flag" />
                        Finland
                      </div>
                      <div className="item" data-value="fr">
                        <i className="fr flag" />
                        France
                      </div>
                      <div className="item" data-value="gf">
                        <i className="gf flag" />
                        French Guiana
                      </div>
                      <div className="item" data-value="pf">
                        <i className="pf flag" />
                        French Polynesia
                      </div>
                      <div className="item" data-value="tf">
                        <i className="tf flag" />
                        French Territories
                      </div>
                      <div className="item" data-value="ga">
                        <i className="ga flag" />
                        Gabon
                      </div>
                      <div className="item" data-value="gm">
                        <i className="gm flag" />
                        Gambia
                      </div>
                      <div className="item" data-value="ge">
                        <i className="ge flag" />
                        Georgia
                      </div>
                      <div className="item" data-value="de">
                        <i className="de flag" />
                        Germany
                      </div>
                      <div className="item" data-value="gh">
                        <i className="gh flag" />
                        Ghana
                      </div>
                      <div className="item" data-value="gi">
                        <i className="gi flag" />
                        Gibraltar
                      </div>
                      <div className="item" data-value="gr">
                        <i className="gr flag" />
                        Greece
                      </div>
                      <div className="item" data-value="gl">
                        <i className="gl flag" />
                        Greenland
                      </div>
                      <div className="item" data-value="gd">
                        <i className="gd flag" />
                        Grenada
                      </div>
                      <div className="item" data-value="gp">
                        <i className="gp flag" />
                        Guadeloupe
                      </div>
                      <div className="item" data-value="gu">
                        <i className="gu flag" />
                        Guam
                      </div>
                      <div className="item" data-value="gt">
                        <i className="gt flag" />
                        Guatemala
                      </div>
                      <div className="item" data-value="gw">
                        <i className="gw flag" />
                        Guinea-Bissau
                      </div>
                      <div className="item" data-value="gn">
                        <i className="gn flag" />
                        Guinea
                      </div>
                      <div className="item" data-value="gy">
                        <i className="gy flag" />
                        Guyana
                      </div>
                      <div className="item" data-value="ht">
                        <i className="ht flag" />
                        Haiti
                      </div>
                      <div className="item" data-value="hm">
                        <i className="hm flag" />
                        Heard Island
                      </div>
                      <div className="item" data-value="hn">
                        <i className="hn flag" />
                        Honduras
                      </div>
                      <div className="item" data-value="hk">
                        <i className="hk flag" />
                        Hong Kong
                      </div>
                      <div className="item" data-value="hu">
                        <i className="hu flag" />
                        Hungary
                      </div>
                      <div className="item" data-value="is">
                        <i className="is flag" />
                        Iceland
                      </div>
                      <div className="item" data-value="in">
                        <i className="in flag" />
                        India
                      </div>
                      <div className="item" data-value="io">
                        <i className="io flag" />
                        Indian Ocean Territory
                      </div>
                      <div className="item" data-value="id">
                        <i className="id flag" />
                        Indonesia
                      </div>
                      <div className="item" data-value="ir">
                        <i className="ir flag" />
                        Iran
                      </div>
                      <div className="item" data-value="iq">
                        <i className="iq flag" />
                        Iraq
                      </div>
                      <div className="item" data-value="ie">
                        <i className="ie flag" />
                        Ireland
                      </div>
                      <div className="item" data-value="il">
                        <i className="il flag" />
                        Israel
                      </div>
                      <div className="item" data-value="it">
                        <i className="it flag" />
                        Italy
                      </div>
                      <div className="item" data-value="jm">
                        <i className="jm flag" />
                        Jamaica
                      </div>
                      <div className="item" data-value="jp">
                        <i className="jp flag" />
                        Japan
                      </div>
                      <div className="item" data-value="jo">
                        <i className="jo flag" />
                        Jordan
                      </div>
                      <div className="item" data-value="kz">
                        <i className="kz flag" />
                        Kazakhstan
                      </div>
                      <div className="item" data-value="ke">
                        <i className="ke flag" />
                        Kenya
                      </div>
                      <div className="item" data-value="ki">
                        <i className="ki flag" />
                        Kiribati
                      </div>
                      <div className="item" data-value="kw">
                        <i className="kw flag" />
                        Kuwait
                      </div>
                      <div className="item" data-value="kg">
                        <i className="kg flag" />
                        Kyrgyzstan
                      </div>
                      <div className="item" data-value="la">
                        <i className="la flag" />
                        Laos
                      </div>
                      <div className="item" data-value="lv">
                        <i className="lv flag" />
                        Latvia
                      </div>
                      <div className="item" data-value="lb">
                        <i className="lb flag" />
                        Lebanon
                      </div>
                      <div className="item" data-value="ls">
                        <i className="ls flag" />
                        Lesotho
                      </div>
                      <div className="item" data-value="lr">
                        <i className="lr flag" />
                        Liberia
                      </div>
                      <div className="item" data-value="ly">
                        <i className="ly flag" />
                        Libya
                      </div>
                      <div className="item" data-value="li">
                        <i className="li flag" />
                        Liechtenstein
                      </div>
                      <div className="item" data-value="lt">
                        <i className="lt flag" />
                        Lithuania
                      </div>
                      <div className="item" data-value="lu">
                        <i className="lu flag" />
                        Luxembourg
                      </div>
                      <div className="item" data-value="mo">
                        <i className="mo flag" />
                        Macau
                      </div>
                      <div className="item" data-value="mk">
                        <i className="mk flag" />
                        Macedonia
                      </div>
                      <div className="item" data-value="mg">
                        <i className="mg flag" />
                        Madagascar
                      </div>
                      <div className="item" data-value="mw">
                        <i className="mw flag" />
                        Malawi
                      </div>
                      <div className="item" data-value="my">
                        <i className="my flag" />
                        Malaysia
                      </div>
                      <div className="item" data-value="mv">
                        <i className="mv flag" />
                        Maldives
                      </div>
                      <div className="item" data-value="ml">
                        <i className="ml flag" />
                        Mali
                      </div>
                      <div className="item" data-value="mt">
                        <i className="mt flag" />
                        Malta
                      </div>
                      <div className="item" data-value="mh">
                        <i className="mh flag" />
                        Marshall Islands
                      </div>
                      <div className="item" data-value="mq">
                        <i className="mq flag" />
                        Martinique
                      </div>
                      <div className="item" data-value="mr">
                        <i className="mr flag" />
                        Mauritania
                      </div>
                      <div className="item" data-value="mu">
                        <i className="mu flag" />
                        Mauritius
                      </div>
                      <div className="item" data-value="yt">
                        <i className="yt flag" />
                        Mayotte
                      </div>
                      <div className="item" data-value="mx">
                        <i className="mx flag" />
                        Mexico
                      </div>
                      <div className="item" data-value="fm">
                        <i className="fm flag" />
                        Micronesia
                      </div>
                      <div className="item" data-value="md">
                        <i className="md flag" />
                        Moldova
                      </div>
                      <div className="item" data-value="mc">
                        <i className="mc flag" />
                        Monaco
                      </div>
                      <div className="item" data-value="mn">
                        <i className="mn flag" />
                        Mongolia
                      </div>
                      <div className="item" data-value="me">
                        <i className="me flag" />
                        Montenegro
                      </div>
                      <div className="item" data-value="ms">
                        <i className="ms flag" />
                        Montserrat
                      </div>
                      <div className="item" data-value="ma">
                        <i className="ma flag" />
                        Morocco
                      </div>
                      <div className="item" data-value="mz">
                        <i className="mz flag" />
                        Mozambique
                      </div>
                      <div className="item" data-value="na">
                        <i className="na flag" />
                        Namibia
                      </div>
                      <div className="item" data-value="nr">
                        <i className="nr flag" />
                        Nauru
                      </div>
                      <div className="item" data-value="np">
                        <i className="np flag" />
                        Nepal
                      </div>
                      <div className="item" data-value="an">
                        <i className="an flag" />
                        Netherlands Antilles
                      </div>
                      <div className="item" data-value="nl">
                        <i className="nl flag" />
                        Netherlands
                      </div>
                      <div className="item" data-value="nc">
                        <i className="nc flag" />
                        New Caledonia
                      </div>
                      <div className="item" data-value="pg">
                        <i className="pg flag" />
                        New Guinea
                      </div>
                      <div className="item" data-value="nz">
                        <i className="nz flag" />
                        New Zealand
                      </div>
                      <div className="item" data-value="ni">
                        <i className="ni flag" />
                        Nicaragua
                      </div>
                      <div className="item" data-value="ne">
                        <i className="ne flag" />
                        Niger
                      </div>
                      <div className="item" data-value="ng">
                        <i className="ng flag" />
                        Nigeria
                      </div>
                      <div className="item" data-value="nu">
                        <i className="nu flag" />
                        Niue
                      </div>
                      <div className="item" data-value="nf">
                        <i className="nf flag" />
                        Norfolk Island
                      </div>
                      <div className="item" data-value="kp">
                        <i className="kp flag" />
                        North Korea
                      </div>
                      <div className="item" data-value="mp">
                        <i className="mp flag" />
                        Northern Mariana Islands
                      </div>
                      <div className="item" data-value="no">
                        <i className="no flag" />
                        Norway
                      </div>
                      <div className="item" data-value="om">
                        <i className="om flag" />
                        Oman
                      </div>
                      <div className="item" data-value="pk">
                        <i className="pk flag" />
                        Pakistan
                      </div>
                      <div className="item" data-value="pw">
                        <i className="pw flag" />
                        Palau
                      </div>
                      <div className="item" data-value="ps">
                        <i className="ps flag" />
                        Palestine
                      </div>
                      <div className="item" data-value="pa">
                        <i className="pa flag" />
                        Panama
                      </div>
                      <div className="item" data-value="py">
                        <i className="py flag" />
                        Paraguay
                      </div>
                      <div className="item" data-value="pe">
                        <i className="pe flag" />
                        Peru
                      </div>
                      <div className="item" data-value="ph">
                        <i className="ph flag" />
                        Philippines
                      </div>
                      <div className="item" data-value="pn">
                        <i className="pn flag" />
                        Pitcairn Islands
                      </div>
                      <div className="item" data-value="pl">
                        <i className="pl flag" />
                        Poland
                      </div>
                      <div className="item" data-value="pt">
                        <i className="pt flag" />
                        Portugal
                      </div>
                      <div className="item" data-value="pr">
                        <i className="pr flag" />
                        Puerto Rico
                      </div>
                      <div className="item" data-value="qa">
                        <i className="qa flag" />
                        Qatar
                      </div>
                      <div className="item" data-value="re">
                        <i className="re flag" />
                        Reunion
                      </div>
                      <div className="item" data-value="ro">
                        <i className="ro flag" />
                        Romania
                      </div>
                      <div className="item" data-value="ru">
                        <i className="ru flag" />
                        Russia
                      </div>
                      <div className="item" data-value="rw">
                        <i className="rw flag" />
                        Rwanda
                      </div>
                      <div className="item" data-value="sh">
                        <i className="sh flag" />
                        Saint Helena
                      </div>
                      <div className="item" data-value="kn">
                        <i className="kn flag" />
                        Saint Kitts and Nevis
                      </div>
                      <div className="item" data-value="lc">
                        <i className="lc flag" />
                        Saint Lucia
                      </div>
                      <div className="item" data-value="pm">
                        <i className="pm flag" />
                        Saint Pierre
                      </div>
                      <div className="item" data-value="vc">
                        <i className="vc flag" />
                        Saint Vincent
                      </div>
                      <div className="item" data-value="ws">
                        <i className="ws flag" />
                        Samoa
                      </div>
                      <div className="item" data-value="sm">
                        <i className="sm flag" />
                        San Marino
                      </div>
                      <div className="item" data-value="gs">
                        <i className="gs flag" />
                        Sandwich Islands
                      </div>
                      <div className="item" data-value="st">
                        <i className="st flag" />
                        Sao Tome
                      </div>
                      <div className="item" data-value="sa">
                        <i className="sa flag" />
                        Saudi Arabia
                      </div>
                      <div className="item" data-value="sn">
                        <i className="sn flag" />
                        Senegal
                      </div>
                      <div className="item" data-value="cs">
                        <i className="cs flag" />
                        Serbia
                      </div>
                      <div className="item" data-value="rs">
                        <i className="rs flag" />
                        Serbia
                      </div>
                      <div className="item" data-value="sc">
                        <i className="sc flag" />
                        Seychelles
                      </div>
                      <div className="item" data-value="sl">
                        <i className="sl flag" />
                        Sierra Leone
                      </div>
                      <div className="item" data-value="sg">
                        <i className="sg flag" />
                        Singapore
                      </div>
                      <div className="item" data-value="sk">
                        <i className="sk flag" />
                        Slovakia
                      </div>
                      <div className="item" data-value="si">
                        <i className="si flag" />
                        Slovenia
                      </div>
                      <div className="item" data-value="sb">
                        <i className="sb flag" />
                        Solomon Islands
                      </div>
                      <div className="item" data-value="so">
                        <i className="so flag" />
                        Somalia
                      </div>
                      <div className="item" data-value="za">
                        <i className="za flag" />
                        South Africa
                      </div>
                      <div className="item" data-value="kr">
                        <i className="kr flag" />
                        South Korea
                      </div>
                      <div className="item" data-value="es">
                        <i className="es flag" />
                        Spain
                      </div>
                      <div className="item" data-value="lk">
                        <i className="lk flag" />
                        Sri Lanka
                      </div>
                      <div className="item" data-value="sd">
                        <i className="sd flag" />
                        Sudan
                      </div>
                      <div className="item" data-value="sr">
                        <i className="sr flag" />
                        Suriname
                      </div>
                      <div className="item" data-value="sj">
                        <i className="sj flag" />
                        Svalbard
                      </div>
                      <div className="item" data-value="sz">
                        <i className="sz flag" />
                        Swaziland
                      </div>
                      <div className="item" data-value="se">
                        <i className="se flag" />
                        Sweden
                      </div>
                      <div className="item" data-value="ch">
                        <i className="ch flag" />
                        Switzerland
                      </div>
                      <div className="item" data-value="sy">
                        <i className="sy flag" />
                        Syria
                      </div>
                      <div className="item" data-value="tw">
                        <i className="tw flag" />
                        Taiwan
                      </div>
                      <div className="item" data-value="tj">
                        <i className="tj flag" />
                        Tajikistan
                      </div>
                      <div className="item" data-value="tz">
                        <i className="tz flag" />
                        Tanzania
                      </div>
                      <div className="item" data-value="th">
                        <i className="th flag" />
                        Thailand
                      </div>
                      <div className="item" data-value="tl">
                        <i className="tl flag" />
                        Timorleste
                      </div>
                      <div className="item" data-value="tg">
                        <i className="tg flag" />
                        Togo
                      </div>
                      <div className="item" data-value="tk">
                        <i className="tk flag" />
                        Tokelau
                      </div>
                      <div className="item" data-value="to">
                        <i className="to flag" />
                        Tonga
                      </div>
                      <div className="item" data-value="tt">
                        <i className="tt flag" />
                        Trinidad
                      </div>
                      <div className="item" data-value="tn">
                        <i className="tn flag" />
                        Tunisia
                      </div>
                      <div className="item" data-value="tr">
                        <i className="tr flag" />
                        Turkey
                      </div>
                      <div className="item" data-value="tm">
                        <i className="tm flag" />
                        Turkmenistan
                      </div>
                      <div className="item" data-value="tv">
                        <i className="tv flag" />
                        Tuvalu
                      </div>
                      <div className="item" data-value="ug">
                        <i className="ug flag" />
                        Uganda
                      </div>
                      <div className="item" data-value="ua">
                        <i className="ua flag" />
                        Ukraine
                      </div>
                      <div className="item" data-value="ae">
                        <i className="ae flag" />
                        United Arab Emirates
                      </div>
                      <div className="item" data-value="us">
                        <i className="us flag" />
                        United States
                      </div>
                      <div className="item" data-value="uy">
                        <i className="uy flag" />
                        Uruguay
                      </div>
                      <div className="item" data-value="um">
                        <i className="um flag" />
                        Us Minor Islands
                      </div>
                      <div className="item" data-value="vi">
                        <i className="vi flag" />
                        Us Virgin Islands
                      </div>
                      <div className="item" data-value="uz">
                        <i className="uz flag" />
                        Uzbekistan
                      </div>
                      <div className="item" data-value="vu">
                        <i className="vu flag" />
                        Vanuatu
                      </div>
                      <div className="item" data-value="va">
                        <i className="va flag" />
                        Vatican City
                      </div>
                      <div className="item" data-value="ve">
                        <i className="ve flag" />
                        Venezuela
                      </div>
                      <div className="item" data-value="vn">
                        <i className="vn flag" />
                        Vietnam
                      </div>
                      <div className="item" data-value="wf">
                        <i className="wf flag" />
                        Wallis and Futuna
                      </div>
                      <div className="item" data-value="eh">
                        <i className="eh flag" />
                        Western Sahara
                      </div>
                      <div className="item" data-value="ye">
                        <i className="ye flag" />
                        Yemen
                      </div>
                      <div className="item" data-value="zm">
                        <i className="zm flag" />
                        Zambia
                      </div>
                      <div className="item" data-value="zw">
                        <i className="zw flag" />
                        Zimbabwe
                      </div>
                    </div>
                  </div>
                </div>
                <div className="filter-button">
                  <button className="flr-btn">Search Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 mainpage">
              <div className="browse-banner">
                <div className="bbnr-left">
                  <img src="images/browse/trophy.png" alt="" />
                  <div className="bbnr-text">
                    <h4>Upgrade to Pro</h4>
                    <p>Unlimited Job Posts and Apply.</p>
                  </div>
                </div>
                <div className="bbnr-right">
                  <button className="plan-btn">Upgrade Plan</button>
                </div>
              </div>
              <div className="main-tabs">
                <div className="res-tabs">
                  <div className="mtab-left">
                    <ul className="browsr-project">
                      <li>
                        <span className="nav-link">Results 170</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mtab-right">
                    <ul>
                      <li className="bp-block">
                        <div className="ui selection dropdown skills-search sort-dropdown">
                          <input
                            name="gender"
                            type="hidden"
                            defaultValue="default"
                          />
                          <i className="dropdown icon d-icon" />
                          <div className="text">Sort By</div>
                          <div className="menu">
                            <div className="item" data-value={0}>
                              Relevance
                            </div>
                            <div className="item" data-value={1}>
                              New
                            </div>
                            <div className="item" data-value={2}>
                              Old
                            </div>
                            <div className="item" data-value={3}>
                              Last 15 Days
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="grid-list">
                        <button className="gl-btn" id="grid">
                          <i className="fas fa-th-large" />
                        </button>
                        <button className="gl-btn" id="list">
                          <i className="fas fa-th-list" />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="prjoects-content">
                  <div className="row  view-group" id="products">
                    <div className="lg-item col-lg-6 col-xs-6 grid-group-item1">
                      <div className="job-item mt-30">
                        <div className="job-top-dt">
                          <div className="job-left-dt">
                            <img
                              src="images/homepage/latest-jobs/img-1.jpg"
                              alt=""
                            />
                            <div className="job-ut-dts">
                              <a href="#">
                                <h4>John Doe</h4>
                              </a>
                              <span>
                                <i className="fas fa-map-marker-alt" /> New York
                                City
                              </span>
                            </div>
                          </div>
                          <div className="job-right-dt">
                            <div className="project-cost">$1k - $4.5k</div>
                          </div>
                        </div>
                        <div className="job-des-dt">
                          <h4>I Need Travel Wordpress Theme</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam cursus pulvinar dolor nec...
                          </p>
                          <div className="job-skills">
                            <a href="#">UX</a>
                            <a href="#">UI</a>
                            <a href="#">Photoshop</a>
                            <a href="#" className="more-skills">
                              +4
                            </a>
                          </div>
                        </div>
                        <div className="job-buttons">
                          <ul className="link-btn">
                            <li>
                              <a href="#" className="link-j1" title="Apply Now">
                                Bid Now
                              </a>
                            </li>
                            <li>
                              <a
                                href="project_single_view.html"
                                className="link-j1"
                                title="View Job"
                              >
                                View Project
                              </a>
                            </li>
                            <li className="bkd-pm">
                              <button className="bookmark1" title="bookmark">
                                <i className="fas fa-heart" />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="lg-item col-lg-6 col-xs-6 grid-group-item1">
                      <div className="job-item mt-30">
                        <div className="job-top-dt">
                          <div className="job-left-dt">
                            <img
                              src="images/homepage/latest-jobs/img-2.jpg"
                              alt=""
                            />
                            <div className="job-ut-dts">
                              <a href="#">
                                <h4>Johnson Smith</h4>
                              </a>
                              <span>
                                <i className="fas fa-map-marker-alt" /> India
                              </span>
                            </div>
                          </div>
                          <div className="job-right-dt">
                            <div className="project-cost">$500 - $2.5k</div>
                          </div>
                        </div>
                        <div className="job-des-dt">
                          <h4>I Need Real Estate Listing Html Template</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam cursus pulvinar dolor nec...
                          </p>
                          <div className="job-skills">
                            <a href="#">Php</a>
                            <a href="#">Sql</a>
                            <a href="#">Javascript</a>
                            <a href="#" className="more-skills">
                              +4
                            </a>
                          </div>
                        </div>
                        <div className="job-buttons">
                          <ul className="link-btn">
                            <li>
                              <a href="#" className="link-j1" title="Apply Now">
                                Bid Now
                              </a>
                            </li>
                            <li>
                              <a
                                href="project_single_view.html"
                                className="link-j1"
                                title="View Job"
                              >
                                View Project
                              </a>
                            </li>
                            <li className="bkd-pm">
                              <button className="bookmark1" title="bookmark">
                                <i className="fas fa-heart" />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="lg-item col-lg-6 col-xs-6 grid-group-item1">
                      <div className="job-item mt-30">
                        <div className="job-top-dt">
                          <div className="job-left-dt">
                            <img
                              src="images/homepage/latest-jobs/img-7.jpg"
                              alt=""
                            />
                            <div className="job-ut-dts">
                              <a href="#">
                                <h4>Joy Smith</h4>
                              </a>
                              <span>
                                <i className="fas fa-map-marker-alt" /> Nepal
                              </span>
                            </div>
                          </div>
                          <div className="job-right-dt">
                            <div className="project-cost">$800 - $3.5k</div>
                          </div>
                        </div>
                        <div className="job-des-dt">
                          <h4>I Need a Admin Dashboard</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam cursus pulvinar dolor nec...
                          </p>
                          <div className="job-skills">
                            <a href="#">Html</a>
                            <a href="#">Css</a>
                            <a href="#">Wordpress</a>
                            <a href="#" className="more-skills">
                              +4
                            </a>
                          </div>
                        </div>
                        <div className="job-buttons">
                          <ul className="link-btn">
                            <li>
                              <a href="#" className="link-j1" title="Apply Now">
                                Bid Now
                              </a>
                            </li>
                            <li>
                              <a
                                href="project_single_view.html"
                                className="link-j1"
                                title="View Job"
                              >
                                View Project
                              </a>
                            </li>
                            <li className="bkd-pm">
                              <button className="bookmark1" title="bookmark">
                                <i className="fas fa-heart" />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="lg-item col-lg-6 col-xs-6 grid-group-item1">
                      <div className="job-item mt-30">
                        <div className="job-top-dt">
                          <div className="job-left-dt">
                            <img
                              src="images/homepage/latest-jobs/img-4.jpg"
                              alt=""
                            />
                            <div className="job-ut-dts">
                              <a href="#">
                                <h4>Joy Smith</h4>
                              </a>
                              <span>
                                <i className="fas fa-map-marker-alt" /> India
                              </span>
                            </div>
                          </div>
                          <div className="job-right-dt">
                            <div className="project-cost">$800 - $3.5k</div>
                          </div>
                        </div>
                        <div className="job-des-dt">
                          <h4>I Need Food Delivery Androd App</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam cursus pulvinar dolor nec...
                          </p>
                          <div className="job-skills">
                            <a href="#">Android</a>
                            <a href="#">Java</a>
                            <a href="#" className="more-skills">
                              +4
                            </a>
                          </div>
                        </div>
                        <div className="job-buttons">
                          <ul className="link-btn">
                            <li>
                              <a href="#" className="link-j1" title="Apply Now">
                                Bid Now
                              </a>
                            </li>
                            <li>
                              <a
                                href="project_single_view.html"
                                className="link-j1"
                                title="View Job"
                              >
                                View Project
                              </a>
                            </li>
                            <li className="bkd-pm">
                              <button className="bookmark1" title="bookmark">
                                <i className="fas fa-heart" />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="lg-item col-lg-6 col-xs-6 grid-group-item1">
                      <div className="job-item mt-30">
                        <div className="job-top-dt">
                          <div className="job-left-dt">
                            <img
                              src="images/homepage/latest-jobs/img-5.jpg"
                              alt=""
                            />
                            <div className="job-ut-dts">
                              <a href="#">
                                <h4>Jassica William</h4>
                              </a>
                              <span>
                                <i className="fas fa-map-marker-alt" />{" "}
                                Australia
                              </span>
                            </div>
                          </div>
                          <div className="job-right-dt">
                            <div className="project-cost">$1k - $4.5k</div>
                          </div>
                        </div>
                        <div className="job-des-dt">
                          <h4>I Need Travel Wordpress Theme</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam cursus pulvinar dolor nec...
                          </p>
                          <div className="job-skills">
                            <a href="#">Delivery</a>
                            <a href="#">Local</a>
                            <a href="#">Graduation</a>
                          </div>
                        </div>
                        <div className="job-buttons">
                          <ul className="link-btn">
                            <li>
                              <a href="#" className="link-j1" title="Apply Now">
                                Bid Now
                              </a>
                            </li>
                            <li>
                              <a
                                href="project_single_view.html"
                                className="link-j1"
                                title="View Job"
                              >
                                View Project
                              </a>
                            </li>
                            <li className="bkd-pm">
                              <button className="bookmark1" title="bookmark">
                                <i className="fas fa-heart" />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="lg-item col-lg-6 col-xs-6 grid-group-item1">
                      <div className="job-item mt-30">
                        <div className="job-top-dt">
                          <div className="job-left-dt">
                            <img
                              src="images/homepage/latest-jobs/img-6.jpg"
                              alt=""
                            />
                            <div className="job-ut-dts">
                              <a href="#">
                                <h4>Gambolthemes</h4>
                              </a>
                              <span>
                                <i className="fas fa-map-marker-alt" /> India
                              </span>
                            </div>
                          </div>
                          <div className="job-right-dt">
                            <div className="project-cost">$1.2k - $5k</div>
                          </div>
                        </div>
                        <div className="job-des-dt">
                          <h4>I Need Hotel Booking Wordpress Theme</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam cursus pulvinar dolor nec...
                          </p>
                          <div className="job-skills">
                            <a href="#">Html</a>
                            <a href="#">Css</a>
                            <a href="#">Boostrap</a>
                            <a href="#" className="more-skills">
                              +4
                            </a>
                          </div>
                        </div>
                        <div className="job-buttons">
                          <ul className="link-btn">
                            <li>
                              <a href="#" className="link-j1" title="Apply Now">
                                Bid Now
                              </a>
                            </li>
                            <li>
                              <a
                                href="project_single_view.html"
                                className="link-j1"
                                title="View Job"
                              >
                                View Project
                              </a>
                            </li>
                            <li className="bkd-pm">
                              <button className="bookmark1" title="bookmark">
                                <i className="fas fa-heart" />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
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
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Next"
                              >
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

export default BrowseProjects;
