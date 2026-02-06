// App.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectsPage from "./pages/ProjectsPage";
import Navbar from "./pages/Navbar";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import MySkills from "./pages/MySkills";
import Footer from "./pages/Footer";
import Loader from "./pages/Loader";
import AboutPage from "./pages/AboutPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-sky-300/40 blur-3xl dark:bg-sky-400/20"></div>
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-fuchsia-300/30 blur-3xl dark:bg-fuchsia-400/20"></div>
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-300/25 blur-3xl dark:bg-cyan-400/10"></div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />

          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <HomePage />

            <MySkills />

            <ProjectsPage />

            <ContactPage />

            <AboutPage />
          </motion.main>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
