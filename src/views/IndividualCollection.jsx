import React, { useContext, useEffect, useState } from "react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/views/home.css";
import "../styles/views/individualcollection.css";

// Components
import Header from "../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ReactSlider from "react-slider";
import { Pagination, Navigation, Mousewheel, Autoplay, FreeMode } from "swiper";

// Assets
import WelcomeImg from "../assets/img/welcome-img.png";
import HomeSliderImg1 from "../assets/img/home-slider-img-1.png";
import HomeBlob1 from "../assets/img/home-blob-1.png";
import HomeBlob2 from "../assets/img/home-blob-2.png";
import HomeBlob3 from "../assets/img/home-blob-3.png";
import HomeBlob4 from "../assets/img/home-blob-4.png";
import HomeBlob5 from "../assets/img/home-blob-5.png";
import SellIcon from "../assets/img/sell-icon.svg";
import BuyIcon from "../assets/img/buy-icon.svg";
import FaqImg from "../assets/img/faq-img.png";
import CollectionImg1 from "../assets/img/collection/collection-img-1.png";
import CollectionImg2 from "../assets/img/collection/collection-img-2.png";
import CollectionImg3 from "../assets/img/collection/collection-img-3.png";
import CollectionImg4 from "../assets/img/collection/collection-img-4.png";
import CollectionImg5 from "../assets/img/collection/collection-img-5.png";
import CollectionImg6 from "../assets/img/collection/collection-img-6.png";
import CollectionImg7 from "../assets/img/collection/collection-img-7.png";
import CollectionImg8 from "../assets/img/collection/collection-img-8.png";
import CollectionImg9 from "../assets/img/collection/collection-img-9.png";
import CollectionImg10 from "../assets/img/collection/collection-img-10.png";
import MarqueeImg1 from "../assets/img/marquee/marquee-img-1.png";
import MarqueeImg2 from "../assets/img/marquee/marquee-img-2.png";
import MarqueeImg3 from "../assets/img/marquee/marquee-img-3.png";
import MarqueeImg4 from "../assets/img/marquee/marquee-img-4.png";
import MarqueeImg5 from "../assets/img/marquee/marquee-img-5.png";
import MarqueeImg6 from "../assets/img/marquee/marquee-img-6.png";
import MarqueeImg7 from "../assets/img/marquee/marquee-img-7.png";
import MarqueeImg8 from "../assets/img/marquee/marquee-img-8.png";
import MarqueeImg9 from "../assets/img/marquee/marquee-img-9.png";
import MarqueeImg10 from "../assets/img/marquee/marquee-img-10.png";
import MarqueeImg11 from "../assets/img/marquee/marquee-img-14.png";
import MarqueeImg12 from "../assets/img/marquee/marquee-img-11.png";
import MarqueeImg13 from "../assets/img/marquee/marquee-img-12.png";
import MarqueeImg14 from "../assets/img/marquee/marquee-img-13.png";
import MarqueeImg15 from "../assets/img/marquee/marquee-img-15.png";
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

import {
  BsArrowLeft,
  BsArrowRight,
  BsCheck,
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
  BsFacebook,
  BsTelegram,
  BsTwitter,
  BsX,
} from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { Accordion, Nav, Tab } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import CollectionsCard from "../components/CollectionsCard";
import Footer from "../components/Footer";
import { ThemeContext } from "../ThemeContext";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import NFTCard from "../components/NFTCard";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

