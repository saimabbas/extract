import React from "react";
import "../styles/views/home.css";

import ActivityImg1 from "../assets/img/activity/activity-img-10.png";
import SellIcon from "../assets/img/sell-icon.svg";
import BuyIcon from "../assets/img/buy-icon.svg";
import { Link } from "react-router-dom";
const ActivityCardMob = () => {
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
          <p>Trade</p>
        </div>
        <div className="activity-grid-right">
          <button className="sell-btn">
            <img src={SellIcon} alt="SellIcon" />
            Sell
          </button>
        </div>
      </div>
      <div className="activity-card-grid">
        <div className="activity-grid-left">
          <p>Amount</p>
        </div>
        <div className="activity-grid-right">
          <p>24.40 ₳</p>
        </div>
      </div>
      <div className="activity-card-grid">
        <div className="activity-grid-left">
          <p>Wallet</p>
        </div>
        <div className="activity-grid-right">
          <p>4WWY…hxY</p>
        </div>
      </div>
      <div className="activity-card-grid">
        <div className="activity-grid-left">
          <p>Time</p>
        </div>
        <div className="activity-grid-right">
          <p>34 minutes ago</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCardMob;
