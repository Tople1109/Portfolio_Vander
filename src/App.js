import React, { useState } from "react";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";
import Footer from "./components/Footer.js";
import ProjectDetailPage from "./components/ProjectDetailPage.js";
import vanderPic from "./assets/vander.jpg";
import finsightaiPic from "./assets/finsightai.png";
import goalgridPic from "./assets/goalgrid.png";

const portfolioData = {
  name: "Vander Le",
  title: "Software Engineer",
  email: "Thin6464vn@gmail.com",
  linkedin: "https://www.linkedin.com/in/tople1109",
  github: "https://github.com/Tople1109",
  profilePicture: vanderPic,
  bio: "I’m a highly motivated Software Engineer and Computer Science student at The University of Texas at Dallas (GPA: 3.96/4.0). I build scalable, full-stack applications that combine solid engineering with intuitive, user-focused design. With experience in both front-end and back-end development, I enjoy solving complex problems and using modern frameworks to create efficient, impactful solutions.",
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
      name: "CapNav (AI Study Companion)",
      date: "June 2025 - Present",
      description:
        "An AI-powered learning assistant that helps students improve their study habits by generating personalized quizzes, summarizing notes, and recommending study schedules based on past performance.",
      techStack: [
        "React.js",
        "Spring Boot",
        "AI/ML",
        "WebSockets",
        "MySQL/PostgreSQL",
      ],
      features: [
        "AI Model: Trained on user study patterns to suggest study plans.",
        "NLP (Natural Language Processing): Summarizes notes and generates quizzes.",
        "Speech Recognition: Converts spoken lectures into text summaries.",
        "Reinforcement Learning: Learns from user responses to refine quiz difficulty.",
      ],
      liveUrl: "https://www.youtube.com/watch?v=your-video-id",
      githubUrl: "https://github.com/Tople1109/capnav",
      imageUrl:
        "https://placehold.co/400x250/e67e22/ffffff?text=CapNav+Project",
      overview: [
        "CapNav is an AI-powered learning assistant that helps students improve their study habits by generating personalized quizzes, summarizing notes, and recommending study schedules based on past performance. This project showcases a modern tech stack and a comprehensive AI/ML pipeline to create a powerful educational tool.",
      ],
      techStackDetailed: {
        frontend: [
          "React.js (UI)",
          "Tailwind CSS / Material-UI (Styling)",
          "Redux/Context API (State management)",
          "WebSockets (for real-time AI chat)",
          "Chart.js / Recharts (Visualizing study progress)",
        ],
        backend: [
          "Spring Boot (REST APIs)",
          "Hibernate (JPA) + MySQL/PostgreSQL (Database)",
          "Spring Security (User authentication)",
          "OpenAI API/ TensorFlow / Scikit-learn (for ML models)",
          "JWT for authentication",
          "Spring Boot WebSockets (for real-time interactions)",
        ],
      },
      runningInstructions: [{ title: "Coming soon...", steps: [] }],
      futureGoals: [
        {
          title: "Real-time AI Chat",
          description:
            "Implement WebSockets for real-time AI chat interactions.",
        },
        {
          title: "Improved NLP",
          description: "Improve NLP-based summarization & quiz generation.",
        },
        {
          title: "Study Plan Recommender",
          description:
            "Implement an AI-powered study plan recommender based on past performance.",
        },
        {
          title: "Containerization",
          description:
            "Containerize the application with Docker for easier deployment.",
        },
      ],
      conclusion:
        "The future goals for CapNav aim to enhance user engagement and create a more collaborative and dynamic experience. With features like real-time chat and improved AI models, CapNav is evolving into not just a productivity tool, but a social and gamified experience. These enhancements will help users stay motivated, focused, and connected as they work toward their personal or team goals. We are excited to roll out these features in future updates, and we believe they will significantly improve how users interact with the app, keeping productivity fun and rewarding.",
    },
    {
      name: "FinSightAI",
      date: "February 2025 - April 2025",
      description:
        "FinSightAI couples a modern React + Node.js dashboard with a Python‑powered AI/ML pipeline so you can ingest PDFs, index their contents, and ask natural‑language questions against your documents.",
      techStack: [
        "React.js",
        "Node.js",
        "Python",
        "LangChain",
        "FAISS",
        "Ollama",
        "MongoDB",
      ],
      features: [
        "React + Node.js dashboard for an intuitive user interface.",
        "Python-powered AI/ML pipeline for document ingestion and natural-language questioning.",
        "Retrieval-Augmented Generation (RAG) workflow with LangChain, FAISS, and Ollama.",
      ],
      liveUrl: "https://www.youtube.com/watch?v=9ovXof9DY-8",
      githubUrl: "https://github.com/Tople1109/FinSightAI",
      imageUrl: finsightaiPic,
      overview: [
        "FinSightAI couples a modern React + Node.js dashboard with a Python‑powered AI/ML pipeline so you can ingest PDFs, index their contents, and ask natural‑language questions against your documents. The frontend provides real‑time charts and an intuitive interface, while the backend runs a Retrieval‑Augmented Generation (RAG) workflow built with LangChain, FAISS, and Ollama for lightning‑fast document search and answer generation.",
      ],
      techStackDetailed: {
        frontend: [
          "React.js: Component‑driven UI",
          "JavaScript: Application logic & state management",
          "CSS / Tailwind: Responsive styling",
          "VS Code: Primary IDE with ESLint & Prettier",
        ],
        backend: [
          "Node.js & Express: Exposes REST endpoints for the React client, proxies requests to the Python AI/ML service",
          "Python AI/ML Pipeline:",
          " • LangChain core: Orchestrates RAG",
          " • Document, RecursiveCharacterTextSplitter: Wrap text & chunk large files",
          " • LangChain Community FAISS: In‑memory vector store",
          " • HuggingFaceEmbeddings: Generate vector embeddings",
          " • Ollama: Local LLM inference",
          " • RetrievalQARetrieval: + generation chain",
          "FAISS: Similarity‑search index",
          "MongoDB & Mongoose (optional): Metadata / user sessions",
        ],
      },
      runningInstructions: [
        {
          title: "Prerequisites",
          steps: [
            "– Python 3.8 + (with pip)",
            "– Node.js 16 + and npm",
            "– MongoDB (optional, for metadata storage)",
          ],
        },
        {
          title: "1. Clone the repository",
          steps: [
            "git clone https://github.com/YourUser/FinSightAI.git",
            "cd FinSightAI",
          ],
        },
        {
          title: "2. Start the Python AI/ML service (terminal #1)",
          steps: [
            "cd python-service",
            "pip install -r requirements.txt",
            "Build the FAISS index (run once per PDF set)",
            "python ingest_pdfs.py --pdf-dir ./docs",
            "Launch the FastAPI / Flask server (defaults to http://localhost:8000)",
            "python app.py",
          ],
        },
        {
          title: "3. Start the Node.js backend (terminal #2)",
          steps: [
            "cd backend",
            "npm install",
            "Copy environment variables",
            "cp .env.example .env",
          ],
        },
        {
          title: "4. Start the React frontend (terminal #3)",
          steps: [
            "cd finsightai-client",
            "npm install",
            "npm start              # opens http://localhost:3000",
            "Then just add the Pdf file and start asking questions :) !!!",
          ],
        },
      ],
      futureGoals: [
        {
          title: "Real‑time WebSocket streaming",
          description: "for live market and sentiment data",
        },
        {
          title: "Drag‑and‑drop widgets",
          description: "so users can build custom dashboards",
        },
        {
          title: "Role‑based authentication",
          description: "and shared workspaces for team collaboration",
        },
        {
          title: "Mobile clients",
          description: "via React Native",
        },
        {
          title: "Alerting & scheduled reports",
          description: "delivered via email or push notifications",
        },
      ],
      conclusion:
        "FinSightAI transforms static PDFs into living data— searchable, analyzable, and actionable—by uniting a React + Node.js dashboard with a Python‑based RAG engine. With rapid vector search (FAISS), local LLM inference (Ollama), and an ergonomic UI, the project showcases how full‑stack AI can turn raw documents into instant insight. This is only the beginning. Future milestones include: We welcome issues, feature requests, and pull requests—check out CONTRIBUTING.md to get started. Together we can evolve FinSightAI into a best‑in‑class, open‑source platform for document‑driven intelligence.",
    },
    {
      name: "GoalGrid",
      date: "August 2024 - December 2024",
      description:
        "A gamified productivity app with over 25 customizable tasks per user, allowing strategic completion for incentives like 'Bingo' or 'Blackout.'",
      techStack: ["ReactJS", "Spring Boot", "MySQL", "HTML/CSS", "Figma"],
      features: [
        "Leveraged ReactJS to develop a dynamic and interactive front-end UI, using Figma for design prototyping.",
        "Built the back-end using the Spring Framework (Spring Boot and Hibernate ORM) to enable efficient object-relational mapping, RESTful APIs, and business logic integration.",
        "Utilized MySQL as the local database.",
      ],
      liveUrl: "https://www.youtube.com/watch?v=XGRQzs2TiR0",
      githubUrl: "https://github.com/Tople1109/goalgrid",
      imageUrl: goalgridPic,
      overview: [
        "Inspired by the classic game of Bingo, we developed GoalGrid, a task-oriented game designed to combine productivity with entertainment. It’s a productivity tool designed to keep users motivated, foster a sense of accomplishment, and help them effectively organize and prioritize their daily responsibilities.",
        "Users can create and customize their tasks, which are later randomly placed into a grid format. Players are challenged to complete tasks strategically to achieve Bingo, which occurs when they complete all tasks in a horizontal or vertical line. For those who seek a greater challenge, the ultimate goal is to achieve Blackout, which requires completing every task in the grid.",
      ],
      techStackDetailed: {
        frontend: [
          "React.js: Used for its simplicity, performance, and flexibility in developing a dynamic and interactive UI.",
          "Figma: Used for design prototypes to provide a visual framework before implementation.",
          "Canva: Utilized for designing background images for the application tailored to the app's aesthetic.",
          "HTML/CSS: Used for styling and layout customization.",
          "VS Code: The primary development environment, offering robust features and seamless tool integration.",
        ],
        backend: [
          "Spring Boot: A framework used for developing the backend with ease and scalability.",
          "Hibernate ORM: Used for efficient object-relational mapping (ORM), simplifying database interactions.",
          "MySQL: Used as the local database to store tasks and user data.",
          "Eclipse: Used as the primary development environment for backend development.",
        ],
      },
      runningInstructions: [
        {
          title: "1. Backend (Spring Boot)",
          steps: [
            "To run the backend:",
            "Open Eclipse.",
            "Import the project into Eclipse.",
            "Locate the GoalgridApplication class (annotated with @SpringBootApplication).",
            "Right-click on the class and select Run As -> Spring Boot App.",
          ],
        },
        {
          title: "2. Database (MySQL)",
          steps: [
            "To run the database MySQL",
            "Install MySQL.",
            "(Optional) Recommended to install MySQL Workbench.",
            "Add MySQL connection at Hostname: 127.0.0.1; and Port: 3306.",
            "Set username to 'root'.",
            "Create a password.",
            "Go to backend/src/main/resources/application.properties and edit the password to match the one create in step 5.",
            "Save the file and run backend (refer to 1. Backend (Spring Boot) section above)",
          ],
        },
        {
          title: "3. Frontend (React.js)",
          steps: [
            "To run the actual app:",
            "Navigate to the goalgrid app directory in your terminal.",
            "Run the following command: 'npm start'",
          ],
        },
      ],
      futureGoals: [
        {
          title: "Progress Bar",
          description:
            "A progress bar will be added to each user's task grid to visually represent how much of their tasks they have completed. This feature aims to enhance user motivation by providing a real-time visual indicator of their progress toward completing the grid, achieving Bingo, or reaching Blackout.",
        },
        {
          title: "Streaks",
          description:
            "Introducing streaks will gamify the app by rewarding users for completing tasks consistently over a set period. For example, completing a task every day for a week could earn a user a '7-day streak.' Streaks will help users stay committed to their goals and keep them motivated to maintain their progress.",
        },
        {
          title: "Gamifying with Other Users",
          description:
            "To enhance the social aspect of GoalGrid, we will add the ability for users to compete or collaborate with others on the same task grids. Whether it's competing to complete the grid first or collaborating on shared tasks, this feature will increase engagement and foster a sense of community.",
        },
        {
          title: "Sharing Grids",
          description:
            "To increase the sharing aspect of the app, we plan to introduce a feature that allows users to share their completed or active grids with others. This could be particularly useful for users who want to share their task list with a friend, colleague, or social media audience.",
        },
        {
          title: "Working on the Same Grid",
          description:
            "This feature allows multiple users to work on the same grid, completing tasks together or individually but contributing to the same overall goal. This is ideal for group projects, team goals, or accountability partnerships, where all users are focused on completing the same set of tasks.",
        },
      ],
      conclusion:
        "The future goals for GoalGrid aim to enhance user engagement and create a more collaborative and dynamic experience. With features like progress bars, streaks, social sharing, and multi-user collaboration, GoalGrid is evolving into not just a productivity tool, but a social and gamified experience. These enhancements will help users stay motivated, focused, and connected as they work toward their personal or team goals. We are excited to roll out these features in future updates, and we believe they will significantly improve how users interact with the app, keeping productivity fun and rewarding.",
    },
  ],
};

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
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

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-slate-950 text-gray-200 font-sans min-h-screen">
      <Header
        name={name}
        title={title}
        email={email}
        linkedin={linkedin}
        github={github}
      />

      <main className="container mx-auto px-6 py-12">
        {selectedProject ? (
          <ProjectDetailPage
            project={selectedProject}
            onBack={handleBackToProjects}
          />
        ) : (
          <div className="space-y-20">
            <About bio={bio} skills={skills} imageUrl={profilePicture} />
            <Experience experience={experience} />
            <Projects
              projects={projects}
              onProjectSelect={handleProjectSelect}
            />
          </div>
        )}
      </main>

      <Footer name={name} email={email} linkedin={linkedin} github={github} />
    </div>
  );
};

export default App;
