import React from "react";
import { Link } from "react-router-dom";
import "../index.css"; // Import global styles

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo added here */}
      <div className="logo-container">
        <img
          src="/images/ecobox-with-background.png"
          alt="EcoBox Logo"
          className="logo"
        />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/products">Products</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/faq">FAQ</Link>
      </div>
    </nav>
  );
};

export default Navbar;
