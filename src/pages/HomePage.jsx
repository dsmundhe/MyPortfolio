import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
  FaJava,
  FaArrowUpRightFromSquare,
  FaLocationDot,
  FaBriefcase,
} from "react-icons/fa6";
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-24 pt-20 lg:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-sky-300/35 blur-3xl dark:bg-sky-400/20"></div>
        <div className="absolute right-10 top-0 h-80 w-80 rounded-full bg-fuchsia-300/30 blur-3xl dark:bg-fuchsia-400/20"></div>
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <div className="inline-flex max-w-[90vw] flex-nowrap items-center gap-2 self-start overflow-hidden rounded-full border border-sky-400/40 bg-gradient-to-r from-sky-400/15 to-fuchsia-400/10 px-3 py-2 text-[10px] font-semibold uppercase leading-4 tracking-[0.1em] text-sky-500 shadow-[0_0_20px_rgba(56,189,248,0.25)] dark:text-sky-300 sm:max-w-none sm:gap-3 sm:px-4 sm:text-xs sm:tracking-[0.12em]">
            <motion.span
              className="h-2 w-2 min-h-[0.5rem] min-w-[0.5rem] rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]"
              animate={{ scale: [0.75, 1.2, 0.75] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="truncate whitespace-nowrap">Live • Fresher MERN Developer • Open to Opportunities</span>
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Building{" "}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
              premium web experiences
            </span>{" "}
            that ship fast, scale smoothly, and feel human.
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            I am <strong className="text-slate-900 dark:text-white">Dipak Mundhe</strong>, a MERN stack developer who blends
            engineering rigor with high-end UI craft to deliver polished,
            conversion-ready products.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5"
            >
              View Projects <FaArrowUpRightFromSquare />
            </a>
            <a
              href="https://java-with-dipak-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/60 bg-fuchsia-500/20 px-6 py-3 text-sm font-semibold text-fuchsia-600 shadow-lg shadow-fuchsia-500/20 transition hover:-translate-y-0.5 dark:text-fuchsia-300"
            >
              Go to JavaWithDipak <FaArrowUpRightFromSquare />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-sky-300"
            >
              Book a Call
            </a>
            <a
              href="/resume.png"
              download
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-sky-300"
            >
              Download Resume
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              { value: "20+", label: "Projects Shipped" },
              { value: "5+", label: "Hackathons" },
              { value: "2x", label: "Design Systems" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-4 text-left shadow-sm dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {item.value}
                </h3>
                <span className="text-xs text-slate-600 dark:text-slate-300">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3" aria-label="Social links">
            <a
              href="https://www.linkedin.com/in/dipak-samadhan-mundhe-b2301425b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 transition hover:-translate-y-1 hover:border-sky-400 hover:text-sky-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-sky-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/dsmundhe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 transition hover:-translate-y-1 hover:border-sky-400 hover:text-sky-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-sky-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 transition hover:-translate-y-1 hover:border-sky-400 hover:text-sky-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-sky-300"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 transition hover:-translate-y-1 hover:border-sky-400 hover:text-sky-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-sky-300"
            >
              <FaFacebookF />
            </a>
          </div>
        </motion.div>

        <div className="relative w-full self-start rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900/60 sm:p-6">
          <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-900/60 sm:p-6">
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <div className="relative h-32 w-32 overflow-hidden rounded-3xl border border-slate-200 shadow-lg shadow-slate-900/10 dark:border-white/10 sm:h-36 sm:w-36 lg:h-40 lg:w-40">
                <div className="absolute inset-0 ring-2 ring-sky-400/40"></div>
                <img
                  src="/favicon.png"
                  loading="lazy"
                  alt="Profile portrait of Dipak Mundhe"
                  className="h-full w-full object-cover"
                />
              </div>
            <div className="flex-1">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500 dark:text-sky-300">
                Profile Spotlight
              </span>
              <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl">
                Dipak Mundhe
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                MERN Stack Developer crafting modern, high-impact web products.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-500 dark:text-sky-300">
                  MERN
                </span>
                <span className="inline-flex items-center rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-1 text-xs font-semibold text-fuchsia-400">
                  UI/UX
                </span>
                <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-500">
                  Available
                </span>
              </div>
            </div>
          </div>

            <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <FaBriefcase className="text-sky-500 dark:text-sky-300" />
                <span>Freelance & Collab</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLocationDot className="text-sky-500 dark:text-sky-300" />
                <span>Based in India</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 text-xs uppercase tracking-[0.12em] text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                <span>Frontend</span>
                <div className="mt-2 flex gap-2 text-xl text-sky-500 dark:text-sky-300">
                  <SiReact />
                  <SiJavascript />
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 text-xs uppercase tracking-[0.12em] text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                <span>Backend</span>
                <div className="mt-2 flex gap-2 text-xl text-sky-500 dark:text-sky-300">
                  <SiNodedotjs />
                  <SiMongodb />
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 text-xs uppercase tracking-[0.12em] text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                <span>Core</span>
                <div className="mt-2 flex gap-2 text-xl text-sky-500 dark:text-sky-300">
                  <FaJava />
                  <SiReact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
