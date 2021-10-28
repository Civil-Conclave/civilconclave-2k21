import React from "react";
import "../styles/Vision.css";

import ConceptImage from "../Website Assets/concept image.png";
import VisionImage from "../Website Assets/vision image.png";
import ThemeImage from "../Website Assets/theme image.png";

function Vision() {
  return (
    <div>
      <div className="container__vision">
        <div className="vision">
          <div className="vision__block">
            <h1>VISION</h1>
          </div>
          <div className="InsideContainerVision">
            <div className="SideImage">
              <img src={VisionImage} alt="" />
            </div>
            <div className="Information">
              <p>
                Civil Conclave 2021 provides a common platform for civil
                engineering enthusiasts. Being an inter-IIT event, it aims at
                bringing together the students from the most elite colleges of
                India to compete and network. Young minds when put in the right
                direction can excel in all fields. Civil engineering being the
                prime need of all times, rigorously needs the budding minds for
                overall growth.<br></br>
                <br></br>
                We understand this idea and are out to promote the same on the
                inter-IIT level.
              </p>
            </div>
          </div>
        </div>
        <div className="vision concept">
          <div className="vision__block_concept__block">
            <h1>CONCEPT</h1>
          </div>
          <div className="InsideContainerConcept">
            <div className="ConceptSideImage">
              <img src={ConceptImage} alt="" />
            </div>
            <div className="Information">
              <p>
                On the whole, Civil Conclave 2021 is dedicated to nurturing
                technology and including youth power in civil engineering via
                different events.
                <br />
                <br />
                Different events like case studies, research work presentations
                and guest lectures are dedicated to helping civil engineering
                and civil engineers progress, and lead the path to a sustainable
                and better future!
              </p>
            </div>
          </div>
        </div>
        <div className="vision">
          <div className="vision__block">
            <h1>THEME</h1>
          </div>
          <div className="InsideContainerVision">
            <div className="SideImage">
              <img src={ThemeImage} alt="" />
            </div>
            <div className="Information">
              <p>
                Civil Conclave 2021 comes along with the theme of “Stimulating
                Sustainability”.
                <br />
                <br />
                Sustainability has always been the need of the hour. Keeping the
                growing technology and future needs in mind, adopting
                sustainable techniques in the civil engineering industry is a
                major step towards a promising future. This theme centres on the
                idea of developing technologies and proposing
                environment-friendly solutions to industrial problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
