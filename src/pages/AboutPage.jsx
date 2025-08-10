import React from "react";
import { FaTrophy, FaCalendarAlt, FaLightbulb } from "react-icons/fa";

const AboutPage = () => {
  const galleryImages = [
    "/image1.jpg",
    "/image2.jpg",
    "/image4.jpg",
    "/image3.jpg",
    "/image5.jpg",
    "/image6.jpg",
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#0F2027] via-[#2C5364] to-[#FFD700]">
          About Me & My Achievements
        </h2>

        {/* Intro Text */}
        <p className="max-w-3xl mx-auto text-center text-gray-700 text-base sm:text-lg leading-relaxed mb-12">
          Passionate MERN stack developer with a flair for creating scalable web
          applications and engaging user experiences. Beyond coding, I actively
          participate in hackathons and events to challenge myself, learn, and
          grow.
        </p>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-16 px-2">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
            >
              <img
                src={img}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Achievements / Events */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
          {/* Hackathons */}
          <div className="flex flex-col items-center gap-3 p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border-t-4 border-transparent hover:border-t-4 hover:border-blue-500 transition-all duration-300">
            <FaTrophy className="text-3xl sm:text-4xl text-blue-500" />
            <h3 className="text-lg sm:text-xl font-semibold text-center text-gray-800">
              Hackathons
            </h3>
            <p className="text-gray-600 text-center text-sm sm:text-base leading-relaxed">
              Participated in 5+ hackathons, earning awards in 2 — demonstrating
              strong problem-solving and teamwork.
            </p>
          </div>

          {/* Events */}
          <div className="flex flex-col items-center gap-3 p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border-t-4 border-transparent hover:border-t-4 hover:border-indigo-500 transition-all duration-300">
            <FaCalendarAlt className="text-3xl sm:text-4xl text-indigo-500" />
            <h3 className="text-lg sm:text-xl font-semibold text-center text-gray-800">
              Events
            </h3>
            <p className="text-gray-600 text-center text-sm sm:text-base leading-relaxed">
              Engaged in multiple tech conferences & workshops to stay ahead
              with evolving industry trends.
            </p>
          </div>

          {/* Innovations */}
          <div className="flex flex-col items-center gap-3 p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border-t-4 border-transparent hover:border-t-4 hover:border-amber-500 transition-all duration-300">
            <FaLightbulb className="text-3xl sm:text-4xl text-amber-500" />
            <h3 className="text-lg sm:text-xl font-semibold text-center text-gray-800">
              Innovations
            </h3>
            <p className="text-gray-600 text-center text-sm sm:text-base leading-relaxed">
              Created innovative projects using AI & automation, enhancing user
              experience and efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
