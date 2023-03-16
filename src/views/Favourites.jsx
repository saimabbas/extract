import React, { useContext } from "react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/views/home.css";
import "../styles/views/recenttrades.css";

// Components
import Header from "../components/Header";

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
import SellIcon from "../assets/img/sell-icon.svg";
import BuyIcon from "../assets/img/buy-icon.svg";
import HomeBlob1 from "../assets/img/home-blob-1.png";
import TradeBlob1 from "../assets/img/trade-blob-1.png";
import CollectionsCard from "../components/CollectionsCard";
import Footer from "../components/Footer";

const RecentTrades = () => {
  return (
    <div className="extract-app">
      <div className="home-page">
        <img className="home-blob-1" src={HomeBlob1} alt="HomeBlob" />
        <img className="trade-blob-1" src={TradeBlob1} alt="HomeBlob" />
        <Header />
        <section className="recenttrades-section">
          <div className="box">
            <h1>Favourites</h1>
            <div className="collections-grid">
              <CollectionsCard img={CollectionImg1} />
              <CollectionsCard img={CollectionImg2} />
              <CollectionsCard img={CollectionImg3} />
              <CollectionsCard img={CollectionImg4} />
              <CollectionsCard img={CollectionImg5} />
              <CollectionsCard img={CollectionImg6} />
              <CollectionsCard img={CollectionImg7} />
              <CollectionsCard img={CollectionImg8} />
              <CollectionsCard img={CollectionImg9} />
              <CollectionsCard img={CollectionImg10} />
              <CollectionsCard img={CollectionImg1} />
              <CollectionsCard img={CollectionImg2} />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default RecentTrades;
