// App.jsx
import React, { useState, useEffect } from "react";
import ProjectsPage from "./pages/ProjectsPage";
import Navbar from "./pages/Navbar";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import MySkills from "./pages/MySkills";
import Footer from "./pages/Footer";
import Loader from "./pages/Loader";
import AboutPage from "./pages/AboutPage";
import { motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  // Animation settings
  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />

          <motion.div
            id="home"
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <HomePage />
          </motion.div>

          <motion.div
            id="skills"
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <MySkills />
          </motion.div>

          <motion.div
            id="projects"
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProjectsPage />
          </motion.div>

          <motion.div
            id="contact"
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ContactPage />
          </motion.div>

          <AboutPage />

          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Footer />
          </motion.div>
        </>
      )}
    </div>
  );
}

export default App;
