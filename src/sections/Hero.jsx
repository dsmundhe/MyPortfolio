import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";
import { profile } from "../data/portfolio";
import MagneticButton from "../components/MagneticButton";
import { scrollToId } from "../hooks/useScrollProgress";

const float = (delay = 0) => ({
  y: [0, -10, 0],
  rotate: [0, 2, 0],
  transition: { duration: 5, delay, repeat: Infinity, ease: "easeInOut" },
});

const codeSamples = [
  { file: "Developer.java", language: "JAVA", code: `public final class Developer {
  private final String purpose = "build with clarity";

  public String create() {
    return "ideas into useful systems";
  }
}` },
  { file: "impact.sql", language: "SQL", code: `SELECT developer, COUNT(project) AS impact
FROM meaningful_work
WHERE quality = 'intentional'
GROUP BY developer
ORDER BY impact DESC;` },
  { file: "mindset.js", language: "JS", code: `const developer = {
  mindset: "curious",
  ships: ["interfaces", "APIs"],
  create() {
    return "useful systems";
  }
};` },
];

function highlightCode(code, language) {
  const tokenPattern = language === "SQL"
    ? /(SELECT|FROM|WHERE|GROUP|BY|ORDER|DESC|AS|COUNT)\b|('[^'\n]*'|"[^"\n]*")|([A-Za-z_$][\w$]*(?=\s*\())|(\b\d+\b)/gi
    : language === "JS"
      ? /(const|let|var|return|new|function|if|else)\b|("[^"\n]*")|([A-Za-z_$][\w$]*(?=\s*\())|(\b\d+\b)/g
      : /(public|private|protected|final|class|return|new|static|void|if|else)\b|(\bString\b)|("[^"\n]*")|([A-Za-z_$][\w$]*(?=\s*\())|(\b\d+\b)/g;
  const parts = [];
  let cursor = 0;
  let match;
  while ((match = tokenPattern.exec(code))) {
    if (match.index > cursor) parts.push(code.slice(cursor, match.index));
    const className = language === "JAVA"
      ? match[1] ? "java-keyword" : match[2] ? "java-type" : match[3] ? "java-string" : match[4] ? "java-method" : "java-number"
      : match[1] ? "java-keyword" : match[2] ? "java-string" : match[3] ? "java-method" : "java-number";
    parts.push(<span className={className} key={`${match.index}-${match[0]}`}>{match[0]}</span>);
    cursor = tokenPattern.lastIndex;
  }
  if (cursor < code.length) parts.push(code.slice(cursor));
  return parts;
}

export default function Hero() {
  const visual = useRef(null);
  const [typedCode, setTypedCode] = useState("");
  const [sampleIndex, setSampleIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const activeSample = codeSamples[sampleIndex];
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.to(".profile-halo", {
        scale: 1.1,
        opacity: 0.72,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, visual);
    return () => context.revert();
  }, []);
  useEffect(() => {
    if (reducedMotion) {
      setTypedCode(activeSample.code);
      return undefined;
    }
    let position = 0;
    let deleting = false;
    let timer;
    const tick = () => {
      if (!deleting) {
        position += 1;
        setTypedCode(activeSample.code.slice(0, position));
        if (position === activeSample.code.length) {
          timer = window.setTimeout(() => setSampleIndex((current) => (current + 1) % codeSamples.length), 2600);
          return;
        }
      }
      timer = window.setTimeout(tick, 58);
    };
    tick();
    return () => window.clearTimeout(timer);
  }, [activeSample, reducedMotion]);
  return (
    <section id="home" className="hero w-full overflow-x-clip">
      <div className="hero-orb hero-orb--one" />
      <div className="hero-orb hero-orb--two" />
      <div className="hero-grid" />
      <div className="hero-inner min-w-0">
        <motion.div
          className="hero-copy min-w-0"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            className="availability"
          >
            <span />
            Open to new opportunities <Sparkles size={13} />
          </motion.div>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="hero-kicker"
          >
            MERN Stack Developer <i /> SAP Analytics Cloud Intern
          </motion.p>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            I build digital
            <br />
            products with <span>clarity</span>
            <br />
            and <em>character.</em>
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: { opacity: 1, y: 0 },
            }}
            className="hero-description"
          >
            I&apos;m <strong>Dipak Mundhe</strong> — a developer bringing
            together expressive interfaces, dependable full-stack foundations,
            and a genuine curiosity for what makes products useful.
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            className="hero-actions"
          >
            <MagneticButton
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("projects");
              }}
              className="button button--primary"
            >
              Explore selected work <ArrowUpRight size={17} />
            </MagneticButton>
            <MagneticButton
              href={profile.resume}
              download
              className="button button--ghost"
            >
              Resume <ArrowDownRight size={17} />
            </MagneticButton>
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="hero-meta"
          >
            <div>
              <span>Currently</span>
              <b>Cognizant · SAP SAC Intern</b>
            </div>
            <div>
              <span>Based in</span>
              <b>
                <MapPin size={13} /> India
              </b>
            </div>
            <div className="hero-social">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={17} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Send email">
                <Send size={16} />
              </a>
            </div>
          </motion.div>
        </motion.div>
        <div
          ref={visual}
          className="hero-visual"
          aria-label="Developer workspace presentation"
        >
          <motion.div
            className="hero-console"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-console__top">
              <span>
                <i /> dipak.dev / workspace
              </span>
              <b>BUILDING</b>
            </div>
            <div className="hero-console__body">
              <span className="hero-console__label">
                PRODUCT ENGINEERING / 2026
              </span>
              <h2>
                Ideas into
                <br />
                <em>useful systems.</em>
              </h2>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={activeSample.file} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: .38, ease: "easeOut" }}>
                <div className="hero-console__file"><span>{activeSample.file}</span><b>{activeSample.language}</b></div>
                <pre className="hero-console__code" aria-label={`Animated ${activeSample.language} code`}><code>{highlightCode(typedCode, activeSample.language)}</code><span className="hero-console__caret" aria-hidden="true">▌</span></pre>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="hero-console__bottom">
              <span>03 focus areas</span>
              <span>
                UI <i /> APIs <i /> DATA
              </span>
            </div>
          </motion.div>
          <motion.div
            className="hero-console__float hero-console__float--one"
            animate={float(0.4)}
          >
            <span className="live-dot" />
            <div>
              <small>Currently exploring</small>
              <b>Interfaces that feel clear</b>
            </div>
          </motion.div>
          <motion.div
            className="hero-console__float hero-console__float--two"
            animate={float(1.2)}
          >
            <span>01</span>
            <div>
              <small>Availability</small>
              <b>Open to collaborate</b>
            </div>
          </motion.div>
        </div>
      </div>
      <button className="hero-scroll" onClick={() => scrollToId("about")}>
        <span>Scroll to discover</span>
        <i />
      </button>
    </section>
  );
}
