import React from 'react';
import { motion } from 'framer-motion';
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.3
      }
    })
  };

  return (
    <section className="skills-section" id="skills">
      <motion.div 
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
        >
          {skills.map((category, index) => (
            <motion.div 
              className="skill-category" 
              key={index}
              variants={categoryVariants}
            >
              <motion.h3 
                className="category-title"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {category.category}
              </motion.h3>
              
              <motion.div 
                className="skills-list"
                variants={containerVariants}
              >
                {category.items.map((skill, skillIndex) => (
                  <motion.div 
                    className="skill-item" 
                    key={skillIndex}
                    variants={skillVariants}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;