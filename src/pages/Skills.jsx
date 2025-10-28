

import React from "react";
import {
  FaAws,
  FaBootstrap,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import { SiTailwindcss, SiCplusplus, SiMongodb, SiExpress, SiPostman } from "react-icons/si";
import { MdOutlineIntegrationInstructions } from "react-icons/md"; // for OOPs
import { TbLetterC } from "react-icons/tb"; // C language

const skills = [
  { icon: <FaAws size={40} color="#FF9900" />, name: "AWS" },
  { icon: <FaBootstrap size={40} color="#7952B3" />, name: "Bootstrap" },
  { icon: <FaPython size={40} color="#3776AB" />, name: "Python" },
  { icon: <SiCplusplus size={40} color="#00599C" />, name: "C++" },
  { icon: <TbLetterC size={40} color="#A8B9CC" />, name: "C" },
  { icon: <FaHtml5 size={40} color="#E34F26" />, name: "HTML" },
  { icon: <FaCss3Alt size={40} color="#1572B6" />, name: "CSS" },
  { icon: <SiTailwindcss size={40} color="#38BDF8" />, name: "TailwindCSS" },
  { icon: <FaReact size={40} color="#61DBFB" />, name: "React.js" },
  { icon: <FaJs size={40} color="#F7DF1E" />, name: "JavaScript" },
  { icon: <SiExpress size={40} color="#808080" />, name: "Express.js" },
  { icon: <SiMongodb size={40} color="#47A248" />, name: "MongoDB" },
  { icon: <SiPostman size={40} color="#FF6C37" />, name: "Postman" },
  { icon: <MdOutlineIntegrationInstructions size={40} color="#FFD700" />, name: "OOPs" },
];

const Skills = () => {
  return (
    <section id="/skills" className="bg-[#0d1126] text-white py-32 px-16">
      <div className="max-w-[1260px] mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-10 text-white">
          Skills
        </h2>

        <div className="overflow-hidden relative group">
          <div
            className="flex gap-8 animate-scroll group-hover:animate-pulse"
            style={{ animation: "scroll 10s linear infinite" }}
          >
            {[...skills, ...skills].map((skill, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center w-38 h-38 md:w-32 md:h-32 p-6
                bg-[#12122a] rounded-xl shadow-lg transform transition-all duration-500 hover:scale-95 hover:bg-sky-400"
              >
                <div className="transition-transform duration-300 animate-rotate">
                  {skill.icon}
                </div>
                <span className="mt-2 text-white text-sm md:text-base">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* Animation & hover pause */}
          <style>
            {`
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              @keyframes rotate {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              .animate-scroll {
                animation: scroll 10s linear infinite;
              }
              .animate-rotate {
                animation: rotate 6s linear infinite;
              }
              .group:hover .animate-scroll {
                animation-play-state: paused;
              }
            `}
          </style>
        </div>
      </div>
    </section>
  );
};

export default Skills;

