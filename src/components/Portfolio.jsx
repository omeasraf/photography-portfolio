import "../css/portfolio.css";

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
        ></div>
        <div
          className="item"
          data-aos="fade-down"
          data-aos-easing="ease-in"
          data-aos-delay="200"
          data-aos-duration="600"
        ></div>
        <div
          className="item"
          data-aos="fade-down"
          data-aos-easing="ease-in"
          data-aos-delay="300"
          data-aos-duration="700"
        ></div>
        <div
          className="item"
          data-aos="fade-down"
          data-aos-easing="ease-in"
          data-aos-delay="400"
          data-aos-duration="800"
        ></div>
      </div>
    </div>
  );
};

export default Portfolio;
