import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, MapPin, Send, Sparkles } from "lucide-react";
import { profile } from "../data/portfolio";
import MagneticButton from "../components/MagneticButton";
import { scrollToId } from "../hooks/useScrollProgress";

const float = (delay = 0) => ({ y: [0, -10, 0], rotate: [0, 2, 0], transition: { duration: 5, delay, repeat: Infinity, ease: "easeInOut" } });

export default function Hero() {
  const visual = useRef(null);
  useLayoutEffect(() => { const context = gsap.context(() => { gsap.to(".profile-halo", { scale: 1.1, opacity: .72, duration: 2.6, repeat: -1, yoyo: true, ease: "sine.inOut" }); }, visual); return () => context.revert(); }, []);
  return <section id="home" className="hero w-full overflow-x-clip"><div className="hero-orb hero-orb--one"/><div className="hero-orb hero-orb--two"/><div className="hero-grid"/><div className="hero-inner min-w-0">
    <motion.div className="hero-copy min-w-0" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: .1 } } }}>
      <motion.div variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} className="availability"><span/>Open to new opportunities <Sparkles size={13}/></motion.div>
      <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="hero-kicker">MERN Stack Developer <i/> SAP Analytics Cloud Intern</motion.p>
      <motion.h1 variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } }}>I build digital<br/>products with <span>clarity</span><br/>and <em>character.</em></motion.h1>
      <motion.p variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }} className="hero-description">I&apos;m <strong>Dipak Mundhe</strong> — a developer bringing together expressive interfaces, dependable full-stack foundations, and a genuine curiosity for what makes products useful.</motion.p>
      <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} className="hero-actions"><MagneticButton href="#projects" onClick={(e) => { e.preventDefault(); scrollToId("projects"); }} className="button button--primary">Explore selected work <ArrowUpRight size={17}/></MagneticButton><MagneticButton href={profile.resume} download className="button button--ghost">Resume <ArrowDownRight size={17}/></MagneticButton></motion.div>
      <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="hero-meta"><div><span>Currently</span><b>Cognizant · SAP SAC Intern</b></div><div><span>Based in</span><b><MapPin size={13}/> India</b></div><div className="hero-social"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href={`mailto:${profile.email}`} aria-label="Send email"><Send size={16}/></a></div></motion.div>
    </motion.div>
    <div ref={visual} className="hero-visual" aria-label="Profile presentation"><motion.div className="orbit orbit--large" animate={{ rotate: 360 }} transition={{ duration: 34, repeat: Infinity, ease: "linear" }}/><motion.div className="orbit orbit--small" animate={{ rotate: -360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }}/><div className="profile-halo"/><motion.div className="profile-frame" initial={{ opacity: 0, scale: .9, rotate: -6 }} animate={{ opacity: 1, scale: 1, rotate: -3 }} transition={{ duration: .9, delay: .25, ease: [0.16, 1, .3, 1] }}><img src="/favicon.png" alt="Dipak Mundhe"/><div className="profile-sheen"/></motion.div><motion.div className="floating-card card--stack" animate={float(.3)}><span className="tiny-label">BUILDING WITH</span><div><b>React</b><b>Node</b><b>Java</b></div></motion.div><motion.div className="floating-card card--role" animate={float(1)}><span className="live-dot"/><div><small>Current role</small><b>SAP Analytics<br/>Cloud Intern</b></div></motion.div><motion.div className="floating-card card--status" animate={float(1.8)}><span>03</span><div><small>Focus areas</small><b>UI · APIs · Data</b></div></motion.div></div>
  </div><button className="hero-scroll" onClick={() => scrollToId("about")}><span>Scroll to discover</span><i/></button></section>;
}
