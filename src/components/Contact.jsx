import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext'; // Adjust path as needed

const Contact = () => {
  const { theme } = useContext(ThemeContext) || { theme: 'dark' }; // Fallback to dark if context not available
  
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [animatedCards, setAnimatedCards] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const contactMethods = [
    {
      id: 'twitter',
      title: 'Follow on X',
      subtitle: 'Let\'s connect',
      description: 'Follow me on X for updates and quick conversations',
      value: '@adit_katiyar',
      url: 'https://x.com/adit_katiyar',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      id: 'email',
      title: 'Email Me',
      subtitle: 'Drop me a line',
      description: 'Perfect for detailed discussions and project inquiries',
      value: 'aditkatiyar101@gmail.com',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      )
    },
    {
      id: 'linkedin',
      title: 'Connect on LinkedIn',
      subtitle: 'Professional network',
      description: 'Let\'s connect professionally and explore opportunities',
      value: 'Adit Katiyar',
      url: 'https://www.linkedin.com/in/adit-katiyar-0863692b9/',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    }
  ];

  const handleCardClick = (method) => {
    if (method.id === 'email') {
      setIsFormVisible(true);
      setSelectedMethod(method);
    } else {
      setSelectedMethod(method);
      setAnimatedCards(prev => [...prev, method.id]);
      if (method.url) {
        window.open(method.url, '_blank');
      }
      setTimeout(() => {
        setAnimatedCards(prev => prev.filter(id => id !== method.id));
      }, 1000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || 'Contact from Website');
    const body = encodeURIComponent(`Hi Adit,

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

Best regards,
${formData.name}`);
    
    const mailtoLink = `mailto:aditkatiyar101@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    setIsFormVisible(false);
    setSelectedMethod(null);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const closeForm = () => {
    setIsFormVisible(false);
    setSelectedMethod(null);
  };

  const handleContactDetailClick = (method) => {
    if (method.id === 'email') {
      const mailtoLink = `mailto:${method.value}`;
      window.location.href = mailtoLink;
    } else if (method.url) {
      window.open(method.url, '_blank');
    }
  };

  // Theme-based styles
  const getThemeStyles = () => {
    const isDark = theme === 'dark';
    
    return {
      container: {
        minHeight: '100vh',
        background: isDark ? '#000000' : '#ffffff',
        color: isDark ? '#ffffff' : '#000000',
        padding: '20px 20px 40px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease'
      },
      floatingDot: {
        background: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
      },
      card: {
        background: isDark 
          ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))'
          : 'linear-gradient(135deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.02))',
        border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)'
      },
      cardHover: {
        borderColor: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
        background: isDark 
          ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
          : 'linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05))',
        boxShadow: isDark ? '0 20px 40px rgba(0, 0, 0, 0.3)' : '0 20px 40px rgba(0, 0, 0, 0.15)'
      },
      iconWrapper: {
        background: isDark 
          ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
          : 'linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05))'
      },
      subtitle: {
        color: isDark ? '#aaaaaa' : '#666666'
      },
      description: {
        color: isDark ? '#888888' : '#777777'
      },
      cardValue: {
        background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
        border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)'
      },
      selectedInfo: {
        background: isDark 
          ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))'
          : 'linear-gradient(135deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.03))',
        border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)'
      },
      contactDetail: {
        background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'
      },
      modalOverlay: {
        background: isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'
      },
      modalContent: {
        background: isDark ? '#000000' : '#ffffff',
        border: isDark ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.2)'
      },
      formInput: {
        border: isDark ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.2)',
        background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
        color: isDark ? '#ffffff' : '#000000'
      },
      submitButton: {
        background: isDark 
          ? 'linear-gradient(135deg, #ffffff, #cccccc)'
          : 'linear-gradient(135deg, #000000, #333333)',
        color: isDark ? '#000000' : '#ffffff'
      }
    };
  };

  const themeStyles = getThemeStyles();

  return (
    <div style={themeStyles.container}>
      <style>{`
        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        .floating-dot {
          position: absolute;
          width: 4px;
          height: 4px;
          background: ${themeStyles.floatingDot.background};
          border-radius: 50%;
          transition: all 2s ease;
        }
        
        .floating-dot.delay-1 {
          animation-delay: 0.5s;
          width: 6px;
          height: 6px;
        }
        
        .floating-dot.delay-2 {
          animation-delay: 1s;
          width: 3px;
          height: 3px;
        }

        .contact-methods-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 40px auto 80px;
          position: relative;
          z-index: 2;
        }

        .contact-method-card {
          background: ${themeStyles.card.background};
          border: ${themeStyles.card.border};
          border-radius: 20px;
          padding: 40px 30px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          backdrop-filter: ${themeStyles.card.backdropFilter};
          animation: slideInUp 0.6s ease forwards;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .contact-method-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: ${themeStyles.cardHover.borderColor};
          background: ${themeStyles.cardHover.background};
          box-shadow: ${themeStyles.cardHover.boxShadow};
        }

        .contact-method-card.selected {
          border-color: ${themeStyles.cardHover.borderColor};
          background: ${themeStyles.cardHover.background};
          transform: translateY(-5px) scale(1.05);
        }

        .contact-method-card.animated {
          animation: pulse 0.6s ease;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .card-content {
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .icon-wrapper {
          width: 80px;
          height: 80px;
          margin: 0 auto 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${themeStyles.iconWrapper.background};
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .contact-method-card:hover .icon-wrapper {
          background: ${themeStyles.cardHover.background};
          transform: scale(1.1);
        }

        .contact-method-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 8px;
          color: ${theme === 'dark' ? '#ffffff' : '#000000'};
        }

        .card-subtitle {
          font-size: 1rem;
          color: ${themeStyles.subtitle.color};
          margin-bottom: 15px;
          font-weight: 500;
        }

        .card-description {
          font-size: 0.95rem;
          color: ${themeStyles.description.color};
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .card-value {
          font-size: 1.1rem;
          font-weight: 600;
          color: ${theme === 'dark' ? '#ffffff' : '#000000'};
          padding: 10px 20px;
          background: ${themeStyles.cardValue.background};
          border-radius: 25px;
          display: inline-block;
          border: ${themeStyles.cardValue.border};
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: ${theme === 'dark' 
            ? 'linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.02))'
            : 'linear-gradient(135deg, transparent, rgba(0, 0, 0, 0.02))'};
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .contact-method-card:hover .card-overlay {
          opacity: 1;
        }

        .selected-info {
          max-width: 600px;
          margin: 0 auto 60px;
          text-align: center;
          padding: 40px;
          background: ${themeStyles.selectedInfo.background};
          border-radius: 20px;
          border: ${themeStyles.selectedInfo.border};
          animation: fadeIn 0.5s ease;
          position: relative;
          z-index: 2;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .selected-info h3 {
          font-size: 1.5rem;
          margin-bottom: 25px;
          color: ${theme === 'dark' ? '#ffffff' : '#000000'};
        }

        .contact-detail {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          padding: 20px;
          background: ${themeStyles.contactDetail.background};
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .contact-detail:hover {
          background: ${theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'};
          transform: scale(1.02);
        }

        .detail-icon {
          color: ${theme === 'dark' ? '#ffffff' : '#000000'};
        }

        .detail-content h4 {
          font-size: 1.2rem;
          margin-bottom: 5px;
          color: ${theme === 'dark' ? '#ffffff' : '#000000'};
        }

        .detail-content p {
          font-size: 1.1rem;
          color: ${theme === 'dark' ? '#cccccc' : '#666666'};
          margin-bottom: 5px;
        }

        .copy-hint {
          font-size: 0.85rem;
          color: ${theme === 'dark' ? '#888888' : '#777777'};
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: ${themeStyles.modalOverlay.background};
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(10px);
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          background: ${themeStyles.modalContent.background};
          border: ${themeStyles.modalContent.border};
          border-radius: 20px;
          padding: 40px;
          max-width: 600px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: slideInUp 0.4s ease;
        }

        .close-button {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: ${theme === 'dark' ? '#ffffff' : '#000000'};
          cursor: pointer;
          padding: 10px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .close-button:hover {
          background: ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
          transform: scale(1.1);
        }

        .form-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .form-header h2 {
          font-size: 2rem;
          margin-bottom: 10px;
          color: ${theme === 'dark' ? '#ffffff' : '#000000'};
        }

        .form-header p {
          color: ${theme === 'dark' ? '#cccccc' : '#666666'};
          font-size: 1.1rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-size: 1rem;
          font-weight: 500;
          color: ${theme === 'dark' ? '#ffffff' : '#000000'};
          margin-bottom: 8px;
        }

        .form-group input,
        .form-group textarea {
          padding: 15px;
          border: ${themeStyles.formInput.border};
          border-radius: 10px;
          background: ${themeStyles.formInput.background};
          color: ${themeStyles.formInput.color};
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: ${theme === 'dark' ? '#888888' : '#999999'};
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: ${theme === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'};
          background: ${theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'};
          box-shadow: 0 0 0 3px ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-button {
          background: ${themeStyles.submitButton.background};
          color: ${themeStyles.submitButton.color};
          border: none;
          padding: 18px 40px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 20px;
        }

        .submit-button:hover {
          background: ${theme === 'dark' 
            ? 'linear-gradient(135deg, #cccccc, #999999)'
            : 'linear-gradient(135deg, #333333, #666666)'};
          transform: translateY(-2px);
          box-shadow: 0 10px 30px ${theme === 'dark' 
            ? 'rgba(255, 255, 255, 0.2)'
            : 'rgba(0, 0, 0, 0.2)'};
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 2.5rem;
          }
          
          .contact-methods-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .contact-method-card {
            padding: 30px 20px;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .modal-content {
            padding: 30px 20px;
          }

          .hero-section {
            margin-top: 10px;
            margin-bottom: 40px;
          }
        }
      `}</style>

      {/* Floating elements for visual appeal */}
      <div className="floating-elements">
        <div className="floating-dot" style={{
          left: `${mousePosition.x * 0.01}%`,
          top: `${mousePosition.y * 0.01}%`
        }}></div>
        <div className="floating-dot delay-1" style={{
          right: `${mousePosition.x * 0.005}%`,
          bottom: `${mousePosition.y * 0.005}%`
        }}></div>
        <div className="floating-dot delay-2" style={{
          left: `${mousePosition.x * 0.008}%`,
          bottom: `${mousePosition.y * 0.008}%`
        }}></div>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="contact-methods-grid">
          {contactMethods.map((method, index) => (
            <div
              key={method.id}
              className={`contact-method-card ${selectedMethod?.id === method.id ? 'selected' : ''} ${animatedCards.includes(method.id) ? 'animated' : ''}`}
              onClick={() => handleCardClick(method)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-content">
                <div className="icon-wrapper">
                  {method.icon}
                </div>
                <h3>{method.title}</h3>
                <p className="card-subtitle">{method.subtitle}</p>
                <p className="card-description">{method.description}</p>
                <div className="card-value">{method.value}</div>
              </div>
              <div className="card-overlay"></div>
            </div>
          ))}
        </div>

        {selectedMethod && selectedMethod.id !== 'email' && (
          <div className="selected-info">
            <h3>Great choice! Here's how to reach me:</h3>
            <div className="contact-detail" onClick={() => handleContactDetailClick(selectedMethod)}>
              <div className="detail-icon">{selectedMethod.icon}</div>
              <div className="detail-content">
                <h4>{selectedMethod.title}</h4>
                <p>{selectedMethod.value}</p>
                <span className="copy-hint">Click to open</span>
              </div>
            </div>
          </div>
        )}

        {/* Modal Form */}
        {isFormVisible && (
          <div className="modal-overlay" onClick={closeForm}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeForm}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
              
              <div className="form-header">
                <h2>Send me a message</h2>
                <p>I'd love to hear about your project</p>
              </div>

              <div className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Project Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Web Development Project"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tell me about your project</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="I'm looking for a developer to help me with..."
                    rows="5"
                    required
                  />
                </div>

                <button className="submit-button" onClick={handleSubmit}>
                  <span>Send Message</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22,2 15,22 11,13 2,9 22,2"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;