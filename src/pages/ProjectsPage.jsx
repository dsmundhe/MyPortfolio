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
  image: "https://i.pinimg.com/736x/29/a9/98/29a998826a0e77d8c2a7469cec1bf6ea.jpg", // Update with your actual image path
  demo: "https://croppredictionycceiot.netlify.app/", // Replace with your actual live demo link
  repo: "https://github.com/dsmundhe/Crop_Prediction-.git", // Replace with your actual GitHub repo link
}

];

const categories = ["Show All", "Web App", "MERN", "E-commerce", "AI Chatbot", "EdTech" ,"AI/ML"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("Show All");

  const filteredProjects =
    activeCategory === "Show All"
      ? projects
      : projects.filter((proj) => proj.category === activeCategory);

  return (
    <section className="py-12 px-4 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">Works & Projects</h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          Explore a selection of my most meaningful work—each project showcases unique features,
          technologies, and design precision crafted with passion and purpose.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 text-sm font-medium transition ${
              activeCategory === category
                ? "text-green-700 border-b-2 border-green-700"
                : "text-gray-600 hover:text-green-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 group"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              {/* Hover Buttons (laptop) */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition sm:flex hidden">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium hover:bg-green-500 hover:text-white transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium hover:bg-green-500 hover:text-white transition"
                >
                  GitHub Repo
                </a>
              </div>
            </div>

            {/* Always visible buttons (mobile) */}
            <div className="sm:hidden flex justify-center gap-4 py-2 bg-white">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-green-700 transition"
              >
                Live Demo
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-black transition"
              >
                GitHub Repo
              </a>
            </div>

            <div className="p-4">
              <p className="text-sm text-gray-500">{project.category}</p>
              <h3 className="text-lg font-semibold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
