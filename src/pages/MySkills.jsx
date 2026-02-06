import React from "react";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Redux.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "JWT Token", "MongoDB"],
  },
  {
    category: "Programming",
    items: ["C", "Java", "JavaScript"],
  },
  {
    category: "Database",
    items: ["MongoDB", "SQL"],
  },
  {
    category: "Cloud Computing and Devops",
    items: ["AWS", "Git", "GitHub", "Linux Basics"],
  },
  {
    category: "Tools & Others",
    items: ["VS Code", "Netlify", "Postman", "Vercel", "Render"],
  },
];

const MySkills = () => {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <div className="section-header">
          <h2>My Skills</h2>
          <p>
            Technologies and tools I have mastered throughout my journey. I am
            always expanding this toolkit with curiosity and discipline.
          </p>
        </div>

        <div className="tools-strip">
          {techLogos.map((logo) => (
            <a
              key={logo.title}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="tool-pill"
            >
              {logo.node} {logo.title}
            </a>
          ))}
        </div>

        <div className="skills-grid">
          {skills.map((skillCategory, index) => (
            <div key={index} className="skill-card">
              <h3>{skillCategory.category}</h3>
              <div className="skill-list">
                {skillCategory.items.map((item, i) => (
                  <span key={i} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
