import React, { useState } from "react";
import * as S from "../styles/nav.ts";

import Logo from "../Website Assets/Logo2.png";
import { OurTeamMob } from "./OurTeamMob";
import { OurTeam } from "./OurTeam";
import { AboutUs } from "./AboutUs";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import { HeaderAboutUs } from "./HeaderAboutUs";
import { HeaderEvents } from "./HeaderEvents";
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
import EventsResponsiveMob from "./EventsResponsiveMob";
import { Register } from "./Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
  Redirect,
} from "react-router-dom";
import { HeaderCaseStudy } from "./HeaderCaseStudy";
import { HeaderGuest } from "./HeaderGuest";

type Props = {
  open: boolean,
};

function RightNavMob(props: Props) {
  const [Input, setInput] = useState("");

  const onSearchSubmit = () => {
    setInput(false);
    props.onSubmit(Input);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <S.Ul open={props.open}>
        <NavLink
          to="/"
          onClick={onSearchSubmit}
          activeStyle={{
            color: "#178299",
          }}
        >
          <S.Li>Home</S.Li>
        </NavLink>
        <NavLink
          to="/Events"
          onClick={onSearchSubmit}
          activeStyle={{
            color: "#178299",
          }}
        >
          <S.Li>Events</S.Li>
        </NavLink>
        <NavLink
          to="/AboutUs"
          onClick={onSearchSubmit}
          activeStyle={{
            color: "#178299",
          }}
        >
          <S.Li>About Us</S.Li>
        </NavLink>
        <a
          href="https://drive.google.com/file/d/1sqA7MmQO77M5YHto0KEHdWeH88wX7FVh/view"
          target="_blank"
          activeStyle={{
            color: "#178299",
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
                <EventsResponsiveMob></EventsResponsiveMob>
                <AboutUs></AboutUs>
                <SimpleSlider></SimpleSlider>
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
                <OurTeamMob></OurTeamMob>
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
          path="/Register"
          render={() => {
            return (
              <>
                <Register></Register>
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

        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default RightNavMob;
