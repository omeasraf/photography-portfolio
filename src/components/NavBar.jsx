import { Link } from "react-router-dom";
import "../assets/css/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <span className="w-[150px]">
        <MenuIcon />
      </span>
      <Link to="/">
        <h3 className="logo-name hidden sm:block w-[150px]">ABHI ASRAF</h3>
      </Link>
      <MenuButton />
    </div>
  );
};

const MenuButton = () => {
  return (
    <Link to="/contact" className="menuButton w-[150px]">
      Get in touch
    </Link>
  );
};
const MenuIcon = () => {
  return (
    <div className="menuIcon">
      <div className="hamburger-bar"></div>
    </div>
  );
};

export default NavBar;
