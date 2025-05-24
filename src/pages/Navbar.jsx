import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu on link click
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="glass-navbar">
      <div className="glass-navbar-container">
        <a href="#home" className="glass-navbar-logo">
          MyPortfolio
        </a>

        <div
          className={`glass-navbar-toggle ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && toggleMenu()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`glass-navbar-menu ${isOpen ? "open" : ""}`}>
          <li>
            <a href="#home" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleLinkClick}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleLinkClick}>
              Projects
            </a>
          </li>
           <li>
            <a href="#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick}>
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
