import { NavLink, Outlet } from "react-router-dom";
import "../assets/css/portfolio.css";
import MasonryView from "../components/MasonryView";

const PortfolioView = () => {
  return (
    <div className="portfolio-view h-full">
      <div className="tabHolder">
        <nav className="tabs">
          {tabs.map((tab) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "white" : "rgb(193, 185, 185)",
                };
              }}
              to={`/portfolio/${tab.slug}`}
              key={tab.name}
            >
              {tab.name}
            </NavLink>
          ))}
        </nav>
        {/* <Outlet /> */}
      </div>
      <MasonryView />
    </div>
  );
};

export default PortfolioView;

let tabs = [
  {
    name: "All",
    slug: "all",
  },
  {
    name: "Portrait",
    slug: "portrait",
  },
  {
    name: "Couple Photoshoot",
    slug: "couple",
  },
  {
    name: "Landscape",
    slug: "landscape",
  },
];
