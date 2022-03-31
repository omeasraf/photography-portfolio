import { Link } from "react-router-dom";
import "../assets/css/navbar.css";
import { elastic as Menu } from "react-burger-menu";

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
    <Menu styles={styles}>
      <a href="/">Home</a>
      <a href="/contact">Contact</a>
      <a href="/portfolio/all">Portfolio</a>
      <a href="/education">Education</a>
    </Menu>
  );
};

export default NavBar;

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "50px",
  },
  bmBurgerBars: {
    background: "rgb(255 255 255)",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    right: "inherit",
    zIndex: "1100",
    width: "300px",
    height: "100%",
    transition: "all 0.5s ease 0s",
    top: "0px",
    left: "0px",
  },
  bmMenu: {
    background: "rgb(31, 46, 42)",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
    height: "100%",
    boxSizing: "border-box",
    overflow: "auto",
  },
  bmMorphShape: {
    fill: "rgb(31, 46, 42)",
    left: "unset",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
    display: "flex",
    flexDirection: "column",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.61)",
    top: "0px",
  },
};
