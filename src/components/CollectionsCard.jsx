import React, { useState, useContext } from "react";

import "../styles/views/home.css";
import { ThemeContext } from "../ThemeContext";
import HeartIcon from "../assets/img/heart-icon-outline.svg";
import HeartIcon2 from "../assets/img/heart-icon-outline-2.svg";
import HeartIconFilled from "../assets/img/heart-icon-filled.svg";
import { Link } from "react-router-dom";

const CollectionsCard = (props) => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  return (
    <Link to="/individualcollection">
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
            <>
              {isDarkTheme ? (
                <img
                  onClick={() => {
                    setIsHeartFilled(true);
                  }}
                  src={HeartIcon}
                  alt={HeartIcon}
                />
              ) : (
                <img
                  onClick={() => {
                    setIsHeartFilled(true);
                  }}
                  src={HeartIcon2}
                  alt={HeartIcon}
                />
              )}
            </>
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
    </Link>
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
