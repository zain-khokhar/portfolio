'use client';

import { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import GallerySection from './components/GallerySection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ScrollToTop from './components/ScrollToTop';
import CursorFollower from './components/CursorFollower';

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <Navigation onResumeClick={() => setIsResumeOpen(true)} />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <GallerySection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
      <CursorFollower />
    </>
  );
}
