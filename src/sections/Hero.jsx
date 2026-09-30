import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, MapPin, Send } from "lucide-react";
import { profile } from "../data/portfolio";
import MagneticButton from "../components/MagneticButton";
import { scrollToId } from "../hooks/useScrollProgress";
import profileImage from "../assets/profileImage.png";

const details = [
  { label: "Focus", value: "Java & Spring Boot" },
  { label: "Building", value: "Backend + REST APIs" },
  { label: "Approach", value: "Full-stack engineering" },
];

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reducedMotion ? 0 : 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="home" className="editorial-hero" aria-labelledby="home-title">
      <span className="editorial-hero__backdrop" aria-hidden="true">DIPAK<br />MUNDHE</span>
      <div className="editorial-hero__topline" aria-hidden="true">
        <span>PORTFOLIO / 2026</span>
        <span>INDEPENDENT THINKING, CONSIDERED ENGINEERING</span>
      </div>

      <div className="editorial-hero__layout">
        <div className="editorial-hero__copy">
          <motion.p className="editorial-hero__eyebrow" {...reveal(0.08)}>
            <span className="editorial-hero__eyebrow-mark" />
            Software Engineer <span className="editorial-hero__slash">/</span> Java &amp; Backend
          </motion.p>

          <motion.h1 id="home-title" {...reveal(0.16)}>
            Hello,
            <span>I&apos;m <em>Dipak.</em></span>
          </motion.h1>

          <motion.p className="editorial-hero__intro" {...reveal(0.25)}>
            Building reliable backend systems and thoughtful web experiences, with a focus on clear engineering.
          </motion.p>

          <motion.div className="editorial-hero__actions" {...reveal(0.34)}>
            <MagneticButton
              href="#projects"
              onClick={(event) => {
                event.preventDefault();
                scrollToId("projects");
              }}
              className="editorial-hero__button editorial-hero__button--dark"
            >
              Explore selected work <ArrowUpRight size={16} aria-hidden="true" />
            </MagneticButton>
            <MagneticButton
              href={"mailto:" + profile.email}
              className="editorial-hero__button editorial-hero__button--light"
            >
              Let&apos;s talk <Send size={15} aria-hidden="true" />
            </MagneticButton>
          </motion.div>

          <motion.div className="editorial-hero__details" {...reveal(0.43)}>
            {details.map(({ label, value }) => (
              <div className="editorial-hero__detail" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </motion.div>

          <motion.div className="editorial-hero__footer" {...reveal(0.52)}>
            <span className="editorial-hero__location"><MapPin size={13} aria-hidden="true" /> India</span>
            <div className="editorial-hero__socials" aria-label="Social profiles">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="Dipak on GitHub"><Github size={16} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Dipak on LinkedIn"><Linkedin size={16} /></a>
              <a href={profile.resume} download className="editorial-hero__resume">Resume <ArrowDown size={13} aria-hidden="true" /></a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="editorial-hero__portrait"
          initial={reducedMotion ? false : { opacity: 0, y: 34, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: reducedMotion ? 0 : 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={profileImage} alt="Portrait of Dipak Mundhe" fetchPriority="high" />
          <span className="editorial-hero__portrait-index" aria-hidden="true">01 — ENGINEERING</span>
        </motion.div>
      </div>

      <button className="editorial-hero__scroll" onClick={() => scrollToId("about")} aria-label="Scroll to About section">
        <span>Scroll to explore</span><ArrowDown size={14} aria-hidden="true" />
      </button>
    </section>
  );
}
