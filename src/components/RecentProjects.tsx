import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';

const RecentProjects = () => {
  const experience = [
    {
      id: 0,
      title: 'AI Product Development at DataSpring',
      tagline: 'AI product engineering, frontend architecture, and team enablement',
      description:
        'Leading UX engineering and frontend architecture for AI-enabled web and mobile initiatives. Work includes production React interfaces, AI-assisted development workflows, design system standards, secure authentication patterns, and guidance for engineers and vendor teams adopting emerging AI tooling.',
      icon: '/images/ds.svg',
      image: '',
      tags: [
        'React',
        'AI Product Development',
        'Design Systems',
        'UX Engineering',
        'Technical Leadership',
        'React Native',
      ],
      liveUrl: 'https://dataspring.com',
      linkText: 'Visit DataSpring',
      githubUrl: '#',
      type: 'Professional Experience',
    },
    {
      id: 4,
      title: 'RFD Checker',
      tagline: 'Figma plugin for Ready-for-Dev audits',
      description:
        'Audits a selected frame against a Ready-for-Dev checklist and tells you, in seconds, whether it\'s actually ready to hand to engineering — or where it\'ll break when translated to code. Checks design tokens, component mapping, layout & responsiveness, handoff hygiene, and accessibility. Built for teams shipping from Figma to a component-based codebase, with first-class support for Material UI and design tokens/variables. Private by design — everything runs locally on your selection.',
      icon: '/images/figma-icon.svg',
      image: '',
      tags: ['Figma Plugin', 'Design Systems', 'Material UI', 'Design Tokens', 'Handoff'],
      liveUrl: 'https://www.figma.com/community/plugin/1621901729405123866',
      linkText: 'View on Figma Community',
      githubUrl: '#',
      type: 'Figma Plugin',
    },
  ];

  const projects = [
    {
      id: 3,
      title: 'Can I Surf Today?',
      tagline: 'Hyperlocal AI-powered surf report',
      description:
        'A modern take on local surf reports, this tool gathers realtime buoy, tide and weather data and produces a stoke-filled surf report written by a friendly, knowledgeable AI surfer for quick, fun and informed decisions – without needing a PhD in meteorology.',
      icon: '/images/wave-logo.svg',
      image: '/images/canisurftoday.webp',
      tags: ['Next.js', 'Vercel AI SDK', 'NOAA/Open-Meteo APIs', 'Neon', 'Bun'],
      liveUrl: 'https://canisurf.today',
      linkText: "Read today's report",
      githubUrl: '#',
      type: 'Web App & API',
    },
    {
      id: 2,
      title: 'HANG LAB',
      tagline: 'iOS/WatchOS hangboard training app',
      description:
        'A tool for climbers to break through plateaus by increasing finger strength through scientifically proven hangboard routines. Currently built in Swift - fully integrated with Healthkit with precise haptics - with a cross-platform rewrite in React Native on the horizon.',
      icon: '/images/hangtime-icon.svg',
      image: '/images/hanglab.webp',
      tags: ['Swift', 'SwiftUI', 'HealthKit', 'WatchKit', 'SiriKit', 'Haptics'],
      liveUrl: 'https://testflight.apple.com/join/FTcb21dX',
      linkText: 'Join the TestFlight Beta',
      githubUrl: '#',
      type: 'WatchOS/iOS App',
    },
  ];

  const renderCards = (items: typeof experience) =>
    items.map((project, index) => (
      <article
        key={project.id}
        className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start p-8 border border-gray-200 hover:border-gray-300 rounded-2xl ${
          index % 2 === 1 ? 'lg:flex-row-reverse' : ''
        }`}
      >
        <div className="flex-1 space-y-6">
          <div>
            <div
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 justify-between`}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.title} mockup`}
                  className="max-h-[400px] object-contain"
                />
              )}
              <div className="flex flex-col justify-between md:gap-4">
                <div className="mb-12 md:mb-auto">
                  <div className="flex mt-6 md:mt-1">
                    {project.icon && (
                      <img
                        src={project.icon}
                        alt={project.title}
                        className="w-16 h-16 rounded-2xl"
                      />
                    )}
                    <div className="flex flex-col gap-0.5 ml-4">
                      <h3 className="text-2xl font-sans font-bold leading-tight pt-1">
                        {project.title}
                      </h3>
                      <h4 className="text-md text-gray-600 font-semibold tracking-wide leading-relaxed mb-1">
                        {project.tagline}
                      </h4>
                    </div>
                  </div>

                  <p className="my-4 text-md text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  {project.linkText && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-6"
                    >
                      {project.linkText}{' '}
                      <ArrowUpRight className="inline-block ml-1" size={16} weight="bold" />
                    </a>
                  )}
                </div>

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
              </div>
            </div>
          </div>
        </div>
      </article>
    ));

  return (
    <section className="container px-4 pb-16 pt-12 max-w-4xl mx-auto flex flex-col gap-12">
      <div>
        <div className="mb-8">
          <h2 className="text-lg font-mono tracking-loose leading-tight uppercase text-gray-500">
            Experience
          </h2>
        </div>
        <div className="grid gap-6 lg:gap-8">
          {renderCards(experience)}
        </div>
      </div>

      <div>
        <div className="mb-8">
          <h2 className="text-lg font-mono tracking-loose leading-tight uppercase text-gray-500">
            Projects
          </h2>
        </div>
        <div className="grid gap-6 lg:gap-8">
          {renderCards(projects)}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
