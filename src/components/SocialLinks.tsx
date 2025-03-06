import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  const links = [
    {
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/sidd0894',
      label: 'GitHub',
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      url: 'https://www.instagram.com/sidd0894/',
      label: 'Instagram',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/sidd0894/',
      label: 'LinkedIn',
    },
  ];

  return (
    <div className="flex justify-center space-x-8">
      {links.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;