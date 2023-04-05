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
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, CSSRulePlugin);

  const goToFAQs = () => {
    gsap.to(window, {
      duration: 0,
      scrollTo: { y: "#faqs-section", offsetY: 100 },
    });
  };
  const closeActivitiesModal = () => setActivitiesModal(false);
  const openActivitiesModal = () => setActivitiesModal(true);

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
                              defaultValue={[0, 10]}
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
                <button className="fill-grd-btn">Limit order</button>
                <button className="outline-grd-btn">
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
    </div>
  );
};

export default Home;
