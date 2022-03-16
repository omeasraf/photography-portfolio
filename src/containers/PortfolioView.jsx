import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/portfolio.css";
import { client } from "../client/client.js";
import MasonryView from "../components/MasonryView";

const PortfolioView = () => {
  const [allTabs, setAllTabs] = useState([]);
  const [allImages, setAllImages] = useState({});
  useEffect(() => {
    client
      .fetch(
        `*[_type == "tabBar"]{
                    _id,
                    name,
                    slug{current},
                    gallery
          }`
      )
      .then((data) => {
        console.log("Called sanity");
        setAllTabs(data);
        var tempHolder = {
          all: [],
        };
        for (var gallery of data) {
          tempHolder[gallery.slug.current] = gallery.gallery;
          tempHolder.all = tempHolder.all.concat(gallery.gallery);
        }
        setAllImages(tempHolder);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="portfolio-view h-full">
      <div className="tabHolder">
        <nav className="tabs">
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "white" : "rgb(193, 185, 185)",
              };
            }}
            to={`/portfolio/all`}
          >
            All
          </NavLink>
          {allTabs.map((tab) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "white" : "rgb(193, 185, 185)",
                };
              }}
              to={`/portfolio/${tab.slug.current}`}
              key={tab._id}
            >
              {tab.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* {allImages != undefined && allImages != {} ? (
        <div className="flex flex-row justify-center">
          <ReactLoading type="cylon" color="#FFF" height={667} width={375} />
        </div>
      ) : ( */}
      <MasonryView allImages={allImages} />
      {/* )} */}
    </div>
  );
};

export default PortfolioView;
