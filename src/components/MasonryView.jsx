// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import manifest from "../assets/images/manifest.json";
import { useLocation } from "react-router-dom";
// import ImageContainer from "./ImageContainer";
import "../assets/css/imageContainer.css";

const MasonryView = () => {
  const location = useLocation();
  var path = location.pathname.split("/")[2];
  var images = [];
  if (
    path !== "all" &&
    path !== null &&
    path.length !== 0 &&
    manifest[path] !== null
  )
    images = manifest[path].images;
  else {
    for (var item in manifest) {
      var allImages = Array.prototype.slice.call(manifest[item].images);
      _shuffleArray(allImages);
      for (var image of allImages) {
        images.push(image);
      }
    }
  }

  return (
    <div className="m-10">
      {/* <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1600: 4, 1800: 5 }}
      >
        <Masonry gutter="20px">
          {images.map((image) => {
            return (
              <ImageContainer
                src={require(`../assets/images/${image}`)}
                key={image}
                alt=""
              />
            );
          })}
        </Masonry>
      </ResponsiveMasonry> */}

      <div className="masonry sm:masonry-sm md:masonry-md lg:masonry-lg">
        {images.map((image) => {
          return (
            <div className="pin-photo">
              <img
                src={require(`../assets/images/${image}`)}
                key={image}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MasonryView;

function _shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
