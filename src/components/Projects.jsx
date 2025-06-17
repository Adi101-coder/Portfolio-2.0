import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, ArrowRight, Code, Star, Zap } from 'lucide-react';
import '../Stylesheets/Projects.css';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.projects-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Neural Network Dashboard",
      description: "Advanced machine learning visualization platform with real-time model training, interactive neural network graphs, and comprehensive performance analytics.",
      technologies: ["React", "Python", "TensorFlow", "D3.js", "WebGL"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      liveLink: "https://neural-dashboard-demo.com",
      githubLink: "https://github.com/username/neural-dashboard",
      category: "AI/ML",
      status: "Featured"
    },
    {
      id: 2,
      title: "Quantum Code Editor",
      description: "Next-generation code editor with quantum-inspired algorithms for code completion, intelligent refactoring, and collaborative development workflows.",
      technologies: ["Electron", "Monaco Editor", "Node.js", "WebAssembly", "Redis"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      liveLink: "https://quantum-editor.dev",
      githubLink: "https://github.com/username/quantum-editor",
      category: "Developer Tools",
      status: "Popular"
    },
    {
      id: 3,
      title: "Blockchain Explorer",
      description: "Comprehensive blockchain analysis platform with transaction tracking, smart contract auditing, and decentralized finance monitoring capabilities.",
      technologies: ["Vue.js", "Solidity", "GraphQL", "Docker", "IPFS"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      liveLink: "https://chain-explorer.app",
      githubLink: "https://github.com/username/blockchain-explorer",
      category: "Web3",
      status: "New"
    },
    {
      id: 4,
      title: "Augmented Reality Studio",
      description: "Immersive AR development platform enabling creators to build, test, and deploy augmented reality experiences with intuitive drag-and-drop interface.",
      technologies: ["Three.js", "WebXR", "React", "Firebase", "WebGL"],
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      liveLink: "https://ar-studio.tech",
      githubLink: "https://github.com/username/ar-studio",
      category: "AR/VR",
      status: "Featured"
    }
  ];

  const handleExploreMore = () => {
    // Navigate to works page
    console.log('Navigate to works page');
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {/* Animated Background Elements */}
        <div className="bg-elements">
          <div className="floating-orb orb-1"></div>
          <div className="floating-orb orb-2"></div>
          <div className="floating-orb orb-3"></div>
          <div className="grid-pattern"></div>
        </div>

        <div className={`projects-header ${isVisible ? 'animate-in' : ''}`}>
          <div className="section-badge">
            <Star className="badge-icon" />
            <span>Featured Projects</span>
          </div>
          <h2 className="section-title">
            Crafting Digital
            <span className="title-highlight"> Masterpieces</span>
          </h2>
          <p className="section-subtitle">
            Innovative solutions that push the boundaries of technology and creativity
          </p>
        </div>

        <div className={`projects-grid ${isVisible ? 'animate-in' : ''}`}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${hoveredProject === project.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="card-glow"></div>
              
              <div className="project-badges">
                <span className={`status-badge ${project.status.toLowerCase()}`}>
                  {project.status}
                </span>
                <span className="category-badge">{project.category}</span>
              </div>

              <div className="project-image-wrapper">
                <div className="image-container">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <div className="project-links">
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-link live-link"
                        >
                          <ExternalLink className="link-icon" />
                          <span>Live Demo</span>
                        </a>
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-link github-link"
                        >
                          <Github className="link-icon" />
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="image-border"></div>
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="tech-stack">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-pill">
                      <Code className="tech-icon" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-shine"></div>
            </div>
          ))}
        </div>

        <div className={`explore-section ${isVisible ? 'animate-in' : ''}`}>
          <div className="explore-content">
            <div className="explore-text">
              <h3 className="explore-title">Discover More</h3>
              <p className="explore-subtitle">
                Explore my complete portfolio of innovative projects and creative solutions
              </p>
            </div>
            <button className="explore-btn" onClick={handleExploreMore}>
              <span className="btn-text">View All Projects</span>
              <div className="btn-icon-wrapper">
                <ArrowRight className="btn-icon" />
              </div>
              <div className="btn-ripple"></div>
            </button>
          </div>
          <div className="explore-decoration">
            <Zap className="decoration-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;