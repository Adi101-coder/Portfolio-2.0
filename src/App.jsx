import React, { useContext, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import AnimatedBackground from './components/AnimatedBackground';
import BackgroundBeams from './components/BackgroundBeams';
import FloatingSocialDock from './components/FloatingSocialDock';
import './App.css';

// Lazy load components for better performance
const MyWorks = lazy(() => import('./myworks'));
const ClassWorks = lazy(() => import('./components/ClassWorks'));

// Loading component for lazy-loaded routes
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '1.2rem',
    color: 'var(--text-color)'
  }}>
    Loading...
  </div>
);

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}-mode`}>
      <AnimatedBackground />
      <BackgroundBeams />
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
              <Suspense fallback={<LoadingSpinner />}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <ClassWorks />
                </motion.div>
              </Suspense>
            } />
            <Route path="/myworks" element={
              <Suspense fallback={<LoadingSpinner />}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <MyWorks />
                </motion.div>
              </Suspense>
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