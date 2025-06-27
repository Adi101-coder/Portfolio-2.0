import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import '../Stylesheets/FloatingSocialDock.css';

const FloatingSocialDock = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const socialLinks = [
    {
      title: "Twitter",
      icon: <i className="fab fa-twitter"></i>,
      href: "https://x.com/adit_katiyar"
    },
    {
      title: "LinkedIn",
      icon: <i className="fab fa-linkedin-in"></i>,
      href: "https://www.linkedin.com/in/adit-katiyar-0863692b9/"
    },
    {
      title: "LeetCode",
      icon: <i className="fas fa-code"></i>,
      href: "https://leetcode.com/u/Aditk060/"
    },
    {
      title: "GitHub",
      icon: <i className="fab fa-github"></i>,
      href: "https://github.com/Adi101-coder"
    }
  ];

  return (
    <>
      <FloatingDockDesktop items={socialLinks} isDark={isDark} />
      <FloatingDockMobile items={socialLinks} isDark={isDark} />
    </>
  );
};

const FloatingDockMobile = ({ items, isDark }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="floating-dock-mobile">
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="floating-dock-mobile-menu"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`floating-dock-mobile-item ${isDark ? 'dark' : 'light'}`}
                >
                  <div className="floating-dock-icon">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className={`floating-dock-toggle ${isDark ? 'dark' : 'light'}`}
      >
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({ items, isDark }) => {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`floating-dock-desktop ${isDark ? 'dark' : 'light'}`}
    >
      {items.map((item) => (
        <IconContainer 
          mouseX={mouseX} 
          key={item.title} 
          {...item} 
          isDark={isDark}
        />
      ))}
    </motion.div>
  );
};

const IconContainer = ({ mouseX, title, icon, href, isDark }) => {
  let ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`floating-dock-item ${isDark ? 'dark' : 'light'}`}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className={`floating-dock-tooltip ${isDark ? 'dark' : 'light'}`}
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="floating-dock-icon-container"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
};

export default FloatingSocialDock; 