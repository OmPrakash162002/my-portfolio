import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoLogoLinkedin } from "react-icons/io5";
import { VscGithub } from "react-icons/vsc";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Optional: Auto-update active tab based on what section is on screen
      const menuItems = ["Home", "About", "Skills", "Projects", "Education", "Contact"];
      for (const id of menuItems) {
        const section = document.getElementById(id === "Contact" ? "Contact me" : id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setIsActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOnMenuClick = (itemId) => {
    setIsActive(itemId);
    setMenuOpen(false);

    // Normalize target matching for the contact ID structure
    const targetId = itemId === "Contact" ? "Contact me" : itemId;
    const section = document.getElementById(targetId);
    if (section) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = section.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const menuItems = [
    { id: "Home", label: "Home" },
    { id: "About", label: "About" },
    { id: "Skills", label: "Skills" },
    { id: "Projects", label: "Projects" },
    { id: "Education", label: "Education" },
    { id: "Contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed z-50 top-0 left-0 w-full text-white transition-all duration-300 px-6 md:px-[7vw] py-4 ${
        isScrolled
          ? "bg-slate-950/70 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center">
        
        {/* Modern Interactive Logo */}
        <div 
          onClick={() => handleOnMenuClick("Home")} 
          className="group flex items-center gap-2.5 cursor-pointer select-none"
        >
          <div className="relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-purple-500/50 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="font-black text-lg tracking-tighter bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              OV
            </span>
          </div>
          <span className="font-bold text-sm tracking-widest text-gray-400 uppercase hidden sm:inline-block transition-colors duration-300 group-hover:text-white">
            OM <span className="text-purple-400 group-hover:text-cyan-400 transition-colors duration-300">PRAKASH</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:block">
          <ul className="flex flex-row items-center gap-1.5 lg:gap-3">
            {menuItems.map((item) => {
              const active = isActive === item.id;
              return (
                <li
                  key={item.id}
                  onClick={() => handleOnMenuClick(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide cursor-pointer rounded-xl transition-all duration-300 hover:text-white ${
                    active ? "text-purple-400" : "text-gray-400"
                  }`}
                >
                  {/* Subtle glass capsule for active item background */}
                  {active && (
                    <div className="absolute inset-0 rounded-xl bg-white/5 border border-white/5 -z-10 animate-fade-in" />
                  )}
                  {item.label}
                  {/* Sliding Underline Indicator */}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full transition-all duration-300 origin-left ${
                      active ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-50"
                    }`}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        {/* Desktop Socials */}
        <div className="hidden md:flex flex-row items-center gap-4 text-gray-400 text-lg border-l border-white/10 pl-5 ml-2">
          <a
            className="hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform"
            href="https://www.linkedin.com/in/om-prakash-vishwakarma-46b9222b9"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <IoLogoLinkedin />
          </a>
          <a
            className="hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform"
            href="https://github.com/OmPrakash162002"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <VscGithub />
          </a>
        </div>

        {/* Mobile Menu Toggle Burger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-gray-300 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <RxCross2 className="size-5" /> : <IoMenu className="size-5" />}
        </button>
      </div>

      {/* Mobile Glass Drawer Menu Dropdown */}
      <div
        className={`absolute top-20 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm rounded-2xl bg-slate-950/90 border border-white/10 p-5 backdrop-blur-xl shadow-2xl md:hidden transition-all duration-300 ease-in-out origin-top ${
          menuOpen 
            ? "opacity-100 scale-100 visible" 
            : "opacity-0 scale-95 invisible pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const active = isActive === item.id;
            return (
              <li
                key={item.id}
                onClick={() => handleOnMenuClick(item.id)}
                className={`w-full px-4 py-3 text-sm font-medium tracking-wide rounded-xl transition-all duration-300 cursor-pointer ${
                  active 
                    ? "bg-white/5 border border-white/5 text-purple-400 font-semibold" 
                    : "text-gray-400 hover:bg-white/[0.02]"
                }`}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
        
        {/* Mobile Dropdown Social Row Divider */}
        <div className="flex flex-row justify-center items-center gap-6 text-gray-400 text-lg border-t border-white/5 mt-4 pt-4">
          <a
            className="hover:text-cyan-400 py-1 transition-colors"
            href="https://www.linkedin.com/in/om-prakash-vishwakarma-46b9222b9"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoLinkedin className="size-5" />
          </a>
          <a
            className="hover:text-purple-400 py-1 transition-colors"
            href="https://github.com/OmPrakash162002"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub className="size-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;