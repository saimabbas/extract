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
        <Header goToFAQs={goToFAQs} />
        <div className="box">
          <div className="tos-content">
            <h1>Terms of Service for Extract Protocol</h1>
            <br />
            <br />
            <p>
              Please read these Terms of Service ("Terms") carefully before
              using the Extract Protocol ("Extract", "we", "us", or "our") on
              the Cardano blockchain. By accessing or using Extract, you
              acknowledge that you have read, understood, and agreed to be bound
              by these Terms.
            </p>
            <br />
            <br />
            <p>
              <b>Liability</b> <br />
              To the fullest extent permitted by law, Extract and its
              affiliates, partners, and developers shall not be held liable for
              any direct, indirect, incidental, consequential, or punitive
              damages, including but not limited to loss of profits, data, or
              other intangible losses, arising out of or in connection with your
              use of Extract. By using Extract, you agree to indemnify, defend,
              and hold harmless Extract, its affiliates, partners, and
              developers from any claims, damages, losses, or expenses arising
              from your use of the platform.
            </p>
            <br />
            <br />
            <p>
              <b>Knowledge</b> <br />
              By using Extract, you represent and warrant that you have the
              necessary knowledge, understanding, and experience to evaluate the
              risks associated with trading, depositing, and swapping NFTs
              within liquidity pools on a decentralized exchange. You
              acknowledge that trading, depositing, and swapping NFTs involves
              inherent risks, including price volatility and potential
              impermanent loss.
            </p>
            <br />
            <br />
            <p>
              <b>Impermanent Loss</b> <br />
              You understand and accept that participating in liquidity pools on
              Extract may expose you to the risk of impermanent loss, which
              occurs when the value of assets in a liquidity pool fluctuates,
              causing a divergence in their relative values. This may result in
              the value of your deposited assets being less than their original
              value when you withdraw them from the pool. You acknowledge and
              accept these risks and agree to hold harmless Extract, its
              affiliates, partners, and developers from any losses or damages
              resulting from your participation in liquidity pools on the
              platform.
            </p>
            <br />
            <br />
            <p>
              <b>Legality</b>
              <br />
              By using Extract, you represent and warrant that your use of the
              platform complies with all applicable laws, regulations, and
              guidelines in your jurisdiction. You acknowledge that the
              regulatory landscape surrounding decentralized exchanges, NFTs,
              and liquidity pools is constantly evolving, and you agree to
              comply with any changes in regulations or the application of
              existing regulations to the use of Extract. We reserve the right
              to terminate or restrict your access to Extract if we have reason
              to believe that your use of the platform violates any applicable
              laws, regulations, or guidelines.
            </p>
            <br />
            <br />
            <p>
              These Terms constitute the entire agreement between you and
              Extract with respect to your use of the platform and supersede any
              prior agreements or understandings between you and Extract. We
              reserve the right to amend or update these Terms at any time
              without prior notice. Your continued use of Extract following the
              posting of changes to the Terms constitutes your acceptance of
              those changes.
            </p>
            <br />
            <br />
            <p>
              By using Extract, you acknowledge and accept these Terms and agree
              to be bound by them. If you do not agree to these Terms, please do
              not use Extract.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
