import React from "react";
import "../styles/EventsResponsive.css";
import CaseStudy from "../Website Assets/casestudyforhomepage.png";
import GuestLectures from "../Website Assets/Guest Lectures.png";
import ResearchWork from "../Website Assets/researchworkhome.png";
import Seekthe from "../Website Assets/Seek the....png";
import { Link } from "react-router-dom";

function EventsResponsive() {
  return (
    <div>
      <div className="containerof_events">
        <h1 className="heading">Events</h1>

        <div className="container_items">
          <div className="EventType">
            <div className="ImgContainerEvents">
              <img className="events__images" src={CaseStudy} alt="" />
            </div>
            <div className="EventsInfo">
              <div className="EventsResponsiveHeading">
                <h1>Case Studies</h1>
              </div>
              <p>
                The Case Study focuses on enhancing the help they need to build
                the skills necessary to develop and to launch innovative
                approaches to address the industry challenges.
              </p>
              <Link to="/Events">
                <a>Learn More</a>
              </Link>
            </div>
          </div>
          <div className="EventType">
            <div className="ImgContainerEvents">
              <img className="events__images" src={GuestLectures} alt="" />
            </div>
            <div className="EventsInfo">
              <h1>Guest Lectures</h1>
              <p>
                Engaging experts from across the industry to connect the varied
                pathways and networks to equip the IIT community to move
                powerful ideas from conception to impact.
              </p>
              <Link to="/Events">
                <a>Learn More</a>
              </Link>
            </div>
          </div>
          <div className="EventType">
            <div className="ImgContainerEvents">
              <img className="events__images" src={ResearchWork} alt="" />
            </div>
            <div className="EventsInfo">
              <h1>Research Presentation</h1>
              <p>
                Our research work aims to provide a clear and valuable vision of
                today's innovation in our industry while exploring its future
                potential for a greater diversity of participants.
              </p>
              <Link to="/Events">
                <a>Learn More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsResponsive;
