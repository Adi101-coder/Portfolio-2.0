import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MyWorks from './myworks'; // Use consistent PascalCase naming
import ThemeToggle from './components/ThemeToggle';
import AnimatedBackground from './components/AnimatedBackground';
import FloatingSocialDock from './components/FloatingSocialDock';
import ClassWorks from './components/ClassWorks';
import './App.css';

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}-mode`}>
      <AnimatedBackground />
      <div className="theme-toggle-container">
        <ThemeToggle />
      </div>
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Hero />
                <Skills />
                <Projects />
                <Contact />
              </motion.div>
            } />
            <Route path="/classworks" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <ClassWorks />
              </motion.div>
            } />
            <Route path="/myworks" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <MyWorks />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </main>
      <FloatingSocialDock />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;