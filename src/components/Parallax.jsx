import "../css/parallax.css";
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
          <a href="https://www.google.com/maps/place/52.9, -3.85">
            52.9, -3.85
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
          Snowdonia National Park, UK
        </div>
      </div>
    </div>
  );
};

export default Parallax;
