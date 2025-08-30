

import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const Links = [
    { id: "/", txt: "Home" },
    { id: "/about", txt: "About" },
    { id: "/skills", txt: "Skills" },
    { id: "/projects", txt: "Projects" },
    { id: "/contact", txt: "Contact Me" },
    
  ];

  const [activeId, setActiveId] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home";
      Links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = link.id;
          }
        }
      });
      setActiveId(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 5s ease infinite;
          }
        `}
      </style>

      <nav className="bg-[#0d1126] shadow-md fixed w-full top-0 border-blue-900 border-b-1  z-50">
        <div className="max-w-[1260px] flex items-center justify-between mx-auto p-4 text-white">
          
          {/* Logo */}
          <div className="bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#3dc27d] text-transparent bg-clip-text animate-gradient">
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">Rohit Parmar</h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden  md:flex flex-row gap-x-10 text-lg"> 
            {Links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative pb-1 transition
                  ${activeId === link.id
                    ? 'text-white font-semibold border-b-2 border-blue-500' 
                    :'text-white hover:text-blue-600'}`}
              >
                {link.txt}
                <span
                  className={`absolute left-0 bottom-0 h-[3px] bg-blue-400 transition-all duration-300 ${
                    activeId === link.id ? 'w-full' : 'w-0 hover:w-full'
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-3xl text-gray-700 focus:outline-none"
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute left-0 right-0 mt-4 bg-white shadow-md border-t p-4 flex flex-col gap-4">
            {Links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={`text-lg 
                  ${activeId === link.id
                    ? 'text-blue-900 font-semibold'
                    : 'text-gray-700 hover:text-blue-600'}`}
              >
                {link.txt}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;



