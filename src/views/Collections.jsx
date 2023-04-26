import React, { useContext, useState } from "react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/views/home.css";
import "../styles/views/recenttrades.css";
import "../styles/views/collections.css";
import "../styles/views/individualcollection.css";

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
import Footer from "../components/Footer";
import { ThemeContext } from "../ThemeContext";
import { Accordion, Nav, Tab } from "react-bootstrap";
import HeartIcon from "../assets/img/heart-icon-outline.svg";
import HeartIcon2 from "../assets/img/heart-icon-outline-2.svg";
import HeartIconFilled from "../assets/img/heart-icon-filled.svg";

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
  BsChevronDown,
  BsDiscord,
  BsHeart,
  BsHeartFill,
  BsMoon,
  BsSearch,
  BsSun,
  BsTwitter,
  BsX,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import CollectionsCardMob from "../components/CollectionsCardMob";
import CollectionsTableRow from "../components/CollectionsTableRow";

const Collections = () => {
  const [isExtraCollectionShowing, setIsExtraCollectionShowing] =
    useState(false);
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
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
        <section className="recenttrades-section">
          <div className="box">
            <div className="collections-top">
              <h1>Collections</h1>
              <div className="search-input-box">
                <BsSearch />
                <input type="text" placeholder="Search" />
                {isSettingsOpen ? (
                  <div
                    className="sib-cross"
                    onClick={() => {
                      setIsSettingsOpen(false);
                    }}
                  >
                    <BsX />
                  </div>
                ) : (
                  <>
                    {isDarkTheme ? (
                      <img
                        onClick={() => {
                          setIsSettingsOpen(true);
                        }}
                        src={SettingsIcon}
                        alt="SettingsIcon"
                      />
                    ) : (
                      <img
                        onClick={() => {
                          setIsSettingsOpen(true);
                        }}
                        src={SettingsIconLight}
                        alt="SettingsIcon"
                      />
                    )}
                  </>
                )}
                {isSettingsOpen ? (
                  <div className="sib-settings">
                    <div className="ic-acc">
                      <Accordion>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <div className="ic-cc-head">
                              Volume
                              <BsChevronDown />
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="ic-acc-body">
                              <div className="ic-check-select-box">
                                <p>From low to high</p>
                                <div className="ic-checkbox">
                                  <input type="radio" name="Volume" id="v1" />
                                  <label htmlFor="v1">
                                    <div className="icc-check">
                                      <BsCheck />
                                    </div>
                                  </label>
                                </div>
                              </div>
                              <div className="ic-check-select-box">
                                <p>From high to low</p>
                                <div className="ic-checkbox">
                                  <input type="radio" name="Volume" id="v2" />
                                  <label htmlFor="v2">
                                    <div className="icc-check">
                                      <BsCheck />
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                    <div className="ic-acc">
                      <Accordion>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <div className="ic-cc-head">
                              TVL
                              <BsChevronDown />
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="ic-acc-body">
                              <div className="ic-check-select-box">
                                <p>From low to high</p>
                                <div className="ic-checkbox">
                                  <input type="radio" name="TVL" id="tvl1" />
                                  <label htmlFor="tvl1">
                                    <div className="icc-check">
                                      <BsCheck />
                                    </div>
                                  </label>
                                </div>
                              </div>
                              <div className="ic-check-select-box">
                                <p>From high to low</p>
                                <div className="ic-checkbox">
                                  <input type="radio" name="TVL" id="tvl2" />
                                  <label htmlFor="tvl2">
                                    <div className="icc-check">
                                      <BsCheck />
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                    <div className="ic-acc">
                      <Accordion>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <div className="ic-cc-head">
                              Price
                              <BsChevronDown />
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="ic-acc-body">
                              <div className="ic-check-select-box">
                                <p>From low to high</p>
                                <div className="ic-checkbox">
                                  <input type="radio" name="Price" id="p1" />
                                  <label htmlFor="p1">
                                    <div className="icc-check">
                                      <BsCheck />
                                    </div>
                                  </label>
                                </div>
                              </div>
                              <div className="ic-check-select-box">
                                <p>From high to low</p>
                                <div className="ic-checkbox">
                                  <input type="radio" name="Price" id="p2" />
                                  <label htmlFor="p2">
                                    <div className="icc-check">
                                      <BsCheck />
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                    <div className="ic-acc">
                      <Accordion>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <div className="ic-cc-head">
                              Collection size
                              <BsChevronDown />
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="ic-acc-body">
                              <div className="ic-check-select-box">
                                <p>From low to high</p>
                                <div className="ic-checkbox">
                                  <input
                                    type="radio"
                                    name="Collection size"
                                    id="cs1"
                                  />
                                  <label htmlFor="cs1">
                                    <div className="icc-check">
                                      <BsCheck />
                                    </div>
                                  </label>
                                </div>
                              </div>
                              <div className="ic-check-select-box">
                                <p>From high to low</p>
                                <div className="ic-checkbox">
                                  <input
                                    type="radio"
                                    name="Collection size"
                                    id="cs2"
                                  />
                                  <label htmlFor="cs2">
                                    <div className="icc-check">
                                      <BsCheck />
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                    <button className="fill-grd-btn">Confirm</button>
                    <div className="grd-text">Clear all</div>
                  </div>
                ) : null}
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
              <table className="collections-with-heart">
                <thead>
                  <tr>
                    <th></th>
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
                <tbody >
                  <CollectionsTableRow />
                  <CollectionsTableRow />
                  <CollectionsTableRow />
                  <CollectionsTableRow />
                  <CollectionsTableRow />
                  <CollectionsTableRow />
                  <CollectionsTableRow />
                  <CollectionsTableRow />
                  <CollectionsTableRow />
                  <CollectionsTableRow />
                </tbody>
              </table>
            </div>
            <div className="collections-grid-mob">
              <CollectionsCardMob />
              <CollectionsCardMob />
              <CollectionsCardMob />
              <CollectionsCardMob />
              <CollectionsCardMob />
              <CollectionsCardMob />
              <CollectionsCardMob />
              <CollectionsCardMob />
              {isExtraCollectionShowing ? (
                <>
                  <CollectionsCardMob />
                  <CollectionsCardMob />
                  <CollectionsCardMob />
                  <CollectionsCardMob />
                  <CollectionsCardMob />
                  <CollectionsCardMob />
                  <CollectionsCardMob />
                  <CollectionsCardMob />
                </>
              ) : null}
            </div>
            <div className="clc-btn">
              {isExtraCollectionShowing ? (
                <button
                  className="outline-grd-btn"
                  onClick={() => {
                    setIsExtraCollectionShowing(false);
                  }}
                >
                  <div>
                    <span className="grd-text">Show less</span>
                  </div>
                </button>
              ) : (
                <button
                  className="outline-grd-btn"
                  onClick={() => {
                    setIsExtraCollectionShowing(true);
                  }}
                >
                  <div>
                    <span className="grd-text">Show more</span>
                  </div>
                </button>
              )}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Collections;
