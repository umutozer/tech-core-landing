import React from 'react';

const techs = ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Vite', 'Tailwind', 'Python', 'AWS'];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-darkBg rounded-[3rem] p-12 lg:p-20 text-center text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -z-0" />
          
          <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-12 relative z-10">Kullandığımız Teknolojiler</h2>
          
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            {techs.map((tech) => (
              <div 
                key={tech} 
                className="px-8 py-3 bg-white/5 border border-white/10 rounded-full font-medium hover:bg-white/10 hover:border-primary/50 transition-all cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;