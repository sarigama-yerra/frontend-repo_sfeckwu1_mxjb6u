import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white selection:bg-cyan-400/30 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
