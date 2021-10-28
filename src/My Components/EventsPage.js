import React from "react";
import "../styles/EventsPage.css";

import CaseStudy from "../Website Assets/casestudyforeventpage.png";
import ResearchWork from "../Website Assets/researchworkevents.png";
import Seek from "../Website Assets/Seek the....png";
import Guest from "../Website Assets/Guest lec.png";
import { Link } from 'react-router-dom';

function EventsPage() {
  function handleSubmit(e) {
    window.open("/GuestLecture");
  }
  function onPress(e) {
    window.open("/Register");
  }
  return (
    <div>
      <div className="container__eventspage">
        <div className="casestudy__eventspage">
          <div className="EventName">
            <h1>CASE STUDY</h1>
          </div>
          <div className="EventsPageInfo">
            <div className="EventSummary">
              <h5>COMMUNITY ENGAGEMENT, COLLABORATIVE LEARNING</h5>
              <p>
                The Case Study focuses on enhancing the help they need to build
                the skills necessary to develop and to launch innovative
                approaches to address the industry challenges. <br />
                <br />
                Through this event, we aim to give Teams working collaboratively
                to understand the role of research and ideation in solving
                real-life scenarios. We focus on providing unique points of view
                and context for understanding global problems and developing
                solutions at scale while gaining real-world experience. <br />
                <br />
                However, we also recognise the significance of learning that
                occurs outside of the formal classroom setting — learning that
                occurs within their cohort via institutional networks and
                through co-curricular experiences on the broader level.
              </p>
              <div className="Buttons">
              <Link to="/Register">
                <button >REGISTER</button>
                </Link>
                <Link to="/CaseStudy">
                <a>
                <br/>
                  READ PROBLEM STATEMENTS
                  <br/>
                </a>
                </Link>
              </div>
            </div>
            <div className="EventsPageImageContainer">
              <img className="EventsPageImage" src={CaseStudy} alt="" />
            </div>
          </div>
        </div>
        <div className="casestudy__eventspage">
          <div className="EventName">
            <h1>RESEARCH WORK PRESENTATION</h1>
          </div>
          <div className="EventsPageInfo">
            <div className="EventSummary">
              <h5>SOLVING CONTEMPORARY CHALLENGES OF DEVELOPMENT</h5>
              <p>
                Our research work aims to provide a clear and valuable vision of
                today's innovation in our industry while exploring its future
                potential for a greater diversity of participants, ideas, and
                outcomes. <br />
                <br />
                Engaging students from across the IITs in research, the Civil
                Conclave aims at stimulating sustainability using an
                evidence-based, scientific approach drawing on diverse
                methodologies. Results contribute to fundamental knowledge of
                their subjects and aid decision-makers as they face an ever more
                complex innovation landscape. <br />
                <br />
                Each Contingent from each IIT will consist of members of UG, PG
                and Ph.D students who will be presenting their Research Work In
                front of the committee consisting of veterans from every
                discipline of Civil Engineering. The Best Research Paper Work
                Award will be given in each discipline.
              </p>
              <div className="Buttons">
                <Link to="/Register">
                  <button >REGISTER</button>
                </Link>
                <Link to="/Register">
                <br/>
                  <a>RULE BOOK</a>
                </Link>
              </div>
            </div>
            <div className="EventsPageImageContainer">
              <img className="EventsPageImage" src={ResearchWork} alt="" />
            </div>
          </div>
        </div>
        <div className="casestudy__eventspage guest">
          <div className="EventName">
            <h1>GUEST LECTURE</h1>
          </div>
          <div className="EventsPageInfo">
            <div className="EventSummary">
              <h5>BUILDING CULTURES OF THINKING</h5>
              <p>
                Engaging experts from across the industry to connect the varied
                pathways and networks to equip the IIT community to move
                powerful ideas from conception to impact. <br />
                <br />
                In Civil Conclave, we offer our participants fantastic
                opportunities to attend talks from world-renowned guest
                speakers. <br />
                <br />
                We believe that listening openly to leading figures from
                business leaders and industry experts develop their confidence
                and exposure to real-world scenarios. <br />
                <br />
                Each of our expert speakers delivers a lecture on their central
                topic before taking questions from our student audience. We
                carefully organise our guest lecture series to ensure that our
                students attend stimulating, informative, and enjoyable
                sessions.
              </p>
              <div className="Buttons">
              <Link to="/Register">
                <button>FIND OUT</button>
              </Link>
              </div>
            </div>
            <div className="EventsPageImageContainer">
              <img className="EventsPageImage" src={Guest} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
