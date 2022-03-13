import NavBar from "./components/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./containers/Home";
import PortfolioView from "./containers/PortfolioView";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/*" element={<PortfolioView />} />
      </Routes>
    </>
  );
}
