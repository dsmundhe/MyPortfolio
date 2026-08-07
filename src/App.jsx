import { lazy, Suspense, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CommandPalette from "./components/CommandPalette";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import { useScrollProgress } from "./hooks/useScrollProgress";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import Hero from "./sections/Hero";

const About = lazy(() => import("./sections/About"));
const Skills = lazy(() => import("./sections/Skills"));
const Projects = lazy(() => import("./sections/Projects"));
const Experience = lazy(() => import("./sections/Experience"));
const Contact = lazy(() => import("./sections/Contact"));

function Loader() { return <div className="section-loader"><span/><span/><span/></div>; }

export default function App() {
  const { progress } = useScrollProgress(); const [loading, setLoading] = useState(true); const [command, setCommand] = useState(false);
  useSmoothScroll();
  useEffect(() => { const timer = setTimeout(() => setLoading(false), 650); const keys = (event) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setCommand((open) => !open); } if (event.key === "Escape") setCommand(false); }; window.addEventListener("keydown", keys); return () => { clearTimeout(timer); window.removeEventListener("keydown", keys); }; }, []);
  return <><AnimatePresence>{loading && <motion.div className="intro" initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { delay: .15, duration: .45 } }}><span className="intro-mark">D</span><div><i/><i/><i/></div></motion.div>}</AnimatePresence><div className="scroll-progress" style={{ transform: `scaleX(${progress})` }}/><div className="noise"/><Navbar onCommand={() => setCommand(true)}/><main><Hero/><Suspense fallback={<Loader/>}><About/><Skills/><Projects/><Experience/><Contact/></Suspense></main><Footer/><CommandPalette open={command} onClose={() => setCommand(false)}/></>;
}
