import React from "react";
import "../styles/views/home.css";

import ActivityImg1 from "../assets/img/activity/activity-img-10.png";
import SellIcon from "../assets/img/sell-icon.svg";
import BuyIcon from "../assets/img/buy-icon.svg";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";

const RecentTradesCard = () => {
  return (
    <div className="activity-card-mob">
      <div className="activity-card-grid">
        <div className="activity-grid-left">
          <p>Status</p>
        </div>
        <div className="activity-grid-right">
          <p className="green-color">Confirmed</p>
        </div>
      </div>
      <div className="activity-card-grid">
        <div className="activity-grid-left">
          <p>Event</p>
        </div>
        <div className="activity-grid-right">
          <p>Listing</p>
        </div>
      </div>
      <div className="activity-card-grid">
        <div className="activity-grid-left">
          <p>Item</p>
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
          <p>Price</p>
        </div>
        <div className="activity-grid-right">
          <p>24.40 ₳</p>
        </div>
      </div>
      <div className="activity-card-grid">
        <div className="activity-grid-left">
          <p>Time</p>
        </div>
        <div className="activity-grid-right">
          <p>2h 1m 34s ago</p>
        </div>
      </div>
      <div className="activity-card-grid">
        <div className="activity-grid-left">
          <p>Cardano Scan</p>
        </div>
        <div className="activity-grid-right">
          <p className="green-color">
            <BsBoxArrowUpRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentTradesCard;
