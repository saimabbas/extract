import React, { useContext, useState } from "react";

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
import NewDepositCardMob from "../components/NewDepositCardMob";
const NewDeposit = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const [isExtraCollectionShowing, setIsExtraCollectionShowing] =
    useState(false);
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
                  <div className="prog-step">
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
                      width: "15%",
                    }}
                    className="prog-thumb"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="recenttrades-section newdeposit-section">
          <div className="box">
            <div className="collections-top">
              <h1>Collections</h1>
              <div className="search-input-box">
                <BsSearch />
                <input type="text" placeholder="Search" />

                {isDarkTheme ? (
                  <img src={SettingsIcon} alt="SettingsIcon" />
                ) : (
                  <img src={SettingsIconLight} alt="SettingsIcon" />
                )}
              </div>
              <Tab.Container defaultActiveKey="1h" transition={false}>
                <Nav variant="pills">
                  <Nav.Item>
                    <Nav.Link eventKey="1h">1h</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="1d">1d</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="1w">1w</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="30d">30d</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="1y">1y</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="all">All</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Tab.Container>
            </div>
            <div className="activity-table collections-table">
              <table>
                <thead>
                  <tr>
                    <th>Collection</th>
                    <th>TVL</th>
                    <th>Buy Price</th>
                    <th>Sell Price</th>
                    <th>Volume</th>
                    <th>Size</th>
                    <th>Listed,%</th>
                    <th>Change,24h</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="activity-index">
                        <img src={ActivityImg1} alt="ActivityImg1" />
                        <h6>Graphic</h6>
                      </div>
                    </td>
                    <td>
                      <div className="collections-tvl">
                        <p>90.1886 ₳</p>
                        <span>112 NFTs + 3.897 ₳</span>
                      </div>
                    </td>
                    <td>90.1886 ₳</td>
                    <td>87.1296 ₳</td>
                    <td>
                      <div className="collections-volume">
                        <p>
                          3.897 ₳ <span> / 7d</span>
                        </p>
                        <p>
                          12.899 ₳ <span> / 24h</span>
                        </p>
                      </div>
                    </td>
                    <td>9,890</td>
                    <td>10% (989)</td>
                    <td>
                      <div className="collections-change">
                        <BsArrowUpRight />
                        63.55%
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="activity-index">
                        <img src={ActivityImg2} alt="ActivityImg1" />
                        <h6>Graphic</h6>
                      </div>
                    </td>
                    <td>
                      <div className="collections-tvl">
                        <p>90.1886 ₳</p>
                        <span>112 NFTs + 3.897 ₳</span>
                      </div>
                    </td>
                    <td>90.1886 ₳</td>
                    <td>87.1296 ₳</td>
                    <td>
                      <div className="collections-volume">
                        <p>
                          3.897 ₳ <span> / 7d</span>
                        </p>
                        <p>
                          12.899 ₳ <span> / 24h</span>
                        </p>
                      </div>
                    </td>
                    <td>9,890</td>
                    <td>10% (989)</td>
                    <td>
                      <div className="collections-change">
                        <BsArrowUpRight />
                        63.55%
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="activity-index">
                        <img src={ActivityImg3} alt="ActivityImg1" />
                        <h6>Graphic</h6>
                      </div>
                    </td>
                    <td>
                      <div className="collections-tvl">
                        <p>90.1886 ₳</p>
                        <span>112 NFTs + 3.897 ₳</span>
                      </div>
                    </td>
                    <td>90.1886 ₳</td>
                    <td>87.1296 ₳</td>
                    <td>
                      <div className="collections-volume">
                        <p>
                          3.897 ₳ <span> / 7d</span>
                        </p>
                        <p>
                          12.899 ₳ <span> / 24h</span>
                        </p>
                      </div>
                    </td>
                    <td>9,890</td>
                    <td>10% (989)</td>
                    <td>
                      <div className="collections-change">
                        <BsArrowUpRight />
                        63.55%
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="activity-index">
                        <img src={ActivityImg4} alt="ActivityImg1" />
                        <h6>Graphic</h6>
                      </div>
                    </td>
                    <td>
                      <div className="collections-tvl">
                        <p>90.1886 ₳</p>
                        <span>112 NFTs + 3.897 ₳</span>
                      </div>
                    </td>
                    <td>90.1886 ₳</td>
                    <td>87.1296 ₳</td>
                    <td>
                      <div className="collections-volume">
                        <p>
                          3.897 ₳ <span> / 7d</span>
                        </p>
                        <p>
                          12.899 ₳ <span> / 24h</span>
                        </p>
                      </div>
                    </td>
                    <td>9,890</td>
                    <td>10% (989)</td>
                    <td>
                      <div className="collections-change">
                        <BsArrowUpRight />
                        63.55%
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="activity-index">
                        <img src={ActivityImg5} alt="ActivityImg1" />
                        <h6>Graphic</h6>
                      </div>
                    </td>
                    <td>
                      <div className="collections-tvl">
                        <p>90.1886 ₳</p>
                        <span>112 NFTs + 3.897 ₳</span>
                      </div>
                    </td>
                    <td>90.1886 ₳</td>
                    <td>87.1296 ₳</td>
                    <td>
                      <div className="collections-volume">
                        <p>
                          3.897 ₳ <span> / 7d</span>
                        </p>
                        <p>
                          12.899 ₳ <span> / 24h</span>
                        </p>
                      </div>
                    </td>
                    <td>9,890</td>
                    <td>10% (989)</td>
                    <td>
                      <div className="collections-change">
                        <BsArrowUpRight />
                        63.55%
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="activity-index">
                        <img src={ActivityImg6} alt="ActivityImg1" />
                        <h6>Graphic</h6>
                      </div>
                    </td>
                    <td>
                      <div className="collections-tvl">
                        <p>90.1886 ₳</p>
                        <span>112 NFTs + 3.897 ₳</span>
                      </div>
                    </td>
                    <td>90.1886 ₳</td>
                    <td>87.1296 ₳</td>
                    <td>
                      <div className="collections-volume">
                        <p>
                          3.897 ₳ <span> / 7d</span>
                        </p>
                        <p>
                          12.899 ₳ <span> / 24h</span>
                        </p>
                      </div>
                    </td>
                    <td>9,890</td>
                    <td>10% (989)</td>
                    <td>
                      <div className="collections-change">
                        <BsArrowUpRight />
                        63.55%
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="activity-index">
                        <img src={ActivityImg7} alt="ActivityImg1" />
                        <h6>Graphic</h6>
                      </div>
                    </td>
                    <td>
                      <div className="collections-tvl">
                        <p>90.1886 ₳</p>
                        <span>112 NFTs + 3.897 ₳</span>
                      </div>
                    </td>
                    <td>90.1886 ₳</td>
                    <td>87.1296 ₳</td>
                    <td>
                      <div className="collections-volume">
                        <p>
                          3.897 ₳ <span> / 7d</span>
                        </p>
                        <p>
                          12.899 ₳ <span> / 24h</span>
                        </p>
                      </div>
                    </td>
                    <td>9,890</td>
                    <td>10% (989)</td>
                    <td>
                      <div className="collections-change">
                        <BsArrowUpRight />
                        63.55%
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="activity-index">
                        <img src={ActivityImg8} alt="ActivityImg1" />
                        <h6>Graphic</h6>
                      </div>
                    </td>
                    <td>
                      <div className="collections-tvl">
                        <p>90.1886 ₳</p>
                        <span>112 NFTs + 3.897 ₳</span>
                      </div>
                    </td>
                    <td>90.1886 ₳</td>
                    <td>87.1296 ₳</td>
                    <td>
                      <div className="collections-volume">
                        <p>
                          3.897 ₳ <span> / 7d</span>
                        </p>
                        <p>
                          12.899 ₳ <span> / 24h</span>
                        </p>
                      </div>
                    </td>
                    <td>9,890</td>
                    <td>10% (989)</td>
                    <td>
                      <div className="collections-change">
                        <BsArrowUpRight />
                        63.55%
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="activity-index">
                        <img src={ActivityImg9} alt="ActivityImg1" />
                        <h6>Graphic</h6>
                      </div>
                    </td>
                    <td>
                      <div className="collections-tvl">
                        <p>90.1886 ₳</p>
                        <span>112 NFTs + 3.897 ₳</span>
                      </div>
                    </td>
                    <td>90.1886 ₳</td>
                    <td>87.1296 ₳</td>
                    <td>
                      <div className="collections-volume">
                        <p>
                          3.897 ₳ <span> / 7d</span>
                        </p>
                        <p>
                          12.899 ₳ <span> / 24h</span>
                        </p>
                      </div>
                    </td>
                    <td>9,890</td>
                    <td>10% (989)</td>
                    <td>
                      <div className="collections-change">
                        <BsArrowUpRight />
                        63.55%
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="activity-index">
                        <img src={ActivityImg10} alt="ActivityImg1" />
                        <h6>Graphic</h6>
                      </div>
                    </td>
                    <td>
                      <div className="collections-tvl">
                        <p>90.1886 ₳</p>
                        <span>112 NFTs + 3.897 ₳</span>
                      </div>
                    </td>
                    <td>90.1886 ₳</td>
                    <td>87.1296 ₳</td>
                    <td>
                      <div className="collections-volume">
                        <p>
                          3.897 ₳ <span> / 7d</span>
                        </p>
                        <p>
                          12.899 ₳ <span> / 24h</span>
                        </p>
                      </div>
                    </td>
                    <td>9,890</td>
                    <td>10% (989)</td>
                    <td>
                      <div className="collections-change">
                        <BsArrowUpRight />
                        63.55%
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="newdeposit-grid">
              <NewDepositCardMob />
              <NewDepositCardMob />
              <NewDepositCardMob />
              <NewDepositCardMob />
              <NewDepositCardMob />
              <NewDepositCardMob />
              <NewDepositCardMob />
              <NewDepositCardMob />
              {isExtraCollectionShowing ? (
                <>
                  <NewDepositCardMob />
                  <NewDepositCardMob />
                  <NewDepositCardMob />
                  <NewDepositCardMob />
                  <NewDepositCardMob />
                  <NewDepositCardMob />
                  <NewDepositCardMob />
                  <NewDepositCardMob />
                </>
              ) : null}
            </div>
            <div className="plp-btn">
              <div>
                {isExtraCollectionShowing ? (
                  <button
                    onClick={() => {
                      setIsExtraCollectionShowing(false);
                    }}
                    className="outline-grd-btn"
                  >
                    <div>
                      <span className="grd-text">Show less</span>
                    </div>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setIsExtraCollectionShowing(true);
                    }}
                    className="outline-grd-btn"
                  >
                    <div>
                      <span className="grd-text">Show more</span>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default NewDeposit;
