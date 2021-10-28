import React from "react";
import Bentley from "../Website Assets/bentley.png";
import Grill from "../Website Assets/Gril.png";
import Fsi from "../Website Assets/FSI.png";
import "../styles/Sponsors.css";
import nmcg from "../Website Assets/nmcg.png";
import bharatoil from "../Website Assets/bharat oil.png";
import edufabrica from "../Website Assets/edufabrica.png";
import methodex from "../Website Assets/methodex.png";
import ncc from "../Website Assets/ncc.png";
import tata from "../Website Assets/tata steel.png";
import sika from "../Website Assets/sika.png";
import consort from "../Website Assets/consort.png";

export const Sponsors = () => {
  return (
    <div className="Container">
      <div className="Title">Our Sponsors</div>
      <div className="PresentYear">
        <div className="Year">2021</div>
        <div className="AllSponsors">
          <div className="Sponsor">
            <img src={Grill} alt="LogoSponsor" className="LogoSponsor" />
            <p>Gold Sponsor</p>
          </div>
          <div className="Sponsor">
            <img src={Bentley} alt="LogoSponsor" className="LogoSponsor" />
            <p>Technical Partner</p>
          </div>
          <div className="Sponsor">
            <img src={Fsi} alt="LogoSponsor" className="LogoSponsor" />
            <p>Silver Sponsor</p>
          </div>
        </div>
      </div>
      <div className="PrevYear">
        <div className="Year">2020</div>
        <div className="AllSponsorsRow">
          <div className="Sponsors">
            <div className="SponImages">
              <img src={nmcg} alt="" className="LogoSponsor" />
              <img src={tata} alt="" className="LogoSponsor" />
            </div>
            <div className="SponType">
              <p>Platinum Sponsor</p>
            </div>
          </div>
          <div className="Sponsors">
            <div className="ThreeSponImages">
              <img src={sika} alt="" className="LogoSponsor" />
              <img src={edufabrica} alt="" className="LogoSponsor" />
              <img src={methodex} alt="" className="LogoSponsor" />
            </div>
            <div className="SponType">
              <p>Silver Sponsor</p>
            </div>
          </div>
          <div className="Sponsors">
            <div className="SponImages">
              <img src={consort} alt="" className="LogoSponsor" />
            </div>
            <div className="SponType">
              <p>Bronze Sponsor</p>
            </div>
          </div>
          <div className="Sponsors">
            <div className="SponImages">
              <img src={ncc} alt="" className="LogoSponsor" />
              <img src={bharatoil} alt="" className="LogoSponsor" />
            </div>
            <div className="SponType">
              <p>Other Sponsor</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="owl-carousel owl-theme">
        <div className="SponImagesCarousel">
          <img src={nmcg} alt="" />
        </div>
        <div className="SponImagesCarousel">
          <img src={tata} alt="" />
        </div>
        <div className="SponImagesCarousel">
          <img src={sika} alt="" />
        </div>
        <div className="SponImagesCarousel">
          <img src={edufabrica} alt="" />
        </div>
        <div className="SponImagesCarousel">
          <img src={methodex} alt="" />
        </div>
        <div className="SponImagesCarousel">
          <img src={consort} alt="" />
        </div>
        <div className="SponImagesCarousel">
          <img src={ncc} alt="" />
        </div>
        <div className="SponImagesCarousel">
          <img src={bharatoil} alt="" />
        </div>
      </div> */}
    </div>
  );
};
