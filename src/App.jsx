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

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />

          <main>
            <HomePage />

            <MySkills />

            <ProjectsPage />

            <ContactPage />

            <AboutPage />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
