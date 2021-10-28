import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider.css";
import nmcg from "../Website Assets/nmcg.png";
import bharatoil from "../Website Assets/bharat oil.png";
import edufabrica from "../Website Assets/edufabrica.png";
import methodex from "../Website Assets/methodex.png";
import ncc from "../Website Assets/ncc.png";
import tata from "../Website Assets/tata steel.png";
import tatabig from "../Website Assets/tatasteelbig.png";
import sika from "../Website Assets/sika.png";
import consort from "../Website Assets/consort.png";
import Bentley from "../Website Assets/bentley.png";
import Grill from "../Website Assets/Gril.png";
import Fsi from "../Website Assets/FSI.png";
import ongc from "../Website Assets/ongc.png";
import edufabricabig from "../Website Assets/edufabricabig.png";
// import styled, { createGlobalStyle } from "styled-components";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "#F4F4F4",
        height: "200px",
        width: "35px",
        justifyContent: "center",
        alignItems: "center",
        // paddingLeft: "em",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "#F4F4F4",
        height: "200px",
        width: "35px",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    />
  );
}

class SimpleSlider extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      focusOnSelect: true,
      dots: false,
      autoplay: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            className: "center",
            centerMode: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="container_slider">
        <div className="OurSponTitle">Our Sponsors</div>
        <div className="Year">2021</div>
        <Slider {...settings}>
          <div>
            <img src={Bentley} alt="Bentley" />
            <div className="SponType">Technical Partner</div>
          </div>
          <div>
            <img src={Grill} alt="Gril" />
            <div className="SponType">Gold Sponsor</div>
          </div>
          <div>
            <img src={Fsi} alt="Fsi" />
            <div className="SponType">Knowledge Partner</div>
          </div>
          <div>
            <img src={ongc} alt="ongc" />
            <div className="SponType">Gold Sponsor</div>
          </div>
          <div>
            <img src={tatabig} alt="Tata Steel" />
            <div className="SponType">Title Sponsor</div>
          </div>
          <div>
            <img src={edufabricabig} alt="Edu Fabrica" />
            <div className="SponType">Silver Sponsor</div>
          </div>
        </Slider>
        <div className="Year">2020</div>
        <Slider {...settings}>
          <div>
            <img src={nmcg} alt="Namani Gange" />
            <div className="SponType">Platinum Sponsor</div>
          </div>
          <div>
            <img src={tata} alt="Tata Steel" />
            <div className="SponType">Platinum Sponsor</div>
          </div>
          <div>
            <img src={edufabrica} alt="Edu Fabrica" />
            <div className="SponType">Silver Sponsor</div>
          </div>
          <div>
            <img src={consort} alt="consort" />
            <div className="SponType">Bronze Sponsor</div>
          </div>
          <div>
            <img src={ncc} alt="ncc" />
            <div className="SponType">Bronze Sponsor</div>
          </div>
          <div>
            <img src={bharatoil} alt="boil" />
            <div className="SponType">Bronze Sponsor</div>
          </div>
          <div>
            <img src={methodex} alt="sika" />
            <div className="SponType">Silver Sponsor</div>
          </div>
          <div>
            <img src={sika} alt="sika" />
            <div className="SponType">Silver Sponsor</div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;
