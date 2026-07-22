import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';

const RecentProjects = () => {
  const projects = [
    {
      id: 4,
      title: 'RFD Checker Figma Plugin',
      description: 'A Figma plugin that audits a frame against a Ready-for-Dev checklist.',
      image: '/images/figma-icon.svg',
      liveUrl: 'https://www.figma.com/community/plugin/1621901729405123866',
    },
    {
      id: 3,
      title: 'Can I Surf Today?',
      description: 'A hyperlocal surf report powered by live buoy, tide, and weather data.',
      image: '/images/wave-logo.svg',
      liveUrl: 'https://canisurf.today',
    },
  ];

  return (
    <section className="container px-4 pb-16 pt-12 max-w-4xl mx-auto flex flex-col gap-12">
      <div>
        <div className="mb-8">
          <h2 className="text-lg font-mono tracking-loose leading-tight uppercase text-gray-500">
            Projects
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Things I build for myself and others, fully shipped
          </p>
        </div>
        <div className="grid gap-3">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 border border-gray-200 hover:border-gray-300 rounded-xl transition-colors min-w-0"
            >
              <div className="w-12 h-12 rounded-lg flex-shrink-0 bg-gray-100 flex items-center justify-center p-2">
                <img src={project.image} alt="" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-sans font-semibold text-gray-900 leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500">{project.description}</p>
              </div>
              <ArrowUpRight className="flex-shrink-0 text-gray-400" size={16} weight="bold" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
