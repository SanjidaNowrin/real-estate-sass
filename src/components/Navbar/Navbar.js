import React from "react";

const Navbar = () => {
  return (
    <div className="navbar container">
      <a href="#" className="logo">
        <span>High</span>Vision
      </a>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Packages</a>
        <a href="#">Settings</a>
      </div>
    </div>
  );
};

export default Navbar;
