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
  const filtered = useMemo(() => filter === "All" ? projects : projects.filter((project) => project.category === filter), [filter]);

  return <section id="projects" className="section projects w-full overflow-x-clip">
    <div className="shell min-w-0">
      <div className="projects-head min-w-0">
        <SectionHeading eyebrow="Selected work" title={<>Products with an<br/><em>intentional point of view.</em></>}>
          A collection of independent builds across web platforms, learning experiences, AI interfaces, and productivity tools.
        </SectionHeading>
        <div className="project-filters" aria-label="Project filters">
          {categories.map((category) => <button key={category} className={filter === category ? "active" : ""} onClick={() => setFilter(category)}>{category}</button>)}
        </div>
      </div>
      <div className="project-rail min-w-0">
        {filtered.map((project, index) => <Reveal key={project.title} delay={index * .04} className="project-card w-full min-w-0">
          <div className="project-info min-w-0">
            <h3>{project.title}</h3>
            <p>{project.solution}</p>
            <div className="project-tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <div className="project-actions">
              <button className="project-case-button" onClick={() => setSelected(project)}>Case study <Plus size={15}/></button>
              <a href={project.demo} target="_blank" rel="noreferrer">Live site <ArrowUpRight size={16}/></a>
              <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}><Github size={18}/></a>
            </div>
          </div>
        </Reveal>)}
      </div>
    </div>
    <ProjectDialog project={selected} onClose={() => setSelected(null)}/>
  </section>;
}

function ProjectDialog({ project, onClose }) {
  return <AnimatePresence>{project && <motion.div className="project-dialog-overlay" onMouseDown={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <motion.div className="project-dialog" onMouseDown={(event) => event.stopPropagation()} initial={{ opacity: 0, y: 22, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12 }}>
      <button className="dialog-close" onClick={onClose} aria-label="Close case study"><X/></button>
      <span className="project-category">{project.category}</span><h3>{project.title}</h3>
      <div className="case-study-grid"><div><span>Problem</span><p>{project.problem}</p></div><div><span>Solution</span><p>{project.solution}</p></div><div><span>Architecture</span><p>A responsive product interface structured around reusable React components and a clear user flow.</p></div><div><span>Focus</span><p>Thoughtful interface details, practical feature decisions, and accessible interaction patterns.</p></div></div>
      <div className="dialog-links"><a href={project.demo} target="_blank" rel="noreferrer">Visit live project <ArrowUpRight size={16}/></a><a href={project.repo} target="_blank" rel="noreferrer">GitHub <Github size={16}/></a></div>
    </motion.div>
  </motion.div>}</AnimatePresence>;
}
