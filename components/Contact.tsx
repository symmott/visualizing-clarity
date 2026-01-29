
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-12">Get in Touch</h2>
        
        <div className="space-y-8">
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Open to collaboration
          </h3>
          
          <div className="pt-12">
            <div className="mt-8">
              <span className="text-sm text-gray-400 block mb-1">Email</span>
              <div className="text-lg font-medium text-gray-900">
                azsx0221@naver.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
