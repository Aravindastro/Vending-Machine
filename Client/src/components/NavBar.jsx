// src/components/Navbar.jsx
import React from "react";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">Automated Drug Dispenser</div>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
