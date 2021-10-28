import React from "react";
import "../styles/Header.css";
import VisionLogo from "../Website Assets/Vision.png";
import ConceptLogo from "../Website Assets/concept.png";
import ThemeLogo from "../Website Assets/theme.png";
import TeamLogo from "../Website Assets/team.png";
export const HeaderAboutUs = () => {
  return (
    <div className="Parent">
      <div className="HeaderContainer">
        <div className="Heading">ABOUT US</div>
        <hr className="Line" />
        <div className="SubHeading">GET TO KNOW ABOUT US AND OUR TEAM</div>
      </div>

      <div className="OverLap">
        <div className="Logo">
          <img src={VisionLogo} alt="logo" className="OverlapImage" />
        </div>
        <div className="Logo">
          <img src={ConceptLogo} alt="logo" className="OverlapImage" />
        </div>
        <div className="Logo">
          <img src={ThemeLogo} alt="logo" className="OverlapImage" />
        </div>
        <div className="Logo">
          <img src={TeamLogo} alt="logo" className="OverlapImage" />
        </div>
      </div>
    </div>
  );
};
