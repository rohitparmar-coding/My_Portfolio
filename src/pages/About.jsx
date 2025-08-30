


import React from "react";
import profile_img from '../assets/profile-img.jpg'
import resumePDF from '../assets/Resume.pdf'


const About = () => {
  return (
    <section id='/about' className="bg-[#0d1126] text-white py-26 px-16">
      {/* Wrapper with max width */}
      <div className="max-w-[1260px] mx-auto p-8 ">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center ">
          <h2 className="text-3xl font-bold mb-2  ">ABOUT ME</h2>
        <p className="text-gray-500 mb-8 ">
        Get to know me better
        </p>

        </div>
        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-center gap-8">
          {/* Profile Image */}
          <div className="flex-shrink-0 w-[40%]">
            <img
              src={profile_img}
              alt="Profile"
              className="w-48 h-48 md:w-85 md:h-86 rounded-full shadow-2xl border-4 border-blue-200 object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex-1 text-gray-300">
            <p className="mb-2 leading-relaxed text-sm md:text-base">
              Hello! I’m Rohit Parmar, a tech enthusiast and problem-solver who loves turning ideas into digital experiences. I thrive at the intersection of creativity and code, building apps that are both functional and visually engaging.
            </p>
             <p className="mb-2 leading-relaxed text-sm md:text-base">
            My toolkit includes JavaScript, React, Node.js, and Python. I’m always curious, always learning, and passionate about exploring new technologies.
             </p>
             <p className="mb-2 leading-relaxed text-sm md:text-base">
               Outside the screen, I enjoy experimenting with AI, reading about emerging tech, and tinkering with personal projects that challenge me to grow.
             </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm md:text-base">
              <p>
                <span className="font-semibold">BIRTHPLACE:</span> Nipaniya
            
              </p>
              <p>
                <span className="font-semibold">RESIDENCE:</span> Bhopal MP
              </p>
              <p>
                <span className="font-semibold">BORN:</span> 12/08/2004
              </p>
              <p>
                <span className="font-semibold">EDUCATION:</span> B.Tech
              </p>
              <p>
                <span className="font-semibold">HOBBIES:</span> Sketching, traveling, coding
              </p>
              <p>
                <span className="font-semibold">EMAIL:</span> rohitparmar8349@gmail.com
              </p>
            </div>

            {/* Resume Button */}
            <a
              href={resumePDF}
              download
              className="inline-block mt-6 bg-blue-600 text-white font-semibold px-6 py-3 rounded shadow hover:bg-blue-800 transition"
            >
              📄 Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
