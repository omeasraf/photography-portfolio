import "../assets/css/portfolio.css";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio">
        <div
          className="item"
          data-aos="fade-down"
          data-aos-easing="ease-in"
          data-aos-delay="50"
          data-aos-duration="500"
        >
          <Link to="/portfolio/all">
            <div className="imageContainer">
              <div className="bottom-fade"></div>
              <div className="bg-fade"></div>
              <div className="middle-items">
                <h3 className="title">ABHI</h3>
              </div>
              <div className="bottom-items">
                <h3>PORTFOLIO</h3>
                <BsArrowRightShort />
              </div>
              <img src={require("../assets/images/portfolio/02.JPG")} alt="" />
            </div>
          </Link>
        </div>
        <div
          className="item"
          data-aos="fade-down"
          data-aos-easing="ease-in"
          data-aos-delay="200"
          data-aos-duration="600"
        >
          <Link to="/portfolio/couple-photoshoot">
            <div className="imageContainer">
              <div className="bottom-fade"></div>
              <div className="bg-fade"></div>
              <div className="middle-items">
                <h3 className="title">ABHI</h3>
              </div>
              <div className="bottom-items">
                <h3>Couple Photoshoot</h3>
                <BsArrowRightShort />
              </div>
              <img src={require("../assets/images/portfolio/01.jpeg")} alt="" />
            </div>
          </Link>
        </div>
        <div
          className="item"
          data-aos="fade-down"
          data-aos-easing="ease-in"
          data-aos-delay="300"
          data-aos-duration="700"
        >
          <Link to="/education">
            <div className="imageContainer">
              <div className="bottom-fade"></div>
              <div className="bg-fade"></div>
              <div className="middle-items">
                <h3 className="title">ABHI</h3>
              </div>
              <div className="bottom-items">
                <h3>Education</h3>
                <BsArrowRightShort />
              </div>
              <img src={require("../assets/images/portfolio/03.JPG")} alt="" />
            </div>
          </Link>
        </div>
        {/* <div
          className="item"
          data-aos="fade-down"
          data-aos-easing="ease-in"
          data-aos-delay="400"
          data-aos-duration="800"
        ></div> */}
      </div>
    </div>
  );
};

export default Portfolio;
