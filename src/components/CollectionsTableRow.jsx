import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import HeartIcon from "../assets/img/heart-icon-outline.svg";
import HeartIcon2 from "../assets/img/heart-icon-outline-2.svg";
import HeartIconFilled from "../assets/img/heart-icon-filled.svg";
import ActivityImg1 from "../assets/img/activity/activity-img-10.png";
import { ThemeContext } from "../ThemeContext";

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
  BsChevronDown,
  BsDiscord,
  BsHeart,
  BsHeartFill,
  BsMoon,
  BsSearch,
  BsSun,
  BsTwitter,
  BsX,
} from "react-icons/bs";
const CollectionsTableRow = () => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <tr>
      <td>
        {isHeartFilled ? (
          <img
            onClick={(event) => {
              event.stopPropagation();
              setIsHeartFilled(false);
            }}
            src={HeartIconFilled}
            alt={HeartIcon}
          />
        ) : (
          <>
            {isDarkTheme ? (
              <img
                onClick={(event) => {
                  event.stopPropagation();
                  setIsHeartFilled(true);
                }}
                src={HeartIcon}
                alt={HeartIcon}
              />
            ) : (
              <img
                onClick={(event) => {
                  event.stopPropagation();
                  setIsHeartFilled(true);
                }}
                src={HeartIcon2}
                alt={HeartIcon}
              />
            )}
          </>
        )}
      </td>
      <td>
        <Link to="/individualcollection">
          <div className="activity-index">
            <img src={ActivityImg1} alt="ActivityImg1" />
            <h6>Graphic</h6>
          </div>
        </Link>
      </td>
      <td>
        <Link to="/individualcollection">
          <div className="collections-tvl">
            <p>90.1886 ₳</p>
            <span>112 NFTs + 3.897 ₳</span>
          </div>
        </Link>
      </td>
      <td>
        <Link to="/individualcollection">90.1886 ₳</Link>
      </td>
      <td>
        <Link to="/individualcollection">87.1296 ₳</Link>
      </td>
      <td>
        <Link to="/individualcollection">
          <div className="collections-volume">
            <p>
              3.897 ₳ <span> / 7d</span>
            </p>
            <p>
              12.899 ₳ <span> / 24h</span>
            </p>
          </div>
        </Link>
      </td>
      <td>
        <Link to="/individualcollection">9,890</Link>
      </td>
      <td>
        <Link to="/individualcollection">10% (989)</Link>
      </td>
      <td>
        <Link to="/individualcollection">
          <div className="collections-change">
            <BsArrowUpRight />
            63.55%
          </div>
        </Link>
      </td>
    </tr>
  );
};

export default CollectionsTableRow;
