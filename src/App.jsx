import "./styles/globals.css";
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

function App() {
  return (
    <>
      <Switch>
        <Routes>
          <Route exact path="/" element={<LinksPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/favourites" element={<Favourites />} />
          <Route exact path="/recenttrades" element={<RecentTrades />} />
        </Routes>
      </Switch>
    </>
  );
}

export default App;
