import "../css/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <span>
        <MenuIcon />
      </span>
      <h3 className="logo-name hidden sm:block">ABHI ASRAF</h3>
      <MenuButton />
    </div>
  );
};

const MenuButton = () => {
  return <button className="menuButton">Get in touch</button>;
};
const MenuIcon = () => {
  return (
    <div className="menuIcon">
      <div className="hamburger-bar"></div>
    </div>
  );
};

export default NavBar;
