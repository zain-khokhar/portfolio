'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Award, BookOpen, Target } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Freelance',
      location: 'Remote',
      period: '2022 - Present',
      type: 'Freelance',
      description: 'Developing and maintaining modern web applications using MERN stack and Next.js. Working with clients to deliver high-quality, scalable solutions.',
      achievements: [
        'Built 10+ production-ready web applications',
        'Implemented AI-powered features in learning platforms',
        'Achieved 100% client satisfaction rate',
        'Optimized application performance by 40%'
      ],
      tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Vercel', 'Git' ]
    },
    {
      title: 'MERN Stack Developer',
      company: 'Personal Projects',
      location: 'Multan, Pakistan',
      period: '2021 - 2022',
      type: 'Learning',
      description: 'Focused on mastering full-stack development through building various projects and solving algorithmic problems.',
      achievements: [
        'Solved 150+ LeetCode problems',
        'Built and deployed multiple full-stack applications',
        'Mastered modern JavaScript frameworks',
        'Learned cloud deployment and CI/CD'
      ],
      tech: ['JavaScript', 'React', 'Express.js', 'MongoDB', 'Git', 'Vercel']
    }
  ];

  const education = [
    {
      degree: 'Self-Taught Developer',
      institution: 'Online Platforms',
      period: '2021 - Present',
      description: 'Continuous learning through various online platforms, documentation, and practical projects.',
      achievements: [
        'Completed multiple full-stack development courses',
        'Active contributor to open-source projects',
        'Regular participant in coding challenges',
        'Built a strong portfolio of real-world projects'
      ]
    }
  ];

  const certifications = [
    {
      name: 'LeetCode Problem Solving',
      issuer: 'LeetCode Platform',
      date: '2023',
      description: '150+ problems solved with focus on Data Structures & Algorithms'
    },
    {
      name: 'Full Stack Development',
      issuer: 'Self-Learning',
      date: '2022',
      description: 'Comprehensive understanding of MERN stack development'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey as a developer, from learning to building production-ready applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Target className="h-6 w-6 mr-2 text-primary" />
                Professional Experience
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative pl-8 border-l-2 border-primary/30 last:border-l-0"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    
                    <div className="bg-card border border-border rounded-lg p-6 hover-lift">
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold mb-1">{exp.title}</h4>
                          <div className="flex items-center text-primary font-medium mb-2">
                            <span>{exp.company}</span>
                            <span className="mx-2">•</span>
                            <span className="text-sm bg-primary/10 px-2 py-1 rounded">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center text-muted-foreground text-sm mb-4 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-4">
                        <h5 className="font-semibold mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-primary/10 text-primary rounded text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <BookOpen className="h-6 w-6 mr-2 text-primary" />
                Education & Learning
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-card border border-border rounded-lg p-6 hover-lift"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{edu.period}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Award className="h-5 w-5 mr-2 text-primary" />
                Achievements
              </h3>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="border-b border-border last:border-b-0 pb-4 last:pb-0"
                  >
                    <h4 className="font-semibold mb-1">{cert.name}</h4>
                    <p className="text-primary text-sm font-medium mb-1">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground mb-2">{cert.date}</p>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills Summary */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="text-xl font-bold mb-6">Quick Stats</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Years of Experience</span>
                  <span className="font-bold text-primary">2+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Projects Completed</span>
                  <span className="font-bold text-primary">10+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">LeetCode Problems</span>
                  <span className="font-bold text-primary">150+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Client Satisfaction</span>
                  <span className="font-bold text-primary">100%</span>
                </div>
              </div>
            </motion.div>

            {/* Download Resume */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6 text-center"
            >
              <h3 className="text-lg font-bold mb-4">Interested in my work?</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium flex items-center justify-center space-x-2"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Get In Touch</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;