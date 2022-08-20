import React from "react";
import hotelIcon from "../../assets/images/hotel-icon.png";
import about from "../../assets/images/about.jpg";
import "./about.scss"

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about_container">
          <div className="about_left">
            <div className="about_icon">
              <img src={hotelIcon} alt="hotelIcon" />
            </div>
            <h2>ABOUT US</h2>
            <p>
              Located in the heart of beautiful Nha Trang city, The Costa is
              overlooking the sea with its airy and sophisticated architecture,
              completely harmonious with nature.
            </p>
            <p>
              In addition to the premium facilities which help you enjoy the
              luxury class, it has a warm and friendly design and a suitable
              space to share the moment of immersing yourself in the high life
              with your friends, family and relatives.
            </p>
          </div>
          <div className="about_right">
            <img src={about} alt="about" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
