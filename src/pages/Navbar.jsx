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
    <nav className="glass-navbar dark-navbar bg-[#0d0d0d]/70 backdrop-blur-md shadow-lg border-b border-gray-800">
      <div className="glass-navbar-container">
        <a
          href="#home"
          className="glass-navbar-logo dark-logo text-gray-100 hover:text-green-400 transition"
        >
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
          <span className="bg-gray-300"></span>
          <span className="bg-gray-300"></span>
          <span className="bg-gray-300"></span>
        </div>

        <ul
          className={`glass-navbar-menu ${isOpen ? "open" : ""} dark-menu bg-[#111]/90 border border-gray-800 shadow-xl`}
        >
          <li>
            <a
              href="#home"
              onClick={handleLinkClick}
              className="dark-link text-gray-200 hover:text-green-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={handleLinkClick}
              className="dark-link text-gray-200 hover:text-green-400"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={handleLinkClick}
              className="dark-link text-gray-200 hover:text-green-400"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="dark-link text-gray-200 hover:text-green-400"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={handleLinkClick}
              className="dark-link text-gray-200 hover:text-green-400"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
