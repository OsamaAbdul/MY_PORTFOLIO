import React from 'react';
import ProjectCard from './ProjectCard';
import projectData from './ProjectData';



const Projects = () => {
  return (
    <section id="projects" className="container py-24 scroll-mt-20">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 uppercase">
          PRO<span className="text-[#ff0033]">JECTS</span>
        </h2>
        <div className="h-1 w-20 bg-[#ff0033] rounded-full" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <div key={index} className="flex justify-center">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;