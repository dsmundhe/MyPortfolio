import React from "react";

const Footer = () => {
  return (
    <footer className="section">
      <div className="section-inner">
        <div className="footer-inner">
          <div>
            <h2 className="footer-title">MyPortfolio</h2>
            <p className="hero-text">
              Crafting beautiful, user-centric digital experiences with
              precision and passion.
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <div className="hero-meta">
              <a href="#home">Home</a>
              <a href="#projects">Projects</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <h3>Connect</h3>
            <div className="hero-meta">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="footer-note">
          (c) {new Date().getFullYear()} Dipak Mundhe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
