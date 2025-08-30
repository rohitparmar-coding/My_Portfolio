import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiGeeksforgeeks } from "react-icons/si";

const Contact = () => {
  return (
 
    <section id="/contact"  className="bg-[#0d1126] text-white py-26 px-16">    <div id="con"></div>
      <div className="max-w-[1100px] mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3 animate-fadeIn">Get In Touch</h1>
          <p className="text-gray-400">Let's work together on your next project</p>
        </div>

        {/* Main Container */}
        <div className="flex flex-col md:flex-row gap-10 items-start justify-between py-12">
          {/* Left - Contact Info */}
          <div className="bg-[#0d1126]">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Let's Connect</h2>
            <p className="text-gray-400 max-w-[350px] mb-6">
              I'm always interested in new opportunities and exciting projects. Feel free to reach out!
            </p>

            {/* Email */}
            <div className="flex items-center gap-3 mb-4">
              <FaEnvelope className="text-blue-400 text-lg" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">rohitparmar8349@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 mb-4">
              <FaPhoneAlt className="text-blue-400 text-lg" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+91 8349358956</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-400 text-lg" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">Bhopal Madhya Pradesh India</p>
              </div>
            </div>
          </div>

          {/* Right - Coding Platforms */}
          <div className="bg-[#121735] p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">Coding Platforms</h2>
            <p className="text-gray-400 mb-6">Connect with me on various coding platforms</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/rohit-parmar-1b600a254/" target="_blank" rel="noopener noreferrer" className="bg-[#0d1126] p-4 rounded-lg flex flex-col items-center hover:scale-105 transition-transform">
                <FaLinkedin className="text-blue-500 text-3xl" />
                <span className="text-sm mt-2">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a href="https://github.com/rohitparmar-coding" target="_blank" rel="noopener noreferrer" className="bg-[#0d1126] p-4 rounded-lg flex flex-col items-center hover:scale-105 transition-transform">
                <FaGithub className="text-white text-3xl" />
                <span className="text-sm mt-2">GitHub</span>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/.i_am_rohit?igsh=MWZ1b2NyZjBsdGkydA==" target="_blank" rel="noopener noreferrer" className="bg-[#0d1126] p-4 rounded-lg flex flex-col items-center hover:scale-105 transition-transform">
                <FaInstagram className="text-pink-500 text-3xl" />
                <span className="text-sm mt-2">Instagram</span>
              </a>

              {/* LeetCode */}
              <a href="https://leetcode.com/u/Rohitcode001/" target="_blank" rel="noopener noreferrer" className="bg-[#0d1126] p-4 rounded-lg flex flex-col items-center hover:scale-105 transition-transform">
                <SiLeetcode className="text-yellow-400 text-3xl" />
                <span className="text-sm mt-2">LeetCode</span>
              </a>

              {/* HackerRank */}
              <a href="https://www.hackerrank.com/rohitparmar8349" target="_blank" rel="noopener noreferrer" className="bg-[#0d1126] p-4 rounded-lg flex flex-col items-center hover:scale-105 transition-transform">
                <SiHackerrank className="text-green-500 text-3xl" />
                <span className="text-sm mt-2">HackerRank</span>
              </a>

              {/* GeeksforGeeks */}
              <a href="https://www.geeksforgeeks.org/user/rohitparqwjm/" target="_blank" rel="noopener noreferrer" className="bg-[#0d1126] p-4 rounded-lg flex flex-col items-center hover:scale-105 transition-transform">
                <SiGeeksforgeeks className="text-green-400 text-3xl" />
                <span className="text-sm mt-2">GeeksforGeeks</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
