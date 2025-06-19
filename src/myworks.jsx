import React, { useState, useEffect } from 'react';
import { ExternalLink, Eye, Star, GitBranch, Calendar } from 'lucide-react';
import { useTheme } from './context/ThemeContext'; // Import from your existing context

const MyWorks = () => {
  const { theme } = useTheme(); // Use your existing theme context
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState(new Set());

  const isDark = theme === 'dark';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('[data-index]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with advanced filtering, real-time inventory, and seamless payment integration",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      status: "Live",
      stars: 145,
      commits: 89,
      date: "2024"
    },
    {
      id: 2,
      title: "AI Task Manager",
      description: "Intelligent productivity app with AI-powered task prioritization, drag-and-drop functionality, and team collaboration",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tags: ["React", "TypeScript", "OpenAI", "Firebase"],
      link: "#",
      status: "Beta",
      stars: 78,
      commits: 156,
      date: "2024"
    },
    {
      id: 3,
      title: "Weather Analytics Hub",
      description: "Real-time weather tracking with predictive analytics, interactive maps, and customizable dashboards",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      tags: ["JavaScript", "D3.js", "Weather API", "Chart.js"],
      link: "#",
      status: "Live",
      stars: 92,
      commits: 67,
      date: "2023"
    },
    {
      id: 4,
      title: "Creative Portfolio",
      description: "Interactive portfolio website with 3D animations, smooth transitions, and responsive design",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
      tags: ["Three.js", "React", "GSAP", "Tailwind"],
      link: "#",
      status: "Live",
      stars: 234,
      commits: 45,
      date: "2024"
    },
    {
      id: 5,
      title: "Blockchain Wallet",
      description: "Secure cryptocurrency wallet with multi-chain support, DeFi integration, and advanced security features",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
      tags: ["Web3", "Solidity", "React", "Ethers.js"],
      link: "#",
      status: "Development",
      stars: 56,
      commits: 123,
      date: "2024"
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description: "Comprehensive social media management platform with analytics, scheduling, and engagement tracking",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop",
      tags: ["Vue.js", "Python", "Redis", "PostgreSQL"],
      link: "#",
      status: "Live",
      stars: 167,
      commits: 201,
      date: "2023"
    }
  ];

  const themeColors = {
    light: {
      bg: '#ffffff',
      cardBg: '#f8f9fa',
      text: '#000000',
      textSecondary: '#333333',
      textMuted: '#666666',
      border: '#e0e0e0',
      hover: '#f0f0f0',
      accent: '#000000',
      accentHover: '#333333',
      shadow: 'rgba(0, 0, 0, 0.1)',
      shadowHover: 'rgba(0, 0, 0, 0.2)'
    },
    dark: {
      bg: '#0a0a0a',
      cardBg: '#1a1a1a',
      text: '#ffffff',
      textSecondary: '#cccccc',
      textMuted: '#999999',
      border: '#333333',
      hover: '#2a2a2a',
      accent: '#ffffff',
      accentHover: '#cccccc',
      shadow: 'rgba(0, 0, 0, 0.3)',
      shadowHover: 'rgba(0, 0, 0, 0.5)'
    }
  };

  const currentTheme = isDark ? themeColors.dark : themeColors.light;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return '#22c55e';
      case 'Beta': return '#f59e0b';
      case 'Development': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: currentTheme.bg,
      color: currentTheme.text,
      transition: 'all 0.3s ease',
      padding: '2rem',
      paddingTop: '4rem', // Add top padding to account for your existing theme toggle
      fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
      position: 'relative'
    },
    header: {
      textAlign: 'center',
      marginBottom: '4rem',
      maxWidth: '800px',
      margin: '0 auto 4rem auto'
    },
    title: {
      fontSize: 'clamp(3rem, 8vw, 6rem)',
      fontWeight: '900',
      backgroundImage: `linear-gradient(135deg, ${currentTheme.text}, ${currentTheme.textMuted})`,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      color: 'transparent',
      marginBottom: '1rem',
      letterSpacing: '-0.02em',
      position: 'relative'
    },
    titleAccent: {
      position: 'absolute',
      bottom: '-20px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100px',
      height: '4px',
      background: `linear-gradient(90deg, ${currentTheme.accent}, ${currentTheme.textMuted})`,
      borderRadius: '2px',
      animation: 'expandLine 1.5s ease-out 0.5s both'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: currentTheme.textMuted,
      fontWeight: '400',
      lineHeight: '1.6',
      marginTop: '2rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
      gap: '2.5rem',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    card: {
      background: currentTheme.cardBg,
      border: `1px solid ${currentTheme.border}`,
      borderRadius: '20px',
      overflow: 'hidden',
      transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
      cursor: 'pointer',
      position: 'relative',
      boxShadow: `0 4px 20px ${currentTheme.shadow}`,
      opacity: 0,
      transform: 'translateY(30px)',
      animation: 'fadeInUp 0.6s ease-out both'
    },
    cardHover: {
      transform: 'translateY(-12px) scale(1.02)',
      boxShadow: `0 20px 40px ${currentTheme.shadowHover}`,
      borderColor: currentTheme.accent
    },
    imageContainer: {
      position: 'relative',
      height: '240px',
      overflow: 'hidden',
      background: `linear-gradient(135deg, ${currentTheme.textMuted}20, ${currentTheme.accent}10)`
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'all 0.4s ease',
      filter: isDark ? 'brightness(0.9) contrast(1.1)' : 'brightness(1.1) contrast(0.9)'
    },
    imageHover: {
      transform: 'scale(1.1)',
      filter: isDark ? 'brightness(1) contrast(1.2)' : 'brightness(1.2) contrast(1)'
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `linear-gradient(135deg, ${currentTheme.accent}90, ${currentTheme.textMuted}60)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      opacity: 0,
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)'
    },
    overlayVisible: {
      opacity: 1
    },
    actionBtn: {
      background: currentTheme.bg,
      color: currentTheme.text,
      border: 'none',
      borderRadius: '12px',
      padding: '0.75rem 1.25rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.9rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      transform: 'translateY(10px)',
      boxShadow: `0 4px 15px ${currentTheme.shadow}`
    },
    content: {
      padding: '2rem'
    },
    statusBadge: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      color: '#ffffff',
      padding: '0.4rem 0.8rem',
      borderRadius: '20px',
      fontSize: '0.75rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    projectTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: currentTheme.text,
      marginBottom: '0.75rem',
      lineHeight: '1.3'
    },
    description: {
      color: currentTheme.textMuted,
      lineHeight: '1.6',
      marginBottom: '1.5rem',
      fontSize: '0.95rem'
    },
    stats: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      marginBottom: '1.5rem',
      fontSize: '0.85rem',
      color: currentTheme.textMuted
    },
    stat: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem'
    },
    tags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem'
    },
    tag: {
      background: `${currentTheme.accent}15`,
      color: currentTheme.text,
      padding: '0.4rem 0.8rem',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: '500',
      border: `1px solid ${currentTheme.border}`,
      transition: 'all 0.2s ease'
    },
    cta: {
      textAlign: 'center',
      marginTop: '3rem',
      padding: '2rem 2rem'
    },
    ctaTitle: {
      fontSize: '2.5rem',
      fontWeight: '800',
      color: currentTheme.text,
      marginBottom: '1rem'
    },
    ctaSubtitle: {
      fontSize: '1.1rem',
      color: currentTheme.textMuted,
      marginBottom: '3rem',
      maxWidth: '600px',
      margin: '0 auto 3rem auto',
      lineHeight: '1.6'
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes expandLine {
            from { width: 0; }
            to { width: 100px; }
          }
          
          @media (max-width: 768px) {
            .grid { grid-template-columns: 1fr !important; }
            .container { padding: 1rem !important; }
          }
        `}
      </style>

      <div style={styles.header}>
        <h1 style={styles.title}>
          My Works
          <div style={styles.titleAccent} />
        </h1>
        <p style={styles.subtitle}>
          A curated collection of innovative projects showcasing modern web development,
          creative problem-solving, and cutting-edge technologies
        </p>
      </div>

      <div style={styles.grid}>
        {projects.map((project, index) => {
          const isVisible = visibleCards.has(index.toString());
          const isHovered = hoveredCard === project.id;
          
          return (
            <div
              key={project.id}
              data-index={index}
              style={{
                ...styles.card,
                ...(isHovered ? styles.cardHover : {}),
                animationDelay: `${index * 0.1}s`,
                ...(isVisible ? { opacity: 1, transform: 'translateY(0)' } : {})
              }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.imageContainer}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    ...styles.image,
                    ...(isHovered ? styles.imageHover : {})
                  }}
                />
                <div style={{
                  ...styles.overlay,
                  ...(isHovered ? styles.overlayVisible : {})
                }}>
                  <button
                    style={{
                      ...styles.actionBtn,
                      transform: isHovered ? 'translateY(0)' : 'translateY(10px)'
                    }}
                  >
                    <Eye size={16} />
                    Preview
                  </button>
                  <button
                    style={{
                      ...styles.actionBtn,
                      transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
                      transitionDelay: '0.1s'
                    }}
                  >
                    <ExternalLink size={16} />
                    Visit
                  </button>
                </div>
                <div style={{
                  ...styles.statusBadge,
                  background: getStatusColor(project.status)
                }}>
                  {project.status}
                </div>
              </div>

              <div style={styles.content}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.description}>{project.description}</p>
                
                <div style={styles.stats}>
                  <div style={styles.stat}>
                    <Star size={14} />
                    {project.stars}
                  </div>
                  <div style={styles.stat}>
                    <GitBranch size={14} />
                    {project.commits}
                  </div>
                  <div style={styles.stat}>
                    <Calendar size={14} />
                    {project.date}
                  </div>
                </div>

                <div style={styles.tags}>
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      style={{
                        ...styles.tag,
                        animationDelay: `${tagIndex * 0.1}s`
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={styles.cta}>
        <h2 style={styles.ctaTitle}>Ready to Build Something Amazing?</h2>
        <p style={styles.ctaSubtitle}>
          Let's collaborate on your next project and bring your ideas to life with innovative solutions
        </p>
      </div>
    </div>
  );
};

export default MyWorks;