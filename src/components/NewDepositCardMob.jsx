import React from "react";
import "../styles/views/home.css";

import { BsArrowUpRight } from "react-icons/bs";
import ActivityImg1 from "../assets/img/activity/activity-img-10.png";
import SellIcon from "../assets/img/sell-icon.svg";
import BuyIcon from "../assets/img/buy-icon.svg";
import { Link } from "react-router-dom";
const NewDepositCardMob = () => {
  return (
    <Link to="/individualcollection">
      <div className="activity-card-mob">
        <div className="activity-card-grid">
          <div className="activity-grid-left">
            <p>Collection</p>
          </div>
          <div className="activity-grid-right">
            <div className="activity-index-mob">
              <h6>Minion’s team</h6>
              <img src={ActivityImg1} alt="ActivityImg1" />
            </div>
          </div>
        </div>
        <div className="activity-card-grid">
          <div className="activity-grid-left">
            <p>TVL</p>
          </div>
          <div className="activity-grid-right">
            <div className="collections-tvl">
              <p>90.1886 ₳</p>
              <span>112 NFTs + 3.897 ₳</span>
            </div>
          </div>
        </div>
        <div className="activity-card-grid">
          <div className="activity-grid-left">
            <p>Buy Price</p>
          </div>
          <div className="activity-grid-right">
            <p>90.1886 ₳</p>
          </div>
        </div>
        <div className="activity-card-grid">
          <div className="activity-grid-left">
            <p>Sell Price</p>
          </div>
          <div className="activity-grid-right">
            <p>87.1296 ₳</p>
          </div>
        </div>
        <div className="activity-card-grid">
          <div className="activity-grid-left">
            <p>Volume</p>
          </div>
          <div className="activity-grid-right">
            <div className="collections-volume">
              <p>
                3.897 ₳ <span> / 7d</span>
              </p>
              <p>
                12.899 ₳ <span> / 24h</span>
              </p>
            </div>
          </div>
        </div>
        <div className="activity-card-grid">
          <div className="activity-grid-left">
            <p>Size</p>
          </div>
          <div className="activity-grid-right">
            <p>9,890</p>
          </div>
        </div>
        <div className="activity-card-grid">
          <div className="activity-grid-left">
            <p>Listed,%</p>
          </div>
          <div className="activity-grid-right">
            <p>10% (989)</p>
          </div>
        </div>
        <div className="activity-card-grid">
          <div className="activity-grid-left">
            <p>Change, 24h</p>
          </div>
          <div className="activity-grid-right">
            <div className="collections-change">
              <BsArrowUpRight />
              63.55%
            </div>
          </div>
        </div>
        <Link to="/setdeposittype">
          <button className="outline-grd-btn">
            <div>
              <span className="grd-text">Select</span>
            </div>
          </button>
        </Link>
      </div>
    </Link>
  );
};

export default NewDepositCardMob;
