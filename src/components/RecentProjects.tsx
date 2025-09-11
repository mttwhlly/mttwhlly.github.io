import React from 'react';
import { ArrowSquareOut, GithubLogo, ArrowRight, ArrowUpRight } from '@phosphor-icons/react';

const RecentProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'HANG LAB',
      tagline: 'iOS/WatchOS hangboard training app',
      description:
        'A focused tool for climbers to increase their finger strength. I designed and built a mobile and Apple Watch training experience, emphasizing clarity under physical strain. Currently built in Swift as a personal challenge but possible a cross-platform React Native rewrite is on the horizon.',
      icon: '/images/hangtime-icon.svg',
      image: '/images/hanglab.webp',
      tags: ['Swift', 'SwiftUI', 'HealthKit', 'WatchKit', 'SiriKit', 'Haptics'],
      liveUrl: 'https://testflight.apple.com/join/FTcb21dX',
      linkText: 'Join the TestFlight Beta',
      githubUrl: '#',
      type: 'WatchOS/iOS App',
    },
    {
      id: 2,
      title: 'Can I Surf Today?',
      tagline: 'Hyperlocal AI-powered surf report',
      description:
        "A modern take on calling the local surf shop's answering machine daily report, this tool gathers realtime local buoy, tide and weather data and produces a stoke-filled surf report written by a friendly AI surfer. Built to enable quick, fun informed decisions – without a PhD in meteorology.",
      icon: '/images/wave-logo.svg',
      tags: ['Next.js', 'Vercel AI SDK', 'NOAA/Open-Meteo APIs', 'Neon', 'Bun'],
      liveUrl: 'https://canisurf.today',
      linkText: 'See the latest report',
      githubUrl: '#',
      type: 'Web App & API',
    },
    // {
    //   id: 1,
    //   title: 'Should Design Systems Code?',
    //   tagline: 'An evaluation of design systems, AI and pancakes',
    //   description:
    //     "A modern take on calling the local surf shop's answering machine to find out if it's worth paddling out, this tool gathers hyperlocal buoy data, tide forecasts, and produces a stoke-filled surf report written by a friendly AI surfer. Built to enable quick informed decisions – without a PhD in meteorology.",
    //   image: '',
    //   tags: ['Figma', 'Design Tokens', 'MCP'],
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   type: 'Design Systems',
    // },
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
            {/* <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1"> */}
            <div className="flex-1 space-y-6">
              <div>
                {/* <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-medium border border-gray-300 text-gray-500 px-3 py-1 rounded-full">
                  {project.type}
                  </span>
                  </div> */}
                <div className="flex flex-col md:flex-row justify-between">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={`${project.title} mockup`}
                      className="max-h-[400px] mr-8 object-contain"
                    />
                  )}
                  <div className="flex flex-col md:gap-4">
                    <div className="flex mt-3">
                      <img
                        src={project.icon}
                        alt={project.title}
                        className="w-16 h-16 rounded-2xl"
                      />
                      <div className="flex flex-col gap-0.5 ml-4">
                        <h3 className="text-2xl font-sans font-bold leading-tight pt-1">
                          {project.title}
                        </h3>
                        <h4 className="text-md text-gray-600 font-semibold tracking-wide leading-relaxed mb-1">
                          {project.tagline}
                        </h4>
                      </div>
                    </div>

                    {/* <ArrowUpRight
                        className="text-gray-300 hover:text-gray-400 transition-colors duration-200"
                        size={24}
                      /> */}
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
                  </div>
                </div>
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
            {/* </a> */}

            {/* Project Links */}
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
