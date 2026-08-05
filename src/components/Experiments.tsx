import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';

const Experiments = () => {
  const experiments = [
    {
      id: 4,
      title: 'Sui Sans Typeface',
      description: 'Vintage stereo-inspired digital typeface',
      url: 'https://github.com/mttwhlly/sui-sans',
    },
    {
      id: 13,
      title: '40 Rocks',
      description: 'Interactive NYC location map',
      url: 'https://github.com/mttwhlly/forty-rocks',
    },
    {
      id: 1,
      title: 'Business Bingo',
      description: 'Buzzword bingo for meetings',
      url: 'https://github.com/mttwhlly/business-bingo',
    },
    {
      id: 9,
      title: 'Vinyly',
      description: 'Vinyl collection meets Spotify',
      url: 'https://github.com/mttwhlly/vinyly',
    },
    {
      id: 10,
      title: 'Photobooth',
      description: 'Virtual wedding photo booth',
      url: 'https://github.com/mttwhlly/photobooth',
    },
  ];

  return (
    <section className="container px-4 py-12 max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-lg font-mono tracking-loose leading-tight uppercase text-gray-500">
          Experiments
        </h2>
        <p className="text-sm text-gray-400 mt-1">What I'm tinkering with and exploring</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {experiments.map((experiment) => (
          <a
            href={experiment.url}
            target="_blank"
            rel="noopener noreferrer"
            key={experiment.id}
            className="inline-flex items-center gap-3 py-3 px-3 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors duration-200 group"
          >
            <span className="flex flex-col">
              <span className="text-lg font-medium text-gray-900 leading-tight">
                {experiment.title}
              </span>
              <span className="text-xs text-gray-400">{experiment.description}</span>
            </span>
            <ArrowUpRight
              size={16}
              className="text-gray-400 group-hover:text-gray-600 transition-colors"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Experiments;
