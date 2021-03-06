import { useLocation } from "react-router-dom";
import "../assets/css/imageContainer.css";
import React, { useEffect, useState } from "react";
import { urlFor } from "../client/client";
import ReactLoading from "react-loading";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import { InView } from "react-intersection-observer";

const MasonryView = ({ allImages }) => {
  const [images, setImages] = useState([]);
  const location = useLocation();
  let path = location.pathname.split("/")[2];

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
  }, [location, allImages, path]);

  return (
    <span className="flex justify-center items-center">
      {images === undefined || images.length === 0 ? (
        <div className="flex flex-row justify-center">
          <ReactLoading type="cylon" color="#FFF" height={667} width={375} />
        </div>
      ) : (
        <div className="masonry sm:masonry-sm md:masonry-md lg:masonry-lg">
          <LightGallery plugins={[lgZoom]} mode="lg-fade">
            {images.map((image) => {
              let imageUrL = urlFor(image);
              return (
                <a
                  data-lg-size="1406-1390"
                  className="pin-photo"
                  data-src={imageUrL}
                  key={image._key}
                  href={imageUrL}
                >
                  <InView
                    as="div"
                    triggerOnce={true}
                    onChange={(inView, entry) => {
                      console.log(entry.target.children);
                      if (inView) {
                        entry.target.children[0].classList.add("appear");
                      }
                      console.log("Inview:", inView);
                    }}
                  >
                    <img
                      className="img-responsive"
                      src={imageUrL.width(300).url()}
                      alt=""
                    />
                  </InView>
                </a>
              );
            })}
          </LightGallery>
        </div>
      )}
    </span>
  );
};

export default MasonryView;
