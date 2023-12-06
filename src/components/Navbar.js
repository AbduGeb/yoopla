import React from "react";
import logo from "../styles/images/logo.png";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img src={logo} alt="Where's my logo?!" />
    </div>
  );
};

export default Navbar;
