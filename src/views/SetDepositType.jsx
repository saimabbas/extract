import React, { useContext } from "react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/views/home.css";
import "../styles/views/recenttrades.css";
import "../styles/views/collections.css";
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
import DivideImg from "../assets/img/divide-img.svg";
import DollarImg from "../assets/img/plus-img.svg";
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
  BsCheck2Circle,
  BsCheckCircle,
  BsChevronLeft,
  BsDiscord,
  BsHeart,
  BsHeartFill,
  BsMoon,
  BsQuestionCircle,
  BsSearch,
  BsSun,
  BsTwitter,
} from "react-icons/bs";
import DepositsCard from "../components/DepositsCard";
import { Link } from "react-router-dom";

const SetDepositType = () => {
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
                <h2>New deposit</h2>
                <p>
                  Select the NFT collection to provide liquidity{" "}
                  <BsQuestionCircle />{" "}
                </p>
                <div className="prog-box">
                  <div className="prog-step prog-step-active">
                    <BsCheckCircle />
                    <div>
                      <p>01</p>
                      <p>Choose collection</p>
                    </div>
                  </div>
                  <div className="prog-step prog-step-active">
                    <BsCheckCircle />
                    <div>
                      <p>02</p>
                      <p>Set deposit type</p>
                    </div>
                  </div>
                  <div className="prog-step">
                    <BsCheckCircle />
                    <div>
                      <p>03</p>
                      <p>Select NFTs</p>
                    </div>
                  </div>
                </div>
                <div className="prog-line">
                  <div
                    style={{
                      width: "45%",
                    }}
                    className="prog-thumb"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="setdeposittype-section">
          <div className="box">
            <div className="setdeposittype">
              <Link to="/newdeposit">
                <div className="grd-text">
                  <BsChevronLeft />
                  Back to step 1
                </div>
              </Link>
              <h2>Set deposit type</h2>
              <div className="sdt-box">
                <img src={DivideImg} alt="DivideImg" />
                <h4>Automated deposit</h4>
                <p>
                  Behavioral targeting produces a marketing tool. The event
                  format saves system analysis
                </p>
                <Link to="/selectnfts">
                  <button className="fill-grd-btn">Select</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default SetDepositType;
