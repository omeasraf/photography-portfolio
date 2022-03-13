import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import manifest from "../assets/images/manifest.json";
import { useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

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

  console.log(images);
  return (
    <div className="m-10">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1600: 4, 1800: 5 }}
      >
        <Masonry gutter="20px">
          {images.map((image) => {
            return (
              <div>
                <LazyLoadImage
                  data-aos="fade-down"
                  data-aos-easing="ease-in"
                  data-aos-delay="50"
                  data-aos-duration="300"
                  src={require(`../assets/images/${image}`)}
                  width="100%"
                />
              </div>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
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
