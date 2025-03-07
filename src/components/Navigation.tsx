import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const sections = ['home', 'about', 'contact'];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-4">
        {sections.map((section) => (
          <motion.button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`w-1 h-1 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
              activeSection === section
                ? 'bg-blue-400 scale-125'
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navigation;