import { ChevronRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="shell">
        <SectionHeading
          eyebrow="Capabilities"
          title={<>A toolkit in<br /><em>constant motion.</em></>}
        >
          A versatile foundation across frontend, backend, Java engineering, and analytics — selected to help ideas become useful software.
        </SectionHeading>

        <div className="skills-layout">
          <div className="skill-groups">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <Reveal key={group.label} delay={index * 0.06} className="skill-group">
                  <div className="skill-group-title">
                    <span><Icon size={18} aria-hidden="true" /></span>
                    <h3>{group.label}</h3>
                    <ChevronRight size={15} aria-hidden="true" />
                  </div>
                  <ul className="skill-list">
                    {group.skills.map((skill) => <li className="skill-pill" key={skill}>{skill}</li>)}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
