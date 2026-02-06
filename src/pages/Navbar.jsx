import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    const saved = window.localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full backdrop-blur-xl transition ${
        isScrolled
          ? "bg-white/90 shadow-[0_10px_30px_rgba(15,23,42,0.15)] dark:bg-slate-950/90 dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          : "bg-white/70 dark:bg-slate-950/60"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#home" className="group inline-flex items-center gap-2">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 via-cyan-300 to-fuchsia-400 text-[10px] font-bold text-slate-950 shadow-md shadow-sky-500/20 transition group-hover:-translate-y-0.5">
            DM
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border border-white/60 bg-slate-950 dark:bg-slate-100"></span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-xs font-semibold tracking-[0.18em] text-slate-900 dark:text-white">
              DIPAK
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-500 dark:text-slate-300">
              MUNDHE
            </span>
          </span>
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-900 dark:border-white/10 dark:text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-slate-900 transition dark:bg-white ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-slate-900 transition dark:bg-white ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-slate-900 transition dark:bg-white ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            ></span>
          </div>
        </button>

      </div>

      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ease-out ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          className={`absolute inset-0 h-full w-full bg-slate-900/30 backdrop-blur-sm transition-opacity duration-300 ease-out dark:bg-slate-950/70 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleMenu}
          aria-label="Close menu overlay"
        />
        <div
          data-open={isOpen}
          className="absolute right-6 top-6 z-10 w-[90vw] max-w-sm translate-y-2 rounded-3xl border border-slate-200 bg-white/95 p-6 text-slate-900 opacity-0 shadow-2xl transition-all duration-300 ease-out data-[open=true]:translate-y-0 data-[open=true]:opacity-100 dark:border-white/10 dark:bg-slate-950/95 dark:text-white"
        >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
                Menu
              </span>
              <button
                type="button"
                onClick={toggleMenu}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:text-sky-500 dark:border-white/10 dark:text-white dark:hover:text-sky-300"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-4 text-lg font-semibold">
              <a href="#home" onClick={handleLinkClick} className="hover:text-sky-500 dark:hover:text-sky-300">
                Home
              </a>
              <a href="#skills" onClick={handleLinkClick} className="hover:text-sky-500 dark:hover:text-sky-300">
                Skills
              </a>
              <a href="#projects" onClick={handleLinkClick} className="hover:text-sky-500 dark:hover:text-sky-300">
                Projects
              </a>
              <a href="#contact" onClick={handleLinkClick} className="hover:text-sky-500 dark:hover:text-sky-300">
                Contact
              </a>
              <a href="#about" onClick={handleLinkClick} className="hover:text-sky-500 dark:hover:text-sky-300">
                About
              </a>
            </nav>

        </div>
      </div>
    </nav>
  );
}
