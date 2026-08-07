import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { navigation, profile } from "../data/portfolio";
import { scrollToId } from "../hooks/useScrollProgress";

export default function Footer() {
  return <footer className="footer"><div className="footer-glow"/><div className="footer-inner"><p className="eyebrow"><span/>Have a project in mind?</p><a className="footer-email" href={`mailto:${profile.email}`}>Let&apos;s make it <em>real.</em><ArrowUpRight /></a><div className="footer-bottom"><div><button className="brand footer-brand" onClick={() => scrollToId("home")}><span className="brand-mark">D</span>Dipak<span className="brand-dot">.</span></button><p>© {new Date().getFullYear()} Dipak Mundhe. Built with intent.</p></div><div className="footer-links">{navigation.slice(1, 5).map(([label, id]) => <button key={id} onClick={() => scrollToId(id)}>{label}</button>)}</div><div className="social-links"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a></div></div></div></footer>;
}
