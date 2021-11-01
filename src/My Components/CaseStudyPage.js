import React from "react";
import CaseStudy from "../Website Assets/Case Studies.png";
import grinfra from "../Website Assets/grinfra.png";
import ongc from "../Website Assets/ONGC_casestudy.png";
import "../styles/CaseStudyPage.css";
import fsicase from "../Website Assets/fsicasestudy.png";

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
  function onPressfsi(e) {
    window.open(
      "https://drive.google.com/file/d/1I9i55WWsZSF4RguxhQvhqMkGQgRbIcfH/view"
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
                href="https://drive.google.com/file/d/1smQOXEQBMQDxUsnDeHqSzC4zKNwxzDjb/view?usp=sharing"
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
            <h1>DELINEATION OF A G+1 BUILDING</h1>
            <h2>in association with Oil and Natural Gas Corporation Ltd. </h2>
            <p>
              With the use of technology and reuse of waste material as building
              material the cost of construction can be minimised to an extent.
              Present a technical design of a (G + 1) building which will serve
              the purpose of mess for the workers of ONGC Ltd (in MSEZ-
              Mangalore Special Economic Zone Ltd.) and present a rate analysis
              of the cost of its construction.
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
        <div className="tinker">
          <div className="CaseStudyPageImageCon">
            <img src={fsicase} alt="" className="CaseStudyPageImage" />
          </div>
          <div className="tinker__left">
            <h1>COMBATING FIRE</h1>
            <h2>in association with Forest Survey of India </h2>
            <p>
              Forest fires are a major cause of forest degradation and have
              wide-ranging adverse ecological, economic and social impacts. Find
              out ways for their early identification, prepare a fire simulation
              model, estimate current fuelwood dependency of the residents on
              forests and suggest an evacuation plan for the livestock and
              residents of the forest.
            </p>
            <div className="CaseButtons">
              <button onClick={onPressfsi}>PROBLEM STATEMENT</button>
              <a
                target="_blank "
                href="https://drive.google.com/file/d/1ObaQz1DmQweP0AQbwqdzNIWJKtOx3RPd/view?usp=sharing"
              >
                RULE BOOK
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyPage;