const Home = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const [isExtraCollectionShowing, setIsExtraCollectionShowing] =
    useState(false);
  const [activitiesModal, setActivitiesModal] = useState(false);
  const [limitOrderModal, setLimitOrderModal] = useState(false);
  const [instantSellModal, setInstantSellModal] = useState(false);
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, CSSRulePlugin);

  const goToFAQs = () => {
    gsap.to(window, {
      duration: 0,
      scrollTo: { y: "#faqs-section", offsetY: 100 },
    });
  };
  const closeActivitiesModal = () => setActivitiesModal(false);
  const openActivitiesModal = () => setActivitiesModal(true);
  const closeLimitOrderModal = () => setLimitOrderModal(false);
  const openLimitOrderModal = () => setLimitOrderModal(true);
  const closeInstantSellModal = () => setInstantSellModal(false);
  const openInstantSellModal = () => setInstantSellModal(true);

  return (
    <div className="extract-app">
      <main className="home-page">
        {isDarkTheme ? (
          <img className="home-blob-1" src={HomeBlob1} alt="HomeBlob" />
        ) : null}
        <Header goToFAQs={goToFAQs} />
        <section className="ic-top">
          <div className="box">
            <div className="ic-top-content">
              <img src={CollectionImg4} alt="CollectionImg" />
              <div className="ic-top-details">
                <div className="ictd-top">
                  <h2>The Ape Society</h2>
                  <div className="ictd-socials">
                    <a href="#">
                      <FaTelegramPlane />
                    </a>
                    <a href="#">
                      <BsTwitter />
                    </a>
                    <a href="#">
                      <BsFacebook />
                    </a>
                  </div>
                </div>
                <div className="ictd-grid">
                  <div>
                    <span>Buy now</span>
                    <p>44.65 ₳</p>
                  </div>
                  <div>
                    <span>Sell now</span>
                    <p>36.86 ₳</p>
                  </div>
                  <div>
                    <span>Volume, 7d-24h</span>
                    <p>5,176</p>
                  </div>
                  <div>
                    <span>Volume, ADA</span>
                    <p>5,176</p>
                  </div>
                  <div>
                    <span>Market cap</span>
                    <p>1,536,412 ₳</p>
                  </div>
                  <div>
                    <span>Listed amount</span>
                    <p>9,890</p>
                  </div>
                  <div>
                    <span>Sales, 24h</span>
                    <p>126</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ic-grid-container">
          <div className="box">
            <div className="ic-grid">
              <div className="ic-grid-left-box">
                <div className="ic-grid-left">
                  <h3>Filters</h3>
                  <div className="input-box-1">
                    <label htmlFor="">NFTS to buy</label>
                    <input type="text" defaultValue={0} />
                  </div>
                  <div className="input-box-2">
                    <label htmlFor="">Price: </label>
                    <input type="text" defaultValue={0} />
                  </div>
                  <div className="ic-acc">
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <div className="ic-cc-head">
                            Rarity
                            <BsChevronDown />
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="ic-acc-body">
                            <div className="ic-check-select-box">
                              <p>All</p>
                              <div className="ic-checkbox">
                                <input
                                  type="checkbox"
                                  name="Individuial Collection"
                                  id="ic1"
                                />
                                <label htmlFor="ic1">
                                  <div className="icc-check">
                                    <BsCheck />
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="ic-check-select-box">
                              <p>Rare</p>
                              <div className="ic-checkbox">
                                <input
                                  type="checkbox"
                                  name="Individuial Collection"
                                  id="ic2"
                                />
                                <label htmlFor="ic2">
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
                            <div className="icc-input-grid">
                              <input type="text" />
                              <input type="text" />
                            </div>

                            <ReactSlider
                              className="horizontal-slider"
                              thumbClassName="example-thumb"
                              trackClassName="example-track"
                              defaultValue={[0, 100]}
                              ariaLabel={["Lower thumb", "Upper thumb"]}
                              ariaValuetext={(state) =>
                                `Thumb value ${state.valueNow}`
                              }
                              renderThumb={(props, state) => (
                                <div {...props}>
                                  <span>{state.valueNow}</span>
                                </div>
                              )}
                              pearling
                              minDistance={0}
                            />
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
                            Traits
                            <BsChevronDown />
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="ic-acc-body">
                            <div className="ic-check-select-box">
                              <p>Rebels</p>
                              <div className="ic-checkbox">
                                <input type="checkbox" name="Traits" id="t1" />
                                <label htmlFor="t1">
                                  <div className="icc-check">
                                    <BsCheck />
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="ic-check-select-box">
                              <p>Enforcers</p>
                              <div className="ic-checkbox">
                                <input type="checkbox" name="Traits" id="t2" />
                                <label htmlFor="t2">
                                  <div className="icc-check">
                                    <BsCheck />
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="ic-check-select-box">
                              <p>Resistance</p>
                              <div className="ic-checkbox">
                                <input type="checkbox" name="Traits" id="t3" />
                                <label htmlFor="t3">
                                  <div className="icc-check">
                                    <BsCheck />
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className="ic-check-select-box">
                              <p>Operators</p>
                              <div className="ic-checkbox">
                                <input type="checkbox" name="Traits" id="t4" />
                                <label htmlFor="t4">
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
                  <div className="ic-acc trait-count">
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <div className="ic-cc-head">
                            Trait count
                            <BsChevronDown />
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="ic-acc-body">
                            <ReactSlider
                              className="horizontal-slider"
                              thumbClassName="example-thumb"
                              trackClassName="example-track"
                              defaultValue={[0, 7]}
                              ariaLabel={["Lower thumb", "Upper thumb"]}
                              ariaValuetext={(state) =>
                                `Thumb value ${state.valueNow}`
                              }
                              renderThumb={(props, state) => (
                                <div {...props}>
                                  <span>{state.valueNow}</span>
                                </div>
                              )}
                              pearling
                              min={0}
                              max={10}
                            />
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                  <div className="ic-check-select-box">
                    <p>By ownership</p>
                    <div className="ic-checkbox">
                      <input type="checkbox" name="Ownership" id="o1" />
                      <label htmlFor="o1">
                        <div className="icc-check">
                          <BsCheck />
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <button onClick={openLimitOrderModal} className="fill-grd-btn">
                  Limit order
                </button>
                <button
                  onClick={openInstantSellModal}
                  className="outline-grd-btn"
                >
                  <div>
                    <span className="grd-text">Instant Sell</span>
                  </div>
                </button>
              </div>
              <div className="ic-grid-right">
                <div className="icgr-top">
                  <select>
                    <option>Sort by</option>
                    <option value="1">Price (low to high)</option>
                    <option value="2">Price (high to low)</option>
                    <option value="3">Recently listed</option>
                    <option value="4">Rarity (rare to common)</option>
                    <option value="5">Rarity (common to rate)</option>
                  </select>
                  <Link to="/inventory">
                    <button className="outline-grd-btn">
                      <div>
                        <span className="grd-text">Inventory</span>
                      </div>
                    </button>
                  </Link>
                  <button
                    onClick={openActivitiesModal}
                    className="fill-grd-btn"
                  >
                    Activity
                  </button>
                </div>
                <div className="ic-cards-grid">
                  <NFTCard />
                  <NFTCard />
                  <NFTCard />
                  <NFTCard />
                  <NFTCard />
                  <NFTCard />
                  <NFTCard />
                  <NFTCard />
                  <NFTCard />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
      <Modal
        show={activitiesModal}
        onHide={closeActivitiesModal}
        centered
        className={
          isDarkTheme
            ? "dark-theme activity-modal-body"
            : "light-theme activity-modal-body"
        }
      >
        <Modal.Body>
          <div className="activities-modal">
            <section className="activity">
              <div className="activity-content">
                <div className="activity-table">
                  <table>
                    <thead>
                      <tr colSpan={5}>
                        <th colSpan={5}>
                          <div className="modal-head">
                            <h2>Activity feed</h2>
                            <div onClick={closeActivitiesModal}>
                              <BsX />
                            </div>
                          </div>
                        </th>
                      </tr>
                      <tr>
                        <th>Collection</th>
                        <th>Trade</th>
                        <th>Amount</th>
                        <th>Wallet</th>
                        <th>Time</th>
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
                          <button className="sell-btn">
                            <img src={SellIcon} alt="SellIcon" />
                            Sell
                          </button>
                        </td>
                        <td>24.40 ₳</td>
                        <td>4WWY…hxY</td>
                        <td>34 minutes ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="activity-index">
                            <img src={ActivityImg2} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                          </div>
                        </td>
                        <td>
                          <button className="buy-btn">
                            <img src={BuyIcon} alt="BuyIcon" />
                            Buy
                          </button>
                        </td>
                        <td>24.40 ₳</td>
                        <td>4WWY…hxY</td>
                        <td>34 minutes ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="activity-index">
                            <img src={ActivityImg3} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                          </div>
                        </td>
                        <td>
                          <button className="sell-btn">
                            <img src={SellIcon} alt="SellIcon" />
                            Sell
                          </button>
                        </td>
                        <td>24.40 ₳</td>
                        <td>4WWY…hxY</td>
                        <td>34 minutes ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="activity-index">
                            <img src={ActivityImg4} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                          </div>
                        </td>
                        <td>
                          <button className="buy-btn">
                            <img src={BuyIcon} alt="BuyIcon" />
                            Buy
                          </button>
                        </td>
                        <td>24.40 ₳</td>
                        <td>4WWY…hxY</td>
                        <td>34 minutes ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="activity-index">
                            <img src={ActivityImg5} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                          </div>
                        </td>
                        <td>
                          <button className="sell-btn">
                            <img src={SellIcon} alt="SellIcon" />
                            Sell
                          </button>
                        </td>
                        <td>24.40 ₳</td>
                        <td>4WWY…hxY</td>
                        <td>34 minutes ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="activity-index">
                            <img src={ActivityImg6} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                          </div>
                        </td>
                        <td>
                          <button className="buy-btn">
                            <img src={BuyIcon} alt="BuyIcon" />
                            Buy
                          </button>
                        </td>
                        <td>24.40 ₳</td>
                        <td>4WWY…hxY</td>
                        <td>34 minutes ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="activity-index">
                            <img src={ActivityImg7} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                          </div>
                        </td>
                        <td>
                          <button className="sell-btn">
                            <img src={SellIcon} alt="SellIcon" />
                            Sell
                          </button>
                        </td>
                        <td>24.40 ₳</td>
                        <td>4WWY…hxY</td>
                        <td>34 minutes ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="activity-index">
                            <img src={ActivityImg8} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                          </div>
                        </td>
                        <td>
                          <button className="buy-btn">
                            <img src={BuyIcon} alt="BuyIcon" />
                            Buy
                          </button>
                        </td>
                        <td>24.40 ₳</td>
                        <td>4WWY…hxY</td>
                        <td>34 minutes ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="activity-index">
                            <img src={ActivityImg9} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                          </div>
                        </td>
                        <td>
                          <button className="sell-btn">
                            <img src={SellIcon} alt="SellIcon" />
                            Sell
                          </button>
                        </td>
                        <td>24.40 ₳</td>
                        <td>4WWY…hxY</td>
                        <td>34 minutes ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="activity-index">
                            <img src={ActivityImg10} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                          </div>
                        </td>
                        <td>
                          <button className="buy-btn">
                            <img src={BuyIcon} alt="BuyIcon" />
                            Buy
                          </button>
                        </td>
                        <td>24.40 ₳</td>
                        <td>4WWY…hxY</td>
                        <td>34 minutes ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="activity-index">
                            <img src={ActivityImg1} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                          </div>
                        </td>
                        <td>
                          <button className="sell-btn">
                            <img src={SellIcon} alt="SellIcon" />
                            Sell
                          </button>
                        </td>
                        <td>24.40 ₳</td>
                        <td>4WWY…hxY</td>
                        <td>34 minutes ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="activity-index">
                            <img src={ActivityImg2} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                          </div>
                        </td>
                        <td>
                          <button className="buy-btn">
                            <img src={BuyIcon} alt="BuyIcon" />
                            Buy
                          </button>
                        </td>
                        <td>24.40 ₳</td>
                        <td>4WWY…hxY</td>
                        <td>34 minutes ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="activity-index">
                            <img src={ActivityImg3} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                          </div>
                        </td>
                        <td>
                          <button className="sell-btn">
                            <img src={SellIcon} alt="SellIcon" />
                            Sell
                          </button>
                        </td>
                        <td>24.40 ₳</td>
                        <td>4WWY…hxY</td>
                        <td>34 minutes ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="activity-index">
                            <img src={ActivityImg4} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                          </div>
                        </td>
                        <td>
                          <button className="buy-btn">
                            <img src={BuyIcon} alt="BuyIcon" />
                            Buy
                          </button>
                        </td>
                        <td>24.40 ₳</td>
                        <td>4WWY…hxY</td>
                        <td>34 minutes ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="activity-index">
                            <img src={ActivityImg5} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                          </div>
                        </td>
                        <td>
                          <button className="sell-btn">
                            <img src={SellIcon} alt="SellIcon" />
                            Sell
                          </button>
                        </td>
                        <td>24.40 ₳</td>
                        <td>4WWY…hxY</td>
                        <td>34 minutes ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="activity-index">
                            <img src={ActivityImg6} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                          </div>
                        </td>
                        <td>
                          <button className="buy-btn">
                            <img src={BuyIcon} alt="BuyIcon" />
                            Buy
                          </button>
                        </td>
                        <td>24.40 ₳</td>
                        <td>4WWY…hxY</td>
                        <td>34 minutes ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="activity-index">
                            <img src={ActivityImg7} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                          </div>
                        </td>
                        <td>
                          <button className="sell-btn">
                            <img src={SellIcon} alt="SellIcon" />
                            Sell
                          </button>
                        </td>
                        <td>24.40 ₳</td>
                        <td>4WWY…hxY</td>
                        <td>34 minutes ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="activity-index">
                            <img src={ActivityImg8} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                          </div>
                        </td>
                        <td>
                          <button className="buy-btn">
                            <img src={BuyIcon} alt="BuyIcon" />
                            Buy
                          </button>
                        </td>
                        <td>24.40 ₳</td>
                        <td>4WWY…hxY</td>
                        <td>34 minutes ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="activity-index">
                            <img src={ActivityImg9} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                          </div>
                        </td>
                        <td>
                          <button className="sell-btn">
                            <img src={SellIcon} alt="SellIcon" />
                            Sell
                          </button>
                        </td>
                        <td>24.40 ₳</td>
                        <td>4WWY…hxY</td>
                        <td>34 minutes ago</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="activity-index">
                            <img src={ActivityImg10} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                          </div>
                        </td>
                        <td>
                          <button className="buy-btn">
                            <img src={BuyIcon} alt="BuyIcon" />
                            Buy
                          </button>
                        </td>
                        <td>24.40 ₳</td>
                        <td>4WWY…hxY</td>
                        <td>34 minutes ago</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={limitOrderModal}
        onHide={closeLimitOrderModal}
        centered
        className={isDarkTheme ? "dark-theme" : "light-theme"}
      >
        <Modal.Body>
          <div className="limitorder-modal">
            <div className="lo-head">
              <h5>Choose your type of limit order</h5>
              <div onClick={closeLimitOrderModal}>
                <BsX />
              </div>
            </div>
            <div className="lo-body">
              <Tab.Container defaultActiveKey="buy" transition={false}>
                <Nav variant="pills">
                  <Nav.Item>
                    <Nav.Link eventKey="buy">Buy</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sell">Sell</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="buy">
                    <div className="lo-buy">
                      <div className="cpp">
                        <h6>Current Pool Prize</h6>
                        <span>95 ₳</span>
                      </div>
                      <div className="cs-grid-box">
                        <h6>Collection stats</h6>
                        <div className="cs-grid">
                          <div className="cs-left">
                            <p>
                              <span>TVL:</span>
                            </p>
                            <p>90.1886 ₳</p>
                            <p>
                              <span>112 NFTs + 3.897 ₳</span>
                            </p>
                          </div>
                          <div className="cs-left">
                            <p>
                              <span>Volume:</span>
                            </p>
                            <p>
                              3.897 ₳ <span>/7d</span>
                            </p>
                            <p>
                              12.899 ₳ <span>/24h</span>
                            </p>
                          </div>
                          <div className="cs-right">
                            <p>
                              <span>Number of NFTs</span>
                            </p>
                            <ReactSlider
                              className="horizontal-slider"
                              thumbClassName="example-thumb"
                              trackClassName="example-track"
                              defaultValue={[0, 15]}
                              ariaLabel={["Lower thumb", "Upper thumb"]}
                              ariaValuetext={(state) =>
                                `Thumb value ${state.valueNow}`
                              }
                              renderThumb={(props, state) => (
                                <div {...props}>
                                  <span>{state.valueNow}</span>
                                </div>
                              )}
                              pearling
                              min={0}
                              max={20}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="obp-grid">
                        <div className="input-box-1">
                          <label htmlFor="">Order buy price</label>
                          <input type="text" defaultValue={0} />
                        </div>
                        <h6>
                          <i>Total sales amount:</i>
                          <span>800 ₳</span>
                        </h6>
                      </div>
                      <div className="lo-p">
                        Buy limit orders allow you to place un-executed trades
                        at lower prices. If the pool reaches that price your
                        trade will be executed and you will buy at a lower
                        price.
                      </div>
                      <div className="lo-btn-grid">
                        <button className="fill-grd-btn">Buy</button>
                        <button
                          className="outline-grd-btn"
                          onClick={closeLimitOrderModal}
                        >
                          <div>
                            <span className="grd-text">Cancel</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="sell">
                    <div className="lo-buy">
                      <div className="cpp">
                        <h6>Current Pool Prize</h6>
                        <span>95 ₳</span>
                      </div>
                      <div className="cs-grid-box">
                        <div className="lo-nft-grid">
                          <div className="lo-nft-grid-left">
                            <img src={CollectionImg1} alt="" />
                            <h3>#8093</h3>
                          </div>
                          <div className="lo-nft-grid-right">
                            <p>
                              <span>Other NFTs from this collection</span>
                            </p>
                            <div className="lo-swiper">
                              <Swiper
                                modules={[Pagination, Navigation]}
                                speed={500}
                                spaceBetween={0}
                                slidesPerView={"4.5"}
                                className="mySwiper"
                              >
                                <SwiperSlide>
                                  <div className="lo-swiper-img">
                                    <input
                                      type="checkbox"
                                      name="NFT Images"
                                      id="lo1"
                                    />
                                    <label htmlFor="lo1">
                                      <img
                                        src={CollectionImg2}
                                        alt="CollectionImg"
                                      />
                                    </label>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="lo-swiper-img">
                                    <input
                                      type="checkbox"
                                      name="NFT Images"
                                      id="lo2"
                                    />
                                    <label htmlFor="lo2">
                                      <img
                                        src={CollectionImg3}
                                        alt="CollectionImg"
                                      />
                                    </label>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="lo-swiper-img">
                                    <input
                                      type="checkbox"
                                      name="NFT Images"
                                      id="lo3"
                                    />
                                    <label htmlFor="lo3">
                                      <img
                                        src={CollectionImg4}
                                        alt="CollectionImg"
                                      />
                                    </label>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="lo-swiper-img">
                                    <input
                                      type="checkbox"
                                      name="NFT Images"
                                      id="lo4"
                                    />
                                    <label htmlFor="lo4">
                                      <img
                                        src={CollectionImg5}
                                        alt="CollectionImg"
                                      />
                                    </label>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="lo-swiper-img">
                                    <input
                                      type="checkbox"
                                      name="NFT Images"
                                      id="lo5"
                                    />
                                    <label htmlFor="lo5">
                                      <img
                                        src={CollectionImg6}
                                        alt="CollectionImg"
                                      />
                                    </label>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="lo-swiper-img">
                                    <input
                                      type="checkbox"
                                      name="NFT Images"
                                      id="lo6"
                                    />
                                    <label htmlFor="lo6">
                                      <img
                                        src={CollectionImg7}
                                        alt="CollectionImg"
                                      />
                                    </label>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="lo-swiper-img">
                                    <input
                                      type="checkbox"
                                      name="NFT Images"
                                      id="lo7"
                                    />
                                    <label htmlFor="lo7">
                                      <img
                                        src={CollectionImg8}
                                        alt="CollectionImg"
                                      />
                                    </label>
                                  </div>
                                </SwiperSlide>
                              </Swiper>
                            </div>
                          </div>
                        </div>
                        <div className="cs-grid">
                          <div className="cs-left">
                            <p>
                              <span>TVL:</span>
                            </p>
                            <p>90.1886 ₳</p>
                            <p>
                              <span>112 NFTs + 3.897 ₳</span>
                            </p>
                          </div>
                          <div className="cs-left">
                            <p>
                              <span>Volume:</span>
                            </p>
                            <p>
                              3.897 ₳ <span>/7d</span>
                            </p>
                            <p>
                              12.899 ₳ <span>/24h</span>
                            </p>
                          </div>
                          <div className="cs-right">
                            <p>
                              <span>Number of NFTs</span>
                            </p>
                            <ReactSlider
                              className="horizontal-slider"
                              thumbClassName="example-thumb"
                              trackClassName="example-track"
                              defaultValue={[0, 15]}
                              ariaLabel={["Lower thumb", "Upper thumb"]}
                              ariaValuetext={(state) =>
                                `Thumb value ${state.valueNow}`
                              }
                              renderThumb={(props, state) => (
                                <div {...props}>
                                  <span>{state.valueNow}</span>
                                </div>
                              )}
                              pearling
                              min={0}
                              max={20}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="obp-grid">
                        <div className="input-box-1">
                          <label htmlFor="">Order buy price</label>
                          <input type="text" defaultValue={0} />
                        </div>
                        <h6>
                          <i>Total sales amount:</i>
                          <span>800 ₳</span>
                        </h6>
                      </div>
                      <div className="lo-p">
                        Buy limit orders allow you to place un-executed trades
                        at lower prices. If the pool reaches that price your
                        trade will be executed and you will buy at a lower
                        price.
                      </div>
                      <div className="lo-btn-grid">
                        <button className="fill-grd-btn">Buy</button>
                        <button
                          className="outline-grd-btn"
                          onClick={closeLimitOrderModal}
                        >
                          <div>
                            <span className="grd-text">Cancel</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={instantSellModal}
        onHide={closeInstantSellModal}
        centered
        className={isDarkTheme ? "dark-theme" : "light-theme"}
      >
        <Modal.Body>
          <div className="instantsell-modal">
            <div className="lo-head">
              <h5>Instant sell</h5>
              <div onClick={closeInstantSellModal}>
                <BsX />
              </div>
            </div>
            <div className="is-body">
              <div className="is-textbox">
                <h6>Pool price</h6>
                <span>128 ₳</span>
              </div>
              <div className="is-textbox">
                <h6>Total value</h6>
                <span>128 ₳</span>
              </div>
              <div className="is-img-grid-box">
                <div className="is-img-grid">
                  <div className="is-img-box">
                    <input type="checkbox" name="Instant Image" id="is1" />
                    <label htmlFor="is1">
                      <img src={CollectionImg1} alt="CollectionImg" />
                      <p>#8032</p>
                    </label>
                  </div>
                  <div className="is-img-box">
                    <input type="checkbox" name="Instant Image" id="is2" />
                    <label htmlFor="is2">
                      <img src={CollectionImg2} alt="CollectionImg" />
                      <p>#8032</p>
                    </label>
                  </div>
                  <div className="is-img-box">
                    <input type="checkbox" name="Instant Image" id="is3" />
                    <label htmlFor="is3">
                      <img src={CollectionImg3} alt="CollectionImg" />
                      <p>#8032</p>
                    </label>
                  </div>
                  <div className="is-img-box">
                    <input type="checkbox" name="Instant Image" id="is4" />
                    <label htmlFor="is4">
                      <img src={CollectionImg4} alt="CollectionImg" />
                      <p>#8032</p>
                    </label>
                  </div>
                  <div className="is-img-box">
                    <input type="checkbox" name="Instant Image" id="is5" />
                    <label htmlFor="is5">
                      <img src={CollectionImg5} alt="CollectionImg" />
                      <p>#8032</p>
                    </label>
                  </div>
                  <div className="is-img-box">
                    <input type="checkbox" name="Instant Image" id="is6" />
                    <label htmlFor="is6">
                      <img src={CollectionImg6} alt="CollectionImg" />
                      <p>#8032</p>
                    </label>
                  </div>
                  <div className="is-img-box">
                    <input type="checkbox" name="Instant Image" id="is7" />
                    <label htmlFor="is7">
                      <img src={CollectionImg7} alt="CollectionImg" />
                      <p>#8032</p>
                    </label>
                  </div>
                  <div className="is-img-box">
                    <input type="checkbox" name="Instant Image" id="is8" />
                    <label htmlFor="is8">
                      <img src={CollectionImg8} alt="CollectionImg" />
                      <p>#8032</p>
                    </label>
                  </div>
                  <div className="is-img-box">
                    <input type="checkbox" name="Instant Image" id="is9" />
                    <label htmlFor="is9">
                      <img src={CollectionImg9} alt="CollectionImg" />
                      <p>#8032</p>
                    </label>
                  </div>
                  <div className="is-img-box">
                    <input type="checkbox" name="Instant Image" id="is10" />
                    <label htmlFor="is10">
                      <img src={CollectionImg10} alt="CollectionImg" />
                      <p>#8032</p>
                    </label>
                  </div>
                  <div className="is-img-box">
                    <input type="checkbox" name="Instant Image" id="is11" />
                    <label htmlFor="is11">
                      <img src={CollectionImg1} alt="CollectionImg" />
                      <p>#8032</p>
                    </label>
                  </div>
                  <div className="is-img-box">
                    <input type="checkbox" name="Instant Image" id="is12" />
                    <label htmlFor="is12">
                      <img src={CollectionImg2} alt="CollectionImg" />
                      <p>#8032</p>
                    </label>
                  </div>
                  <div className="is-img-box">
                    <input type="checkbox" name="Instant Image" id="is13" />
                    <label htmlFor="is13">
                      <img src={CollectionImg3} alt="CollectionImg" />
                      <p>#8032</p>
                    </label>
                  </div>
                  <div className="is-img-box">
                    <input type="checkbox" name="Instant Image" id="is14" />
                    <label htmlFor="is14">
                      <img src={CollectionImg4} alt="CollectionImg" />
                      <p>#8032</p>
                    </label>
                  </div>
                  <div className="is-img-box">
                    <input type="checkbox" name="Instant Image" id="is15" />
                    <label htmlFor="is15">
                      <img src={CollectionImg5} alt="CollectionImg" />
                      <p>#8032</p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="is-4-grid">
                <div className="is-textbox">
                  <h6>Selected NFTs</h6>
                  <span>3</span>
                </div>
                <div className="is-textbox">
                  <h6>Extract fee</h6>
                  <span>0.3 ₳</span>
                </div>
                <div className="is-textbox">
                  <h6>ADA value </h6>
                  <span>12 ₳</span>
                </div>
                <div className="is-textbox">
                  <h6>Total ADA</h6>
                  <span>12.3 ₳</span>
                </div>
              </div>
              <div className="lo-btn-grid">
                <button className="fill-grd-btn">Buy</button>
                <button
                  onClick={closeInstantSellModal}
                  className="outline-grd-btn"
                >
                  <div>
                    <span className="grd-text">Cancel</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Home;
