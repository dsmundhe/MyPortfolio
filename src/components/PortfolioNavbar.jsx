import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  BookOpen, BriefcaseBusiness, Code2, FolderKanban, Home, Layers3,
  Mail, MoreHorizontal, UserRound, X,
} from "lucide-react";
import { createElement, useEffect, useRef, useState } from "react";
import { scrollToId, useScrollProgress } from "../hooks/useScrollProgress";

// Keep this list as the single source of truth for the radial menu.
const navItems = [
  { label: "Home", id: "home", icon: Home },
  { label: "About", id: "about", icon: UserRound },
  { label: "Skills", id: "skills", icon: Code2 },
  { label: "Projects", id: "projects", icon: FolderKanban },
  { label: "Experience", id: "experience", icon: BriefcaseBusiness },
  { label: "Blog", id: "blog", icon: BookOpen },
  { label: "Services", id: "services", icon: Layers3 },
  { label: "Contact", id: "contact", icon: Mail },
];

const compactItems = navItems.filter(({ id }) => ["home", "projects", "blog"].includes(id));

export default function PortfolioNavbar({ onCommand }) {
  const { direction } = useScrollProgress();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const menuRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-45% 0px -45%" },
    );
    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const handlePointerDown = (event) => {
      if (!event.target.closest(".portfolio-nav, .portfolio-radial__stage")) setOpen(false);
    };
    const handleKeyDown = (event) => event.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const navigate = (id) => {
    setActive(id);
    setOpen(false);
    window.setTimeout(() => scrollToId(id), reducedMotion ? 0 : 110);
  };
  const spring = reducedMotion
    ? { duration: 0.01 }
    : { type: "spring", stiffness: 420, damping: 28, mass: 0.72 };

  return (
    <>
      <header className={`portfolio-nav ${direction === "down" && !open ? "portfolio-nav--hidden" : ""} ${open ? "portfolio-nav--open" : ""}`}>
        <button className="portfolio-nav__brand" onClick={() => navigate("home")} aria-label="Go to home">
          <span className="portfolio-nav__mark">D</span>
          <span>Dipak<span className="portfolio-nav__dot">.</span></span>
        </button>
        <nav className="portfolio-nav__compact" aria-label="Primary navigation">
          {compactItems.map(({ label, id }) => <button key={id} onClick={() => navigate(id)} className={active === id ? "is-active" : ""}>{label}</button>)}
        </nav>
        <div className="portfolio-nav__actions">
          {onCommand && <button className="portfolio-nav__command" onClick={onCommand} aria-label="Open command menu">⌘K</button>}
          <button className="portfolio-nav__more" onClick={() => setOpen((current) => !current)} aria-label={open ? "Close navigation menu" : "Open more navigation options"} aria-expanded={open}><MoreHorizontal size={19} strokeWidth={2.4} /></button>
        </div>
      </header>

      <AnimatePresence>
        {open && <motion.div className="portfolio-radial" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: reducedMotion ? 0.01 : 0.22 } }} aria-label="Expanded navigation">
          <motion.div className="portfolio-radial__backdrop" initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1, transition: { duration: reducedMotion ? 0.01 : 0.42, ease: [0.22, 1, 0.36, 1] } }} exit={{ opacity: 0, scale: 1.02, transition: { duration: reducedMotion ? 0.01 : 0.22 } }} />
          <div className="portfolio-radial__stage" ref={menuRef}>
            <motion.div className="portfolio-radial__halo" initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 1, filter: "blur(0px)", transition: spring }} exit={{ opacity: 0, filter: "blur(8px)", transition: { duration: reducedMotion ? 0.01 : 0.18 } }} />
            {navItems.map(({ label, id, icon: ItemIcon }, index) => {
              const angle = -90 + (360 / navItems.length) * index;
              return <motion.button key={id} className={`portfolio-radial__item ${active === id ? "is-active" : ""}`} style={{ "--angle": `${angle}deg` }} onClick={() => navigate(id)} initial={{ opacity: 0, filter: "blur(5px)" }} animate={{ opacity: 1, filter: "blur(0px)", transition: { ...spring, delay: reducedMotion ? 0 : 0.055 * index } }} exit={{ opacity: 0, filter: "blur(5px)", transition: { duration: reducedMotion ? 0.01 : 0.16, delay: reducedMotion ? 0 : (navItems.length - index) * 0.024 } }} whileTap={reducedMotion ? undefined : { opacity: 0.82 }} aria-label={`Go to ${label}`}><span className="portfolio-radial__icon">{createElement(ItemIcon, { size: 18, strokeWidth: 2 })}</span><span>{label}</span></motion.button>;
            })}
            <motion.button className="portfolio-radial__close" onClick={() => setOpen(false)} initial={{ opacity: 0, filter: "blur(5px)" }} animate={{ opacity: 1, filter: "blur(0px)", transition: { ...spring, delay: reducedMotion ? 0 : 0.12 } }} exit={{ opacity: 0, filter: "blur(5px)", transition: { duration: reducedMotion ? 0.01 : 0.15 } }} aria-label="Close navigation menu" aria-expanded={open}><X size={21} /></motion.button>
          </div>
        </motion.div>}
      </AnimatePresence>
    </>
  );
}
