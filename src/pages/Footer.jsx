import React from "react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-auto px-6 pb-12 pt-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
              MyPortfolio
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Crafting beautiful, user-centric digital experiences with
              precision and passion.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
              Quick Links
            </h3>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
              <a className="hover:text-sky-500 dark:hover:text-sky-300" href="#home">
                Home
              </a>
              <a className="hover:text-sky-500 dark:hover:text-sky-300" href="#projects">
                Projects
              </a>
              <a className="hover:text-sky-500 dark:hover:text-sky-300" href="#about">
                About
              </a>
              <a className="hover:text-sky-500 dark:hover:text-sky-300" href="#contact">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
              Connect
            </h3>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
              <a
                href="https://github.com/dsmundhe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-sky-500 dark:hover:text-sky-300"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/dipak-samadhan-mundhe-b2301425b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-sky-500 dark:hover:text-sky-300"
              >
                <FaLinkedinIn /> LinkedIn
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-sky-500 dark:hover:text-sky-300"
              >
                <FaXTwitter /> Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
          (c) {new Date().getFullYear()} Dipak Mundhe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
