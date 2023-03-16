import React from "react";

import "../styles/components/header.css";

import HeaderLogo from "../assets/img/logo-1.png";
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

const Header = () => {
  return (
    <header>
      <div className="box">
        <div className="header-grid">
          <div className="header-left">
            <img src={HeaderLogo} alt="HeaderLogo" />
            <div className="search-input-box">
              <BsSearch />
              <input type="text" placeholder="Search" />
            </div>
            <a href="#">Collections</a>
            <a href="#">Documents</a>
            <a href="#">FAQ</a>
          </div>
          <div className="header-right">
            <a href="#" className="icon-link">
              <BsTwitter />
            </a>
            <a href="#" className="icon-link">
              <BsDiscord />
            </a>
            <a href="#" className="cart-icon-link">
              <BsCart3 />
              <span>3</span>
            </a>
            <a href="#" className="icon-link">
              <BsHeartFill />
            </a>
            <div className="light-dark-theme-box">
              <div className="theme-icon">
                <BsSun />
              </div>
              <div className="theme-icon active-theme">
                <BsMoon />
              </div>
            </div>
            <a href="#" className="connect-wallet-link">
              <img src={ConnectWalletImg} alt="ConnectWalletImg" />
              <span className="grd-text">Connect</span>
            </a>
            <button className="outline-grd-btn">
              <div>
                <span className="grd-text">Earn</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
