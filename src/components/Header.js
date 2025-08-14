import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Header = ({ name, title, email, linkedin, github }) => {
  return (
    <header className="bg-gray-950 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-3xl font-extrabold text-white">{name}</h1>
          <p className="text-lg font-medium text-orange-400">{title}</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-gray-300">
          <a
            href="#about"
            className="hover:text-orange-400 transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#experience"
            className="hover:text-orange-400 transition-colors duration-200"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-orange-400 transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-orange-400 transition-colors duration-200"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
