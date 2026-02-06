import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <section id="home" className="section hero-section">
      <div className="section-inner hero-grid">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <p className="hero-eyebrow">
            <a
              href="https://my-words-dictionary-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hello
            </a>{" "}
            there
          </p>
          <h1 className="hero-title">
            I am <span>Dipak Mundhe</span>, a MERN stack developer building
            scalable web applications with modern UI and efficient backends.
          </h1>
          <p className="hero-text">
            I focus on crafting clean, production-ready experiences that balance
            performance, polish, and usability.
          </p>
          <div className="hero-actions">
            <a href="/resume.png" download className="btn btn-primary">
              Download Resume
            </a>
            <a href="#projects" className="btn btn-ghost">
              View Projects
            </a>
          </div>
          <div className="pill">
            <span className="pill-dot"></span>
            Available for Freelancing
          </div>
          <div className="hero-social" aria-label="Social links">
            <a
              href="https://www.linkedin.com/in/dipak-samadhan-mundhe-b2301425b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/dsmundhe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="social-link"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-link"
            >
              <FaFacebookF />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-card"
        >
          <div className="hero-avatar">
            <img
              src="/favicon.png"
              loading="lazy"
              alt="Profile portrait of Dipak Mundhe"
            />
          </div>
          <div>
            <h3>Dipak Mundhe</h3>
            <p className="hero-text">Aspiring Software Developer</p>
          </div>
          <div className="hero-meta">
            <span>MERN Stack Developer</span>
            <span>Open to collaborations</span>
            <span>Based in India</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePage;
