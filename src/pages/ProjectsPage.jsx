import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

const projects = [
  {
    id: 1,
    title: "HostelDekho",
    category: "MERN",
    image: "https://i.pinimg.com/736x/2e/b6/36/2eb636b818b91c20831f392d1249d6c8.jpg",
    demo: "https://hostel-dekho-frontend.vercel.app/",
    repo: "https://github.com/dsmundhe/Hostel-Dekho.git",
    description:
      "A hostel discovery platform with listings, rich filters, and seamless booking flows.",
    tech: [SiReact, SiNodedotjs, SiExpress, SiMongodb],
  },
  {
    id: 2,
    title: "ShopX (E-commerce App)",
    category: "E-commerce",
    image: "https://i.pinimg.com/736x/12/c4/e5/12c4e57a1e38ff65aa4137de5636ec93.jpg",
    demo: "https://shopx-frontend.vercel.app/",
    repo: "https://github.com/dsmundhe/ShopX-eCommerce-website.git",
    description:
      "Feature-rich ecommerce storefront with smart search, cart, and checkout.",
    tech: [SiReact, SiJavascript, SiTailwindcss, SiVite],
  },
  {
    id: 3,
    title: "PlanIT Taskmanager app",
    category: "Web App",
    image: "https://i.pinimg.com/736x/f8/98/bf/f898bfb34a80f0784e1417c86a096e13.jpg",
    demo: "https://planit-taskmanager.netlify.app/",
    repo: "https://github.com/dsmundhe/TaskManager.git",
    description:
      "Productive task manager featuring boards, status flows, and focus-first UX.",
    tech: [SiReact, SiJavascript, SiTailwindcss],
  },
  {
    id: 4,
    title: "GeminiTalk (Chatbot)",
    category: "AI Chatbot",
    image: "https://i.pinimg.com/736x/21/8d/0e/218d0e5e390c32d6ea866255c5d10734.jpg",
    demo: "https://chatai-dm.netlify.app/",
    repo: "https://github.com/dsmundhe",
    description:
      "Conversational AI chatbot with intuitive prompts and smooth response streaming.",
    tech: [SiReact, SiJavascript, SiVite],
  },
  {
    id: 5,
    title: "Role Based Access Controll",
    category: "Web App",
    image: "https://i.pinimg.com/736x/73/bf/00/73bf0050e44282c2da53678b742d3d37.jpg",
    demo: "https://role-based-access-control-vrn.netlify.app/",
    repo: "https://github.com/dsmundhe/Role-Based-Access-Control-Application.git",
    description:
      "Secure RBAC dashboard with granular permissions and role management flows.",
    tech: [SiReact, SiNodedotjs, SiExpress],
  },
  {
    id: 6,
    title: "Smart Education",
    category: "EdTech",
    image: "https://i.pinimg.com/736x/1c/8e/48/1c8e48bbd3073c0e41200554751a38cf.jpg",
    demo: "https://web-wizards-36.netlify.app/",
    repo: "https://github.com/dsmundhe/Web-wizards.git",
    description:
      "EdTech platform that simplifies learning journeys with interactive modules.",
    tech: [SiReact, SiJavascript, SiTailwindcss],
  },
  {
    id: 7,
    title: "Corp Prediction",
    category: "AI/ML",
    image: "https://i.pinimg.com/736x/29/a9/98/29a998826a0e77d8c2a7469cec1bf6ea.jpg",
    demo: "https://croppredictionycceiot.netlify.app/",
    repo: "https://github.com/dsmundhe/Crop_Prediction-.git",
    description:
      "AI-driven crop prediction dashboard with data insights and recommendations.",
    tech: [SiReact, SiJavascript, SiVite],
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
    <section
      id="projects"
      className="relative px-6 py-24 text-slate-900 dark:text-slate-100"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
            Works and Projects
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            Explore a selection of my most meaningful work. Each project
            showcases unique features, technologies, and design precision
            crafted with purpose.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeCategory === category
                  ? "border-sky-400 bg-sky-400/10 text-sky-500 dark:text-sky-300"
                  : "border-slate-200 text-slate-600 hover:border-sky-400 hover:text-sky-500 dark:border-white/10 dark:text-slate-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md shadow-slate-900/5 transition hover:-translate-y-2 hover:border-sky-400 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-none"
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 hidden items-center justify-center gap-3 bg-slate-950/70 opacity-0 transition group-hover:opacity-100 lg:flex">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400 px-4 py-2 text-xs font-semibold text-slate-900"
                  >
                    Live Demo <FaArrowUpRightFromSquare />
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white"
                  >
                    GitHub <FaGithub />
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-2 p-5">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tech.map((Icon, idx) => (
                    <span
                      key={idx}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-sky-500 dark:border-white/10 dark:bg-white/5 dark:text-sky-300"
                      aria-hidden="true"
                    >
                      <Icon />
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-3 lg:hidden">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400 px-4 py-2 text-xs font-semibold text-slate-900"
                  >
                    Live Demo <FaArrowUpRightFromSquare />
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 dark:border-white/10 dark:text-slate-200"
                  >
                    GitHub <FaGithub />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
