import { useLocation } from "react-router-dom";
import "../assets/css/imageContainer.css";
import { useEffect, useState } from "react";
import { urlFor } from "../client/client";
import ReactLoading from "react-loading";
const MasonryView = ({ allImages }) => {
  const [images, setImages] = useState([]);
  const location = useLocation();
  var path = location.pathname.split("/")[2];

  useEffect(() => {
    if (allImages !== null && allImages !== undefined && allImages !== {}) {
      if (
        path !== "all" &&
        path !== null &&
        path.length !== 0 &&
        allImages[path] !== null
      ) {
        setImages([]);
        setImages(allImages[path]);
      } else {
        setImages([]);
        setImages(allImages.all);
      }
    }
  }, [location, allImages]);

  return images === undefined || images.length === 0 ? (
    <div className="flex flex-row justify-center">
      <ReactLoading type="cylon" color="#FFF" height={667} width={375} />
    </div>
  ) : (
    <div className="m-10">
      <div className="masonry sm:masonry-sm md:masonry-md lg:masonry-lg">
        {images.map((image) => {
          return (
            <div className="pin-photo" key={image}>
              <img src={urlFor(image)} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MasonryView;
