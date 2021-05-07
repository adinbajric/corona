import React from "react";
import White from "../../assets/White.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-first">
          <img src={White} className="logo" alt="logo" />
          <p>Covid-19 © 2021. All rights reserved.</p>
        </div>
        <div className="footer-second">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <div>
            <p>+63 911 111 1111</p>
            <p>Unit 12 Bldg Name, Street Name</p>
            <p>City, Country 4444</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
