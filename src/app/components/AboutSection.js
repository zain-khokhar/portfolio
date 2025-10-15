'use client';

import { motion } from 'framer-motion';
import { Code, Database, Server, Smartphone, Globe, Zap } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: Smartphone,
      technologies: [
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      category: 'Backend',
      icon: Server,
      technologies: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'Firebase', level: 80 },
        { name: 'RESTful APIs', level: 90 },
      ]
    },
    {
      category: 'Tools & Others',
      icon: Zap,
      technologies: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Vercel/Netlify', level: 85 },
        { name: 'Figma', level: 80 },
        { name: 'VS Code', level: 95 }
      ]
    }
  ];

  const achievements = [
    {
      title: 'LeetCode Problems Solved',
      value: '150+',
      description: 'Strong foundation in Data Structures & Algorithms'
    },
    {
      title: 'Live Projects',
      value: '5+',
      description: 'Successfully deployed and maintained applications'
    },
    {
      title: 'Years of Experience',
      value: '2+',
      description: 'Building modern web applications'
    },
    {
      title: 'Client Satisfaction',
      value: '100%',
      description: 'Delivered projects on time and within budget'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Passionate Full Stack Developer with expertise in MERN stack and modern web technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Hello! I&apos;m Zain Ul Abdin, a passionate Full Stack Developer specializing in building 
                modern, scalable web applications using the MERN stack and Next.js. I love creating 
                seamless user experiences and solving complex problems with clean, efficient code.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                My journey in web development started with a curiosity about how websites work, 
                and it has evolved into a passion for creating innovative digital solutions. 
                I have strong expertise in Data Structures & Algorithms, having solved 150+ LeetCode problems, 
                which helps me write optimized and efficient code.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Currently, I&apos;m working on AI-powered learning platforms and have successfully 
                launched several projects including Techolyze.com (a tech blogging platform) 
                and SmartToolkit.online (an image conversion tools website).
              </p>

              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold">What I Do:</h3>
                <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                  <li className="flex items-center space-x-2">
                    <Code className="h-4 w-4 text-primary" />
                    <span>Full Stack Web Development (MERN Stack)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-primary" />
                    <span>Next.js Applications with Server-Side Rendering</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Database className="h-4 w-4 text-primary" />
                    <span>Database Design and API Development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <span>Performance Optimization and Best Practices</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-3 sm:p-4 text-center hover-lift"
                >
                  <div className="text-xl sm:text-2xl font-bold text-primary mb-1">
                    {achievement.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium mb-1">
                    {achievement.title}
                  </div>
                  <div className="text-xs text-muted-foreground hidden sm:block">
                    {achievement.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Technical Skills</h3>
            
            {skills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="bg-card border border-border rounded-lg p-4 sm:p-6"
              >
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <skillCategory.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                  <h4 className="text-base sm:text-lg font-semibold">{skillCategory.category}</h4>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {skillCategory.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (techIndex * 0.1) }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">{tech.name}</span>
                        <span className="text-sm text-muted-foreground">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.2) + (techIndex * 0.1) + 0.5 }}
                          className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full"
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;