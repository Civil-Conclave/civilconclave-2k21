import React from "react";
import bgtheme from "../Website Assets/Homepage Image Updated.png";
import { Link } from "react-router-dom";
import "../styles/Theme.css";
export const Theme = () => {
  function handleSubmit(e) {
    window.open("/Register");
  }
  function onPress(e) {
    window.open("https://drive.google.com/file/d/1sqA7MmQO77M5YHto0KEHdWeH88wX7FVh/view");
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
          <div>
            <button className="RegisterButton" onClick={onPress}>Register</button>
          </div>
        </div>
      </div>
      <div className="HomepageImageCon">
        <img src={bgtheme} alt="bg" className="HomepageImage" />
      </div>
    </div>
  );
};
