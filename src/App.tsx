import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Github, Instagram, Linkedin, ChevronDown } from 'lucide-react';
import ThemeToggle from './components/ThemeToggle';
import Section from './components/Section';
import SocialLinks from './components/SocialLinks';
import Navigation from './components/Navigation';

function App() {
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="container mx-auto px-4 py-16">
        <Section id="home" className="min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, Am Sidd.
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              A Python Programmer & AI Enthusiast
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-12"
            >
              <ChevronDown className="w-8 h-8 mx-auto text-gray-400" />
            </motion.div>
          </motion.div>
        </Section>

        <Section id="about" className="min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I’m a passionate developer focused on mastering machine learning, deep learning, and computer vision. While I have basic web development knowledge, my primary interest lies in building projects that solve real-world problems using these technologies. I’m excited to deepen my expertise and create innovative solutions for various industries.
            </p>
          </motion.div>
        </Section>

        <Section id="contact" className="min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Get in Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
              Let's connect and create something amazing together.
            </p>
            <SocialLinks />
          </motion.div>
        </Section>
      </main>
    </div>
  );
}

export default App;