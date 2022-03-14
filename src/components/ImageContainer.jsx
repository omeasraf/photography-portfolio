// import React from "react";
// import useIntersectionObserver from "../hooks/interaction-observer";

// // https://frontend-digest.com/progressively-loading-images-in-react-107cb075417a
// const ImageContainer = (props) => {
//   const ref = React.useRef();
//   const [isVisible, setIsVisible] = React.useState(false);
//   useIntersectionObserver({
//     target: ref,
//     onIntersect: ([{ isIntersecting }], observerElement) => {
//       if (isIntersecting) {
//         setIsVisible(true);
//         observerElement.unobserve(ref.current);
//       }
//     },
//   });
//   return (
//     <div ref={ref}>
//       {isVisible && (
//         <img
//           // data-aos="fade-down"
//           // data-aos-easing="ease-in"
//           // data-aos-duration="300"
//           src={props.src}
//           alt={props.alt}
//           style={{ width: "100%", display: "block" }}
//         />
//       )}
//     </div>
//   );
// };
// export default ImageContainer;
