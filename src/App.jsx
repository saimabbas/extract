import React, { useContext } from "react";
import "./styles/globals.css";
import "./styles/theme.css";
import {
  BrowserRouter as Switch,
  Routes,
  Route,
  Router,
  useLocation,
} from "react-router-dom";
import LinksPage from "./views/Links";
import Home from "./views/Home";
import Favourites from "./views/Favourites";
import RecentTrades from "./views/RecentTrades";
import Collections from "./views/Collections";
import Earn from "./views/Earn";
import NewDeposit from "./views/NewDeposit";
import { ThemeContext } from "./ThemeContext";

function App() {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
      <Switch>
        <Routes>
          <Route exact path="/links" element={<LinksPage />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/favourites" element={<Favourites />} />
          <Route exact path="/recenttrades" element={<RecentTrades />} />
          <Route exact path="/collections" element={<Collections />} />
          <Route exact path="/earn" element={<Earn />} />
          <Route exact path="/newdeposit" element={<NewDeposit />} />
        </Routes>
      </Switch>
    </div>
  );
}

export default App;
