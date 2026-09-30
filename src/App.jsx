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

function Loader() {
  return <div className="section-loader" role="status" aria-label="Loading portfolio sections"><span /><span /><span /></div>;
}

function LandingLoader() {
  return (
    <motion.div
      className="intro"
      role="status"
      aria-label="Loading portfolio"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.15, duration: 0.45 } }}
    >
      <div className="intro-lockup">
        <span className="intro-mark" aria-hidden="true">D</span>
        <div className="intro-wordmark">
          <strong>Dipak Mundhe</strong>
          <span>Software Engineer</span>
        </div>
      </div>
      <div className="intro-progress" aria-hidden="true"><span /></div>
      <p className="intro-caption" aria-hidden="true">PORTFOLIO / {new Date().getFullYear()}</p>
    </motion.div>
  );
}

export default function App() {
  const { progress } = useScrollProgress();
  const [loading, setLoading] = useState(true);
  const [command, setCommand] = useState(false);

  useSmoothScroll();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 650);
    const keys = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommand((open) => !open);
      }
      if (event.key === "Escape") setCommand(false);
    };

    window.addEventListener("keydown", keys);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", keys);
    };
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <LandingLoader />}</AnimatePresence>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="noise" />
      <Navbar onCommand={() => setCommand(true)} />
      <main>
        <Hero />
        <Suspense fallback={<Loader />}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <CommandPalette open={command} onClose={() => setCommand(false)} />
    </>
  );
}

