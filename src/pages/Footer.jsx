import React from "react";
import CircularGallery from "./CircularGallery/CircularGallery";

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0b] text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        {/* Logo & Description */}
        <div className="text-center md:text-left max-w-sm">
          <h1 className="text-3xl font-extrabold text-green-500 mb-2">
            MyPortfolio
          </h1>
          <p className="text-gray-400 leading-relaxed">
            Crafting beautiful, user-centric digital experiences with precision
            and passion.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <h3 className="text-xl font-semibold text-green-500 mb-2">
            Quick Links
          </h3>
          <nav className="flex flex-col space-y-1">
            <a
              href="#home"
              className="hover:text-green-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#projects"
              className="hover:text-green-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#about"
              className="hover:text-green-400 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-green-400 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Social Links */}
        <div className="flex flex-col space-y-4 items-center md:items-start">
          <h3 className="text-xl font-semibold text-green-500 mb-2">
            Connect with me
          </h3>
          <div className="flex space-x-6 text-gray-400">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
              aria-label="GitHub"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0.2975C5.37 0.2975 0 5.668 0 12.2985c0 5.293 3.438 9.7875 8.205 11.38.6.11.82-.26.82-.577v-2.165c-3.338.727-4.033-1.415-4.033-1.415-.546-1.39-1.333-1.76-1.333-1.76-1.09-.745.083-.73.083-.73 1.205.086 1.84 1.236 1.84 1.236 1.07 1.83 2.805 1.3 3.49.995.108-.774.42-1.3.763-1.6-2.665-.3-5.467-1.335-5.467-5.933 0-1.312.47-2.384 1.236-3.224-.123-.303-.536-1.523.117-3.176 0 0 1.01-.323 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.553 3.29-1.23 3.29-1.23.655 1.653.242 2.873.12 3.176.77.84 1.234 1.912 1.234 3.224 0 4.61-2.807 5.63-5.48 5.922.43.37.823 1.1.823 2.22v3.292c0 .32.22.7.825.58C20.565 22.08 24 17.59 24 12.3c0-6.63-5.373-12.003-12-12.003z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.036-1.85-3.036-1.851 0-2.134 1.445-2.134 2.939v5.666H9.358V9h3.415v1.561h.50c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.266 2.37 4.266 5.451v6.29zM5.337 7.433a2.062 2.062 0 110-4.123 2.062 2.062 0 010 4.123zM7.119 20.452H3.554V9h3.565v11.452z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
              aria-label="Twitter"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M23.954 4.57a10.07 10.07 0 01-2.825.775 4.92 4.92 0 002.163-2.724 9.864 9.864 0 01-3.127 1.196 4.916 4.916 0 00-8.36 4.482A13.938 13.938 0 011.671 3.15 4.916 4.916 0 003.195 9.72a4.904 4.904 0 01-2.224-.616v.06a4.916 4.916 0 003.946 4.816 4.996 4.996 0 01-2.213.084 4.919 4.919 0 004.588 3.415A9.868 9.868 0 010 19.54a13.935 13.935 0 007.548 2.209c9.056 0 14.01-7.496 14.01-13.986 0-.21-.004-.423-.015-.633a9.936 9.936 0 002.46-2.548l-.047-.02z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      

      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Dipak Mundhe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
