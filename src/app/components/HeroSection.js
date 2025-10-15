'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Zap } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
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
      href: 'mailto:zainkhokhar.dev@gmail.com',
      label: 'Email'
    }
  ];

  const stats = [
    { label: 'LeetCode Problems', value: '150+', icon: Code },
    { label: 'Live Projects', value: '10+', icon: ExternalLink },
    { label: 'Tech Stack', value: 'MERN', icon: Database },
    { label: 'Experience', value: '2+ Years', icon: Zap }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-0">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-0 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-0 sm:right-10 w-48 sm:w-96 h-48 sm:h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center w-full">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            <div className="space-y-3 sm:space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-primary font-semibold text-base sm:text-lg"
              >
                Hello, I&apos;m
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                <span className="gradient-text">Zain Ul Abdin</span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground"
              >
                MERN & Next.js Developer
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Full Stack Developer specializing in building modern, scalable web applications. 
              Passionate about creating seamless user experiences with clean, efficient code. 
              Strong in Data Structures & Algorithms with 150+ LeetCode problems solved.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 sm:px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 cursor-hover glow-effect text-sm sm:text-base touch-manipulation"
              >
                View My Work
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 sm:px-8 py-3 border border-border rounded-lg font-semibold hover:bg-accent transition-colors duration-200 cursor-hover text-sm sm:text-base touch-manipulation"
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex space-x-3 sm:space-x-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-card border border-border rounded-lg hover:border-primary transition-colors duration-200 hover-lift cursor-hover"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-first lg:order-last"
          >
            {/* Profile Image Placeholder */}
            <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mb-6 sm:mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-full h-full gradient-shift rounded-full flex items-center justify-center border-4 border-primary/20 relative overflow-hidden cursor-hover"
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white/90 z-10 relative">ZA</div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent"></div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full opacity-60"
              ></motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-5 h-5 sm:w-6 sm:h-6 bg-secondary rounded-full opacity-60"
              ></motion.div>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-3 sm:p-4 text-center hover-lift"
                >
                  <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 mx-auto mb-1 sm:mb-2 text-primary" />
                  <div className="font-bold text-base sm:text-lg">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary rounded-full flex justify-center"
          >
            <div className="w-1 h-2 sm:h-3 bg-primary rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;