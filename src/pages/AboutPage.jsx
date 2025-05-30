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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-500">
          About Me & Achievements
        </h2>

        {/* Intro Text */}
        <p className="max-w-3xl mx-auto text-center text-gray-700 text-base sm:text-lg leading-relaxed mb-12">
          Passionate MERN stack developer with a flair for creating scalable web
          applications and engaging user experiences. Beyond coding, I
          actively participate in hackathons and events to challenge myself,
          learn, and grow.
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-2">
          {/* Hackathons */}
          <div className="flex flex-col items-center gap-3 p-5 border-l-4 border-gradient-to-r from-green-400 to-blue-500 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaTrophy className="text-3xl sm:text-4xl text-green-500" />
            <h3 className="text-lg sm:text-xl font-semibold text-center">Hackathons</h3>
            <p className="text-gray-600 text-center text-sm sm:text-base">
              Participated in 5+ hackathons with awards in 2, showcasing my
              problem-solving skills and teamwork.
            </p>
          </div>

          {/* Events */}
          <div className="flex flex-col items-center gap-3 p-5 border-l-4 border-gradient-to-r from-green-400 to-blue-500 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaCalendarAlt className="text-3xl sm:text-4xl text-blue-500" />
            <h3 className="text-lg sm:text-xl font-semibold text-center">Events</h3>
            <p className="text-gray-600 text-center text-sm sm:text-base">
              Attended numerous tech conferences and workshops to stay updated
              with industry trends.
            </p>
          </div>

          {/* Innovations */}
          <div className="flex flex-col items-center gap-3 p-5 border-l-4 border-gradient-to-r from-green-400 to-blue-500 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaLightbulb className="text-3xl sm:text-4xl text-yellow-400" />
            <h3 className="text-lg sm:text-xl font-semibold text-center">Innovations</h3>
            <p className="text-gray-600 text-center text-sm sm:text-base">
              Developed unique projects incorporating AI and automation to
              improve user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
