import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiAmazon,
  SiVercel,
  SiPostman,
  SiLinux,
  SiMysql,
  SiFigma,
} from "react-icons/si";
import { FaJava, FaTools } from "react-icons/fa";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

const skills = [
  {
    category: "Frontend",
    items: [
      { label: "HTML", icon: <SiHtml5 /> },
      { label: "CSS", icon: <SiCss3 /> },
      { label: "JavaScript", icon: <SiJavascript /> },
      { label: "React.js", icon: <SiReact /> },
      { label: "Redux", icon: <SiRedux /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { label: "Node.js", icon: <SiNodedotjs /> },
      { label: "Express.js", icon: <SiExpress /> },
      { label: "MongoDB", icon: <SiMongodb /> },
      { label: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    category: "Programming",
    items: [
      { label: "JavaScript", icon: <SiJavascript /> },
      { label: "TypeScript", icon: <SiTypescript /> },
      { label: "Java", icon: <FaJava /> },
    ],
  },
  {
    category: "Database",
    items: [
      { label: "MongoDB", icon: <SiMongodb /> },
      { label: "SQL", icon: <SiMysql /> },
    ],
  },
  {
    category: "Cloud Computing and Devops",
    items: [
      { label: "AWS", icon: <SiAmazon /> },
      { label: "Git", icon: <SiGit /> },
      { label: "GitHub", icon: <SiGithub /> },
      { label: "Linux", icon: <SiLinux /> },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { label: "Postman", icon: <SiPostman /> },
      { label: "Vercel", icon: <SiVercel /> },
      { label: "Figma", icon: <SiFigma /> },
      { label: "Tooling", icon: <FaTools /> },
    ],
  },
];

const MySkills = () => {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
            My Skills
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            Technologies and tools I have mastered throughout my journey. I am
            always expanding this toolkit with curiosity and discipline.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {techLogos.map((logo) => (
            <a
              key={logo.title}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-sky-400 hover:text-sky-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            >
              {logo.node} {logo.title}
            </a>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-400 dark:border-white/10 dark:bg-white/5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <h3 className="text-lg font-semibold text-sky-500 dark:text-sky-300">
                {skillCategory.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skillCategory.items.map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-500 dark:text-sky-300"
                  >
                    <span className="text-sm">{item.icon}</span>
                    {item.label}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
