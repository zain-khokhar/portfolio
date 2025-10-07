'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';
import Link from 'next/link';

const Navigation = ({ onResumeClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isThemeChanging, setIsThemeChanging] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const handleThemeToggle = () => {
    setIsThemeChanging(true);
    
    // Add class to prevent transitions during theme change
    document.documentElement.classList.add('theme-transitioning');
    
    setTheme(theme === 'dark' ? 'light' : 'dark');
    
    // Remove class after a brief delay to allow theme to apply
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
      setIsThemeChanging(false);
    }, 100);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleDownloadResume = () => {
    onResumeClick?.();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="text-xl font-bold">
              <span className="gradient-text">Zain Ul Abdin</span>
            </div>
            <div className="hidden sm:block text-sm text-muted-foreground">
              MERN & Next.js Developer
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            {mounted && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleThemeToggle}
                disabled={isThemeChanging}
                className="p-2 rounded-lg hover:bg-accent transition-colors duration-200 btn disabled:opacity-50"
                aria-label="Toggle theme"
              >
                <motion.div
                  initial={false}
                  animate={{ 
                    rotate: isThemeChanging ? 180 : 0,
                    scale: isThemeChanging ? 0.8 : 1
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 20 
                  }}
                >
                  {theme === 'dark' ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </motion.div>
              </motion.button>
            )}

            {/* Resume Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={handleDownloadResume}
              className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium btn"
            >
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </motion.button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors duration-200 btn"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border/50"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    document.querySelector(item.href)?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                onClick={() => {
                  handleDownloadResume();
                  setIsOpen(false);
                }}
                className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium w-full justify-center btn"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;