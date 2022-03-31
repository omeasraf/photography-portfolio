import React from "react";
import { useInView } from "react-intersection-observer";

const ImageContainer = ({ imageUrL }) => {
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);

  return <img ref={ref} className="img-responsive" src={imageUrL} alt="" />;
};

export default ImageContainer;
