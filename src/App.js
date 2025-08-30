import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Project from './pages/Project'
import Contact from './pages/Contect'
import Footer from './components/Footer'
import Education from './pages/Education'
import CustomCursor from "./components/CustomCursor";


const App = () => {
  return (
    <div className='bg-white
        w-[100vw] h-[100vh] overflow-auto '>
      <CustomCursor />
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Project />
      <Contact />
      <Footer />


    </div>

  )
}

export default App


