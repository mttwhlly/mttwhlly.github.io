import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';

const RecentProjects = () => {
  const projects = [
    {
      id: 3,
      title: 'Can I Surf Today?',
      description: 'AI-powered surf reports from hyperlocal data, with listen mode.',
      liveUrl: 'https://surf-report-git-main-mttwhllys-projects.vercel.app/',
    },
    {
      id: 4,
      title: 'Figma RFD Plugin',
      description: 'Catches design handoff issues before devs (or agents) code.',
      liveUrl: 'https://www.figma.com/community/plugin/1621901729405123866',
    },
    {
      id: 2,
      title: 'Hang Lab',
      description: 'iOS/WatchOS hangboard training app for climbers.',
      note: 'Currently being rebuilt in React Native for cross-platform — reach out for details.',
    },
  ];

  return (
    <section className="max-w-2xl mx-auto px-6 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-x-6 gap-y-2 sm:gap-y-1">
        <h2 className="self-start font-mono text-sm text-gray-500 dark:text-gray-400 pt-0.5">Projects</h2>
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <div key={project.id}>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-baseline gap-1.5 text-gray-900 dark:text-gray-100 hover:underline underline-offset-2"
                >
                  {project.title}
                  <ArrowUpRight size={12} weight="bold" className="text-gray-400 dark:text-gray-500" />
                </a>
              ) : (
                <span className="text-gray-900 dark:text-gray-100">{project.title}</span>
              )}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-0.5">{project.description}</p>
              {project.note && (
                <p className="text-gray-400 dark:text-gray-500 text-sm italic mt-0.5">{project.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
