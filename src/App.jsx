import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-8 text-slate-400 text-sm">
          © {new Date().getFullYear()} Aditya Sakhale. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
