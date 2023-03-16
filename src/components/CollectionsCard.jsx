import React, { useState, useSyncExternalStore } from "react";

import "../styles/views/home.css";
import HeartIcon from "../assets/img/heart-icon-outline.svg";
import HeartIconFilled from "../assets/img/heart-icon-filled.svg";

const CollectionsCard = (props) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  return (
    <div className="collections-card">
      <img src={props.img} alt="CollectionsImg1" />
      <div className="cc-head">
        <h4>Clay Nation X Good Clay Nation X Good</h4>

        {isHeartFilled ? (
          <img
            onClick={() => {
              setIsHeartFilled(false);
            }}
            src={HeartIconFilled}
            alt={HeartIcon}
          />
        ) : (
          <img
            onClick={() => {
              setIsHeartFilled(true);
            }}
            src={HeartIcon}
            alt={HeartIcon}
          />
        )}
      </div>
      <div className="cc-details-box">
        <p>Pool price:</p>
        <span>100 ₳</span>
      </div>
      <div className="cc-details-box">
        <p>Volume:</p>
        <h6>24.40 ₳</h6>
      </div>
    </div>
  );
};

export default CollectionsCard;

/* 1. light dark theme / music sync 
2. mobile changes
3. extra animations on pages
4. discord download link
5. another page 
home page mint page download page > end of month
*/
