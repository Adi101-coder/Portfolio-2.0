import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MyWorks from './myworks'; // Use consistent PascalCase naming
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <div className="theme-toggle-container">
          <ThemeToggle />
        </div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Skills />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/myworks" element={<MyWorks />} />
          </Routes>
        </main>
        <div className="social-taskbar">
          <div className="social-icons">
            <a href="https://x.com/adit_katiyar"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/adit-katiyar-0863692b9/"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://leetcode.com/u/Aditk060/"><i className="fas fa-code"></i></a>
            <a href="https://github.com/Adi101-coder"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;