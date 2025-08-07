import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = ({ name, email, linkedin, github }) => {
  return (
    <footer id="contact" className="bg-gray-950 text-white py-12 mt-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto text-gray-400">
          I'm currently seeking new opportunities. Feel free to reach out to me
          through any of the channels below.
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
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
