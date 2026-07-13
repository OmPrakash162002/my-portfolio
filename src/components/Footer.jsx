import React from 'react';
import { IoLogoLinkedin } from "react-icons/io5";
import { VscGithub } from "react-icons/vsc";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-white/5 bg-slate-950 py-12 text-white">
      {/* Subtle Bottom Ambient Vignette */}
      <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none bg-gradient-to-t from-purple-500/[0.03] to-transparent z-0" />

      <div className="relative max-w-6xl mx-auto px-4 z-10 flex flex-col items-center justify-center gap-6">
        
        {/* Name with Modern Palette Gradient */}
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-wider bg-gradient-to-r from-purple-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent">
          OM PRAKASH VISHWAKARMA
        </h2>
        
        {/* Upgraded Glassmorphic Social Media Icons */}
        <div className="flex flex-row items-center gap-5 text-xl">
          <a 
            className="group flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-black/10" 
            href="https://www.linkedin.com/in/om-prakash-vishwakarma-46b9222b9" 
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
          >
            <IoLogoLinkedin className="transition-transform duration-300 group-hover:scale-110" />
          </a>
          
          <a 
            className="group flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-black/10" 
            href="https://github.com/OmPrakash162002" 
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
          >
            <VscGithub className="transition-transform duration-300 group-hover:scale-110" />
          </a>
        </div>
        
        {/* Copyright notice */}
        <p className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide mt-2">
          &copy; {currentYear} Om Prakash Vishwakarma. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;