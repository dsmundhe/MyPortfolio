import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, Plus, X } from "lucide-react";
import { useMemo, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { projects } from "../data/portfolio";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const categories = ["All", ...new Set(projects.map((project) => project.category))];
  const filtered = useMemo(
    () => filter === "All" ? projects : projects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <section id="projects" className="section projects">
      <div className="shell">
        <div className="projects-head">
          <SectionHeading
            eyebrow="Selected work"
            title={<>Products with an<br /><em>intentional point of view.</em></>}
          >
            A collection of independent builds across web platforms, learning experiences, AI interfaces, and productivity tools.
          </SectionHeading>
          <div className="project-filters" role="group" aria-label="Filter projects by category">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={filter === category ? "active" : ""}
                aria-pressed={filter === category}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="project-rail">
          {filtered.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.04} className="project-card">
              <div className="project-info">
                <div className="project-card__meta">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.solution}</p>
                <div className="project-tags" aria-label={`Technologies used for ${project.title}`}>
                  {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-actions">
                  <button type="button" className="project-case-button" onClick={() => setSelected(project)}>
                    Case study <Plus size={15} aria-hidden="true" />
                  </button>
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live site <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                  <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}>
                    <Github size={18} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function ProjectDialog({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="project-dialog-overlay"
          onMouseDown={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="project-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            onMouseDown={(event) => event.stopPropagation()}
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12 }}
          >
            <button type="button" className="dialog-close" onClick={onClose} aria-label="Close case study"><X /></button>
            <span className="project-category">{project.category}</span>
            <h3 id="project-dialog-title">{project.title}</h3>
            <div className="case-study-grid">
              <div><span>Problem</span><p>{project.problem}</p></div>
              <div><span>Solution</span><p>{project.solution}</p></div>
              <div><span>Architecture</span><p>A responsive product interface structured around reusable React components and a clear user flow.</p></div>
              <div><span>Focus</span><p>Thoughtful interface details, practical feature decisions, and accessible interaction patterns.</p></div>
            </div>
            <div className="dialog-links">
              <a href={project.demo} target="_blank" rel="noreferrer">Visit live project <ArrowUpRight size={16} /></a>
              <a href={project.repo} target="_blank" rel="noreferrer">GitHub <Github size={16} /></a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
