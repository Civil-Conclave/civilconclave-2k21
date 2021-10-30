import React from "react";
import CaseStudy from "../Website Assets/Case Studies.png";
import grinfra from "../Website Assets/grinfra.png";
import ongc from "../Website Assets/ONGC_casestudy.png";
import "../styles/CaseStudyPage.css";

function CaseStudyPage() {
  function onPress(e) {
    window.open(
      "https://drive.google.com/file/d/1GguPMAQS2Isb084nkeWahgISligd5h8_/view?usp=sharing"
    );
  }

  function onPressRuleBookgrinfra(e) {
    window.open(
      "/https://drive.google.com/file/d/1f8H-OgzVfReuY4wZtT0J4vgInsnVpAC6/view?usp=sharing"
    );
  }
  function onPressOngc(e) {
    window.open(
      "https://drive.google.com/file/d/1RQDvePnmQeD-df-4SdIHnWQF4gtBpsjV/view"
    );
  }
  return (
    <div>
      <div className="container__casestudypage">
        <div className="tinker">
          <div className="CaseStudyPageImageCon">
            <img src={grinfra} alt="" className="CaseStudyPageImage" />
          </div>
          <div className="tinker__left">
            <div class="tinkerheading">
              <h1>RESOLVING THE EFFECT OF VEHICULAR LOADINGS</h1>
              <h2>in association with GR Infraprojects Ltd.</h2>
              <p>
                The flexible and rigid pavement design varies only in case of
                the vehicular loading that is in case of flexible pavement VDF
                is considered and in case of rigid pavement axle load spectrum
                is considered. Is consideration of VDF as the major design
                entity fair enough for flexible pavements?
              </p>
            </div>

            <div className="CaseButtons">
              <button onClick={onPress}>PROBLEM STATEMENT</button>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1f8H-OgzVfReuY4wZtT0J4vgInsnVpAC6/view?usp=sharing"
              >
                RULE BOOK
              </a>
            </div>
          </div>
        </div>
        <div className="tinker">
          <div className="ConRightImage">
            <img src={ongc} alt="" className="RightImage" />
          </div>
          <div className="special_tinker__left">
            <h1>Delineation of a G+1 Building</h1>
            <h2>in association with Oil and Natural Gas Corporation Ltd. </h2>
            <p>
              With the use of technology and reuse of waste material as building
              material the cost of construction can be minimised to an extent.
              Present a technical design of a (G + 1) building which will serve
              the purpose of mess for the workers of ONGC Ltd (in MSEZ-
              Mangalore Special Economic Zone Ltd.) and present a budget (rate
              analysis) of the cost of its construction.
            </p>
            <div className="CaseButtons">
              <button onClick={onPressOngc}>PROBLEM STATEMENT</button>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1mbqxzSZSmHyhf0hdneTWU8w5Pzo7ypoO/view"
              >
                RULE BOOK
              </a>
            </div>
          </div>
        </div>
        {/* <div className="tinker">
          <div className="CaseStudyPageImageCon">
            <img src={CaseStudy} alt="" className="CaseStudyPageImage" />
          </div>
          <div className="tinker__left">
            <h1>REJUVENATING RIVER GANGA</h1>
            <p>
              Waterwheel, a mechanical device for tapping the energy of running
              or falling water by means of a set of paddles mounted around a
              wheel. The force of the moving water is exerted against the
              paddles, and the consequent rotation of the wheel is transmitted
              to machinery via the shaft of the wheel. Design innovative and
              most efficient water wheel both in terms of efficiency and
              feasibility.
            </p>
            <div className="CaseButtons">
              <button>PROBLEM STATEMENT</button>
              <a href="/">RULE BOOK</a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default CaseStudyPage;
