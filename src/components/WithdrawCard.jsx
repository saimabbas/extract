import React, { useState } from "react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/views/home.css";
import "../styles/views/earn.css";
import "../styles/views/individualcollection.css";

// Assets
import CollectionImg1 from "../assets/img/collection/collection-img-1.png";
import CollectionImg2 from "../assets/img/collection/collection-img-2.png";
import CollectionImg3 from "../assets/img/collection/collection-img-3.png";
import CollectionImg4 from "../assets/img/collection/collection-img-4.png";
import CollectionImg5 from "../assets/img/collection/collection-img-5.png";
import CollectionImg6 from "../assets/img/collection/collection-img-6.png";
import CollectionImg7 from "../assets/img/collection/collection-img-7.png";
import CollectionImg8 from "../assets/img/collection/collection-img-8.png";
import CollectionImg9 from "../assets/img/collection/collection-img-9.png";
import CollectionImg10 from "../assets/img/collection/collection-img-10.png";

const NFTCard = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className={isSelected ? "nft-card nft-card-selected" : "nft-card"}>
      <div className="nft-tag">Rare</div>
      <img src={CollectionImg8} alt="CollectionImg1" />
      <div className="nc-text">
        <h6>#8091</h6>
        <span>Last price</span>
      </div>
      <div className="nc-text">
        <p>24.40 ₳</p>
        <span>16.54 ₳</span>
      </div>
      <div className="dc-btn-grid-2">
        {isSelected ? (
          <button
            className="selected-btn"
            onClick={() => {
              setIsSelected(false);
            }}
          >
            <div className="grd-text">Selected</div>
          </button>
        ) : (
          <button
            onClick={() => {
              setIsSelected(true);
            }}
            className="fill-grd-btn"
          >
            Select
          </button>
        )}
      </div>
    </div>
  );
};

export default NFTCard;
