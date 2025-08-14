import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import favicon from "../assets/favicon.png";

const Header = ({ name, title, email, linkedin, github }) => {
  return (
    <header className="bg-gray-950 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center justify-center md:justify-start gap-4 mb-4 md:mb-0">
          <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
            <img
              src={favicon}
              alt="Icon"
              className="h-12 w-12 object-cover rounded-full"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-extrabold text-white">{name}</h1>
            <p className="text-lg font-medium text-orange-400">{title}</p>
          </div>
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
