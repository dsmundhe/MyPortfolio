import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Command, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { scrollToId, useScrollProgress } from "../hooks/useScrollProgress";

const navItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export default function PortfolioNavbar({ onCommand }) {
  const { direction } = useScrollProgress();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const observed = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-38% 0px -48% 0px", threshold: [0, 0.1, 0.25, 0.5] },
    );

    const observeSections = () => {
      ["home", ...navItems.map(({ id }) => id)].forEach((id) => {
        const section = document.getElementById(id);
        if (section && !observed.has(section)) {
          observer.observe(section);
          observed.add(section);
        }
      });
    };

    observeSections();
    const mutationObserver = new MutationObserver(observeSections);
    mutationObserver.observe(document.querySelector("main") || document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const handlePointerDown = (event) => {
      if (!event.target.closest(".portfolio-nav, .portfolio-menu")) setOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
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

  const headerClass = [
    "portfolio-nav",
    active === "home" ? "portfolio-nav--home" : "",
    direction === "down" && !open ? "portfolio-nav--hidden" : "",
  ].filter(Boolean).join(" ");

  return (
    <>
      <header className={headerClass}>
        <button className="portfolio-nav__brand" onClick={() => navigate("home")} aria-label="Dipak Mundhe — home">
          <span className="portfolio-nav__mark">D</span>
          <span className="portfolio-nav__name">Dipak Mundhe<span className="portfolio-nav__dot">.</span></span>
        </button>

        <nav className="portfolio-nav__links" aria-label="Main navigation">
          {navItems.slice(0, 4).map(({ label, id }) => (
            <button
              type="button"
              key={id}
              onClick={() => navigate(id)}
              className={active === id ? "is-active" : ""}
              aria-current={active === id ? "location" : undefined}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="portfolio-nav__actions">
          {onCommand && (
            <button type="button" className="portfolio-nav__command" onClick={onCommand} aria-label="Open command palette">
              <Command size={14} aria-hidden="true" /><span>K</span>
            </button>
          )}
          <button type="button" className={`portfolio-nav__contact ${active === "contact" ? "is-active" : ""}`} onClick={() => navigate("contact")}>
            Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="portfolio-nav__toggle"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="portfolio-mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}><motion.span key={open ? "close" : "open"} className="portfolio-nav__toggle-icon" initial={reducedMotion ? false : { opacity: 0, rotate: -35, scale: 0.75 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 35, scale: 0.75 }} transition={{ duration: reducedMotion ? 0.01 : 0.16 }}>{open ? <X size={19} /> : <Menu size={19} />}</motion.span></AnimatePresence>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="portfolio-mobile-menu"
            className={`portfolio-menu ${active === "home" ? "portfolio-menu--home" : ""}`}
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -10, x: "-50%", scale: 0.98 }}
            animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
            exit={{ opacity: 0, y: -8, x: "-50%", scale: 0.985 }}
            transition={{ duration: reducedMotion ? 0.01 : 0.3, delay: reducedMotion ? 0 : 0.02, ease: [0.22, 1, 0.36, 1] }}
          >
            {navItems.map(({ label, id }, index) => (
              <motion.button
                type="button"
                key={id}
                onClick={() => navigate(id)}
                className={active === id ? "is-active" : ""}
                aria-current={active === id ? "location" : undefined}
                initial={reducedMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reducedMotion ? 0.01 : 0.22, delay: reducedMotion ? 0 : (index + 1) * 0.045, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="portfolio-menu__number">0{index + 1}</span>
                <span>{label}</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </motion.button>
            ))}
            {onCommand && (
              <button type="button" className="portfolio-menu__command" onClick={() => { setOpen(false); onCommand(); }}>
                <Command size={15} aria-hidden="true" /> Open command palette
              </button>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}




