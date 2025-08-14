import React from "react";
import { Briefcase } from "lucide-react";

const Experience = ({ experience }) => {
  return (
    <section
      id="experience"
      className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transition-all duration-300"
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-orange-400">
        Experience
      </h2>
      <div className="space-y-12">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="relative pl-8 md:pl-12 border-l-2 border-gray-600 hover:border-orange-500 transition-colors duration-200"
          >
            <span className="absolute -left-3 top-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white">
              <Briefcase size={16} />
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
