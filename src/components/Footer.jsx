import React, { useContext } from "react";
import HeaderLogo1 from "../assets/img/logo-1.png";
import HeaderLogo2 from "../assets/img/logo-2.png";
import "../styles/views/home.css";
import { ThemeContext } from "../ThemeContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <footer>
      <div className="box">
        <div className="footer-grid">
          {isDarkTheme ? (
            <img src={HeaderLogo1} alt="HeaderLogo" />
          ) : (
            <img src={HeaderLogo2} alt="HeaderLogo" />
          )}
          <div className="footer-center">
            <a href="#">Privacy Policy</a>
            <Link to="/termsofservice">Terms of Service</Link>
          </div>
          <p>Extract 2023 © All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
