
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20">
      <div className="max-w-4xl text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-gray-900 leading-[0.9] reveal">
          Visualizing clarity.
        </h1>
        <p className="text-sm md:text-base text-gray-400 font-medium tracking-[0.3em] uppercase reveal" style={{ transitionDelay: '200ms' }}>
          Visual Designer · Data & Product Visualization
        </p>
        <div className="pt-10 flex flex-col sm:flex-row gap-6 justify-center items-center reveal" style={{ transitionDelay: '400ms' }}>
          <button 
            onClick={() => scrollToSection('projects')}
            className="group relative px-10 py-4 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 min-w-[180px]"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gray-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="px-10 py-4 border border-gray-200 text-gray-600 rounded-full text-xs font-bold uppercase tracking-widest hover:border-black hover:text-black transition-all hover:bg-gray-50 active:scale-95 min-w-[180px]"
          >
            How I Think
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 reveal" style={{ transitionDelay: '600ms' }}>
        <p className="text-[10px] font-bold tracking-[0.4em] text-black uppercase opacity-60">
          — Soyeon Kim
        </p>
      </div>
    </section>
  );
};

export default Hero;
