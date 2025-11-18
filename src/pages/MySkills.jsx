import React from "react";

const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Redux.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "JWT Token", "MongoDB"],
  },
  {
    category: "Programming",
    items: ["C", "Java", "JavaScript"],
  },
  {
    category: "Database",
    items: ["MongoDB", "SQL"],
  },
  {
    category: "Cloud Computing and Devops",
    items: ["AWS", "Git", "GitHub", "Linux Basics"],
  },
  {
    category: "Tools & Others",
    items: ["VS Code", "Netlify", "Postman", "Vercel", "Render"],
  },
];

const MySkills = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-5xl font-extrabold text-white mb-3 tracking-wide">
          My Skills
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Here are the technologies and tools I've mastered throughout my
          development journey. I take pride in my skill set and continuously
          expand it with passion and dedication.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((skillCategory, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl shadow-lg p-8 transition-transform duration-300 hover:scale-[1.05] hover:shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-green-400 mb-6 border-b-2 border-green-500 pb-2">
              {skillCategory.category}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {skillCategory.items.map((item, i) => (
                <li
                  key={i}
                  className="bg-green-900 text-green-200 px-5 py-2 rounded-full text-sm font-semibold shadow-sm cursor-default select-none hover:bg-green-800 transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;