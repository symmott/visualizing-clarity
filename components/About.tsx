
import React from 'react';

const tools = [
  { name: 'Photoshop', icon: 'Ps', color: 'hover:bg-blue-50 hover:text-blue-600' },
  { name: 'Illustrator', icon: 'Ai', color: 'hover:bg-orange-50 hover:text-orange-600' },
  { name: 'Indesign', icon: 'Id', color: 'hover:bg-pink-50 hover:text-pink-600' },
  { name: 'Figma', icon: 'Fg', color: 'hover:bg-purple-50 hover:text-purple-600' },
  { name: 'Google Sheets', icon: 'Gs', color: 'hover:bg-green-50 hover:text-green-600' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          
          <div className="md:col-span-3">
            <h2 className="text-xl font-semibold tracking-tight text-black mb-4">How I Think</h2>
            <div className="h-[2px] w-8 bg-black"></div>
          </div>
          
          <div className="md:col-span-9">
            <div className="space-y-12">
              <div className="space-y-8">
                <h3 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[1.1] text-gray-900">
                  I start by asking what needs to be understood.<br />
                  Then I design how it should be seen.
                </h3>
                
                <p className="text-sm md:text-base text-gray-500 max-w-xl leading-relaxed tracking-tight font-light">
                  I focus on structuring and visualizing complex information.
                  With a background in fashion design and an interest in systems,
                  I translate data, technology, and product information into clear visuals.
                </p>
              </div>

              <div className="pt-16 border-t border-gray-100">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">Main Tools</h4>
                <div className="flex flex-wrap gap-4 md:gap-6">
                  {tools.map((tool, index) => (
                    <div 
                      key={index} 
                      className={`group flex items-center space-x-3 px-5 py-3 rounded-2xl border border-gray-100 bg-gray-50/50 transition-all duration-300 hover:border-black hover:bg-white cursor-default`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-[10px] font-black text-gray-900 group-hover:scale-110 transition-transform">
                        {tool.icon}
                      </div>
                      <span className="text-xs font-bold text-gray-600 group-hover:text-black tracking-tight">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
