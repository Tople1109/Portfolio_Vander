import React from "react";

const ProjectCard = ({ project, onClick }) => (
  <div
    onClick={() => onClick(project)}
    className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col cursor-pointer"
  >
    {/* Project Image */}
    <div className="mb-4 rounded-lg overflow-hidden border border-gray-700">
      <img
        src={project.imageUrl}
        alt={`Screenshot of ${project.name}`}
        className="w-full h-auto object-cover"
      />
    </div>

    <div className="flex justify-between items-start mb-2">
      <h3 className="text-2xl font-bold text-white leading-tight">
        {project.name}
      </h3>
      <p className="text-sm text-gray-400 mt-1">{project.date}</p>
    </div>

    <p className="text-gray-400 text-sm mb-4 flex-grow">
      {project.description}
    </p>

    <div className="mb-4">
      <h4 className="text-md font-semibold text-gray-300 mb-2">
        Technologies Used
      </h4>
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium transition-transform duration-200 hover:scale-105"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = ({ projects, onProjectSelect }) => {
  return (
    <section
      id="projects"
      className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transition-all duration-300"
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-orange-400">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={onProjectSelect}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
