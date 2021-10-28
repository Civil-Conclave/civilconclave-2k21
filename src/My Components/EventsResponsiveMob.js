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
          <div className="EventTypebig">
            <div className="EventsResponsiveHeading">
              <h1>Case Studies</h1>
            </div>
            <div className="EventType">
              <div className="ImgContainerEvents">
                <img className="events__images" src={CaseStudy} alt="" />
              </div>
              <div className="EventsInfo">
                <p>
                  The Case Study focuses on enhancing the help they need to
                  build the skills necessary to develop and to launch innovative
                  approaches to address the industry challenges.
                </p>
                <Link to="/Events">
                  <a>Learn More</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="EventTypebig">
            <div className="EventsResponsiveHeading">
              <h1>Guest Lectures</h1>
            </div>
            <div className="EventType">
              <div className="ImgContainerEvents">
                <img className="events__images" src={GuestLectures} alt="" />
              </div>
              <div className="EventsInfo">
                <p>
                  The Case Study focuses on enhancing the help they need to
                  build the skills necessary to develop and to launch innovative
                  approaches to address the industry challenges.
                </p>
                <Link to="/Events">
                  <a>Learn More</a>
              </Link>
              </div>
            </div>
          </div>
          <div className="EventTypebig">
            <div className="EventsResponsiveHeading">
              <h1>Research Presentations</h1>
            </div>
            <div className="EventType">
              <div className="ImgContainerEvents">
                <img className="events__images" src={ResearchWork} alt="" />
              </div>
              <div className="EventsInfo">
                <p>
                  The Case Study focuses on enhancing the help they need to
                  build the skills necessary to develop and to launch innovative
                  approaches to address the industry challenges.
                </p>
                <Link to="/Events">
                  <a>Learn More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsResponsive;
