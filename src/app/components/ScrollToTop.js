'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId;

    const toggleVisibility = () => {
      // Hide button immediately when scrolling starts
      setIsVisible(false);

      // Clear existing timeout
      clearTimeout(timeoutId);

      // Set timeout to check position after scrolling stops
      timeoutId = setTimeout(() => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }, 150);
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Initial check
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    }

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className="fixed bottom-15 right-8 z-40 p-3 bg-[#6366f1] text-primary-foreground rounded-full shadow-lg hover:bg-[#6366f1]/90 transition-colors duration-200 hover-lift"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </motion.button>
  );
};

export default ScrollToTop;