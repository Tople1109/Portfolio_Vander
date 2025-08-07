import React from "react";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";
import Footer from "./components/Footer.js";

// Make sure you have installed lucide-react and have the tailwind setup
// npm install lucide-react

const portfolioData = {
  name: "Vander Le",
  title: "Software Engineer",
  email: "Thin6464vn@gmail.com",
  linkedin: "https://www.linkedin.com/in/tople1109",
  github: "https://github.com/Tople1109",
  profilePicture: "https://placehold.co/250x250/2563eb/ffffff?text=Your+Photo",
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
      liveUrl: "https://example.com/studybuddy",
      githubUrl: "https://github.com/Tople1109/studybuddy",
      imageUrl: "https://placehold.co/400x250/2563eb/ffffff?text=Study+Buddy",
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
      liveUrl: "https://example.com/shopease",
      githubUrl: "https://github.com/Tople1109/shopease",
      imageUrl: "https://placehold.co/400x250/2563eb/ffffff?text=ShopEase",
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
      liveUrl: "https://example.com/goalgrid",
      githubUrl: "https://github.com/Tople1109/goalgrid",
      imageUrl: "https://placehold.co/400x250/2563eb/ffffff?text=GoalGrid",
    },
  ],
};

const App = () => {
  const {
    name,
    title,
    email,
    linkedin,
    github,
    profilePicture,
    bio,
    skills,
    experience,
    projects,
  } = portfolioData;

  return (
    <div className="bg-gray-900 text-gray-200 font-sans min-h-screen">
      <Header
        name={name}
        title={title}
        email={email}
        linkedin={linkedin}
        github={github}
      />
      <main className="container mx-auto px-6 py-12 space-y-20">
        <About bio={bio} skills={skills} imageUrl={profilePicture} />
        <Experience experience={experience} />
        <Projects projects={projects} />
      </main>
      <Footer name={name} email={email} linkedin={linkedin} github={github} />
    </div>
  );
};

export default App;
