import React from "react";

const Experience = ({ experience }) => {
  return (
    <section
      id="experience"
      className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transition-all duration-300"
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-400">
        Experience
      </h2>
      <div className="space-y-12">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="relative pl-8 md:pl-12 border-l-2 border-gray-600 hover:border-blue-500 transition-colors duration-200"
          >
            <span className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-briefcase"
              >
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </span>
            <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
            <h4 className="text-lg font-semibold text-gray-300">
              {exp.company}
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              {exp.date} &bull; {exp.location}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
