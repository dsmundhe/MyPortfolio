import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check, Download, Eye, Github, Linkedin, MapPin, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
  const [resumeOpen, setResumeOpen] = useState(false);
  const [downloadState, setDownloadState] = useState("idle");
  const downloadTimeoutRef = useRef(null);
  const resumeTriggerRef = useRef(null);
  const resumeViewRef = useRef(null);

  useEffect(() => {
    if (!resumeOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const resumeTrigger = resumeTriggerRef.current;
    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() => resumeViewRef.current?.focus());
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setResumeOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.clearTimeout(downloadTimeoutRef.current);
      document.body.style.overflow = previousOverflow;
      resumeTrigger?.focus();
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [resumeOpen]);
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
              <button
                ref={resumeTriggerRef}
                type="button"
                className="editorial-hero__resume"
                onClick={() => setResumeOpen(true)}
                aria-haspopup="dialog"
              >
                Resume <ArrowDown size={13} aria-hidden="true" />
              </button>
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
      <AnimatePresence>
        {resumeOpen && (
          <motion.div
            className="resume-dialog-overlay"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setResumeOpen(false);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: reducedMotion ? 0.01 : 0.18 } }}
          >
            <motion.section
              className="resume-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="resume-dialog-title"
              initial={reducedMotion ? false : { opacity: 0, y: 12, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.99 }}
              transition={{ duration: reducedMotion ? 0.01 : 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                className="resume-dialog__close"
                onClick={() => setResumeOpen(false)}
                aria-label="Close resume options"
              >
                <X size={18} aria-hidden="true" />
              </button>
              <p className="resume-dialog__eyebrow">Curriculum vitae</p>
              <h2 id="resume-dialog-title">Dipak Mundhe</h2>
              <p className="resume-dialog__copy">Choose how you’d like to access my resume.</p>
              <div className="resume-dialog__actions">
                <a
                  ref={resumeViewRef}
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setResumeOpen(false)}
                >
                  <Eye size={16} aria-hidden="true" /> View resume
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
                <a
                  href={profile.resume}
                  download="Dipak_Mundhe_Resume.pdf"
                  aria-disabled={downloadState !== "idle"}
                  aria-busy={downloadState === "preparing"}
                  onClick={(event) => {
                    if (downloadState !== "idle") {
                      event.preventDefault();
                      return;
                    }
                    setDownloadState("preparing");
                    downloadTimeoutRef.current = window.setTimeout(() => setDownloadState("started"), 900);
                  }}
                >
                  <Download size={16} aria-hidden="true" /> Download PDF
                  <ArrowDown size={15} aria-hidden="true" />
                </a>
              </div>
              <AnimatePresence mode="wait" initial={false}>
                {downloadState !== "idle" && (
                  <motion.p
                    key={downloadState}
                    className="resume-dialog__status"
                    role="status"
                    aria-live="polite"
                    initial={reducedMotion ? false : { opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -3 }}
                    transition={{ duration: reducedMotion ? 0.01 : 0.18 }}
                  >
                    {downloadState === "preparing" ? (
                      <>
                        <span className="resume-download__dots" aria-hidden="true"><i /><i /><i /></span>
                        Getting your resume ready…
                      </>
                    ) : (
                      <>
                        <Check size={14} aria-hidden="true" />
                        Your download has started.
                      </>
                    )}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}



