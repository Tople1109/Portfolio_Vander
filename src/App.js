import React from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const App = () => {
  // Use data from the resume to populate the site content
  const portfolioData = {
    name: "Vander Le",
    title: "Software Engineer",
    email: "Thin6464vn@gmail.com",
    linkedin: "https://www.linkedin.com/in/tople1109",
    github: "https://github.com/Tople1109",
    bio: "A motivated and detail-oriented Software Engineer with a passion for building scalable and user-friendly web applications. Skilled in both front-end and back-end development, with a strong foundation in modern frameworks and a collaborative approach to problem-solving.",
    skills: {
      languages: ["JavaScript", "TypeScript", "Java", "Python", "C++"],
      frontend: ["React.js", "HTML5", "CSS3", "Tailwind", "Next.js"],
      backend: ["Node.js", "Express", "Spring Boot"],
      databases: ["MySQL", "MongoDB", "PostgreSQL"],
      tools: [
        "Git",
        "Docker",
        "Postman",
        "VS Code",
        "Figma",
        "REST APIs",
        "JWT Auth",
        "WebSockets",
      ],
    },
    experience: [
      {
        company: "Wells Fargo | Forage",
        role: "Software Engineering Intern (Virtual)",
        date: "January 2025 - May 2025",
        location: "Richardson, TX",
        description: [
          "Engineered a backend portfolio management system to support 500+ financial advisors and clients, integrating Java, Spring Boot, and JPA.",
          "Architected 5+ normalized MySQL schemas and utilized Hibernate ORM for effective persistence and entity relationship management, enhancing scalability and system reliability.",
          "Collaborated within a professional development environment using Git and IntelliJ, ensuring adherence to version control practices and agile methodologies.",
        ],
      },
      {
        company: "Walmart | Forage",
        role: "Data Analyst Intern (Virtual)",
        date: "August 2024 - December 2024",
        location: "Dallas, TX",
        description: [
          "Developed a Python-based ETL pipeline to automate the ingestion of data from 3 CSV sources into a normalized SQLite database.",
          "Implemented robust SQL schema mapping and insert logic to maintain relationships across 1000+ shipment records.",
          "Utilized pandas for comprehensive data cleaning, merging, and aggregation of over 10,000 data points.",
        ],
      },
    ],
    projects: [
      {
        name: "Study Buddy",
        date: "January 2025 - Present",
        description:
          "A social learning platform where students can collaborate on study materials, share notes, and set collective study goals, fostering a sense of community and accountability.",
        techStack: [
          "React.js",
          "Python",
          "Flask",
          "PostgreSQL",
          "Figma",
          "WebSockets",
        ],
        features: [
          "Developed a dynamic frontend with real-time chat and live collaboration features using React.js.",
          "Built the back-end using Python with Flask, following the MVC pattern to structure application logic.",
          "Integrated PostgreSQL for database management and enabled seamless user interactions through WebSockets for live updates.",
        ],
        // Placeholder links
        liveUrl: "#",
        githubUrl: "#",
      },
      {
        name: "ShopEase",
        date: "August 2024 - December 2024",
        description:
          "A full-stack web application for online shopping, allowing users to browse products, add items to a cart, and securely complete purchases.",
        techStack: [
          "React.js",
          "Spring Boot",
          "JWT",
          "MySQL",
          "Hibernate",
          "Redis",
        ],
        features: [
          "Built a responsive and interactive frontend UI using React.js with Material-UI, optimizing performance with React Query for state management.",
          "Designed and implemented a RESTful API with Spring Boot, utilizing JWT for user authentication and MySQL with Hibernate for database management.",
          "Incorporated Redis caching for performance optimization.",
        ],
        liveUrl: "#",
        githubUrl: "#",
      },
      {
        name: "GoalGrid",
        date: "January 2024 - May 2024",
        description:
          "A gamified productivity app with over 25 customizable tasks per user, allowing strategic completion for incentives like 'Bingo' or 'Blackout.'",
        techStack: ["ReactJS", "Spring Boot", "MySQL", "HTML/CSS", "Figma"],
        features: [
          "Leveraged ReactJS to develop a dynamic and interactive front-end UI, using Figma for design prototyping.",
          "Built the back-end using the Spring Framework (Spring Boot and Hibernate ORM) to enable efficient object-relational mapping, RESTful APIs, and business logic integration.",
          "Utilized MySQL as the local database.",
        ],
        liveUrl: "#",
        githubUrl: "#",
      },
    ],
  };

  const {
    name,
    title,
    email,
    linkedin,
    github,
    bio,
    skills,
    experience,
    projects,
  } = portfolioData;

  const SkillSection = ({ title, items }) => (
    <div>
      <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span
            key={index}
            className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );

  const ProjectCard = ({ project }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {project.name}
        </h3>
        <div className="flex gap-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition-colors duration-200"
            aria-label="Live Demo"
          >
            <ArrowUpRight size={20} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition-colors duration-200"
            aria-label="GitHub Repository"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        {project.date}
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {project.description}
      </p>

      <div className="mb-4">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Technologies Used
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Key Features
        </h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans min-h-screen">
      {/* Header/Hero Section */}
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              {name}
            </h1>
            <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
              {title}
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            <a
              href="#about"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#experience"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 space-y-20">
        {/* About Section */}
        <section
          id="about"
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-4xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {bio}
              </p>
            </div>
            <div className="space-y-6">
              <SkillSection title="Languages" items={skills.languages} />
              <SkillSection title="Frontend" items={skills.frontend} />
              <SkillSection title="Backend" items={skills.backend} />
              <SkillSection title="Databases" items={skills.databases} />
              <SkillSection title="Tools & Technologies" items={skills.tools} />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">
            Experience
          </h2>
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-600"
              >
                <span className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center text-white">
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
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {exp.role}
                </h3>
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  {exp.company}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {exp.date} &bull; {exp.location}
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer/Contact Section */}
      <footer
        id="contact"
        className="bg-gray-900 dark:bg-gray-950 text-white py-12 mt-20"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            I'm currently seeking new opportunities. Feel free to reach out to
            me through any of the channels below.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a
              href={`mailto:${email}`}
              className="hover:text-blue-400 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={32} />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={32} />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={32} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
