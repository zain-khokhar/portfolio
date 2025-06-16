"use client";
import React, { createContext, useContext, useState } from "react";
import Head from 'next/head';
import { FaGithub, FaLinkedin, FaEnvelope, FaServer, FaDatabase, FaCode, FaMobile } from 'react-icons/fa';

// --- Theme Logic Start ---

const themes = {
  light: {
    name: "Light",
    bg: "bg-white",
    text: "text-gray-800",
    accent: "text-blue-700",
    sectionBg: "bg-gray-50",
    cardBg: "bg-white",
    button: "bg-blue-700 text-white",
    border: "border-gray-200",
  },
  dark: {
    name: "Dark",
    bg: "bg-gray-900",
    text: "text-gray-100",
    accent: "text-blue-400",
    sectionBg: "bg-gray-800",
    cardBg: "bg-gray-800",
    button: "bg-blue-500 text-white",
    border: "border-gray-700",
  },
  ocean: {
    name: "Ocean",
    bg: "bg-blue-50",
    text: "text-blue-900",
    accent: "text-teal-600",
    sectionBg: "bg-teal-50",
    cardBg: "bg-white",
    button: "bg-teal-600 text-white",
    border: "border-teal-200",
  },
  forest: {
    name: "Forest",
    bg: "bg-green-50",
    text: "text-green-900",
    accent: "text-emerald-700",
    sectionBg: "bg-emerald-50",
    cardBg: "bg-white",
    button: "bg-emerald-700 text-white",
    border: "border-emerald-200",
  },
  // Add more themes here...
};

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [themeKey, setThemeKey] = useState("light");
  const theme = themes[themeKey];

  return (
    <ThemeContext.Provider value={{ theme, themeKey, setThemeKey }}>
      <div className={`${theme.bg} min-h-screen transition-colors duration-300`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return useContext(ThemeContext);
}

// --- Theme Logic End ---

// Dummy data for skills and projects (replace with your real data)
const skills = [
  {
    name: "Frontend",
    icon: <FaCode />,
    items: ["React", "Redux", "Next.js", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "Backend",
    icon: <FaServer />,
    items: ["Node.js", "Express", "REST APIs", "GraphQL"],
  },
  {
    name: "Database",
    icon: <FaDatabase />,
    items: ["MongoDB", "Mongoose"],
  },
  
];

const projects = [
  {
    id: 1,
    title: "LEARNX LMS",
    description: "AI-powered Learning Management System with real-time collaboration.",
    technologies: ["Next js", "Node.js", "MongoDB" , "socket.io" ,"AI-powered", "DSA"],
  },
  {
    id: 2,
    title: "Project Two",
    description: "A RESTful API with Express.",
    technologies: ["Express", "Node.js"],
  },
  {
    id: 3,
    title: "Project Three",
    description: "A mobile app using React Native.",
    technologies: ["React Native"],
  },
];

function PortfolioContent() {
  const { theme, themeKey, setThemeKey } = useTheme();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: '' });

    try {
      const response = await fetch('/api/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.name,
          email: formData.email,
          message: formData.message
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus({
          submitting: false,
          submitted: true,
          error: ''
        });
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus({
          submitting: false,
          submitted: false,
          error: data.error || 'Failed to send message'
        });
      }
    } catch (error) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: 'Network error. Please try again.'
      });
    }
  };

  return (
    <>
      <Head>
        <title> | MERN Stack Developer</title>
        <meta name="description" content="Professional MERN Stack Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Theme Switcher */}
      <div className={`${theme.cardBg } fixed top-20 right-4 z-50 border ${theme.border}  rounded-md`}>
        <select
          value={themeKey}
          onChange={e => setThemeKey(e.target.value)}
          className={`px-3 py-2 rounded-md border ${theme.border} focus:outline-none ${theme.cardBg} ${theme.text}`}
        >
          {Object.entries(themes).map(([key, t]) => (
            <option key={key} value={key}>{t.name}</option>
          ))}
        </select>
      </div>

      {/* Header */}
      <header className={`${theme.cardBg} shadow-sm py-4`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className={`text-xl font-bold ${theme.text}`}>ZAIN KHOKHAR</h1>
          <nav>
            <ul className="flex space-x-6">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className={`${theme.text} hover:${theme.accent} font-medium`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className={`py-20 ${theme.sectionBg}`}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className={`text-4xl md:text-5xl font-bold ${theme.text} mb-4`}>
              MERN Stack Developer
            </h1>
            <p className={`text-xl ${theme.text} opacity-80 mb-8`}>
              Building scalable full-stack applications with JavaScript ecosystem
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="#projects" 
                className={`${theme.button} px-6 py-3 rounded-md font-medium`}
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className={`border ${theme.accent} ${theme.text} px-6 py-3 rounded-md font-medium`}
                style={{ borderColor: "currentColor" }}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 ${theme.cardBg}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold text-center ${theme.text} mb-12`}>About Me</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                <picture className="w-64 h-64">
                  <source srcSet="/logo.png" type="image/png" />
                  <img 
                    src="/logo.png"
                    alt="ZAIN KHOKHAR profile"
                    className="rounded-xl w-64 h-64 object-cover"
                    loading="lazy"
                  />
                </picture>
              </div>
              <div className="md:w-2/3 md:pl-12">
                <p className={`${theme.text} opacity-80 mb-4`}>
                  Hello! I'm zain, a professional MERN stack developer with 1+ years of experience 
                  building robust web applications.
                </p>
                <p className={`${theme.text} opacity-80 mb-4`}>
                  I specialize in creating efficient, maintainable solutions using MongoDB, Express, 
                  React, and Node.js. My focus is on clean architecture, performance optimization, 
                  and seamless user experiences.
                </p>
                <p className={`${theme.text} opacity-80`}>
                  When not coding, I contribute to open-source projects and write technical articles 
                  about modern JavaScript development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-16 ${theme.sectionBg}`}>
        <div className="container mx-auto px-4 ">
          <h2 className={`text-3xl font-bold text-center ${theme.text} mb-12`}>Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-18 ">
            {skills.map((skill) => (
              <div key={skill.name} className={`${theme.cardBg} p-6 rounded-lg shadow-sm`}>
                <div className={`${theme.accent} mb-4`}>{skill.icon}</div>
                <h3 className={`text-xl font-semibold ${theme.text} mb-4`}>{skill.name}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className={`${theme.text} opacity-80`}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-16 ${theme.cardBg}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center ${theme.text} mb-12`}>Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className={`border ${theme.border} rounded-lg overflow-hidden shadow-sm`}>
                <div className="bg-gray-200 border-2 border-dashed w-full h-48" />
                <div className="p-6">
                  <h3 className={`text-xl font-semibold ${theme.text} mb-2`}>{project.title}</h3>
                  <p className={`${theme.text} opacity-80 mb-4`}>
  <a 
    href="https://learn-x-lms-ai.vercel.app/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    {project.description}
  </a>
</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 ${theme.sectionBg}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold text-center ${theme.text} mb-12`}>Get In Touch</h2>
            <div className={`${theme.cardBg} p-8 rounded-lg shadow-sm`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className={`text-xl font-semibold ${theme.text} mb-4`}>Contact Information</h3>
                  <div className="space-y-4">
                    <p className={`${theme.text} flex items-center`}>
                      <FaEnvelope className={`mr-3 ${theme.accent}`} />
                      zaink334705@gmail.com
                    </p>
                    <a
                      href="https://www.linkedin.com/in/zain-khokhar-55876832a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${theme.text} flex items-center`}
                    >
                      <FaLinkedin className={`mr-3 ${theme.accent}`} />
                      linkedin.com/zain-khokhar
                    </a>
                    <a
                      href="https://github.com/zain-khokhar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${theme.text} flex items-center`}
                    >
                      <FaGithub className={`mr-3 ${theme.accent}`} />
                      github.com/zain-khokhar
                    </a>
                  
                  <a
                      href="https://github.com/zain-khokhar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${theme.text} flex items-center`}
                    >
                      <FaGithub className={`mr-3 ${theme.accent}`} />
                      github.com/zain-khokhar
                    </a>
                  </div>
                </div>
                <div>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className={`${theme.text} block mb-2`}>Name</label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={`${theme.text} block mb-2`}>Email</label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className={`${theme.text} block mb-2`}>Message</label>
                      <textarea
                        id="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className={`${theme.button} px-6 py-3 rounded-md font-medium w-full flex justify-center items-center`}
                      disabled={formStatus.submitting}
                    >
                      {formStatus.submitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </button>
                    
                    {/* Status Messages */}
                    {formStatus.submitted && (
                      <div className={`p-4 rounded-md bg-green-100 text-green-700 ${theme.text}`}>
                        Message sent successfully!
                      </div>
                    )}
                    {formStatus.error && (
                      <div className={`p-4 rounded-md bg-red-100 text-red-700 ${theme.text}`}>
                        Error: {formStatus.error}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} zain khokhar. All rights reserved.</p>
          <p className="mt-2 text-gray-400">MERN Stack Developer Portfolio</p>
        </div>
      </footer>
    </>
  );
}

export default function Portfolio() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}