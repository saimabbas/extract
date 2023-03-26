import React, { useContext, useEffect } from "react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/views/home.css";
import "../styles/views/recenttrades.css";
import "../styles/views/collections.css";
import "../styles/views/earn.css";

// Components
import Header from "../components/Header";
import ReactSlider from "react-slider";
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
  BsCheck,
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
        {/* {isDarkTheme ? (
          <img className="trade-blob-1" src={TradeBlob1} alt="HomeBlob" />
        ) : null} */}
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
                  <div className="prog-step prog-step-active">
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
                      width: "101%",
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
            <div className="setdeposittype selectnfts">
              <Link to="/setdeposittype">
                <div className="grd-text">
                  <BsChevronLeft />
                  Back to step 2
                </div>
              </Link>
              <h2>Select NFTs</h2>
              <p>
                All NFTs are valued the same, regardless of rarity. Only floor
                NFTs recommended
              </p>
              <div className="selectnfts-grid">
                <div className="selectnfts-grid-card-1">
                  <div className="nftslist-box">
                    <div className="nft-box">
                      <input type="checkbox" name="nft" id="nft1" />
                      <label htmlFor="nft1">
                        <div className="nft-box-content">
                          <div className="nbc-left">
                            <img src={ActivityImg1} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                            <div className="epic">Epic</div>
                          </div>
                          <div className="nbc-right">
                            <div className="nft-check">
                              <BsCheck />
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="nft-box">
                      <input type="checkbox" name="nft" id="nft2" />
                      <label htmlFor="nft2">
                        <div className="nft-box-content">
                          <div className="nbc-left">
                            <img src={ActivityImg1} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                            <div className="rare">Rare</div>
                          </div>
                          <div className="nbc-right">
                            <div className="nft-check">
                              <BsCheck />
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="nft-box">
                      <input type="checkbox" name="nft" id="nft3" />
                      <label htmlFor="nft3">
                        <div className="nft-box-content">
                          <div className="nbc-left">
                            <img src={ActivityImg1} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                            <div className="uncommon">Uncommon</div>
                          </div>
                          <div className="nbc-right">
                            <div className="nft-check">
                              <BsCheck />
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="nft-box">
                      <input type="checkbox" name="nft" id="nft4" />
                      <label htmlFor="nft4">
                        <div className="nft-box-content">
                          <div className="nbc-left">
                            <img src={ActivityImg1} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                            <div className="common">Common</div>
                          </div>
                          <div className="nbc-right">
                            <div className="nft-check">
                              <BsCheck />
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="nft-box">
                      <input type="checkbox" name="nft" id="nft5" />
                      <label htmlFor="nft5">
                        <div className="nft-box-content">
                          <div className="nbc-left">
                            <img src={ActivityImg1} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                            <div className="epic">Epic</div>
                          </div>
                          <div className="nbc-right">
                            <div className="nft-check">
                              <BsCheck />
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="nft-box">
                      <input type="checkbox" name="nft" id="nft6" />
                      <label htmlFor="nft6">
                        <div className="nft-box-content">
                          <div className="nbc-left">
                            <img src={ActivityImg1} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                            <div className="rare">Rare</div>
                          </div>
                          <div className="nbc-right">
                            <div className="nft-check">
                              <BsCheck />
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="nft-box">
                      <input type="checkbox" name="nft" id="nft7" />
                      <label htmlFor="nft7">
                        <div className="nft-box-content">
                          <div className="nbc-left">
                            <img src={ActivityImg1} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                            <div className="uncommon">Uncommon</div>
                          </div>
                          <div className="nbc-right">
                            <div className="nft-check">
                              <BsCheck />
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="nft-box">
                      <input type="checkbox" name="nft" id="nft8" />
                      <label htmlFor="nft8">
                        <div className="nft-box-content">
                          <div className="nbc-left">
                            <img src={ActivityImg1} alt="ActivityImg1" />
                            <h6>Graphic</h6>
                            <div className="common">Common</div>
                          </div>
                          <div className="nbc-right">
                            <div className="nft-check">
                              <BsCheck />
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="selectnfts-grid-card-2">
                  <div className="confirm-deposit">
                    <h5>Confirm Deposit</h5>
                    <div className="cd-text-box">
                      <h6>Deposit type: </h6>
                      <p>121.80 ₳</p>
                    </div>
                    <div className="cd-text-box">
                      <h6>Deposit type: </h6>
                      <p>Automated deposit</p>
                    </div>
                    <div className="cd-text-box">
                      <h6>Amount </h6>
                      <p>24.40 ₳ + 1 NFT</p>
                    </div>
                    <div className="cd-line"></div>
                    <div className="cd-text-box">
                      <h6>Balance </h6>
                      <span>315.90 ₳</span>
                    </div>
                    <button className="fill-grd-btn">Confirm deposit</button>
                  </div>
                </div>
                <div className="selectnfts-grid-card-3">
                  <div className="pair-ada">
                    <div className="input-box">
                      <label>Pair ADA amount</label>
                      <input type="text" placeholder="0 ₳" />
                    </div>
                    <div className="input-box">
                      <label>Select NFTs</label>
                      <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="example-thumb"
                        trackClassName="example-track"
                        defaultValue={[0, 50]}
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
                  </div>
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

export default SetDepositType;
