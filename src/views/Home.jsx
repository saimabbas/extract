import React, { useContext } from "react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/views/home.css";

// Components
import Header from "../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Mousewheel, Autoplay, FreeMode } from "swiper";
import { gsap } from "gsap";

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

const Home = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="extract-app">
      <main className="home-page">
        <img className="home-blob-1" src={HomeBlob1} alt="HomeBlob" />
        <img className="home-blob-2" src={HomeBlob2} alt="HomeBlob" />
        <Header />
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
                  <p>An AMM powered marketplace for NFTs, built by TCC Labs.</p>
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
                  speed={500}
                  spaceBetween={50}
                  slidesPerView={"1"}
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
                          <p>Buy price</p>
                          <h6>44.65 ₳</h6>
                        </div>
                        <div>
                          <p>Instant sell price</p>
                          <h6>44.65 ₳</h6>
                        </div>
                      </div>
                      <button className="fill-grd-btn">Get it</button>
                    </div>
                  </SwiperSlide>

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
                          <p>Buy price</p>
                          <h6>44.65 ₳</h6>
                        </div>
                        <div>
                          <p>Instant sell price</p>
                          <h6>44.65 ₳</h6>
                        </div>
                      </div>
                      <button className="fill-grd-btn">Get it</button>
                    </div>
                  </SwiperSlide>

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
                          <p>Buy price</p>
                          <h6>44.65 ₳</h6>
                        </div>
                        <div>
                          <p>Instant sell price</p>
                          <h6>44.65 ₳</h6>
                        </div>
                      </div>
                      <button className="fill-grd-btn">Get it</button>
                    </div>
                  </SwiperSlide>

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
                          <p>Buy price</p>
                          <h6>44.65 ₳</h6>
                        </div>
                        <div>
                          <p>Instant sell price</p>
                          <h6>44.65 ₳</h6>
                        </div>
                      </div>
                      <button className="fill-grd-btn">Get it</button>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="home-slider-grid-right">
                <div className="three-sliders-grid">
                  {/* <div className="three-sliders-grid-card">
                    <Swiper
                      direction="vertical"
                      modules={[Mousewheel, Pagination, Autoplay, FreeMode]}
                      mousewheel={true}
                      slidesPerView={"auto"}
                      spaceBetween={15}
                      centeredSlides={false}
                      freeMode={true}
                      loop={true}
                      speed={5000}
                    >
                      <SwiperSlide>
                        <div className="tsgc-img-box">
                          <img src={HomeSliderImg1} alt="HomeSliderImg1" />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="tsgc-img-box">
                          <img src={HomeSliderImg1} alt="HomeSliderImg1" />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="tsgc-img-box">
                          <img src={HomeSliderImg1} alt="HomeSliderImg1" />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="tsgc-img-box">
                          <img src={HomeSliderImg1} alt="HomeSliderImg1" />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="tsgc-img-box">
                          <img src={HomeSliderImg1} alt="HomeSliderImg1" />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div> */}
                  <div className="ts-marquee-container">
                    <div className="ts-marquee-list">
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg1} alt="HomeSliderImg1" />
                      </div>
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg2} alt="HomeSliderImg1" />
                      </div>
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg3} alt="HomeSliderImg1" />
                      </div>
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg4} alt="HomeSliderImg1" />
                      </div>
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg5} alt="HomeSliderImg1" />
                      </div>
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg6} alt="HomeSliderImg1" />
                      </div>
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg7} alt="HomeSliderImg1" />
                      </div>
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg8} alt="HomeSliderImg1" />
                      </div>
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg9} alt="HomeSliderImg1" />
                      </div>
                    </div>
                  </div>
                  <div className="ts-marquee-container">
                    <div className="ts-marquee-list-reverse">
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg10} alt="HomeSliderImg1" />
                      </div>
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg11} alt="HomeSliderImg1" />
                      </div>
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg12} alt="HomeSliderImg1" />
                      </div>
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg13} alt="HomeSliderImg1" />
                      </div>
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg14} alt="HomeSliderImg1" />
                      </div>
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg15} alt="HomeSliderImg1" />
                      </div>
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg1} alt="HomeSliderImg1" />
                      </div>
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg2} alt="HomeSliderImg1" />
                      </div>
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg3} alt="HomeSliderImg1" />
                      </div>
                    </div>
                  </div>
                  <div className="ts-marquee-container">
                    <div className="ts-marquee-list">
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg4} alt="HomeSliderImg1" />
                      </div>
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg5} alt="HomeSliderImg1" />
                      </div>
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg6} alt="HomeSliderImg1" />
                      </div>
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg7} alt="HomeSliderImg1" />
                      </div>
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg8} alt="HomeSliderImg1" />
                      </div>
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg9} alt="HomeSliderImg1" />
                      </div>
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg10} alt="HomeSliderImg1" />
                      </div>
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg11} alt="HomeSliderImg1" />
                      </div>
                      <div className="tsgc-img-box">
                        <img src={MarqueeImg12} alt="HomeSliderImg1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="collections">
          <img className="home-blob-3" src={HomeBlob3} alt="HomeBlob" />
          <img className="home-blob-4" src={HomeBlob4} alt="HomeBlob" />
          <img className="home-blob-5" src={HomeBlob5} alt="HomeBlob" />
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
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="trending">
                      <div className="collections-grid">
                        <CollectionsCard />
                        <CollectionsCard />
                        <CollectionsCard />
                        <CollectionsCard />
                        <CollectionsCard />
                        <CollectionsCard />
                        <CollectionsCard />
                        <CollectionsCard />
                        <CollectionsCard />
                        <CollectionsCard />
                        <CollectionsCard />
                        <CollectionsCard />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="best-deals">
                      <div className="collections-grid">
                        <CollectionsCard />
                        <CollectionsCard />
                        <CollectionsCard />
                        <CollectionsCard />
                        <CollectionsCard />
                        <CollectionsCard />
                        <CollectionsCard />
                        <CollectionsCard />
                        <CollectionsCard />
                        <CollectionsCard />
                        <CollectionsCard />
                        <CollectionsCard />
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
                <button className="outline-grd-btn">
                  <div>
                    <span className="grd-text">Show more</span>
                  </div>
                </button>
              </Tab.Container>
            </div>
          </div>
        </section>
        {/* <div className={isDarkTheme ? "dark theme-box" : "light theme-box"}>
          <h1>My App</h1>
          <button onClick={toggleTheme}>
            {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
          </button>
        </div> */}
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
        <section className="faq">
          <div className="box">
            <div className="faq-grid">
              <img src={FaqImg} alt="FaqImg" />
              <div className="faq-container">
                <h3>FAQ</h3>
                <div className="faq-acc-box">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <div className="faq-acc-head">
                          <h6>How do I start?</h6>
                          <BsChevronDown />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <div className="faq-acc-head">
                          <h6>How to invite a friend?</h6>
                          <BsChevronDown />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <div className="faq-acc-head">
                          <h6>Who should I listen?</h6>
                          <BsChevronDown />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <div className="faq-acc-head">
                          <h6>Is it safe?</h6>
                          <BsChevronDown />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
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
