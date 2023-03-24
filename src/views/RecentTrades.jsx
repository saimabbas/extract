import React, { useContext } from "react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/views/home.css";
import "../styles/views/recenttrades.css";

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
import BuyIcon from "../assets/img/buy-icon.svg";
import HomeBlob1 from "../assets/img/home-blob-1.png";
import TradeBlob1 from "../assets/img/trade-blob-1.png";
import Footer from "../components/Footer";
import { ThemeContext } from "../ThemeContext";
import { gsap } from "gsap";

const RecentTrades = () => {
  gsap.fromTo(
    ".home-blob-1",
    {
      opacity: 1,
    },
    {
      opacity: 0.75,
      duration: 1,
      repeat: -1,
      yoyo: true,
    }
  );
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
        <section className="recenttrades-section">
          <div className="box">
            <h1>Recent trades</h1>

            <div className="activity-table">
              <table>
                <thead>
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
        <Footer />
      </div>
    </div>
  );
};

export default RecentTrades;
