import React from "react";
import bgtheme from "../Website Assets/Homepage Image Updated.png";
import { Link } from "react-router-dom";
import "../styles/Theme.css";
export const Theme = () => {
  function handleSubmit(e) {
    window.open("/Register");
  }
  return (
    <div className="Theme">
      <div className="TextTheme">
        <div className="CollegeName">IIT Roorkee</div>
        <div className="TeamName">Civil Conclave 2021</div>
        <div className="Date">18-19 December, 2021</div>
        <div className="RegisterMessage">
          Unravish and explore the deeper insights with this <strong>Inter IIT fest </strong>
          dedicated to civil engineers. Dive right in...
          <br /> Click here to register yourself
        </div>
        <div>
          <Link to="/Register">
            <button className="RegisterButton">Register</button>
          </Link>
        </div>
      </div>
      <div className="HomepageImageCon">
        <img src={bgtheme} alt="bg" className="HomepageImage" />
      </div>
    </div>
  );
};
