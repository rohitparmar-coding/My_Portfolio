
import React from 'react';
import portfolioImg from "../assets/protfolio.png";
import weatherImg from "../assets/weatherForcast.png";
import studyNotionImg from "../assets/studyNotion.png";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const Project = () => {

  const projects = [
    { 
      title: "Weather Forecast App", 
      desc: "A React app that shows real-time weather updates using the OpenWeather API.",
      img: weatherImg,
      skills: [
        { icon: <FaHtml5 className="text-red-500" />, name: "HTML" },
        { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
        { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
      ]
    },
    { 
      title: "Portfolio Website", 
      desc: "A personal website to showcase my projects, skills, and contact information.",
      img: portfolioImg,
      skills: [
        { icon: <FaReact className="text-sky-400" />, name: "React" },
        { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind CSS" },
      ]
    },
    { 
      title: "StudyNotion", 
      desc: "An online learning platform where users can create, browse, and enroll in courses. Built with the MERN stack.",
      img: studyNotionImg,
      skills: [
        { icon: <FaReact className="text-sky-400" />, name: "React" },
        { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind CSS" },
        { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
        { icon: <SiExpress className="text-gray-600" />, name: "Express.js" },
        { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
      ]
    }
  ];

  return (
    <div id="/projects" className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-32 px-16">
      <div className="max-w-[1260px] mx-auto flex flex-col items-center gap-12">
        
        {/* Heading */}
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
          Projects
        </h1>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-3  ">
          {projects.map((pro, ind) => (
            <div 
              key={ind} 
              className="bg-gray-900/80 border border-gray-800 px-4 py-14 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fadeInUp"
              style={{ animationDelay: `${ind * 0.2}s` }}
            >
              {/* Image */}
              <img 
                src={pro.img} 
                alt={pro.title} 
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-[220px]">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-2">{pro.title}</h2>
                  <p className="text-gray-500 text-sm">{pro.desc}</p>
                </div>

                {/* Skills */}
                <div className="mt-4 flex flex-wrap gap-3">
                  {pro.skills.map((skill, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-1 bg-[#0d1126] border px-3 py-1 rounded-full text-sm shadow-sm hover:bg-gray-600 transition"
                    >
                      {skill.icon}
                      <span className="text-gray-400">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Project;


