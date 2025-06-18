import React from 'react';
import './myworks.css';

const MyWorks = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform built with React and Node.js",
      image: "https://via.placeholder.com/300x200",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app with drag-and-drop functionality",
      image: "https://via.placeholder.com/300x200",
      tags: ["React", "TypeScript", "Firebase"],
      link: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather tracking with interactive charts",
      image: "https://via.placeholder.com/300x200",
      tags: ["JavaScript", "API", "Chart.js"],
      link: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Responsive portfolio site with modern animations",
      image: "https://via.placeholder.com/300x200",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "#"
    }
  ];

  return (
    <div className="myworks-container">
      <div className="header-section">
        <h1 className="main-title">My Works</h1>
        <p className="subtitle">A collection of my recent projects and creations</p>
      </div>
      
      <div className="works-grid">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="work-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="card-image">
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <a href={project.link} className="view-btn">
                  View Project
                </a>
              </div>
            </div>
            
            <div className="card-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="tags-container">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="cta-section">
        <h2>Interested in working together?</h2>
        <button className="contact-btn">Get In Touch</button>
      </div>
    </div>
  );
};

export default MyWorks;