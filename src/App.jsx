import NavBar from "./components/NavBar";
import Parallax from "./components/Parallax";
import Portfolio from "./components/Portfolio";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <NavBar />
      <Parallax />
      <Portfolio />
    </>
  );
}
