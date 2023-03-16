import React from "react";
import HeaderLogo from "../assets/img/logo-1.png";
import "../styles/views/home.css";

const Footer = () => {
  return (
    <footer>
      <div className="box">
        <div className="footer-grid">
          <img src={HeaderLogo} alt="HeaderLogo" />
          <div className="footer-center">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <p>Extract 2023 © All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
