import React from 'react';
import { ArrowSquareOut, GithubLogo, ArrowRight } from '@phosphor-icons/react';

const RecentProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Hangtime',
      description:
        'I designed and built Hangtime to guide climbers through training routines using progressive timers, haptics, and simple visual cues. The UI is intentionally distraction-free, optimized for glanceability during intense physical use. Focus: accessibility, timer accuracy, and real-world use in sweaty, fast-paced training sessions.',
      image:
        'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop&auto=format',
      tags: ['Swift', 'HealthKit', 'WatchKit'],
      liveUrl: '#',
      githubUrl: '#',
      type: 'WatchOS/iOS App',
    },
    {
      id: 2,
      title: 'Surf Lab',
      description:
        'Surf Lab answers the only question that matters to East Coast surfers: should I grab my board? I prioritized quick load times, a simple interface, and minimal cognitive load—ideal for sunrise sessions or parenting pauses. Future versions will include Apple Watch support and expansion to other surf spots.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format',
      tags: ['React', 'Next.js', 'PWA'],
      liveUrl: '#',
      githubUrl: '#',
      type: 'Progressive Web App',
    },
  ];

  return (
    <section className="container px-4 py-16 max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-lg font-mono tracking-loose leading-tight uppercase text-gray-500">
          Projects
        </h2>
      </div>

      {/* <div className="max-w-4xl mx-auto">
        <p className="text-md text-gray-700 p-6 bg-gray-50 rounded-xl border border-dashed border-gray-300 mb-16">
          While I can’t share work from my current role, these personal projects represent my
          approach: thoughtful, user-focused, and built with care.
        </p>
      </div> */}

      <div className="grid gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start p-8 border border-gray-200 rounded-2xl ${
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
                {/* <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-medium border border-gray-300 text-gray-500 px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div> */}
                <h3 className="text-2xl font-sans font-bold leading-tight mb-4">{project.title}</h3>
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
              {/* <div className="flex items-center gap-4 pt-2">
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
              </div> */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
