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

const Collections = () => {
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
                <h2>Earn</h2>
                <p>
                  Provide liquidity through Extract and put your CNFTs to work!{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="your-deposits-section">
          <div className="box">
            <div className="yds-head">
              <h2>Your deposits</h2>
              <div className="yds-head-right">
                <div className="yds-info-box">
                  <p>Deposits: </p> <span>19.40 ₳</span>
                </div>
                <div className="yds-info-box">
                  <p>Pending fees:</p> <span>0 ₳</span>
                </div>
                <Link to="/setdeposittype">
                  <button className="fill-grd-btn">Provide liquidity</button>
                </Link>
              </div>
            </div>
            <div className="your-deposits-grid">
              <DepositsCard />
              <DepositsCard />
              <DepositsCard />
              <DepositsCard />
              <DepositsCard />
              <DepositsCard />
              <DepositsCard />
              <DepositsCard />
            </div>
          </div>
        </section>
        <section className="liquidity-tools-section">
          <div className="box">
            <div className="lt-top">
              <h2>Popular liquidity pools</h2>
              <div className="search-input-box">
                <BsSearch />
                <input type="text" placeholder="Search" />
              </div>
            </div>
            <div className="plt-table">
              <div className="activity-table collections-table">
                <table>
                  <thead>
                    <tr>
                      <th>Collection</th>
                      <th>Balance</th>
                      <th>Deposit</th>
                      <th>Volume</th>
                      <th></th>
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
                      <td>90.1886 ₳</td>
                      <td>
                        <div className="collections-tvl">
                          <p>90.1886 ₳</p>
                          <span>112 NFTs + 3.897 ₳</span>
                        </div>
                      </td>
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
                      <td>
                        <Link to="/setdeposittype">
                          <button className="outline-grd-btn">
                            <div>
                              <span className="grd-text">
                                Provide Liquidity
                              </span>
                            </div>
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg1} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>90.1886 ₳</td>
                      <td>
                        <div className="collections-tvl">
                          <p>90.1886 ₳</p>
                          <span>112 NFTs + 3.897 ₳</span>
                        </div>
                      </td>
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
                      <td>
                        <Link to="/setdeposittype">
                          <button className="outline-grd-btn">
                            <div>
                              <span className="grd-text">
                                Provide Liquidity
                              </span>
                            </div>
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg1} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>90.1886 ₳</td>
                      <td>
                        <div className="collections-tvl">
                          <p>90.1886 ₳</p>
                          <span>112 NFTs + 3.897 ₳</span>
                        </div>
                      </td>
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
                      <td>
                        <Link to="/setdeposittype">
                          <button className="outline-grd-btn">
                            <div>
                              <span className="grd-text">
                                Provide Liquidity
                              </span>
                            </div>
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg1} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>90.1886 ₳</td>
                      <td>
                        <div className="collections-tvl">
                          <p>90.1886 ₳</p>
                          <span>112 NFTs + 3.897 ₳</span>
                        </div>
                      </td>
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
                      <td>
                        <Link to="/setdeposittype">
                          <button className="outline-grd-btn">
                            <div>
                              <span className="grd-text">
                                Provide Liquidity
                              </span>
                            </div>
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg1} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>90.1886 ₳</td>
                      <td>
                        <div className="collections-tvl">
                          <p>90.1886 ₳</p>
                          <span>112 NFTs + 3.897 ₳</span>
                        </div>
                      </td>
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
                      <td>
                        <Link to="/setdeposittype">
                          <button className="outline-grd-btn">
                            <div>
                              <span className="grd-text">
                                Provide Liquidity
                              </span>
                            </div>
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg1} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>90.1886 ₳</td>
                      <td>
                        <div className="collections-tvl">
                          <p>90.1886 ₳</p>
                          <span>112 NFTs + 3.897 ₳</span>
                        </div>
                      </td>
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
                      <td>
                        <Link to="/setdeposittype">
                          <button className="outline-grd-btn">
                            <div>
                              <span className="grd-text">
                                Provide Liquidity
                              </span>
                            </div>
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg1} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>90.1886 ₳</td>
                      <td>
                        <div className="collections-tvl">
                          <p>90.1886 ₳</p>
                          <span>112 NFTs + 3.897 ₳</span>
                        </div>
                      </td>
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
                      <td>
                        <Link to="/setdeposittype">
                          <button className="outline-grd-btn">
                            <div>
                              <span className="grd-text">
                                Provide Liquidity
                              </span>
                            </div>
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg1} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>90.1886 ₳</td>
                      <td>
                        <div className="collections-tvl">
                          <p>90.1886 ₳</p>
                          <span>112 NFTs + 3.897 ₳</span>
                        </div>
                      </td>
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
                      <td>
                        <Link to="/setdeposittype">
                          <button className="outline-grd-btn">
                            <div>
                              <span className="grd-text">
                                Provide Liquidity
                              </span>
                            </div>
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg1} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>90.1886 ₳</td>
                      <td>
                        <div className="collections-tvl">
                          <p>90.1886 ₳</p>
                          <span>112 NFTs + 3.897 ₳</span>
                        </div>
                      </td>
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
                      <td>
                        <Link to="/setdeposittype">
                          <button className="outline-grd-btn">
                            <div>
                              <span className="grd-text">
                                Provide Liquidity
                              </span>
                            </div>
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg1} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>90.1886 ₳</td>
                      <td>
                        <div className="collections-tvl">
                          <p>90.1886 ₳</p>
                          <span>112 NFTs + 3.897 ₳</span>
                        </div>
                      </td>
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
                      <td>
                        <Link to="/setdeposittype">
                          <button className="outline-grd-btn">
                            <div>
                              <span className="grd-text">
                                Provide Liquidity
                              </span>
                            </div>
                          </button>
                        </Link>
                      </td>
                    </tr>

                    {isExtraCollectionShowing ? (
                      <>
                        <tr>
                          <td>
                            <div className="activity-index">
                              <img src={ActivityImg1} alt="ActivityImg1" />
                              <h6>Graphic</h6>
                            </div>
                          </td>
                          <td>90.1886 ₳</td>
                          <td>
                            <div className="collections-tvl">
                              <p>90.1886 ₳</p>
                              <span>112 NFTs + 3.897 ₳</span>
                            </div>
                          </td>
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
                          <td>
                            <Link to="/setdeposittype">
                              <button className="outline-grd-btn">
                                <div>
                                  <span className="grd-text">
                                    Provide Liquidity
                                  </span>
                                </div>
                              </button>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="activity-index">
                              <img src={ActivityImg1} alt="ActivityImg1" />
                              <h6>Graphic</h6>
                            </div>
                          </td>
                          <td>90.1886 ₳</td>
                          <td>
                            <div className="collections-tvl">
                              <p>90.1886 ₳</p>
                              <span>112 NFTs + 3.897 ₳</span>
                            </div>
                          </td>
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
                          <td>
                            <Link to="/setdeposittype">
                              <button className="outline-grd-btn">
                                <div>
                                  <span className="grd-text">
                                    Provide Liquidity
                                  </span>
                                </div>
                              </button>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="activity-index">
                              <img src={ActivityImg1} alt="ActivityImg1" />
                              <h6>Graphic</h6>
                            </div>
                          </td>
                          <td>90.1886 ₳</td>
                          <td>
                            <div className="collections-tvl">
                              <p>90.1886 ₳</p>
                              <span>112 NFTs + 3.897 ₳</span>
                            </div>
                          </td>
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
                          <td>
                            <Link to="/setdeposittype">
                              <button className="outline-grd-btn">
                                <div>
                                  <span className="grd-text">
                                    Provide Liquidity
                                  </span>
                                </div>
                              </button>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="activity-index">
                              <img src={ActivityImg1} alt="ActivityImg1" />
                              <h6>Graphic</h6>
                            </div>
                          </td>
                          <td>90.1886 ₳</td>
                          <td>
                            <div className="collections-tvl">
                              <p>90.1886 ₳</p>
                              <span>112 NFTs + 3.897 ₳</span>
                            </div>
                          </td>
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
                          <td>
                            <Link to="/setdeposittype">
                              <button className="outline-grd-btn">
                                <div>
                                  <span className="grd-text">
                                    Provide Liquidity
                                  </span>
                                </div>
                              </button>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="activity-index">
                              <img src={ActivityImg1} alt="ActivityImg1" />
                              <h6>Graphic</h6>
                            </div>
                          </td>
                          <td>90.1886 ₳</td>
                          <td>
                            <div className="collections-tvl">
                              <p>90.1886 ₳</p>
                              <span>112 NFTs + 3.897 ₳</span>
                            </div>
                          </td>
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
                          <td>
                            <Link to="/setdeposittype">
                              <button className="outline-grd-btn">
                                <div>
                                  <span className="grd-text">
                                    Provide Liquidity
                                  </span>
                                </div>
                              </button>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="activity-index">
                              <img src={ActivityImg1} alt="ActivityImg1" />
                              <h6>Graphic</h6>
                            </div>
                          </td>
                          <td>90.1886 ₳</td>
                          <td>
                            <div className="collections-tvl">
                              <p>90.1886 ₳</p>
                              <span>112 NFTs + 3.897 ₳</span>
                            </div>
                          </td>
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
                          <td>
                            <Link to="/setdeposittype">
                              <button className="outline-grd-btn">
                                <div>
                                  <span className="grd-text">
                                    Provide Liquidity
                                  </span>
                                </div>
                              </button>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="activity-index">
                              <img src={ActivityImg1} alt="ActivityImg1" />
                              <h6>Graphic</h6>
                            </div>
                          </td>
                          <td>90.1886 ₳</td>
                          <td>
                            <div className="collections-tvl">
                              <p>90.1886 ₳</p>
                              <span>112 NFTs + 3.897 ₳</span>
                            </div>
                          </td>
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
                          <td>
                            <Link to="/setdeposittype">
                              <button className="outline-grd-btn">
                                <div>
                                  <span className="grd-text">
                                    Provide Liquidity
                                  </span>
                                </div>
                              </button>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="activity-index">
                              <img src={ActivityImg1} alt="ActivityImg1" />
                              <h6>Graphic</h6>
                            </div>
                          </td>
                          <td>90.1886 ₳</td>
                          <td>
                            <div className="collections-tvl">
                              <p>90.1886 ₳</p>
                              <span>112 NFTs + 3.897 ₳</span>
                            </div>
                          </td>
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
                          <td>
                            <Link to="/setdeposittype">
                              <button className="outline-grd-btn">
                                <div>
                                  <span className="grd-text">
                                    Provide Liquidity
                                  </span>
                                </div>
                              </button>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="activity-index">
                              <img src={ActivityImg1} alt="ActivityImg1" />
                              <h6>Graphic</h6>
                            </div>
                          </td>
                          <td>90.1886 ₳</td>
                          <td>
                            <div className="collections-tvl">
                              <p>90.1886 ₳</p>
                              <span>112 NFTs + 3.897 ₳</span>
                            </div>
                          </td>
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
                          <td>
                            <Link to="/setdeposittype">
                              <button className="outline-grd-btn">
                                <div>
                                  <span className="grd-text">
                                    Provide Liquidity
                                  </span>
                                </div>
                              </button>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="activity-index">
                              <img src={ActivityImg1} alt="ActivityImg1" />
                              <h6>Graphic</h6>
                            </div>
                          </td>
                          <td>90.1886 ₳</td>
                          <td>
                            <div className="collections-tvl">
                              <p>90.1886 ₳</p>
                              <span>112 NFTs + 3.897 ₳</span>
                            </div>
                          </td>
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
                          <td>
                            <Link to="/setdeposittype">
                              <button className="outline-grd-btn">
                                <div>
                                  <span className="grd-text">
                                    Provide Liquidity
                                  </span>
                                </div>
                              </button>
                            </Link>
                          </td>
                        </tr>
                      </>
                    ) : null}
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
                  </tbody>
                </table>
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
