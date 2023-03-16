import React from "react";
import { Link } from "react-router-dom";
import "../styles/globals.css";
const Links = () => {
  return (
    <div className="links-page">
      <Link to="/">1. Links Page</Link>
      <Link to="/home">2. Home</Link>
      <Link to="/favourites">3. Favourites</Link>
      <Link to="/recenttrades">4. Recent Trades</Link>
    </div>
  );
};

export default Links;
