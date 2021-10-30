import React from "react";
import VisionLogo from "../Website Assets/Vision.png";
import ConceptLogo from "../Website Assets/concept.png";
import ThemeLogo from "../Website Assets/theme.png";
import "../styles/AboutUs.css";
export const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="AboutHeading">About Us</div>
      <div className="Material">
        <div className="Box">
          <div className="ImgContainer">
            <img src={VisionLogo} alt="logo" className="Logos" />
          </div>
          <div className="Topic">Vision</div>
          <div className="Info">
            Civil Conclave 2021 provides a common platform for civil engineering
            enthusiasts. Being an inter-IIT event, it aims at bringing together
            the students from the most elite colleges of India to compete and
            network...
          </div>
        </div>
        <div className="Box">
          <div className="ImgContainer">
            <img src={ConceptLogo} alt="logo" className="Logos" />
          </div>
          <div className="Topic">Concept</div>
          <div className="Info">
            On the whole, Civil Conclave 2021 is dedicated to nurturing
            technology and including youth power in civil engineering via
            different events. Different events like case studies, research work
            presentations and guest lectures...
          </div>
        </div>
        <div className="Box">
          <div className="ImgContainer">
            <img src={ThemeLogo} alt="logo" className="Logos" />
          </div>
          <div className="Topic">Theme</div>
          <div className="Info">
            Civil Conclave 2021 comes along with the theme of “Stimulating
            Sustainability”. Sustainability has always been the need of the
            hour. Keeping the growing technology and future needs in mind,
            adopting sustainable techniques...
          </div>
        </div>
      </div>
    </div>
  );
};
