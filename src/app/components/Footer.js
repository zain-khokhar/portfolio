'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/zain-khokhar',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/zain-khokhar-55876832a',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:zaink334705@gmail.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2"
          >
            <div className="mb-3 sm:mb-4">
              <h3 className="text-xl sm:text-2xl font-bold">
                <span className="gradient-text">Zain Ul Abdin</span>
              </h3>
              <p className="text-muted-foreground mt-1 sm:mt-2 text-sm sm:text-base">
                MERN & Next.js Developer
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Full Stack Developer passionate about creating modern, scalable web applications. 
              Always learning, always building, always improving.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-colors duration-200 touch-manipulation"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm sm:text-base touch-manipulation block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Get In Touch</h4>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="mailto:zainkhokhar.dev@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 block text-sm sm:text-base break-words touch-manipulation"
              >
                zainkhokhar.dev@gmail.com
              </a>
              <p className="text-muted-foreground text-sm sm:text-base">
                Multan Cantt, Pakistan
              </p>
              <div className="flex items-center space-x-1 text-xs sm:text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-muted-foreground">Available for work</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4"
        >
          <p className="text-muted-foreground text-xs sm:text-sm text-center md:text-left">
            © {currentYear} Zain Ul Abdin. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground text-center">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
            </motion.div>
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;