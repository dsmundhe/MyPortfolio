import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="glass-navbar dark-navbar">
      <div className="glass-navbar-container">
        <a href="#home" className="glass-navbar-logo dark-logo">
          DM's Portfolio
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

        <ul className={`glass-navbar-menu ${isOpen ? "open" : ""} dark-menu`}>
          <li>
            <a href="#home" onClick={handleLinkClick} className="dark-link">
              Home
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleLinkClick} className="dark-link">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleLinkClick} className="dark-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick} className="dark-link">
              Contact
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick} className="dark-link">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}