import React from "react";
import "../styles/EventsResponsive.css";
import CaseStudy from "../Website Assets/Case Studies.png";
import GuestLectures from "../Website Assets/Guest Lectures.png";
import ResearchWork from "../Website Assets/Research Work.png";
import Seekthe from "../Website Assets/Seek the....png";

function Events() {
  return (
    <div>
      <div className="container_events">
        <h1 className="heading">Events</h1>
        <div className="container__items">
          <div className="card__casestudy">
            <img className="events__images" src={CaseStudy} alt="" />
            <div className="EventsInfo">
              <h1>Case Studies</h1>
              <p>
                The Case Study focuses on enhancing the help they need to build
                the skills necessary to develop and to launch innovative
                approaches to address the industry challenges.
              </p>
              <a href="/CaseStudy">Learn More</a>
            </div>
          </div>
          <div className="card__guestlectures">
            <img className="events__images" src={GuestLectures} alt="" />
            <div className="EventsInfo">
              <h1>Guest Lectures</h1>
              <p>
                Engaging experts from across the industry to connect the varied
                pathways and networks to equip the IIT community to move
                powerful ideas from conception to impact.
              </p>
              <a href="/GuestLecture">Learn More</a>
            </div>
          </div>
          <div className="card__researchwork">
            <img className="events__images" src={ResearchWork} alt="" />
            <div className="EventsInfo">
              <h1>Research Work Presentation</h1>
              <p>
                Our research work aims to provide a clear and valuable vision of
                today's innovation in our industry while exploring its future
                potential for a greater diversity of participants.
              </p>
              <a href="/Events">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
