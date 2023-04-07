import React, { useContext, useEffect, useState } from "react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/views/home.css";

// Components
import Header from "../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  Pagination,
  Navigation,
  Mousewheel,
  Autoplay,
  FreeMode,
  EffectCube,
  EffectFlip,
  EffectCards,
  EffectCoverflow,
  EffectCreative,
} from "swiper";

// Assets
import WelcomeImg from "../assets/img/welcome-img.png";
import HomeSliderImg1 from "../assets/img/home-slider-img-1.png";
import HomeBlob1 from "../assets/img/home-blob-1.png";
import HomeBlob2 from "../assets/img/home-blob-2.png";
import HomeBlob3 from "../assets/img/home-blob-3.png";
import HomeBlob4 from "../assets/img/home-blob-4.png";
import HomeBlob5 from "../assets/img/home-blob-5.png";
import SellIcon from "../assets/img/sell-icon.svg";
import BuyIcon from "../assets/img/buy-icon.svg";
import FaqImg from "../assets/img/faq-img.png";
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
import MarqueeImg1 from "../assets/img/marquee/marquee-img-1.png";
import MarqueeImg2 from "../assets/img/marquee/marquee-img-2.png";
import MarqueeImg3 from "../assets/img/marquee/marquee-img-3.png";
import MarqueeImg4 from "../assets/img/marquee/marquee-img-4.png";
import MarqueeImg5 from "../assets/img/marquee/marquee-img-5.png";
import MarqueeImg6 from "../assets/img/marquee/marquee-img-6.png";
import MarqueeImg7 from "../assets/img/marquee/marquee-img-7.png";
import MarqueeImg8 from "../assets/img/marquee/marquee-img-8.png";
import MarqueeImg9 from "../assets/img/marquee/marquee-img-9.png";
import MarqueeImg10 from "../assets/img/marquee/marquee-img-10.png";
import MarqueeImg11 from "../assets/img/marquee/marquee-img-14.png";
import MarqueeImg12 from "../assets/img/marquee/marquee-img-11.png";
import MarqueeImg13 from "../assets/img/marquee/marquee-img-12.png";
import MarqueeImg14 from "../assets/img/marquee/marquee-img-13.png";
import MarqueeImg15 from "../assets/img/marquee/marquee-img-15.png";
import ActivityImg1 from "../assets/img/activity/activity-img-10.png";
import ActivityImg2 from "../assets/img/activity/activity-img-1.png";
import ActivityImg3 from "../assets/img/activity/activity-img-2.png";
import ActivityImg4 from "../assets/img/activity/activity-img-3.png";
import ActivityImg5 from "../assets/img/activity/activity-img-4.png";
import ActivityImg6 from "../assets/img/activity/activity-img-5.png";
import ActivityImg7 from "../assets/img/activity/activity-img-6.png";
import ActivityImg8 from "../assets/img/activity/activity-img-7.png";
import ActivityImg9 from "../assets/img/activity/activity-img-8.png";
import ActivityImg10 from "../assets/img/activity/activity-img-9.png";
import Collectible1 from "../assets/img/collectible/1.png";
import Collectible2 from "../assets/img/collectible/2.png";
import Collectible3 from "../assets/img/collectible/3.png";
import Collectible4 from "../assets/img/collectible/4.png";
import Collectible5 from "../assets/img/collectible/5.png";
import Collectible6 from "../assets/img/collectible/6.png";
import Collectible7 from "../assets/img/collectible/7.png";
import Collectible8 from "../assets/img/collectible/8.png";
import Collectible9 from "../assets/img/collectible/9.png";
import Collectible10 from "../assets/img/collectible/10.png";
import Collectible11 from "../assets/img/collectible/11.png";
import Collectible12 from "../assets/img/collectible/12.png";
import Collectible13 from "../assets/img/collectible/13.png";
import Collectible14 from "../assets/img/collectible/14.png";
import Collectible15 from "../assets/img/collectible/15.png";
import VIP1 from "../assets/img/vip/1.png";
import VIP2 from "../assets/img/vip/2.png";
import VIP3 from "../assets/img/vip/3.png";
import VIP4 from "../assets/img/vip/4.png";
import VIP5 from "../assets/img/vip/5.png";
import VIP6 from "../assets/img/vip/6.png";
import VIP7 from "../assets/img/vip/7.png";
import VIP8 from "../assets/img/vip/8.png";
import VIP9 from "../assets/img/vip/9.png";
import VIP10 from "../assets/img/vip/10.png";
import VIP11 from "../assets/img/vip/11.png";
import VIP12 from "../assets/img/vip/12.png";
import VIP13 from "../assets/img/vip/13.png";
import VIP14 from "../assets/img/vip/14.png";
import VIP15 from "../assets/img/vip/15.png";
import Genesis1 from "../assets/img/genesis/1.png";
import Genesis2 from "../assets/img/genesis/2.png";
import Genesis3 from "../assets/img/genesis/3.png";
import Genesis4 from "../assets/img/genesis/4.png";
import Genesis5 from "../assets/img/genesis/5.png";
import Genesis6 from "../assets/img/genesis/6.png";
import Genesis7 from "../assets/img/genesis/7.png";
import Genesis8 from "../assets/img/genesis/8.png";
import Genesis9 from "../assets/img/genesis/9.png";
import Genesis10 from "../assets/img/genesis/10.png";
import Genesis11 from "../assets/img/genesis/11.png";
import Genesis12 from "../assets/img/genesis/12.png";
import Genesis13 from "../assets/img/genesis/13.png";
import Genesis14 from "../assets/img/genesis/14.png";
import Genesis15 from "../assets/img/genesis/15.png";

