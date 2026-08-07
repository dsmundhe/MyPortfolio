import { AnimatePresence, motion } from "framer-motion";
import { Command, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, profile } from "../data/portfolio";
import { scrollToId, useScrollProgress } from "../hooks/useScrollProgress";

export default function Navbar({ onCommand }) {
  const { direction } = useScrollProgress();
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver((items) => items.forEach((item) => item.isIntersecting && setActive(item.target.id)), { rootMargin: "-45% 0px -45%" });
    navigation.forEach(([, id]) => document.getElementById(id) && observer.observe(document.getElementById(id)));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menu]);
  const navigate = (id) => { setMenu(false); scrollToId(id); };
  return <>
    <header className={`site-nav ${direction === "down" && !menu ? "site-nav--hidden" : ""}`}>
      <button className="brand" onClick={() => navigate("home")} aria-label="Go to home"><span className="brand-mark">D</span><span>Dipak<span className="brand-dot">.</span></span></button>
      <nav className="desktop-nav" aria-label="Primary navigation">{navigation.slice(0, 5).map(([label, id]) => <button key={id} onClick={() => navigate(id)} className={active === id ? "is-active" : ""}>{label}</button>)}</nav>
      <div className="nav-actions"><button onClick={onCommand} className="command-trigger" aria-label="Open command menu"><Command size={15} /><span>Ctrl K</span></button><a className="nav-contact" href={`mailto:${profile.email}`}>Let&apos;s talk</a><button className="menu-button" onClick={() => setMenu(true)} aria-label="Open menu"><Menu /></button></div>
    </header>
    <AnimatePresence>{menu && <motion.div className="mobile-menu" initial={{ opacity: 0, x: "-100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "-100%" }} transition={{ duration: .45, ease: [0.76, 0, 0.24, 1] }}>
      <div className="mobile-menu-top"><span className="brand"><span className="brand-mark">D</span>Dipak<span className="brand-dot">.</span></span><button className="menu-button" onClick={() => setMenu(false)} aria-label="Close menu"><X /></button></div>
      <div className="mobile-links">{navigation.map(([label, id], index) => <motion.button key={id} onClick={() => navigate(id)} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12 + index * .06 }}>{label}<span>0{index + 1}</span></motion.button>)}</div>
      <p>Available for thoughtful teams, ambitious product work, and meaningful problems.</p>
    </motion.div>}</AnimatePresence>
  </>;
}
