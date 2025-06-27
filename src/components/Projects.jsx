import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import '../Stylesheets/Projects.css';


const Projects = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI and secure payment integration.",
      tech: "React • Node.js • MongoDB",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&auto=format",
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/username/ecommerce-platform"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features.",
      tech: "React • Firebase • Tailwind",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&auto=format",
      liveUrl: "https://example-taskapp.com",
      githubUrl: "https://github.com/username/task-management"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather monitoring dashboard with interactive maps and forecasts.",
      tech: "JavaScript • API • Chart.js",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop&auto=format",
      liveUrl: "https://example-weather.com",
      githubUrl: "https://github.com/username/weather-dashboard"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Responsive portfolio website with smooth animations and modern design.",
      tech: "React • CSS3 • Framer Motion",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop&auto=format",
      liveUrl: "https://example-portfolio.com",
      githubUrl: "https://github.com/username/portfolio"
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
                />
                <motion.div 
                  className="project-overlay"
                  variants={overlayVariants}
                >
                  <div className="project-links">
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