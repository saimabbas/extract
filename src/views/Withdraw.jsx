import React, { useContext } from "react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/views/home.css";
import "../styles/views/recenttrades.css";
import "../styles/views/collections.css";
import "../styles/views/individualcollection.css";
import "../styles/views/earn.css";

// Components
import Header from "../components/Header";

// Assets

import ActivityImg1 from "../assets/img/activity/activity-img-10.png";
import ActivityImg2 from "../assets/img/activity/activity-img-1.png";
import ActivityImg3 from "../assets/img/activity/activity-img-2.png";
import ActivityImg4 from "../assets/img/activity/activity-img-3.png";
import ActivityImg5 from "../assets/img/activity/activity-img-4.png";
import ActivityImg6 from "../assets/img/activity/activity-img-5.png";
import ActivityImg7 from "../assets/img/activity/activity-img-6.png";
import ActivityImg8 from "../assets/img/activity/activity-img-7.png";
import ActivityImg9 from "../assets/img/activity/activity-img-8.png";
import ActivityImg10 from "../assets/img/activity/activity-img-9.png";
import SellIcon from "../assets/img/sell-icon.svg";
import SettingsIcon from "../assets/img/settings-icon.svg";
import SettingsIconLight from "../assets/img/settings-icon-light.svg";
import BuyIcon from "../assets/img/buy-icon.svg";
import HomeBlob1 from "../assets/img/home-blob-1.png";
import TradeBlob1 from "../assets/img/trade-blob-1.png";
import DollarImg from "../assets/img/dollar-img.svg";
import EarnBg from "../assets/img/earn-bg.png";
import Footer from "../components/Footer";
import { ThemeContext } from "../ThemeContext";
import { Accordion, Nav, Tab } from "react-bootstrap";

import {
  BsArrow90DegRight,
  BsArrowUpRight,
  BsCart,
  BsCart2,
  BsCart3,
  BsCart4,
  BsCartCheck,
  BsCartFill,
  BsCartXFill,
  BsCheck,
  BsChevronLeft,
  BsDiscord,
  BsHeart,
  BsHeartFill,
  BsMoon,
  BsSearch,
  BsSun,
  BsTwitter,
} from "react-icons/bs";
import DepositsCard from "../components/DepositsCard";
import { Link } from "react-router-dom";
import WithdrawCard from "../components/WithdrawCard";

const Collections = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="extract-app">
      <div className="home-page">
        {isDarkTheme ? (
          <img className="home-blob-1" src={HomeBlob1} alt="HomeBlob" />
        ) : null}
        {isDarkTheme ? (
          <img className="trade-blob-1" src={TradeBlob1} alt="HomeBlob" />
        ) : null}
        <Header />
        <section className="earn-head-section">
          <div className="box">
            <div className="earn-head">
              <img src={DollarImg} alt="DollarImg" />
              <div>
                <h2>Earn</h2>
                <p>
                  Provide liquidity through Extract and put your CNFTs to work!{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="ic-grid-container">
          <div className="box">
            <div className="ic-grid">
              <div className="ic-grid-left-box ic-grid-left-box-2">
                <Link to="/selectnfts">
                  <div className="grd-text">
                    <BsChevronLeft />
                    Back
                  </div>
                </Link>
                <h3>Withdraw</h3>
                <div className="ic-grid-left">
                  <h3>Convert tokens</h3>
                  <div className="input-box-1-1">
                    <label htmlFor="">NFTS to withdraw</label>
                    <div className="ntw-box">
                      <input type="text" defaultValue={0} />
                      <div className="grd-text">Max</div>
                    </div>
                  </div>
                  <h6>
                    <span>Withdrawn: </span> 88.68 ₳ + 1 NFTs
                  </h6>
                  <p>Buy 0.000040 NFTs for 0.0000020 ₳ </p>
                  <button className="fill-grd-btn">Withdraw</button>
                </div>
              </div>
              <div className="ic-grid-right">
                <h4>Select NFTs</h4>
                <p>
                  You can withdraw any 1 NFTs the pool. Each withdraw is capped
                  at 20 NFTs
                </p>
                <div className="ic-cards-grid">
                  <WithdrawCard />
                  <WithdrawCard />
                  <WithdrawCard />
                  <WithdrawCard />
                  <WithdrawCard />
                  <WithdrawCard />
                  <WithdrawCard />
                  <WithdrawCard />
                  <WithdrawCard />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Collections;
