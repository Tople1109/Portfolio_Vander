import React from "react";
import { Github, ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
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

    <p className="text-gray-400 text-sm mb-4">{project.description}</p>

    <div className="mb-4">
      <h4 className="text-md font-semibold text-gray-300 mb-2">
        Technologies Used
      </h4>
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium transition-transform duration-200 hover:scale-105"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    <div className="flex justify-start gap-4 mt-6">
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition-colors duration-200"
      >
        Live Demo <ArrowUpRight size={16} />
      </a>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-blue-500 rounded-full border border-gray-600 hover:border-blue-500 font-medium transition-colors duration-200"
      >
        GitHub <Github size={16} />
      </a>
    </div>
  </div>
);

const Projects = ({ projects }) => {
  return (
    <section
      id="projects"
      className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transition-all duration-300"
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-400">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
