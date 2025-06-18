import React from 'react';
import '../Stylesheets/Skills.css';

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML5", level: 90 },
        { name: "CSS3/SCSS", level: 85 },
        { name: "Vue.js", level: 75 },
        { name: "Bootstrap", level: 80 }
      ]
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "SQL", level: 65 },
        { name: "Python", level: 60 }
      ]
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 },
        { name: "Figma", level: 75 },
        { name: "Adobe", level: 70 }
      ]
    },
    {
      category: "Cloud & Deployment",
      items: [
        { name: "Heroku", level: 65 },
        { name: "Netlify", level: 80 },
        { name: "Vercel", level: 85 },
        { name: "Render", level: 75 }
      ]
    },
    {
      category: "Machine Learning",
      items: [
        { name: "Keras", level: 60 },
        { name: "NumPy", level: 65 },
        { name: "Pandas", level: 70 },
        { name: "Matplotlib", level: 65 },
        { name: "Scikit-Learn", level: 70 }
      ]
    },
    {
      category: "Programming Languages",
      items: [
        { name: "C", level: 70 },
        { name: "C++", level: 75 },
        { name: "Java", level: 80 }
      ]
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.items.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;