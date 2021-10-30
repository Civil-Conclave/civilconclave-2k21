import react from "react";
import "../styles/Footer.css";
import fb from "../Website Assets/fb.png";
import insta from "../Website Assets/insta.png";
import linkedin from "../Website Assets/linkedin.png";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
></link>;

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="text-box-1">
          <div className="text-1">Civil Engineering Department</div>
          <div className="text-2">Indian Institute of Technology, Roorkee</div>
          <div>
            <a className="text-3" href="http://civil.iitr.ac.in">
              http://civil.iitr.ac.in
            </a>
          </div>
        </div>
        <div className="text-box-2">
          <div className="text-4">Mail Us at</div>
          <a className="text-5" href="mailto:civilconclave@iitr.ac.in">
            civilconclave@iitr.ac.in
          </a>
        </div>
        <div className="social-media">
          <div className="text-6">Follow Us On:</div>
          <div className="SocialIcons">
            <div className="SocialHandle">
              <a
                href="https://www.facebook.com/civilconclave.iitr/"
                target="_blank"
                className="fa fa-facebook"
              >
                <div className="Socialicon">
                  <img src={fb} className="MediaIcon" />
                </div>
              </a>
            </div>

            <div className="SocialHandle">
              <a
                href="https://www.instagram.com/civil_conclave/"
                className="fa fa-instagram"
                target="_blank"
              >
                <div className="Socialicon">
                  <img src={insta} className="MediaIcon" />
                </div>
              </a>
            </div>

            <div className="SocialHandle">
              <a
                href="https://www.linkedin.com/company/civil-conclave-iitroorkee/"
                className="fa fa-linkedin"
                target="_blank"
              >
                <div className="Socialicon">
                  <img src={linkedin} className="MediaIcon" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-line"></div>
    </div>
  );
}

export default Footer;
