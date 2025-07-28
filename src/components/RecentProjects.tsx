import React from 'react';
import { ArrowSquareOut, GithubLogo, ArrowRight } from '@phosphor-icons/react';

const RecentProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Hangtime',
      tagline: 'A distraction-free Apple Watch and iPhone app for hangboard training',
      description:
        'I designed and built Hangtime to guide climbers through hangboard training routines using interval timers, haptics, and simple visual cues. The UI is intentionally distraction-free, optimized for glanceability during intense physical use. Coming Soon to the App Store.',
      image: '/images/hangtime-icon.svg',
      tags: ['Swift', 'HealthKit', 'WatchKit'],
      liveUrl: '#',
      githubUrl: '#',
      type: 'WatchOS/iOS App',
    },
    {
      id: 2,
      title: 'Surf Lab',
      tagline: 'AI-generated surf report app based on local buoy and forecast data',
      description:
        "As a South Florida kid in the 90s, I'd call the local surf shop every morning to hear the daily forecast. This is my digital homage to that ritual: combining buoy data, marine forecasts, and AI-generated surf reports to recreate the stoke.",
      image: '/images/wave-logo.svg',
      tags: ['Next.js', 'Vercel AI SDK', 'NOAA/Open-Meteo APIs'],
      liveUrl: 'https://surf-report-rouge.vercel.app/',
      githubUrl: '#',
      type: 'Web App & API',
    },
  ];

  return (
    <section className="container px-4 py-16 max-w-4xl mx-auto">
      <div className="mb-8">
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

      <div className="grid gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start p-8 border border-gray-200 hover:border-gray-300 rounded-2xl ${
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
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <div className="flex-1 space-y-6">
                <div>
                  {/* <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-medium border border-gray-300 text-gray-500 px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div> */}
                  <div className="flex flex-col md:flex-row mb-4 md:gap-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-16 h-16 mb-4 rounded-2xl"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-2xl font-sans font-bold leading-tight pt-1">
                        {project.title}
                      </h3>
                      <h4 className="text-lg text-gray-600 font-semibold tracking-wide leading-relaxed mb-2">
                        {project.tagline}
                      </h4>
                    </div>
                  </div>
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
            </a>

            {/* Project Links */}
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
