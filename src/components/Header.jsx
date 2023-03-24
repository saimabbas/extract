import React, { useContext, useEffect, useState } from "react";

import "../styles/components/header.css";

import HeaderLogo1 from "../assets/img/logo-1.png";
import HeaderLogo2 from "../assets/img/logo-2.png";
import ConnectWalletImg from "../assets/img/connect-wallet.svg";

import {
  BsCart,
  BsCart2,
  BsCart3,
  BsCart4,
  BsCartCheck,
  BsCartFill,
  BsCartXFill,
  BsDiscord,
  BsHeart,
  BsHeartFill,
  BsMoon,
  BsSearch,
  BsSun,
  BsTwitter,
} from "react-icons/bs";
import { ThemeContext } from "../ThemeContext";
import { Link, useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Header = (props) => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <div className="box">
        <div className="header-grid">
          <div className="header-left">
            <Link to="/">
              {isDarkTheme ? (
                <img src={HeaderLogo1} alt="HeaderLogo" />
              ) : (
                <img src={HeaderLogo2} alt="HeaderLogo" />
              )}
            </Link>

            <div className="search-input-box">
              <BsSearch />
              <input type="text" placeholder="Search" />
            </div>
            <Link to="/collections">Collections</Link>
            <a target={"_blank"} href="https://tcclabs.github.io/extract/">
              Documents
            </a>
            <Link to="/#faqs-section" onClick={props.goToFAQs}>
              FAQs
            </Link>
          </div>
          <div className="header-right">
            <a
              target={"_blank"}
              href="https://twitter.com/TCCCNFT"
              className="icon-link"
            >
              <BsTwitter />
            </a>
            <a
              target={"_blank"}
              href="https://discord.gg/2HMZ8s9E6T"
              className="icon-link"
            >
              <BsDiscord />
            </a>
            <a href="#" className="cart-icon-link">
              <BsCartFill />
              <span>3</span>
            </a>
            <Link to="/favourites" className="cart-icon-link">
              <BsHeartFill />
            </Link>
            <div className="light-dark-theme-box">
              {isDarkTheme ? (
                <div
                  className="theme-icon"
                  onClick={() => {
                    toggleTheme();
                  }}
                >
                  <BsSun />
                </div>
              ) : (
                <div
                  className="theme-icon active-theme"
                  onClick={() => {
                    toggleTheme();
                  }}
                >
                  <BsSun />
                </div>
              )}
              {isDarkTheme ? (
                <div
                  className="theme-icon active-theme"
                  onClick={() => {
                    toggleTheme();
                  }}
                >
                  <BsMoon />
                </div>
              ) : (
                <div
                  className="theme-icon"
                  onClick={() => {
                    toggleTheme();
                  }}
                >
                  <BsMoon />
                </div>
              )}
            </div>
            <a href="#" className="connect-wallet-link">
              <img src={ConnectWalletImg} alt="ConnectWalletImg" />
              <span className="grd-text">Connect</span>
            </a>
            <Link to="/earn">
              <button className="outline-grd-btn">
                <div>
                  <span className="grd-text">Earn</span>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
