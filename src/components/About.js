import React from "react";

const SkillSection = ({ title, items }) => (
  <div>
    <h4 className="text-lg font-semibold text-gray-200 mb-2">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <span
          key={index}
          className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium transition-transform duration-200 hover:scale-105"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

const About = ({ bio, skills, imageUrl }) => {
  return (
    <section
      id="about"
      className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transition-all duration-300"
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-400">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Profile Picture */}
        <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
          <img
            src={imageUrl}
            alt="Vander Le"
            className="w-full h-full object-cover rounded-full border-4 border-gray-700 shadow-xl"
          />
        </div>

        {/* Text and Skills Container */}
        <div className="flex-1 space-y-8">
          <p className="text-lg leading-relaxed text-gray-300 text-center md:text-left">
            {bio}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <SkillSection title="Languages" items={skills.languages} />
            <SkillSection title="Frontend" items={skills.frontend} />
            <SkillSection title="Backend" items={skills.backend} />
            <SkillSection title="Databases" items={skills.databases} />
            <SkillSection title="Tools & Technologies" items={skills.tools} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
