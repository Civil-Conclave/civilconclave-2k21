import React from "react";
import useState from "react";
import useEffect from "react";
import * as S from "../styles/nav.ts";

import Logo from "../Website Assets/Logo2.png";
import { OurTeamMob } from "./OurTeamMob";
import { OurTeam } from "./OurTeam";
import { AboutUs } from "./AboutUs";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import ContactUsFinal from "./ContactUsFinal";

import { HeaderAboutUs } from "./HeaderAboutUs";
import { HeaderEvents } from "./HeaderEvents";
import { HeaderCaseStudy } from "./HeaderCaseStudy";
import { HeaderGuest } from "./HeaderGuest";
import { Sponsors } from "./Sponsors";
import { Theme } from "./Theme";
import SimpleSlider from "./Slider";
import NavBar from "./Navbar";
// import Events from "./Events";
import EventsPage from "./EventsPage";
import Vision from "./Vision";
import CaseStudyPage from "./CaseStudyPage";
import GuestPage from "./GuestPage";
import EventsResponsive from "./EventsResponsive";
import { Register } from "./Register";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
  Redirect,
} from "react-router-dom";

type Props = {
  open: boolean,
};
const activeTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "red" };
  }
};

function RightNav(props: Props) {
  function onPress(e) {
    window.open(
      "https://drive.google.com/file/d/1sqA7MmQO77M5YHto0KEHdWeH88wX7FVh/view"
    );
  }
  return (
    <div>
      <div>
        <Router basename={process.env.PUBLIC_URL}>
          <S.Ul open={props.open}>
            <NavLink to="/" activeStyle={{}}>
              <S.Li>Home</S.Li>
            </NavLink>
            <NavLink
              to="/Events"
              activeStyle={{
                color: "#178299",
                textDecoration: "underline",
              }}
            >
              <S.Li>Events</S.Li>
            </NavLink>
            <NavLink
              to="/AboutUs"
              activeStyle={{
                color: "#178299",
                textDecoration: "underline",
              }}
            >
              <S.Li>About Us</S.Li>
            </NavLink>
            <a
              href="https://drive.google.com/file/d/1sqA7MmQO77M5YHto0KEHdWeH88wX7FVh/view"
              target="_blank"
              activeStyle={{
                color: "#178299",
                textDecoration: "underline",
              }}
            >
              <S.Li>Register</S.Li>
            </a>
            <NavLink
              to="/CaseStudy"
              activeStyle={{
                color: "#178299",
                textDecoration: "underline",
              }}
            ></NavLink>
            <NavLink
              to="/GuestLecture"
              activeStyle={{
                color: "#178299",
                textDecoration: "underline",
              }}
            ></NavLink>
          </S.Ul>

          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <>
                    <Theme></Theme>
                    <EventsResponsive></EventsResponsive>
                    <AboutUs></AboutUs>
                    <SimpleSlider></SimpleSlider>
                  </>
                );
              }}
            ></Route>
            <Route
              exact
              path="/Events"
              render={() => {
                return (
                  <>
                    <HeaderEvents></HeaderEvents>
                    <EventsPage></EventsPage>
                  </>
                );
              }}
            ></Route>
            <Route
              exact
              path="/AboutUs"
              render={() => {
                return (
                  <>
                    <HeaderAboutUs></HeaderAboutUs>
                    <Vision></Vision>
                    <OurTeam></OurTeam>
                  </>
                );
              }}
            ></Route>

            <Route
              exact
              path="/GuestLecture"
              render={() => {
                return (
                  <>
                    <HeaderGuest></HeaderGuest>
                    <GuestPage></GuestPage>
                  </>
                );
              }}
            ></Route>

            <Route
              exact
              path="/CaseStudy"
              render={() => {
                return (
                  <>
                    <HeaderCaseStudy></HeaderCaseStudy>
                    <CaseStudyPage></CaseStudyPage>
                  </>
                );
              }}
            ></Route>

            <Route
              exact
              path="/Register"
              render={() => {
                return (
                  <>
                    <Register></Register>
                  </>
                );
              }}
            ></Route>

            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
      }
    </div>
  );
}

export default RightNav;
