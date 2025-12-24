'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Zap, Brain, MessageCircle, Image as ImageIcon, Wrench } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'LEARN LMS AI',
      description: 'An intelligent learning management system with AI-powered features for personalized learning experiences.',
      image: '/api/placeholder/600/400',
      tech: ['Next.js', 'MongoDB', 'AI Integration', 'Node.js'],
      liveUrl: 'https://learn-x-lms-ai.vercel.app/',
      githubUrl: 'https://github.com/zain-khokhar/LearnX-lms-Ai',
      icon: Brain,
      featured: true
    },
    {
      title: 'Social Media App',
      description: 'Modern social media application , post sharing, and user interactions.',
      image: '/api/placeholder/600/400',
      tech: ['Next.js', 'Firebase', 'Pusher', 'Real-time'],
      liveUrl: 'https://zain-chat.vercel.app/',
      githubUrl: '#',
      icon: MessageCircle,
      featured: true
    },
    {
      title: 'Techolyze.com',
      description: 'A modern blogging platform focused on technology content with clean design and optimal performance.',
      image: '/api/placeholder/600/400',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: 'https://techolyze.com',
      githubUrl: 'https://github.com/zain-khokhar/Techblog',
      icon: Database,
      featured: true
    },
    {
      title: 'SmartToolkit.online',
      description: 'A comprehensive tools website for image format conversion (PNG to SVG, SVG to JPG, etc.) with high-quality results.',
      image: '/api/placeholder/600/400',
      tech: ['Next.js', 'Image Processing', 'Canvas API', 'TypeScript'],
      liveUrl: 'https://smarttoolkit.online',
      githubUrl: '#',
      icon: Wrench,
      featured: false
    },
    {
      title: 'Post App',
      description: 'Social media application with modern UI/UX design and real-time features.',
      image: '/api/placeholder/600/400',
      tech: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: 'https://github.com/zain-khokhar/post-app',
      icon: ImageIcon,
      featured: false
    },
    {
      title: 'Courier System',
      description: 'Complete courier management system with tracking capabilities and admin dashboard.',
      image: '/api/placeholder/600/400',
      tech: ['MERN Stack', 'Real-time Tracking', 'Dashboard'],
      liveUrl: '#',
      githubUrl: 'https://github.com/zain-khokhar/courier-system',
      icon: Zap,
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-secondary/10 overflow-hidden">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Here are some of my recent projects that showcase my skills in MERN stack development, 
            AI integration, and modern web technologies.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <div className="grid lg:grid-cols-1 gap-6 sm:gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group bg-card border border-border rounded-xl overflow-hidden hover-lift"
              >
                <div className={`grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="aspect-video bg-linear-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                      <project.icon className="h-12 w-12 sm:h-16 sm:w-16 text-primary/60" />
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent rounded-lg"></div>
                  </div>

                  {/* Project Content */}
                  <div className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center space-x-2 px-4 py-2.5 sm:py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 text-sm sm:text-base touch-manipulation"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </motion.a>
                      
                      {project.githubUrl !== '#' && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center space-x-2 px-4 py-2.5 sm:py-2 border border-border rounded-lg hover:bg-accent transition-colors duration-200 text-sm sm:text-base touch-manipulation"
                        >
                          <Github className="h-4 w-4" />
                          <span>Code</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">More Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group bg-card border border-border rounded-lg overflow-hidden hover-lift"
              >
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <project.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary shrink-0" />
                    <div className="flex space-x-2">
                      {project.githubUrl !== '#' && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-accent rounded-lg transition-colors duration-200 touch-manipulation"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-accent rounded-lg transition-colors duration-200 touch-manipulation"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-8 sm:mt-12"
        >
          <motion.a
            href="https://github.com/zain-khokhar"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200 font-medium text-sm sm:text-base touch-manipulation"
          >
            <Github className="h-4 w-4" />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;