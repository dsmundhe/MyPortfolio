import React from "react";
import CircularGallery from "./CircularGallery/CircularGallery";
import { FaTrophy, FaCalendarAlt, FaLightbulb } from "react-icons/fa";

const AboutPage = () => {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <div className="section-header">
          <h2>About Me and Achievements</h2>
          <p>
            Passionate MERN stack developer creating scalable web applications
            and engaging user experiences. I stay active in hackathons and
            events to challenge myself, learn, and grow.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <h3>Highlights</h3>
            <p className="hero-text">
              I build thoughtfully designed, responsive products that connect
              clean visual systems with robust engineering. I enjoy shipping
              experiences that feel fast, modern, and human.
            </p>
            <div className="stats-grid">
              <div className="stat-card">
                <FaTrophy size={28} />
                <h4>Hackathons</h4>
                <p className="hero-text">
                  Participated in 5+ hackathons, earning awards in 2.
                </p>
              </div>
              <div className="stat-card">
                <FaCalendarAlt size={28} />
                <h4>Events</h4>
                <p className="hero-text">
                  Active at tech conferences and workshops to stay ahead.
                </p>
              </div>
              <div className="stat-card">
                <FaLightbulb size={28} />
                <h4>Innovation</h4>
                <p className="hero-text">
                  Built AI and automation projects to enhance user experience.
                </p>
              </div>
            </div>
          </div>

          <div className="about-card">
            <h3>Gallery</h3>
            <div style={{ height: "520px", position: "relative" }}>
              <CircularGallery
                bend={3}
                textColor="var(--text)"
                borderRadius={0.05}
                scrollEase={0.02}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
