
import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [project]);

  if (!project) return null;

  const ImageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    if (project.externalLink) {
      return (
        <a 
          href={project.externalLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block group/link relative"
          title="Visit Link"
        >
          {children}
          <div className="absolute inset-0 bg-black/0 group-hover/link:bg-black/10 transition-colors flex items-center justify-center">
            <div className="opacity-0 group-hover/link:opacity-100 bg-white/90 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-black shadow-lg transition-all transform translate-y-2 group-hover/link:translate-y-0">
              Visit Site
            </div>
          </div>
        </a>
      );
    }
    return <div className="block">{children}</div>;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 md:p-10">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
      />
      <div className="bg-white w-full max-w-6xl max-h-full overflow-y-auto relative rounded-2xl shadow-2xl fade-in">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="p-8 md:p-12">
          <header className="mb-12">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Project {project.id}</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-2 tracking-tight">{project.title}</h2>
            <p className="text-gray-500 font-medium">{project.subtitle}</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-8 space-y-10">
              <section>
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Project Overview</h4>
                <p className="text-lg leading-relaxed text-gray-700">{project.overview}</p>
              </section>

              {project.chapters ? (
                project.chapters.map((chapter, idx) => (
                  <div key={idx} className="pt-10 border-t border-gray-100 space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{chapter.title}</h3>
                      <p className="text-gray-400 text-sm mb-6">{chapter.subtitle}</p>
                    </div>
                    
                    <section>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Perspective / Approach</h4>
                      <p className="text-gray-700 leading-relaxed">{chapter.perspective}</p>
                    </section>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <section>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Deliverables</h4>
                        <ul className="space-y-2">
                          {chapter.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-black mt-1.5 mr-3 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </section>
                      <section>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Outcome</h4>
                        <ul className="space-y-2">
                          {chapter.outcome.map((item, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-3 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </section>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <section>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Perspective / Approach</h4>
                    <p className="text-gray-700 leading-relaxed">{project.perspective}</p>
                  </section>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <section>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Deliverables</h4>
                      <ul className="space-y-2">
                        {project.deliverables?.map((item, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-black mt-1.5 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>
                    <section>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Outcome</h4>
                      <ul className="space-y-2">
                        {Array.isArray(project.outcome) ? project.outcome.map((item, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        )) : (
                          <li className="flex items-start text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-3 flex-shrink-0"></span>
                            {project.outcome}
                          </li>
                        )}
                      </ul>
                    </section>
                  </div>
                </>
              )}
            </div>

            <div className="md:col-span-4 space-y-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">My Role</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{project.role}</p>
              </div>
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50 p-4">
                  <ImageWrapper>
                    <img src={project.mainImage} alt={project.title} className="max-w-full h-auto object-contain mx-auto" />
                  </ImageWrapper>
                </div>
                
                {project.pressLink && (
                  <div className="flex justify-center">
                    <a 
                      href={project.pressLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-2 px-4 py-2.5 bg-white border border-gray-100 rounded-full shadow-sm hover:shadow-md hover:border-gray-200 transition-all active:scale-95"
                    >
                      <div className="bg-gray-50 p-1.5 rounded-full group-hover:bg-blue-50 transition-colors">
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2zM7 8h10M7 12h10M7 16h10" />
                        </svg>
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">Press Release</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <section className="pt-12 border-t border-gray-100 overflow-x-auto">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">Additional Assets</h4>
            <div className="flex flex-col sm:flex-row items-start gap-8">
              {project.additionalAssets.map((asset, i) => (
                <div key={i} className="rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex-shrink-0">
                  <img 
                    src={asset} 
                    alt={`${project.title} asset ${i}`} 
                    className="h-[300px] md:h-[500px] w-auto object-contain" 
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