import {
  BsArrowLeft,
  BsArrowRight,
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { Accordion, Nav, Tab } from "react-bootstrap";
import CollectionsCard from "../components/CollectionsCard";
import Footer from "../components/Footer";
import { ThemeContext } from "../ThemeContext";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Link } from "react-router-dom";
import "swiper/css/effect-fade";

const Home = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const [isExtraCollectionShowing, setIsExtraCollectionShowing] =
    useState(false);
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, CSSRulePlugin);

  const goToFAQs = () => {
    gsap.to(window, {
      duration: 0,
      scrollTo: { y: "#faqs-section", offsetY: 100 },
    });
  };

  return (
    <div className="extract-app">
      <main className="home-page">
        {isDarkTheme ? (
          <img className="home-blob-1" src={HomeBlob1} alt="HomeBlob" />
        ) : null}
        <img className="home-blob-2" src={HomeBlob2} alt="HomeBlob" />
        <Header goToFAQs={goToFAQs} />
        <section className="welcome-section">
          <div className="box">
            <div className="welcome-content-box">
              <div className="welcome-img-box">
                <img src={WelcomeImg} alt={"WelcomeImg"} />
              </div>
              <div className="welcome-left">
                <h1>Welcome to Extract.</h1>
                <div className="welcome-text-grid">
                  <p>An AMM powered marketplace for NFTs, built by TCC Labs.</p>
                  <p>
                    Access instant liquidity and new trade types within our
                    DApp.
                  </p>
                  <p>
                    Providing TCC NFTs as liquidity will allow you to access
                    cheaper fees on Extract.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-slider">
          <div className="box">
            <div className="home-slider-grid">
              <div className="home-slider-prev">
                <BsChevronLeft />
              </div>
              <div className="home-slider-next">
                <BsChevronRight />
              </div>
              <div className="home-slider-grid-left">
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Navigation]}
                  speed={1000}
                  loop={"true"}
                  spaceBetween={50}
                  slidesPerView={"1"}
                  centeredSlides={"true"}
                  className="mySwiper"
                  navigation={{
                    nextEl: ".home-slider-next",
                    prevEl: ".home-slider-prev",
                  }}
                >
                  <SwiperSlide>
                    <div className="home-slider-content">
                      <span className="slider-tag">Collection</span>
                      <h2>
                        Genesis <br /> Collectors
                      </h2>
                      <p>
                        The Collector's Club Genesis Collectors 10k Drop.
                        Featuring a diverse trait and character pool.
                        Illustrated by Comolo
                      </p>
                      <div className="slider-text-grid">
                        <div>
                          <p>Floor price</p>
                          <h6>29 ₳</h6>
                        </div>
                      </div>
                      <Link to="/individualcollection">
                        <button className="fill-grd-btn">Explore</button>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="home-slider-content">
                      <span className="slider-tag">Collection</span>
                      <h2>
                        VIP <br /> Passes
                      </h2>
                      <p>
                        The Collector's Club VIP Passes are the highest tier of
                        entry into the TCC ecosystem. They will grant you
                        multiple mints in the Collector pfp drop, and will grant
                        you access to all future drops and utility.
                      </p>
                      <div className="slider-text-grid">
                        <div>
                          <p>Floor price</p>
                          <h6>249 ₳</h6>
                        </div>
                      </div>
                      <Link to="/individualcollection">
                        <button className="fill-grd-btn">Explore</button>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="home-slider-content">
                      <span className="slider-tag">Collection</span>
                      <h2>
                        Collectible <br /> Scenes
                      </h2>
                      <p>
                        Introducing a look into the world of TCC, the barren
                        landscapes, dilapidated cities and war torn country
                        side. A unique banner collection claimed by holders of
                        TCC Genesis Collectors & VIP Passes. Your token ID is
                        your pass.
                      </p>
                      <div className="slider-text-grid">
                        <div>
                          <p>Floor price</p>
                          <h6>14 ₳</h6>
                        </div>
                      </div>
                      <Link to="/individualcollection">
                        <button className="fill-grd-btn">Explore</button>
                      </Link>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="home-slider-grid-right">
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Navigation]}
                  speed={1000}
                  loop={"true"}
                  spaceBetween={50}
                  slidesPerView={"1"}
                  centeredSlides={"true"}
                  className="mySwiper"
                  navigation={{
                    nextEl: ".home-slider-next",
                    prevEl: ".home-slider-prev",
                  }}
                >
                  <SwiperSlide>
                    <div className="three-sliders-grid">
                      <div className="ts-marquee-container">
                        <div className="ts-marquee-list">
                          <div className="tsgc-img-box">
                            <img src={Genesis1} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Genesis2} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Genesis3} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Genesis4} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Genesis5} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Genesis6} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Genesis7} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Genesis8} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Genesis9} alt="HomeSliderImg1" />
                          </div>
                        </div>
                      </div>
                      <div className="ts-marquee-container">
                        <div className="ts-marquee-list-reverse">
                          <div className="tsgc-img-box">
                            <img src={Genesis10} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Genesis11} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Genesis12} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Genesis13} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Genesis14} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Genesis15} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Genesis1} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Genesis2} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Genesis3} alt="HomeSliderImg1" />
                          </div>
                        </div>
                      </div>
                      <div className="ts-marquee-container">
                        <div className="ts-marquee-list">
                          <div className="tsgc-img-box">
                            <img src={Genesis4} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Genesis5} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Genesis6} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Genesis7} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Genesis8} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Genesis9} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Genesis10} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Genesis11} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Genesis12} alt="HomeSliderImg1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="three-sliders-grid">
                      <div className="ts-marquee-container">
                        <div className="ts-marquee-list">
                          <div className="tsgc-img-box">
                            <img src={VIP1} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={VIP2} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={VIP3} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={VIP4} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={VIP5} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={VIP6} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={VIP7} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={VIP8} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={VIP9} alt="HomeSliderImg1" />
                          </div>
                        </div>
                      </div>
                      <div className="ts-marquee-container">
                        <div className="ts-marquee-list-reverse">
                          <div className="tsgc-img-box">
                            <img src={VIP10} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={VIP11} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={VIP12} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={VIP13} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={VIP14} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={VIP15} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={VIP1} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={VIP2} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={VIP3} alt="HomeSliderImg1" />
                          </div>
                        </div>
                      </div>
                      <div className="ts-marquee-container">
                        <div className="ts-marquee-list">
                          <div className="tsgc-img-box">
                            <img src={VIP4} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={VIP5} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={VIP6} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={VIP7} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={VIP8} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={VIP9} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={VIP10} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={VIP11} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={VIP12} alt="HomeSliderImg1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="three-sliders-grid">
                      <div className="ts-marquee-container">
                        <div className="ts-marquee-list">
                          <div className="tsgc-img-box">
                            <img src={Collectible1} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Collectible2} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Collectible3} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Collectible4} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Collectible5} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Collectible6} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Collectible7} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Collectible8} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Collectible9} alt="HomeSliderImg1" />
                          </div>
                        </div>
                      </div>
                      <div className="ts-marquee-container">
                        <div className="ts-marquee-list-reverse">
                          <div className="tsgc-img-box">
                            <img src={Collectible10} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Collectible11} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Collectible12} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Collectible13} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Collectible14} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Collectible15} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Collectible1} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Collectible2} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Collectible3} alt="HomeSliderImg1" />
                          </div>
                        </div>
                      </div>
                      <div className="ts-marquee-container">
                        <div className="ts-marquee-list">
                          <div className="tsgc-img-box">
                            <img src={Collectible4} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Collectible5} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Collectible6} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Collectible7} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Collectible8} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Collectible9} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Collectible10} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Collectible11} alt="HomeSliderImg1" />
                          </div>
                          <div className="tsgc-img-box">
                            <img src={Collectible12} alt="HomeSliderImg1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <section className="collections">
          {isDarkTheme ? (
            <img className="home-blob-3" src={HomeBlob3} alt="HomeBlob" />
          ) : null}
          <img className="home-blob-4" src={HomeBlob4} alt="HomeBlob" />

          {isDarkTheme ? (
            <img className="home-blob-5" src={HomeBlob5} alt="HomeBlob" />
          ) : null}
          <div className="box">
            <div className="collections-content">
              <Tab.Container defaultActiveKey="new" transition={false}>
                <div className="collections-head">
                  <h3>Collections</h3>
                  <Nav variant="pills">
                    <Nav.Item>
                      <Nav.Link eventKey="new">New</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="trending">Trending</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="best-deals">Best deals</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                {isExtraCollectionShowing ? (
                  <div className="collections-container">
                    <Tab.Content>
                      <Tab.Pane eventKey="new">
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
                          <CollectionsCard img={CollectionImg3} />
                          <CollectionsCard img={CollectionImg4} />
                          <CollectionsCard img={CollectionImg5} />
                          <CollectionsCard img={CollectionImg6} />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="trending">
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
                          <CollectionsCard img={CollectionImg3} />
                          <CollectionsCard img={CollectionImg4} />
                          <CollectionsCard img={CollectionImg5} />
                          <CollectionsCard img={CollectionImg6} />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="best-deals">
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
                          <CollectionsCard img={CollectionImg3} />
                          <CollectionsCard img={CollectionImg4} />
                          <CollectionsCard img={CollectionImg5} />
                          <CollectionsCard img={CollectionImg6} />
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                ) : (
                  <div className="collections-container">
                    <Tab.Content>
                      <Tab.Pane eventKey="new">
                        <div className="collections-grid">
                          <CollectionsCard img={CollectionImg1} />
                          <CollectionsCard img={CollectionImg2} />
                          <CollectionsCard img={CollectionImg3} />
                          <CollectionsCard img={CollectionImg4} />
                          <CollectionsCard img={CollectionImg5} />
                          <CollectionsCard img={CollectionImg6} />
                          <CollectionsCard img={CollectionImg7} />
                          <CollectionsCard img={CollectionImg8} />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="trending">
                        <div className="collections-grid">
                          <CollectionsCard img={CollectionImg1} />
                          <CollectionsCard img={CollectionImg2} />
                          <CollectionsCard img={CollectionImg3} />
                          <CollectionsCard img={CollectionImg4} />
                          <CollectionsCard img={CollectionImg5} />
                          <CollectionsCard img={CollectionImg6} />
                          <CollectionsCard img={CollectionImg7} />
                          <CollectionsCard img={CollectionImg8} />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="best-deals">
                        <div className="collections-grid">
                          <CollectionsCard img={CollectionImg1} />
                          <CollectionsCard img={CollectionImg2} />
                          <CollectionsCard img={CollectionImg3} />
                          <CollectionsCard img={CollectionImg4} />
                          <CollectionsCard img={CollectionImg5} />
                          <CollectionsCard img={CollectionImg6} />
                          <CollectionsCard img={CollectionImg7} />
                          <CollectionsCard img={CollectionImg8} />
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                )}

                {isExtraCollectionShowing ? (
                  <button
                    className="outline-grd-btn"
                    onClick={() => {
                      setIsExtraCollectionShowing(false);
                    }}
                  >
                    <div>
                      <span className="grd-text">Show less</span>
                    </div>
                  </button>
                ) : (
                  <button
                    className="outline-grd-btn"
                    onClick={() => {
                      setIsExtraCollectionShowing(true);
                    }}
                  >
                    <div>
                      <span className="grd-text">Show more</span>
                    </div>
                  </button>
                )}
              </Tab.Container>
            </div>
          </div>
        </section>
        <section className="activity">
          <div className="box">
            <div className="activity-content">
              <h3>Activity feed</h3>
              <div className="activity-table">
                <table>
                  <thead>
                    <tr>
                      <th>Collection</th>
                      <th>Trade</th>
                      <th>Amount</th>
                      <th>Wallet</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg1} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>
                        <button className="sell-btn">
                          <img src={SellIcon} alt="SellIcon" />
                          Sell
                        </button>
                      </td>
                      <td>24.40 ₳</td>
                      <td>4WWY…hxY</td>
                      <td>34 minutes ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg2} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>
                        <button className="buy-btn">
                          <img src={BuyIcon} alt="BuyIcon" />
                          Buy
                        </button>
                      </td>
                      <td>24.40 ₳</td>
                      <td>4WWY…hxY</td>
                      <td>34 minutes ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg3} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>
                        <button className="sell-btn">
                          <img src={SellIcon} alt="SellIcon" />
                          Sell
                        </button>
                      </td>
                      <td>24.40 ₳</td>
                      <td>4WWY…hxY</td>
                      <td>34 minutes ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg4} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>
                        <button className="buy-btn">
                          <img src={BuyIcon} alt="BuyIcon" />
                          Buy
                        </button>
                      </td>
                      <td>24.40 ₳</td>
                      <td>4WWY…hxY</td>
                      <td>34 minutes ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg5} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>
                        <button className="sell-btn">
                          <img src={SellIcon} alt="SellIcon" />
                          Sell
                        </button>
                      </td>
                      <td>24.40 ₳</td>
                      <td>4WWY…hxY</td>
                      <td>34 minutes ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg6} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>
                        <button className="buy-btn">
                          <img src={BuyIcon} alt="BuyIcon" />
                          Buy
                        </button>
                      </td>
                      <td>24.40 ₳</td>
                      <td>4WWY…hxY</td>
                      <td>34 minutes ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg7} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>
                        <button className="sell-btn">
                          <img src={SellIcon} alt="SellIcon" />
                          Sell
                        </button>
                      </td>
                      <td>24.40 ₳</td>
                      <td>4WWY…hxY</td>
                      <td>34 minutes ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg8} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>
                        <button className="buy-btn">
                          <img src={BuyIcon} alt="BuyIcon" />
                          Buy
                        </button>
                      </td>
                      <td>24.40 ₳</td>
                      <td>4WWY…hxY</td>
                      <td>34 minutes ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg9} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>
                        <button className="sell-btn">
                          <img src={SellIcon} alt="SellIcon" />
                          Sell
                        </button>
                      </td>
                      <td>24.40 ₳</td>
                      <td>4WWY…hxY</td>
                      <td>34 minutes ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg10} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>
                        <button className="buy-btn">
                          <img src={BuyIcon} alt="BuyIcon" />
                          Buy
                        </button>
                      </td>
                      <td>24.40 ₳</td>
                      <td>4WWY…hxY</td>
                      <td>34 minutes ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg1} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>
                        <button className="sell-btn">
                          <img src={SellIcon} alt="SellIcon" />
                          Sell
                        </button>
                      </td>
                      <td>24.40 ₳</td>
                      <td>4WWY…hxY</td>
                      <td>34 minutes ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg2} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>
                        <button className="buy-btn">
                          <img src={BuyIcon} alt="BuyIcon" />
                          Buy
                        </button>
                      </td>
                      <td>24.40 ₳</td>
                      <td>4WWY…hxY</td>
                      <td>34 minutes ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg3} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>
                        <button className="sell-btn">
                          <img src={SellIcon} alt="SellIcon" />
                          Sell
                        </button>
                      </td>
                      <td>24.40 ₳</td>
                      <td>4WWY…hxY</td>
                      <td>34 minutes ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg4} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>
                        <button className="buy-btn">
                          <img src={BuyIcon} alt="BuyIcon" />
                          Buy
                        </button>
                      </td>
                      <td>24.40 ₳</td>
                      <td>4WWY…hxY</td>
                      <td>34 minutes ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg5} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>
                        <button className="sell-btn">
                          <img src={SellIcon} alt="SellIcon" />
                          Sell
                        </button>
                      </td>
                      <td>24.40 ₳</td>
                      <td>4WWY…hxY</td>
                      <td>34 minutes ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg6} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>
                        <button className="buy-btn">
                          <img src={BuyIcon} alt="BuyIcon" />
                          Buy
                        </button>
                      </td>
                      <td>24.40 ₳</td>
                      <td>4WWY…hxY</td>
                      <td>34 minutes ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg7} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>
                        <button className="sell-btn">
                          <img src={SellIcon} alt="SellIcon" />
                          Sell
                        </button>
                      </td>
                      <td>24.40 ₳</td>
                      <td>4WWY…hxY</td>
                      <td>34 minutes ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg8} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>
                        <button className="buy-btn">
                          <img src={BuyIcon} alt="BuyIcon" />
                          Buy
                        </button>
                      </td>
                      <td>24.40 ₳</td>
                      <td>4WWY…hxY</td>
                      <td>34 minutes ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg9} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>
                        <button className="sell-btn">
                          <img src={SellIcon} alt="SellIcon" />
                          Sell
                        </button>
                      </td>
                      <td>24.40 ₳</td>
                      <td>4WWY…hxY</td>
                      <td>34 minutes ago</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-index">
                          <img src={ActivityImg10} alt="ActivityImg1" />
                          <h6>Graphic</h6>
                        </div>
                      </td>
                      <td>
                        <button className="buy-btn">
                          <img src={BuyIcon} alt="BuyIcon" />
                          Buy
                        </button>
                      </td>
                      <td>24.40 ₳</td>
                      <td>4WWY…hxY</td>
                      <td>34 minutes ago</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section className="faq" id="faqs-section">
          <div className="box">
            <div className="faq-grid">
              <img src={FaqImg} alt="FaqImg" />
              <div className="faq-container">
                <h3>Information Section</h3>
                <div className="faq-acc-box">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <div className="faq-acc-head">
                          <h6>What is Extract?</h6>
                          <BsChevronDown />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          Extract is a decentralised exchange (DEX) that allows
                          users to trade CNFTs in an advanced fashion. Using
                          Extract will allow you to earn ADA from your Cardano
                          NFTs, as well as access new trade types and
                          opportunities such as limit orders, instant swapping
                          and access to instant liquidity. Check out our
                          white-paper and GitBook for further information!
                          <br />
                          <br />
                          White-Paper:{" "}
                          <a href="https://tcclabs.github.io/extract/">
                            https://tcclabs.github.io/extract/
                          </a>
                          <br />
                          GitBook:{" "}
                          <a href="https://tcclabs.gitbook.io/tcclabs/tcc-labs/tcc-labs-introduction">
                            https://tcclabs.gitbook.io/tcclabs/tcc-labs/tcc-labs-introduction
                          </a>
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <div className="faq-acc-head">
                          <h6>Is Extract safe?</h6>
                          <BsChevronDown />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          Extract is a new type of decentralised protocol on the
                          Cardano Blockchain and we have put in place rigorous
                          safety measurements in place to help ensure all our
                          users safety. Check out the terms of service and
                          white-paper for further information regarding safety
                          and terms of use.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <div className="faq-acc-head">
                          <h6>How does it work?</h6>
                          <BsChevronDown />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          Liquidity pools with NFTs are a way to facilitate
                          trading of unique digital assets, called non-fungible
                          tokens (NFTs), on decentralized platforms. Here's a
                          simple explanation of how they work:
                          <br />
                          <br />
                          1. NFT owners deposit their NFTs into a shared pool,
                          creating a marketplace for these unique assets.
                          <br />
                          2. Participants also deposit a corresponding amount of
                          a cryptocurrency, like $ADA, to provide liquidity for
                          trading.
                          <br />
                          3. As a reward for providing liquidity, pool
                          participants (Liquidity Providers) earn fees generated
                          from NFT trades, usually in the form of a percentage
                          of the transaction value.
                          <br />
                          4. Participants can withdraw their NFTs and
                          corresponding cryptocurrency from the pool at any
                          time, but they should be aware of potential risks,
                          such as impermanent loss.
                          <br />
                          <br />
                          In summary, liquidity pools with NFTs allow users to
                          trade unique digital assets in a decentralized manner,
                          while rewarding those who provide liquidity to the
                          pool.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <div className="faq-acc-head">
                          <h6>Impermanent Loss?</h6>
                          <BsChevronDown />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          Disclaimer and Warning Message:
                          <br />
                          Please read this disclaimer and warning message
                          carefully before using or participating in any
                          liquidity pool that involves non-fungible tokens
                          (NFTs). By engaging with these pools, you acknowledge
                          that you have read, understood, and agreed to the
                          following terms and conditions.
                          <br />
                          <br />
                          1. Risk of Impermanent Loss: Participating in
                          liquidity pools with NFTs may expose you to the risk
                          of impermanent loss. Impermanent loss occurs when the
                          value of assets in a liquidity pool fluctuates,
                          causing a divergence in their relative values. This
                          may result in the value of your deposited assets being
                          less than their original value when you withdraw them
                          from the pool. Please be aware that the risk of
                          impermanent loss can be particularly pronounced in
                          pools that involve NFTs due to their unique,
                          non-fungible nature and potentially high price
                          volatility.
                          <br />
                          2. Lack of Price Stability: NFTs are unique digital
                          assets that often do not have a readily available
                          market price or stable value. This can lead to
                          significant price fluctuations and may exacerbate the
                          risk of impermanent loss. Before participating in a
                          liquidity pool with NFTs, please ensure that you fully
                          understand the potential risks and rewards associated
                          with these assets.
                          <br />
                          3. No Guarantees: There is no guarantee that your
                          participation in a liquidity pool with NFTs will
                          result in profits. The returns on your investment are
                          dependent on various factors, including the overall
                          market conditions and the performance of the
                          underlying assets. As such, you should only invest
                          what you can afford to lose.
                          <br />
                          4. Market Volatility: NFTs can be subject to extreme
                          market volatility, which can impact the overall
                          performance of liquidity pools involving these assets.
                          Please be prepared to accept the potential financial
                          consequences of such fluctuations.
                          <br />
                          <br />
                          By participating in liquidity pools with NFTs on
                          Extract, you acknowledge and accept these risks and
                          agree to hold harmless the platform, its creators, and
                          any affiliated parties from any losses or damages
                          resulting from your involvement with these pools.
                          Always conduct thorough research and consider seeking
                          professional advice before investing in any financial
                          product or service.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
