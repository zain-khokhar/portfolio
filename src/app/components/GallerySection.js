'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Image as ImageIcon, Code, Palette, Zap } from 'lucide-react';

const GallerySection = () => {
  const galleryItems = [
    {
      title: 'LEARN LMS AI Interface',
      description: 'Modern dashboard design for AI-powered learning management system',
      category: 'UI/UX Design',
      image: '/api/placeholder/400/300',
      link: 'https://learn-x-lms-ai.vercel.app/',
      icon: Code
    },
    {
      title: 'Social Media App',
      description: 'Modern social media application , post sharing, and user interactions.',
      category: 'Web Development',
      image: '/api/placeholder/400/300',
      link: 'https://zain-chat.vercel.app/',
      icon: ImageIcon
    },
    {
      title: 'Techolyze Blog Design',
      description: 'Professional blogging platform with modern typography',
      category: 'Web Design',
      image: '/api/placeholder/400/300',
      link: 'https://techolyze.com',
      icon: Palette
    },
    {
      title: 'SmartToolkit Interface',
      description: 'User-friendly tool interface for image format conversion',
      category: 'Web App',
      image: '/api/placeholder/400/300',
      link: 'https://smarttoolkit.online',
      icon: Zap
    },
    {
      title: 'Job portal ',
      description: 'A job portal website that connects job seekers with employers.',
      category: 'Responsive Design',
      image: '/api/placeholder/400/300',
      link: '#',
      icon: ImageIcon
    },
  ];

  const categories = ['All', 'Web Development', 'UI/UX Design', 'Web Design', 'Web App'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 w-full max-w-full"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 wrap-break-word">
            Project <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            A visual showcase of my work including web applications, UI designs, and development projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition-colors duration-200 text-xs sm:text-sm touch-manipulation ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border hover:bg-accent'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-lg overflow-hidden hover-lift"
            >
              {/* Image Placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                <item.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-colors duration-200 touch-manipulation"
                  >
                    <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-8 sm:mt-12"
        >
          <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base px-4">
            Want to see more of my work or discuss a project?
          </p>
          <motion.a
            href="https://github.com/zain-khokhar"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium text-sm sm:text-base touch-manipulation"
          >
            <Github className="h-4 w-4" />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;