'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Mail, Phone, MapPin, ExternalLink, Calendar } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  const resumeData = {
    personalInfo: {
      name: 'Zain Ul Abdin',
      title: 'MERN & Next.js Developer',
      email: 'zainkhokhar.dev@gmail.com',
      phone: '+92 (Available on request)',
      location: 'Multan Cantt, Pakistan',
      website: 'https://mern-portfolio-sigma.vercel.app/',
      github: 'https://github.com/zain-khokhar',
      linkedin: 'https://linkedin.com/in/zain-khokhar-55876832a'
    },
    summary: `Passionate Full Stack Developer with 2+ years of experience in building modern, scalable web applications using MERN stack and Next.js. Strong problem-solving skills with 150+ LeetCode problems solved. Experienced in creating user-friendly interfaces and robust backend systems.`,
    
    experience: [
      {
        title: 'Full Stack Developer',
        company: 'Freelance',
        location: 'Remote',
        period: '2022 - Present',
        achievements: [
          'Developed 10+ production-ready web applications using MERN stack',
          'Implemented AI-powered features in learning management systems',
          'Optimized application performance by 40% through code optimization',
          'Maintained 100% client satisfaction rate with timely project delivery'
        ]
      },
      {
        title: 'MERN Stack Developer',
        company: 'Personal Projects',
        location: 'Multan, Pakistan',
        period: '2021 - 2022',
        achievements: [
          'Built and deployed multiple full-stack applications',
          'Mastered modern JavaScript frameworks and libraries',
          'Solved 150+ algorithmic problems on LeetCode',
          'Learned cloud deployment and CI/CD practices'
        ]
      }
    ],

    projects: [
      {
        name: 'LEARN LMS AI',
        tech: 'Next.js, MongoDB, AI Integration, Node.js',
        description: 'AI-powered learning management system with personalized learning features',
        link: 'https://learn-x-lms-ai.vercel.app/'
      },
      {
        name: 'Real-Time Chat Application',
        tech: 'Next.js, Firebase, Pusher, Real-time',
        description: 'Feature-rich chat application with real-time messaging capabilities',
        link: 'https://zain-chat.vercel.app/'
      },
      {
        name: 'Techolyze.com',
        tech: 'React, Node.js, MongoDB, Express',
        description: 'Modern blogging platform focused on technology content',
        link: 'https://techolyze.com'
      },
      {
        name: 'SmartToolkit.online',
        tech: 'Next.js, Image Processing, Canvas API',
        description: 'Tools website for image format conversion with high-quality results',
        link: 'https://smarttoolkit.online'
      }
    ],

    skills: {
      frontend: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5/CSS3', 'Tailwind CSS'],
      backend: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'RESTful APIs', 'GraphQL'],
      tools: ['Git & GitHub', 'Vercel/Netlify', 'Docker', 'AWS Basics', 'Figma', 'VS Code']
    },

    education: [
      {
        degree: 'Self-Taught Developer',
        institution: 'Online Platforms & Documentation',
        period: '2021 - Present',
        description: 'Continuous learning through practical projects and industry resources'
      }
    ],

    achievements: [
      '150+ LeetCode Problems Solved',
      '10+ Live Projects Deployed',
      '100% Client Satisfaction Rate',
      'Strong DSA Foundation'
    ]
  };

  const handleDownload = () => {
    // This would typically generate and download a PDF
    alert('Resume download would be implemented here. You can create a PDF version or link to a downloadable file.');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="border border-border rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          style={{ backgroundColor: 'var(--resume-bg)' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-2xl font-bold">Resume</h2>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                <Download className="h-4 w-4" />
                <span>Download PDF</span>
              </motion.button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-accent rounded-lg transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Resume Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-88px)]">
            <div className="p-8 space-y-8">
              {/* Header */}
              <div className="text-center border-b border-border pb-6">
                <h1 className="text-3xl font-bold mb-2">{resumeData.personalInfo.name}</h1>
                <p className="text-xl text-primary font-semibold mb-4">{resumeData.personalInfo.title}</p>
                
                <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Mail className="h-4 w-4" />
                    <span>{resumeData.personalInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Phone className="h-4 w-4" />
                    <span>{resumeData.personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{resumeData.personalInfo.location}</span>
                  </div>
                </div>
                
                <div className="flex justify-center space-x-4 mt-3 text-sm">
                  <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" 
                     className="text-primary hover:underline">GitHub</a>
                  <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" 
                     className="text-primary hover:underline">LinkedIn</a>
                  <a href={resumeData.personalInfo.website} target="_blank" rel="noopener noreferrer" 
                     className="text-primary hover:underline">Portfolio</a>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h2 className="text-xl font-bold mb-3 text-primary">Professional Summary</h2>
                <p className="text-muted-foreground leading-relaxed">{resumeData.summary}</p>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-xl font-bold mb-4 text-primary">Professional Experience</h2>
                <div className="space-y-6">
                  {resumeData.experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-primary/30 pl-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{exp.title}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-1 mt-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <h2 className="text-xl font-bold mb-4 text-primary">Featured Projects</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {resumeData.projects.map((project, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{project.name}</h3>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" 
                           className="text-primary hover:scale-110 transition-transform">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                      <p className="text-xs text-primary mb-2">{project.tech}</p>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-xl font-bold mb-4 text-primary">Technical Skills</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.frontend.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.backend.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Tools & Others</h3>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.tools.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xl font-bold mb-4 text-primary">Education</h2>
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <p className="text-primary font-medium">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground mt-1">{edu.description}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <div>
                <h2 className="text-xl font-bold mb-4 text-primary">Key Achievements</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {resumeData.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResumeModal;