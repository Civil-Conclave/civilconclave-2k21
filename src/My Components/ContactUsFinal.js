import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/ContactUs.css";
import akshat from "../Website Assets/akshat.png";
import muskan from "../Website Assets/muskan.png";
import Anvesh from "../Website Assets/Anvesh (1).png";

export const ContactUsFinal = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_xicusq9",
        e.target,
        "user_TiIYdJL9nrzz6JKoOwn5J"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="ContactUsWrapper">
      <div className="ContactUs">
        <div className="ContactUsHeading">
          <h3 className="text-11">Contact Us</h3>
        </div>
        <div className="form">
          <form
            // action="mailto:civilconclave@iitr.ac.in"
            // method="POST"
            enctype="multipart/form-data"
            name="EmailForm"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              className="Name"
              name="from_name"
              id="from_name"
              placeholder="Full Name"
            />
            <br />
            <br />
            <input
              type="email"
              className="Name"
              name="from_email"
              placeholder="Email ID"
            />

            <br />
            <br />
            <input
              className="Message"
              type="Message"
              name="message"
              id="message"
              placeholder="Type your message here..."
            />
            <br />
            <br />
            <button type="submit" className="Button" value="Send">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
      <div className="Coordinators">
        <div className="people">
          <div className="Images">
            <img className="Image" src={Anvesh} alt="" />
          </div>
          <div className="people-text">
            <div className="people-text-1"> Anvesh Chauhan</div>
            <div className="people-text-2">
              Overall Coordinator
              <br />
              achauhan2@ce.iitr.ac.in
            </div>
          </div>
        </div>
        <div className="people">
          <div className="Images">
            <img className="Image" src={muskan} alt="" />
          </div>
          <div className="people-text">
            <div className="people-text-1">Muskan Dogra</div>
            <div className="people-text-2">
              Overall Co-Coordinator
              <br />
              mdogra@ce.iitr.ac.in
            </div>
          </div>
        </div>
        <div className="people">
          <div className="Images">
            <img className="Image" src={akshat} alt="" />
          </div>
          <div className="people-text">
            <div className="people-text-1">Akshat Srivastava</div>
            <div className="people-text-2">
              Overall Co-Coordinator
              <br />
              asrivastava@ce.iitr.ac.in
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsFinal;
