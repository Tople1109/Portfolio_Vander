import React from "react";
import { Youtube, ArrowLeft, Github } from "lucide-react";

const getYoutubeVideoId = (url) => {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const ProjectDetailPage = ({ project, onBack }) => {
  if (!project) {
    return (
      <div className="text-center text-gray-400 py-16">
        Project not found.
        <button
          onClick={onBack}
          className="flex items-center gap-2 mt-4 mx-auto text-orange-400 hover:text-orange-500 transition-colors duration-200"
        >
          <ArrowLeft size={16} /> Back to Projects
        </button>
      </div>
    );
  }

  const videoId = getYoutubeVideoId(project.liveUrl);

  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transition-all duration-300">
      <button
        onClick={onBack}
        className="flex items-center gap-2 mb-8 text-orange-400 hover:text-orange-500 transition-colors duration-200"
      >
        <ArrowLeft size={16} /> Back to Projects
      </button>

      <div className="flex flex-col space-y-8">
        <div className="flex-shrink-0 w-full">
          {videoId ? (
            <div
              className="w-full rounded-lg overflow-hidden border border-gray-700 max-w-4xl mx-auto relative"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <img
              src={project.imageUrl}
              alt={`Screenshot of ${project.name}`}
              className="w-full h-auto rounded-lg border border-gray-700 mx-auto"
            />
          )}
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-gray-300 hover:text-orange-500 rounded-full border border-gray-600 hover:border-orange-500 font-medium transition-colors duration-200"
            >
              View on GitHub <Github size={20} />
            </a>
          </div>
        </div>

        <div className="flex-grow w-full">
          <h2 className="text-4xl font-bold text-orange-400">{project.name}</h2>
          <p className="text-sm text-gray-400 mt-2">{project.date}</p>

          <div className="mt-6">
            <h3 className="text-2xl font-bold text-gray-200">Overview</h3>
            {project.overview.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-300 mt-4">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-bold text-gray-200">
              Technologies Used
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-300 mb-2">
                  Frontend
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  {project.techStackDetailed.frontend.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-300 mb-2">
                  Backend
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  {project.techStackDetailed.backend.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-bold text-gray-200">
              Running the Application
            </h3>
            <div className="space-y-4 mt-4 text-gray-400">
              {project.runningInstructions.map((instruction, index) => (
                <div key={index}>
                  <h5 className="font-semibold text-lg text-gray-300">
                    {instruction.title}
                  </h5>
                  {instruction.steps.map((step, stepIndex) => (
                    <p key={stepIndex}>{step}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-bold text-gray-200">Future Goals</h3>
            <ul className="list-disc list-inside space-y-4 mt-4 text-gray-300">
              {project.futureGoals.map((goal, index) => (
                <li key={index}>
                  <h5 className="font-semibold text-xl text-gray-200 mb-1">
                    {goal.title}
                  </h5>
                  <p className="text-lg text-gray-400">{goal.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-bold text-gray-200">Conclusion</h3>
            <p className="text-lg text-gray-300 mt-4">{project.conclusion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
