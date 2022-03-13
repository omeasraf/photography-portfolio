import "../assets/css/parallax.css";
import { AiOutlineCompass } from "react-icons/ai";

const Parallax = () => {
  return (
    <div className="parallax">
      <h2 className="title" data-aos="fade-up">
        ABHI
      </h2>
      <div className="bottom">
        <div
          className="texts"
          data-aos="fade-right"
          data-aos-easing="ease-in-back"
          data-aos-delay="400"
          data-aos-duration="800"
          data-aos-offset="1"
        >
          <AiOutlineCompass className="icon" />
          <a
            target="BLANK"
            href="https://www.google.com/maps/place/Mount+Tammany/@40.9691951,-75.1194443,15.48z/"
          >
            40.9690, -75.1132
          </a>
        </div>

        <div
          className="texts"
          data-aos="fade-left"
          data-aos-easing="ease-in-back"
          data-aos-delay="400"
          data-aos-duration="800"
          data-aos-offset="1"
        >
          Mount Tammany, NJ
        </div>
      </div>
    </div>
  );
};

export default Parallax;
