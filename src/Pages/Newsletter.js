import React from "react";
import Newsletterpic from "../Assets/Newsletter-pic.jpg";
import { BsFacebook, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import "../CSS/Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="nl-container">
        <h6>NEWSLETTER</h6>
        <h1>SIGN UP FOR LATEST UPDATES AND OFFERS</h1>
        <div className="nl-email">
          <input placeholder="Email Address" />
          <button className="nl-subscribe">Subscribe</button>
        </div>
        <p>Will be used in accordance with our Privacy Policy</p>
        <div className="nl-icons">
          <div className="fb-icon icons">
            <BsFacebook />
          </div>
          <div className="linkedin-icon icons">
            <BsLinkedin />
          </div>
          <div className="ig-icon icons">
            <BsInstagram />
          </div>
          <div className="twitter-icon icons">
            <BsTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
