import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div
      className="min-h-screen bg-gray-50 p-6 flex flex-col md:flex-row justify-center items-stretch gap-10 overflow-hidden"
      style={{ paddingTop: "70px" }}
    >
      {/* Left: Profile Card */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center w-full max-w-sm flex-1 h-full"
      >
        <div className="w-65 h-65 rounded-full overflow-hidden border-4 border-green-200">
          <img
            src="/profile.jpg"
            loading="lazy"
            alt="Profile portrait of Dorbesh Baba"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-semibold mt-6">Dipak Mundhe</h2>
        <p className="text-gray-500 mt-2 text-center">
          I am a MERN stack Developer.
        </p>
        <div className="flex gap-6 mt-6 text-2xl text-gray-600">
          <a
            href="https://www.linkedin.com/in/dipak-samadhan-mundhe-b2301425b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/dsmundhe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-800"
          >
            <FaGithub />
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-black"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-600"
          >
            <FaFacebookF />
          </a>
        </div>
      </motion.div>

      {/* Right: Introduction Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white rounded-2xl shadow-md p-8 w-full max-w-3xl flex-1 h-full flex flex-col justify-between"
      >
        <div>
          <p className="text-sm text-gray-500">Hello There!</p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-snug mt-3">
            I'M{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-700">
              DIPAK MUNDHE
            </span>
            , A MERN STACK DEVELOPER BUILDING{" "}
            <span className="font-semibold text-black">
              SCALABLE WEB APPLICATIONS
            </span>{" "}
            WITH{" "}
            <span className="font-semibold text-black">
              MODERN UI & EFFICIENT BACKEND.
            </span>
          </h1>
          <div className="mt-5 flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></span>
            <p className="text-gray-700 text-sm font-medium">
              Available for Freelancing
            </p>
          </div>
        </div>

        <a
          href="/resume.png"
          download
          className="inline-block mt-8 bg-green-600 text-white px-7 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition self-start"
        >
          Download Resume ↓
        </a>
      </motion.div>
    </div>
  );
};

export default HomePage;
