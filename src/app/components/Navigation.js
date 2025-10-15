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
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 gap-2">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-1 sm:gap-2 flex-shrink min-w-0"
          >
            <div className="text-sm sm:text-base lg:text-xl font-bold truncate">
              <span className="gradient-text whitespace-nowrap">Zain Ul Abdin</span>
            </div>
            <div className="hidden lg:block text-xs text-muted-foreground whitespace-nowrap flex-shrink-0">
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
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium nav-link cursor-hover"
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
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-4 flex-shrink-0">
            {/* Theme Toggle */}
            {mounted && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleThemeToggle}
                disabled={isThemeChanging}
                className="p-1.5 sm:p-2 rounded-lg hover:bg-accent transition-colors duration-200 btn disabled:opacity-50 cursor-hover touch-manipulation flex-shrink-0"
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
                    <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
                  ) : (
                    <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
                  )}
                </motion.div>
              </motion.button>
            )}

            {/* Resume Button - Hidden on small mobile, visible on larger screens */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={handleDownloadResume}
              className="hidden sm:flex items-center gap-1.5 lg:gap-2 px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium btn cursor-hover glow-effect text-xs sm:text-sm whitespace-nowrap flex-shrink-0"
            >
              <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>CV</span>
            </motion.button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-1.5 sm:p-2 rounded-lg hover:bg-accent transition-colors duration-200 btn cursor-hover touch-manipulation flex-shrink-0"
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
            className="md:hidden bg-card border-t border-border/50 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-3.5rem)] overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block text-foreground hover:text-primary hover:bg-accent/50 transition-colors duration-200 font-medium py-3 px-4 rounded-lg nav-link touch-manipulation"
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
                transition={{ delay: navItems.length * 0.05 }}
                onClick={() => {
                  handleDownloadResume();
                  setIsOpen(false);
                }}
                className="flex items-center justify-center space-x-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium w-full btn touch-manipulation mt-2"
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