import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Dock from './Dock';

const FloatingSocialDock = () => {
  const { theme } = useTheme();

  const items = [
    {
      icon: <i className="fab fa-twitter"></i>,
      label: 'Twitter',
      onClick: () => window.open('https://x.com/adit_katiyar', '_blank'),
    },
    {
      icon: <i className="fab fa-linkedin-in"></i>,
      label: 'LinkedIn',
      onClick: () => window.open('https://www.linkedin.com/in/adit-katiyar-0863692b9/', '_blank'),
    },
    {
      icon: <i className="fas fa-code"></i>,
      label: 'LeetCode',
      onClick: () => window.open('https://leetcode.com/u/Aditk060/', '_blank'),
    },
    {
      icon: <i className="fab fa-github"></i>,
      label: 'GitHub',
      onClick: () => window.open('https://github.com/Adi101-coder', '_blank'),
    },
  ];

  return (
    <Dock 
      items={items}
      panelHeight={68}
      baseItemSize={50}
      magnification={70}
    />
  );
};

export default FloatingSocialDock; 