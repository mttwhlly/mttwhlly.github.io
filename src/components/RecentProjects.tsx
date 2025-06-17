import React from 'react';
import { ArrowSquareOut, GithubLogo, ArrowRight } from '@phosphor-icons/react';

const RecentProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Hang Lab',
      description:
        'A minimalist training app for climbers, built to guide hangboard routines using haptics, visual cues, and progressive timers. I designed and developed this to work seamlessly on Apple Watch and iPhone, optimizing for glanceability, low-distraction UI, and performance under physical stress.',
      image:
        'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop&auto=format',
      tags: ['Figma', 'Swift', 'HealthKit', 'WatchKit'],
      liveUrl: '#',
      githubUrl: '#',
      type: 'WatchOS/iOS App',
    },
    {
      id: 2,
      title: 'Surf Report App',
      description:
        'A clean, fast surf conditions app tailored for East Coast breaks. I built this as a personal tool to help gauge surfability at a glance—prioritizing clarity, calm UI, and quick load times over data density.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format',
      tags: ['PWA', 'HTML', 'CSS', 'JavaScript', 'Express', 'Service Worker', 'Canvas API'],
      liveUrl: '#',
      githubUrl: '#',
      type: 'Progressive Web App',
    },
    // {
    //   id: 3,
    //   title: 'Legacy Platform Migration',
    //   description:
    //     'Migrated a complex legacy application to modern React architecture while maintaining 99.9% uptime and improving performance by 60%.',
    //   image:
    //     'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format',
    //   tags: ['React', 'Performance', 'Migration', 'Node.js'],
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   type: 'Modernization',
    // },
  ];

  return (
    <section className="container px-4 py-20 max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-heading leading-tight mb-6 uppercase">Recent Work</h2>
        <p className="text-2xl text-gray-600 leading-relaxed max-w-3xl">
          Selected projects that showcase my approach to thoughtful, accessible frontend development
          and design system thinking.
        </p>
      </div>

      <div className="grid gap-12 lg:gap-16">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Project Image */}
            {/* <div className="flex-1 group">
              <div className="relative overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div> */}

            {/* Project Content */}
            <div className="flex-1 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-3xl font-sans font-bold leading-tight mb-4">{project.title}</h3>
                <p className="text-xl text-gray-600 leading-relaxed">{project.description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href={project.liveUrl}
                  className="inline-flex items-center gap-2 text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors group"
                >
                  View Project
                  <ArrowSquareOut
                    size={18}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
                <a
                  href={project.githubUrl}
                  className="inline-flex items-center gap-2 text-lg text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Code
                  <ArrowSquareOut
                    size={18}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
