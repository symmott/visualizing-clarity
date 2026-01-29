
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Contact from './components/Contact';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    // Reveal animation observer
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="relative antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <div className="reveal">
          <About />
        </div>
        <div className="reveal">
          <Projects onSelectProject={handleSelectProject} />
        </div>
        <div className="reveal">
          <Contact />
        </div>
      </main>

      {/* Modal for project details */}
      <ProjectModal 
        project={selectedProject} 
        onClose={handleCloseModal} 
      />

      <footer className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">
            &copy; {new Date().getFullYear()} VC. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6">
            {/* 소셜 링크 삭제 (요청사항 반영) */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
