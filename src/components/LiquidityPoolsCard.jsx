import React from "react";
import "../styles/views/home.css";

import ActivityImg1 from "../assets/img/activity/activity-img-10.png";
import SellIcon from "../assets/img/sell-icon.svg";
import BuyIcon from "../assets/img/buy-icon.svg";
import { Link } from "react-router-dom";

const LiquidityPoolsCard = () => {
  return (
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
          <p>Balance</p>
        </div>
        <div className="activity-grid-right">
          <p>90.1886 ₳</p>
        </div>
      </div>
      <div className="activity-card-grid">
        <div className="activity-grid-left">
          <p>Deposit</p>
        </div>
        <div className="activity-grid-right">
          <div className="collections-volume">
            <p>
              90.1886 ₳ <span> 112 ₳ + 3.897 ₳</span>
            </p>
          </div>
        </div>
      </div>
      <div className="activity-card-grid">
        <div className="activity-grid-left">
          <p>Volume</p>
        </div>
        <div className="activity-grid-right">
          <div className="collections-volume">
            <p>
              3.897 ₳ <span>/ 7d</span>
            </p>
            <p>
              12.899 ₳ <span>/ 24h</span>
            </p>
          </div>
        </div>
      </div>
      <Link to="/setdeposittype">
        <button className="outline-grd-btn">
          <div>
            <span className="grd-text">Provide Liquidity</span>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default LiquidityPoolsCard;
