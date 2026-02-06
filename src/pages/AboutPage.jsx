import React from "react";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaCalendarAlt,
  FaLightbulb,
  FaGraduationCap,
  FaBriefcase,
  FaAward,
} from "react-icons/fa";

const timeline = [
  {
    year: "2023 - Present",
    title: "MERN Stack Developer",
    subtitle: "Freelance & Personal Projects",
    icon: <FaBriefcase />,
  },
  {
    year: "2022 - 2023",
    title: "Hackathons & Competitions",
    subtitle: "Awards and rapid product sprints",
    icon: <FaAward />,
  },
  {
    year: "2020 - 2024",
    title: "Bachelor's in Engineering",
    subtitle: "Computer Science & Software Development",
    icon: <FaGraduationCap />,
  },
];

const AboutPage = () => {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
            About Me and Achievements
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            Passionate MERN stack developer creating scalable web applications
            and engaging user experiences. I stay active in hackathons and
            events to challenge myself, learn, and grow.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Highlights
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              I build thoughtfully designed, responsive products that connect{" "}
              <span className="font-semibold text-sky-500 dark:text-sky-300">
                clean visual systems
              </span>{" "}
              with{" "}
              <span className="font-semibold text-sky-500 dark:text-sky-300">
                robust engineering
              </span>
              . I enjoy shipping experiences that feel fast, modern, and human.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-center shadow-sm transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5">
                <FaTrophy size={28} className="mx-auto text-sky-500 dark:text-sky-300" />
                <h4 className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">
                  Hackathons
                </h4>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                  Participated in 5+ hackathons, earning awards in 2.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-center shadow-sm transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5">
                <FaCalendarAlt size={28} className="mx-auto text-sky-500 dark:text-sky-300" />
                <h4 className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">
                  Events
                </h4>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                  Active at tech conferences and workshops to stay ahead.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-center shadow-sm transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5">
                <FaLightbulb size={28} className="mx-auto text-sky-500 dark:text-sky-300" />
                <h4 className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">
                  Innovation
                </h4>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                  Built AI and automation projects to enhance user experience.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Focus Areas
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              I prioritize product outcomes, shipping velocity, and polished
              user experience. My workflow blends rapid prototyping with clean,
              maintainable engineering.
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Design Systems",
                  desc: "Reusable components and consistent UI patterns.",
                },
                {
                  title: "Performance",
                  desc: "Fast load times, optimized bundles, and smooth UX.",
                },
                {
                  title: "Scalable APIs",
                  desc: "Secure, documented, and developer-friendly endpoints.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white/70 p-4 text-left dark:border-white/10 dark:bg-white/5"
                >
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-4">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="grid gap-4 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:grid-cols-[56px_1fr]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/15 text-sky-500 dark:text-sky-300">
                {item.icon}
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500 dark:text-sky-300">
                  {item.year}
                </span>
                <h4 className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
