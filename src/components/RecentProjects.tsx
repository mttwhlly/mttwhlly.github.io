import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';

const RecentProjects = () => {
  const projects = [
    {
      id: 4,
      title: 'Figma RFD Checker',
      description: 'Catches design handoff issues before they reach development.',
      liveUrl: 'https://www.figma.com/community/plugin/1621901729405123866',
    },
    {
      id: 3,
      title: 'Can I Surf Today?',
      description: 'AI-powered surf reports from hyperlocal data, with listen mode.',
      liveUrl: 'https://canisurf.today',
    },
    {
      id: 5,
      title: 'Sui Sans Typeface',
      description: 'Typeface inspired by the lettering of vintage stereo equipment.',
      liveUrl: 'https://github.com/mttwhlly/sui-sans',
    },
  ];

  return (
    <section className="max-w-2xl mx-auto px-6 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-x-6 gap-y-2 sm:gap-y-1">
        <h2 className="self-start font-mono text-sm text-gray-500 dark:text-gray-400 pt-0.5">Projects</h2>
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <div key={project.id}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-baseline gap-1.5 text-gray-900 dark:text-gray-100 hover:underline underline-offset-2"
              >
                {project.title}
                <ArrowUpRight size={12} weight="bold" className="text-gray-400 dark:text-gray-500" />
              </a>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-0.5">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
