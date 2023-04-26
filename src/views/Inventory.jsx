import React, { useContext } from "react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/views/home.css";
import "../styles/views/recenttrades.css";
import "../styles/views/collections.css";
import "../styles/views/earn.css";
import "../styles/views/inventory.css";

// Components
import Header from "../components/Header";
import { MdContentCopy } from "react-icons/md";
// Assets
import HomeBlob1 from "../assets/img/home-blob-1.png";
import TradeBlob1 from "../assets/img/trade-blob-1.png";
import Footer from "../components/Footer";
import { ThemeContext } from "../ThemeContext";
import DepositsCardImg from "../assets/img/deposits-card-img.png";
import InventoryCard from "../components/InventoryCard";
import { Link } from "react-router-dom";

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
        <section className="inventory-head">
          <div className="box">
            <div className="tas-content">
              <img src={DepositsCardImg} alt="DepositsCardImg" />
              <div className="tas-left">
                <h2>The Ape Society</h2>
                <div className="tas-grid">
                  <div className="tas-grid-card">
                    <label htmlFor="">Balance</label>
                    <input type="text" defaultValue={"24.40 ₳"} disabled />
                  </div>
                  <div className="tas-grid-card">
                    <label htmlFor="">Address</label>
                    <div className="address-box">
                      <p>0x2d47264d3b503ae41e93a9685fda1ff918d04288</p>
                      <MdContentCopy />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tas-values-box">
              <div>
                <h6>Total floor value:</h6>
                <span>36.86 ₳</span>
              </div>
              <div>
                <h6>Total NFTs:</h6>
                <span>20</span>
              </div>
              <div>
                <h6>Total collections:</h6>
                <span>8</span>
              </div>
              <Link to="/recenttrades">
                <button className="outline-grd-btn">
                  <div>
                    <span className="grd-text">Recent trades</span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className="inventory-grid-section">
          <div className="box">
            <div className="inventory-grid">
              <InventoryCard />
              <InventoryCard />
              <InventoryCard />
              <InventoryCard />
              <InventoryCard />
              <InventoryCard />
              <InventoryCard />
              <InventoryCard />
              <InventoryCard />
              <InventoryCard />
              <InventoryCard />
              <InventoryCard />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Collections;
