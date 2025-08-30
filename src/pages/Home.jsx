
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import profile_img from '../assets/profile-img.jpg'

const Home = () => {
  return (
    <div id='/' className='py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950'>
      <div className='min-h-screen flex items-center justify-center px-12'>
        <div className='max-w-[1260px] w-full flex flex-col md:flex-row items-center justify-between gap-12'>
          
          {/* Section 1 */}
          <motion.div 
            className='text-center md:text-left'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className='text-4xl md:text-5xl font-bold text-gray-100 mb-4'>
              Hi, I'm <span className='text-blue-500'>Rohit</span>
            </h1>
            <h2 className='text-2xl md:text-3xl font-medium text-gray-300'>
              I'm a passionate{' '}
              <span className='text-blue-400 font-semibold'>
                <Typewriter
                  words={['MERN Stack Developer', 'React Developer', 'DSA Learner']}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <p className='mt-4 text-gray-400 max-w-lg'>
              I love building beautiful, functional, and accessible websites that make a real impact.
            </p>

            <a 
              href="#con"
              className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Section 2 — Profile Image (rectangle with animation + shadow) */}
          <motion.div
            className='relative w-72 h-80 overflow-hidden shadow-2xl rounded-2xl border-4 border-blue-500'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <img 
              src={profile_img} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-2xl ring-2 ring-blue-400 animate-pulse"></div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Home
