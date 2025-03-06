import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === 'dark' ? (
        <Sun className="w-6 h-6 text-yellow-500" />
      ) : (
        <Moon className="w-6 h-6 text-gray-700" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;