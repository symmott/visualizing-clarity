
import React from 'react';
import { projects } from '../data/projects';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <header className="mb-20">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Selected Works</h2>
          <div className="h-1 w-12 bg-black mb-8"></div>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Structured Visual Solutions</h3>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer"
              onClick={() => onSelectProject(project)}
            >
              <div className="relative overflow-hidden aspect-[4/3] rounded-2xl bg-gray-50 mb-6 shadow-sm border border-gray-100 flex items-center justify-center p-8">
                <img 
                  src={project.mainImage} 
                  alt={project.title} 
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out z-0"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-colors duration-300" />
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300 z-10">
                  <div className="bg-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center shadow-lg border border-gray-100">
                    View Details
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="text-2xl font-bold tracking-tight group-hover:text-gray-600 transition-colors">{project.title}</h4>
                <p className="text-gray-400 text-sm font-medium">{project.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
