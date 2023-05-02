import React, { useContext, useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/components/header.css";

import CollectionImg1 from "../assets/img/collection/collection-img-1.png";
import CollectionImg2 from "../assets/img/collection/collection-img-2.png";
import CollectionImg3 from "../assets/img/collection/collection-img-3.png";
import HeaderLogo1 from "../assets/img/logo-1.png";
import HeaderLogo2 from "../assets/img/logo-2.png";
import SellIcon from "../assets/img/sell-icon.svg";
import BuyIcon from "../assets/img/buy-icon.svg";
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
  BsX,
  BsMoon,
  BsSearch,
  BsSun,
  BsTwitter,
  BsMenuApp,
  BsGrid,
  BsGridFill,
  BsXDiamond,
  BsXCircle,
  BsYoutube,
} from "react-icons/bs";
import { ThemeContext } from "../ThemeContext";
import { Link, useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";

const Header = (props) => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const [cartModal, setCartModal] = useState(false);
  const [connectWallet, setConnectWallet] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHeaderMobOpen, setIseaderMobOpen] = useState(false);

  const closeCartModal = () => setCartModal(false);
  const openCartModal = () => setCartModal(true);
  const closeConnectWallet = () => setConnectWallet(false);
  const openConnectWallet = () => setConnectWallet(true);
  return (
    <>
      {isHeaderMobOpen ? (
        <div className="header-mob">
          <div className="box">
            <div className="header-mob-body">
              <div className="header-grid">
                <div className="header-left">
                  <Link to="/">
                    <img src={HeaderLogo1} alt="HeaderLogo" />
                  </Link>
                </div>
                <div className="header-right-mob">
                  <BsSearch
                    onClick={() => {
                      setIsSearchOpen(true);
                    }}
                  />
                  <div className="cart-dropdown">
                    <Dropdown autoClose="outside">
                      <Dropdown.Toggle>
                        <a href="#" className="cart-icon-link">
                          <BsCartFill />
                          <span>3</span>
                        </a>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <div className="cart-content">
                          <div className="cc-top">
                            <h5>My cart</h5>
                            <span>3 items </span>
                          </div>
                          <div className="cc-item">
                            <div className="cc-item-left">
                              <img src={CollectionImg1} alt="CollectionImg" />
                              <h6>#8092</h6>
                            </div>
                            <div className="cc-item-right">
                              <p>16.54 ₳</p>
                              <div></div>
                            </div>
                          </div>
                          <div className="cc-item">
                            <div className="cc-item-left">
                              <img src={CollectionImg1} alt="CollectionImg" />
                              <h6>#8092</h6>
                            </div>
                            <div className="cc-item-right">
                              <p>16.54 ₳</p>
                              <div></div>
                            </div>
                          </div>
                          <div className="cc-item">
                            <div className="cc-item-left">
                              <img src={CollectionImg1} alt="CollectionImg" />
                              <h6>#8092</h6>
                            </div>
                            <div className="cc-item-right">
                              <p>16.54 ₳</p>
                              <div></div>
                            </div>
                          </div>
                          <div className="cart-divider"></div>
                          <button
                            onClick={openCartModal}
                            className="fill-grd-btn"
                          >
                            Buy
                          </button>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div onClick={openConnectWallet}>
                    <img src={ConnectWalletImg} alt="ConnectWalletImg" />
                  </div>
                  <BsXCircle
                    onClick={() => {
                      setIseaderMobOpen(false);
                    }}
                  />
                </div>
              </div>
              <div className="header-mob-center">
                <Link to="/collections">Collections</Link>
                <a target={"_blank"} href="https://tcclabs.github.io/extract/">
                  Documents
                </a>
                <Link to="/#faqs-section" onClick={props.goToFAQs}>
                  FAQs
                </Link>
              </div>
              <div className="header-mob-bottom">
                <div className="hmb-socials">
                  <a
                    target={"_blank"}
                    href="https://www.youtube.com/channel/UCABWWBlZPxJjXtBUZpDSnQQ"
                    className="icon-link"
                  >
                    <BsYoutube />
                  </a>
                  <a
                    target={"_blank"}
                    href="https://twitter.com/ExtractDEX"
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
                </div>
                {/* <div className="light-dark-theme-box">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <header>
        <div className="box">
          <div className="header-grid">
            {isSearchOpen ? (
              <div className="search-input-box sib-mob">
                <BsSearch />
                <input type="text" placeholder="Search" />
                <div
                  className="sib-cross"
                  onClick={() => {
                    setIsSearchOpen(false);
                  }}
                >
                  <BsX />
                </div>
              </div>
            ) : null}
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
                href="https://www.youtube.com/channel/UCABWWBlZPxJjXtBUZpDSnQQ"
                className="icon-link"
              >
                <BsYoutube />
              </a>
              <a
                target={"_blank"}
                href="https://twitter.com/ExtractDEX"
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
              <div className="cart-dropdown">
                <Dropdown autoClose="outside">
                  <Dropdown.Toggle>
                    <a href="#" className="cart-icon-link">
                      <BsCartFill />
                      <span>3</span>
                    </a>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <div className="cart-content">
                      <div className="cc-top">
                        <h5>My cart</h5>
                        <span>3 items </span>
                      </div>
                      <div className="cc-item">
                        <div className="cc-item-left">
                          <img src={CollectionImg1} alt="CollectionImg" />
                          <h6>#8092</h6>
                        </div>
                        <div className="cc-item-right">
                          <p>16.54 ₳</p>
                          <div></div>
                        </div>
                      </div>
                      <div className="cc-item">
                        <div className="cc-item-left">
                          <img src={CollectionImg1} alt="CollectionImg" />
                          <h6>#8092</h6>
                        </div>
                        <div className="cc-item-right">
                          <p>16.54 ₳</p>
                          <div></div>
                        </div>
                      </div>
                      <div className="cc-item">
                        <div className="cc-item-left">
                          <img src={CollectionImg1} alt="CollectionImg" />
                          <h6>#8092</h6>
                        </div>
                        <div className="cc-item-right">
                          <p>16.54 ₳</p>
                          <div></div>
                        </div>
                      </div>
                      <div className="cart-divider"></div>
                      <button onClick={openCartModal} className="fill-grd-btn">
                        Buy
                      </button>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <Link to="/favourites" className="cart-icon-link">
                <BsHeartFill />
              </Link>
              {/* <div className="light-dark-theme-box">
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
              </div> */}
              <p className="connect-wallet-link" onClick={openConnectWallet}>
                <img src={ConnectWalletImg} alt="ConnectWalletImg" />
                <span className="grd-text">Connect</span>
              </p>
              <Link to="/earn">
                <button className="outline-grd-btn">
                  <div>
                    <span className="grd-text">Earn</span>
                  </div>
                </button>
              </Link>
            </div>
            <div className="header-right-mob">
              <BsSearch
                onClick={() => {
                  setIsSearchOpen(true);
                }}
              />
              <div className="cart-dropdown">
                <Dropdown autoClose="outside">
                  <Dropdown.Toggle>
                    <a href="#" className="cart-icon-link">
                      <BsCartFill />
                      <span>3</span>
                    </a>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <div className="cart-content">
                      <div className="cc-top">
                        <h5>My cart</h5>
                        <span>3 items </span>
                      </div>
                      <div className="cc-item">
                        <div className="cc-item-left">
                          <img src={CollectionImg1} alt="CollectionImg" />
                          <h6>#8092</h6>
                        </div>
                        <div className="cc-item-right">
                          <p>16.54 ₳</p>
                          <div></div>
                        </div>
                      </div>
                      <div className="cc-item">
                        <div className="cc-item-left">
                          <img src={CollectionImg1} alt="CollectionImg" />
                          <h6>#8092</h6>
                        </div>
                        <div className="cc-item-right">
                          <p>16.54 ₳</p>
                          <div></div>
                        </div>
                      </div>
                      <div className="cc-item">
                        <div className="cc-item-left">
                          <img src={CollectionImg1} alt="CollectionImg" />
                          <h6>#8092</h6>
                        </div>
                        <div className="cc-item-right">
                          <p>16.54 ₳</p>
                          <div></div>
                        </div>
                      </div>
                      <div className="cart-divider"></div>
                      <button onClick={openCartModal} className="fill-grd-btn">
                        Buy
                      </button>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div onClick={openConnectWallet}>
                <img src={ConnectWalletImg} alt="ConnectWalletImg" />
              </div>
              <BsGridFill
                onClick={() => {
                  setIseaderMobOpen(true);
                }}
              />
            </div>
          </div>
        </div>

        <Modal
          show={cartModal}
          onHide={closeCartModal}
          centered
          className={isDarkTheme ? "dark-theme" : "light-theme"}
        >
          <Modal.Body>
            <div className="cart-modal">
              <div className="modal-head">
                <h2>
                  Cart <span>4 items</span>
                </h2>
                <div onClick={closeCartModal}>
                  <BsX />
                </div>
              </div>
              <div className="cart-table">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Item</th>
                      <th>Trade</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg1} alt="ActivityImg1" />
                          <p>Graphic</p>
                        </div>
                      </td>
                      <td>
                        <button className="sell-btn">
                          <img src={SellIcon} alt="SellIcon" />
                          Sell
                        </button>
                      </td>
                      <td>24.40 ₳</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg2} alt="ActivityImg1" />
                          <p>Bad Girls Cardano</p>
                        </div>
                      </td>
                      <td>
                        <button className="sell-btn">
                          <img src={SellIcon} alt="SellIcon" />
                          Sell
                        </button>
                      </td>
                      <td>24.40 ₳</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg3} alt="ActivityImg1" />
                          <p>Dead Rabbit Resu</p>
                        </div>
                      </td>
                      <td>
                        <button className="buy-btn">
                          <img src={BuyIcon} alt="SellIcon" />
                          Buy
                        </button>
                      </td>
                      <td>24.40 ₳</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg4} alt="ActivityImg1" />
                          <p>Beyond Citizen</p>
                        </div>
                      </td>
                      <td>
                        <button className="sell-btn">
                          <img src={SellIcon} alt="SellIcon" />
                          Sell
                        </button>
                      </td>
                      <td>24.40 ₳</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                <span>Total: </span>4 NFTs
              </p>
              <p>
                <span>Pay:</span> 121.80 ₳
              </p>
              <div className="cart-btn-grid">
                <button className="fill-grd-btn">Confirm</button>
                <button className="outline-grd-btn" onClick={closeCartModal}>
                  <div>
                    <span className="grd-text">Cancel</span>
                  </div>
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <Modal
          show={connectWallet}
          onHide={closeConnectWallet}
          centered
          className={isDarkTheme ? "dark-theme" : "light-theme"}
        >
          <Modal.Body>
            <div className="connectwallet-modal">
              <div className="modal-head">
                <h2></h2>
                <div onClick={closeConnectWallet}>
                  <BsX />
                </div>
              </div>
              <div className="cw-content">
                <img src={ConnectWalletImg} alt="ConnectWalletImg" />
                <h4>You'll need a wallet on Cardano to continue</h4>
                <button className="outline-grd-btn">
                  <div>
                    <span className="grd-text">Connect Wallet</span>
                  </div>
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </header>
    </>
  );
};

export default Header;
