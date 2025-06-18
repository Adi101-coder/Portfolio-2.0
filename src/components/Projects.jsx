import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
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

  return (
    <section className={`projects-section ${theme}`}>
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Projects</h2>
          <p className="projects-subtitle">A showcase of my recent work</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link live-link"
                    >
                      Live View
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link github-link"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  <span className="tech-stack">{project.tech}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-footer">
          <button 
            className="view-all-btn"
            onClick={handleViewAllWorks}
          >
            View All Works
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;