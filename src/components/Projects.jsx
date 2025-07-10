import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import '../Stylesheets/Projects.css';

// Import project images
import hireIndexImage from '../assets/HireIndex.png';
import amanstarImage from '../assets/Amanstar.png';
import vrikshaImage from '../assets/Vriksha.png';

const Projects = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const projects = [
    {
      id: 1,
      title: "HireIndex",
      description: "AI-powered resume parser that analyzes resumes against ATS requirements and returns comprehensive ATS scores with detailed feedback for improvement.",
      tech: "React • TypeScript • Express.js • Google Gemini AI • PDF/Word Parsing",
      image: hireIndexImage,
      liveUrl: "https://hire-index-v1-5e4w.vercel.app/",
      githubUrl: "https://github.com/AxAbhishek0309/HireIndex-v1",
      status: "Live"
    },
    {
      id: 2,
      title: "AmanStar",
      description: "A completed innovative project showcasing cutting-edge features and modern web technologies.",
      tech: "React • Node.js • Modern Web Stack",
      image: amanstarImage,
      liveUrl: "https://amanstar-it.com/",
      githubUrl: "https://github.com/Adi101-coder/AmanStar/tree/main",
      status: "Live"
    },
    {
      id: 3,
      title: "Vriksha",
      description: "E-commerce platform for premium plants with 3D visualizations, AI chatbot, and comprehensive plant care features.",
      tech: "Next.js 15 • TypeScript • TailwindCSS • Three.js • NextAuth.js",
      image: vrikshaImage,
      liveUrl: "https://vrikshaby-gradians.vercel.app/",
      githubUrl: "https://github.com/AxAbhishek0309/VrikshabyGradians",
      status: "Live"
    },
    {
      id: 4,
      title: "Project Template",
      description: "A template project showcasing modern web development practices and innovative solutions.",
      tech: "React • Modern Stack • Best Practices",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop&auto=format",
      liveUrl: "#",
      githubUrl: "#",
      status: "Coming Soon"
    }
  ];

  const handleViewAllWorks = () => {
    navigate('/myworks');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section className={`projects-section ${theme}`}>
      <motion.div 
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="projects-title">Projects</h2>
          <p className="projects-subtitle">A showcase of my recent work</p>
        </motion.div>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className="project-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    console.error(`Failed to load image for ${project.title}:`, project.image);
                    e.target.src = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&auto=format";
                  }}
                />
                <div className="project-status-badge">
                  {project.status}
                </div>
                <motion.div 
                  className="project-overlay"
                  variants={overlayVariants}
                >
                  <div className="project-links">
                    {project.liveUrl !== "#" ? (
                      <motion.a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link live-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        Live View
                      </motion.a>
                    ) : (
                      <motion.span 
                        className="project-link live-link disabled"
                        title="Coming Soon"
                      >
                        Coming Soon
                      </motion.span>
                    )}
                    {project.githubUrl !== "#" ? (
                      <motion.a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link github-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        GitHub
                      </motion.a>
                    ) : (
                      <motion.span 
                        className="project-link github-link disabled"
                        title="Repository not available"
                      >
                        Private
                      </motion.span>
                    )}
                  </div>
                </motion.div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  <span className="tech-stack">{project.tech}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="projects-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="view-all-btn"
            onClick={handleViewAllWorks}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            View All Works
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;