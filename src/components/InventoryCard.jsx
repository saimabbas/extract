import React, { useState, useContext } from "react";

import "../styles/theme.css";
import "../styles/views/inventory.css";
import "../styles/views/earn.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ThemeContext } from "../ThemeContext";
import InventoryCardImg1 from "../assets/img/inventory-img-1.png";
import InventoryCardImg2 from "../assets/img/InventoryCardImg2.png";
import SwapImg from "../assets/img/swap-img.png";
import { BsX } from "react-icons/bs";

const InventoryCard = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const [saleNFTModal, setSaleNFTModal] = useState(false);
  const [swapNFTModal, setSwapNFTModal] = useState(false);

  const closeSaleNFTModal = () => setSaleNFTModal(false);
  const openSaleNFTModal = () => setSaleNFTModal(true);
  const closeSwapNFTModal = () => setSwapNFTModal(false);
  const openSwapNFTModal = () => setSwapNFTModal(true);
  return (
    <div className="inventory-card">
      <img src={InventoryCardImg1} alt="InventoryCardImg1" />
      <div className="inventory-text-grid">
        <h6>#8093</h6>
        <div className="grd-text">Extract</div>
      </div>
      <div className="dc-btn-grid">
        <button className="fill-grd-btn" onClick={openSaleNFTModal}>
          <i>Sell</i> <span className="grd-text">Sell</span>
        </button>
        <button className="outline-grd-btn" onClick={openSwapNFTModal}>
          <div>
            <span className="grd-text">Swap</span>
          </div>
        </button>
      </div>
      <Modal
        show={saleNFTModal}
        onHide={closeSaleNFTModal}
        centered
        className={isDarkTheme ? "dark-theme" : "light-theme"}
      >
        <Modal.Body>
          <div className="sale-nft-modal">
            <div className="modal-head">
              <h2>Sale NFT</h2>
              <div onClick={closeSaleNFTModal}>
                <BsX />
              </div>
            </div>
            <div className="sale-nft-profile">
              <img src={InventoryCardImg1} alt="InventoryCardImg1" />
              <div>
                <h3>The Ape Society</h3>
                <p>#8093</p>
              </div>
            </div>
            <div className="cd-text-box">
              <h6>Current pool price:</h6>
              <p>121.80 ₳</p>
            </div>
            <div className="cd-text-box">
              <h6>Extract fee:</h6>
              <p>1.80 ₳</p>
            </div>
            <div className="cd-text-box">
              <h6>Amount received:</h6>
              <p>120.00 ₳</p>
            </div>
            <div className="cd-line"></div>
            <div className="cd-text-box">
              <h6>Pool price:</h6>
              <span>19.40 ₳</span>
            </div>
            <div className="dc-btn-grid">
              <button className="fill-grd-btn">
                <i>Sell</i> <span className="grd-text">Sell</span>
              </button>
              <button className="outline-grd-btn" onClick={closeSaleNFTModal}>
                <div>
                  <span className="grd-text">Cancel</span>
                </div>
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={swapNFTModal}
        onHide={closeSwapNFTModal}
        centered
        className={isDarkTheme ? "dark-theme" : "light-theme"}
      >
        <Modal.Body>
          <div className="sale-nft-modal">
            <div className="modal-head">
              <h2>Swap NFTs</h2>
              <div onClick={closeSwapNFTModal}>
                <BsX />
              </div>
            </div>
            <div className="swap-nft-grid">
              <div className="swap-nft-card">
                <img src={InventoryCardImg1} alt="InventoryCardImg" />
                <h5>The Ape Society</h5>
                <span>#8093</span>
              </div>
              <div className="swap-img">
                <img src={SwapImg} alt="SwapImg" />
              </div>
              <div className="swap-nft-card">
                <img src={InventoryCardImg2} alt="InventoryCardImg" />
                <h5>Ugly Boy</h5>
                <span>#8091</span>
              </div>
            </div>
            <p className="extract-fee">
              <span> Extract fee: </span> 1.80 ₳
            </p>
            <div className="dc-btn-grid">
              <button className="fill-grd-btn">
                <i>Confirm</i> <span className="grd-text">Confirm</span>
              </button>
              <button className="outline-grd-btn" onClick={closeSwapNFTModal}>
                <div>
                  <span className="grd-text">Cancel</span>
                </div>
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default InventoryCard;
