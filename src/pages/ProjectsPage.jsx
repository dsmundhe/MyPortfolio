import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "HostelDekho",
    category: "MERN",
    image: "https://i.pinimg.com/736x/2e/b6/36/2eb636b818b91c20831f392d1249d6c8.jpg",
    demo: "https://hostel-dekho-frontend.vercel.app/",
    repo: "https://github.com/dsmundhe/Hostel-Dekho.git",
  },
  {
    id: 3,
    title: "ShopX (E-commerce App)",
    category: "E-commerce",
    image: "https://i.pinimg.com/736x/12/c4/e5/12c4e57a1e38ff65aa4137de5636ec93.jpg",
    demo: "https://shopx-frontend.vercel.app/",
    repo: "https://github.com/dsmundhe/ShopX-eCommerce-website.git",
  },
  {
    id: 5,
    title: "PlanIT Taskmanager app",
    category: "Web App",
    image: "https://i.pinimg.com/736x/f8/98/bf/f898bfb34a80f0784e1417c86a096e13.jpg",
    demo: "https://planit-taskmanager.netlify.app/",
    repo: "https://github.com/dsmundhe/TaskManager.git",
  },
  {
    id: 4,
    title: "GeminiTalk (Chatbot)",
    category: "AI Chatbot",
    image: "https://i.pinimg.com/736x/21/8d/0e/218d0e5e390c32d6ea866255c5d10734.jpg",
    demo: "https://chatai-dm.netlify.app/",
    repo: "https://github.com/dsmundhe",
  },
  {
    id: 4,
    title: "Role Based Access Controll",
    category: "Web App",
    image: "https://i.pinimg.com/736x/73/bf/00/73bf0050e44282c2da53678b742d3d37.jpg",
    demo: "https://role-based-access-control-vrn.netlify.app/",
    repo: "https://github.com/dsmundhe/Role-Based-Access-Control-Application.git",
  },
  {
    id: 5,
    title: "Smart Education",
    category: "EdTech",
    image: "https://i.pinimg.com/736x/1c/8e/48/1c8e48bbd3073c0e41200554751a38cf.jpg",
    demo: "https://web-wizards-36.netlify.app/",
    repo: "https://github.com/dsmundhe/Web-wizards.git",
  },
  {
    id: 6,
    title: "Corp Prediction",
    category: "AI/ML",
    image: "https://i.pinimg.com/736x/29/a9/98/29a998826a0e77d8c2a7469cec1bf6ea.jpg",
    demo: "https://croppredictionycceiot.netlify.app/",
    repo: "https://github.com/dsmundhe/Crop_Prediction-.git",
  },
];

const categories = [
  "Show All",
  "Web App",
  "MERN",
  "E-commerce",
  "AI Chatbot",
  "EdTech",
  "AI/ML",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("Show All");

  const filteredProjects =
    activeCategory === "Show All"
      ? projects
      : projects.filter((proj) => proj.category === activeCategory);

  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <div className="section-header">
          <h2>Works and Projects</h2>
          <p>
            Explore a selection of my most meaningful work. Each project
            showcases unique features, technologies, and design precision
            crafted with purpose.
          </p>
        </div>

        <div className="filter-row">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`filter-btn ${
                activeCategory === category ? "active" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-media">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>

              <div className="project-body">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
