import React from "react";
import { OurTeamMob } from "./My Components/OurTeamMob";
import { OurTeam } from "./My Components/OurTeam";
import { AboutUs } from "./My Components/AboutUs";
import Footer from "./My Components/Footer";
import ContactUs from "./My Components/ContactUs";
import { HeaderAboutUs } from "./My Components/HeaderAboutUs";
import { HeaderEvents } from "./My Components/HeaderEvents";
import { Sponsors } from "./My Components/Sponsors";
import { Theme } from "./My Components/Theme";
import SimpleSlider from "./My Components/Slider";
import NavBar from "./My Components/Navbar";
// import Events from "./My Components/Events";
import EventsPage from "./My Components/EventsPage";
import Vision from "./My Components/Vision";
import CaseStudyPage from "./My Components/CaseStudyPage";
import GuestPage from "./My Components/GuestPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EventsResponsive from "./My Components/EventsResponsive";
import RightNav from "./My Components/RightNav";
import NavBarMob from "./My Components/NavBarMob";
import { HeaderCaseStudy } from "./My Components/HeaderCaseStudy";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false, //This is where I am having problems
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 900 });
  }

  render() {
    const isDesktop = this.state.isDesktop;

    return (
      <div>
        {isDesktop ? (
          <div>
            <NavBar></NavBar>
            {/* <Router>
              <Switch>
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
              </Switch>
            </Router> */}
            <ContactUs></ContactUs>
            <Footer></Footer>
          </div>
        ) : (
          <div>
            <Router basename={process.env.PUBLIC_URL}>
              <NavBarMob></NavBarMob>
              <Switch>
                <Route
                  exact
                  path="/CaseStudy"
                  render={() => {
                    return (
                      <>
                        <OurTeamMob></OurTeamMob>
                      </>
                    );
                  }}
                ></Route>
              </Switch>

              <ContactUs></ContactUs>
              <Footer></Footer>
            </Router>
          </div>
        )}
      </div>
    );
  }
}

export default App;
