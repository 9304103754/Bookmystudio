import React from 'react';
import './Hero.css';

import MobileScreen from "../assets/mobileScreen.svg";
import MobileRing from "../assets/mobileRing.svg";
import BackShade1 from "../assets/backShade1.svg";
import BackShade2 from "../assets/backShade2.svg";
import DownloadIcon from "../assets/downloadIcon.svg";
// import MobileScreen from '../assets/'

const Hero = () => {
  return (
    <section>
      <div className="hero-section">
        {/* left */}
        <div className="hero-left">
          {/* top */}
          <div className="hero-top">
            <div className="hero-welcome">
              <h3>Welcome To Book My Studio</h3>
            </div>
            <div className="hero-title">
              <h1>
                Your <span>Creative Space</span> Awaits
              </h1>
            </div>
          </div>

          <div className="hero-description">
            Are you an artist, photographer, musician, dancer, or anyone with
            a passion for creativity? We understand the importance of the
            right space to bring your artistic vision to life. That's why
            we're thrilled to welcome you to Studio on Rent, your gateway to a
            world of limitless possibilities.
          </div>

          <button className="hero-button">
            <img src={DownloadIcon} alt="Download Icon" />
            <div>Download App</div>
          </button>
        </div>

        {/* right */}
        <div className="hero-right">
          <div className="2xl:block hidden relative z-10">
            <div className="hero-mobile-screen">
              <img src={MobileScreen} alt="Mobile screen" />
            </div>
            <div className="hero-mobile-ring">
              <img src={MobileRing} alt="Ring on mobile screen" />
            </div>
          </div>
          <div className="hero-back-shade1">
            <img src={BackShade1} alt="back shade" />
          </div>
          <div className="hero-back-shade2">
            <img src={BackShade2} alt="back shade" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
