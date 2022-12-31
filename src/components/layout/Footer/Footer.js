import React from "react";
import playstore from "../../../images/playstore.png";
import Appstore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4> DOWNLOAD OUR APP</h4>
        <p> Download App for Android and IOS mobile phone </p>
        <img src={playstore} alt="playstore" />
        <img src={Appstore} alt="appstore" />
      </div>
      <div className="midFooter">
        <h1>ECOMMERCE</h1>
        <p> High Quality is our first priority</p>

        <p> Copyrights 2022 &copy; ServendraTiwari </p>
      </div>
      <div className="rightFooter">
        <h4>Follow us</h4>
        <a href="http://instagram.com/tiwariservendra99"> Instagram</a>
        <a href="http://youtube.com">Youtube</a>
        <a href="http://facebook.com">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
