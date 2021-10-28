import React from "react";
import "../styles/GuestPage.css";

import CaseStudy from "../Website Assets/Case Studies.png";

function GuestPage() {
  function handleSubmit(e) {
    window.open("/Register");
  }

  return (
    <div>
      <div className="container__guestpage">
        <div className="guest1">
          <div className="guest1__left">
            <h1>GUEST NAME 1</h1>
            <p>
              Waterwheel, a mechanical device for tapping the energy of running
              or falling water by means of a set of paddles mounted around a
              wheel. The force of the moving water is exerted against the
              paddles, and the consequent rotation of the wheel is transmitted
              to machinery via the shaft of the wheel. Design innovative and
              most efficient water wheel both in terms of efficiency and
              feasibility.
            </p>
            <p className="guest1__date">
              Date: 18 December <br />
              Timing: 11:00 am{" "}
            </p>
            <button onClick={handleSubmit}>REGISTER</button>
          </div>
          <div className="GuestImage">
            <img src={CaseStudy} alt="" className="FutureGuest" />
          </div>
        </div>
        <div className="guest1">
          <div className="guest1__left">
            <h1>GUEST NAME 2</h1>
            <p>
              Waterwheel, a mechanical device for tapping the energy of running
              or falling water by means of a set of paddles mounted around a
              wheel. The force of the moving water is exerted against the
              paddles, and the consequent rotation of the wheel is transmitted
              to machinery via the shaft of the wheel. Design innovative and
              most efficient water wheel both in terms of efficiency and
              feasibility.
            </p>
            <p className="guest1__date">
              Date: 18 December <br />
              Timing: 11:00 am{" "}
            </p>
            <button onClick={handleSubmit}>REGISTER</button>
          </div>
          <div className="GuestImage">
            <img src={CaseStudy} alt="" className="FutureGuest" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuestPage;
