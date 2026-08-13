import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';

const Experiments = () => {
  const experiments = [
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
    <section className="max-w-2xl mx-auto px-6 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-x-6 gap-y-2 sm:gap-y-1">
        <h2 className="sticky top-6 self-start bg-white dark:bg-[#181818] font-mono text-sm text-gray-500 dark:text-gray-400 pt-0.5">Experiments</h2>
        <div className="flex flex-col gap-6">
          {experiments.map((experiment) => (
            <div key={experiment.id}>
              <a
                href={experiment.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-baseline gap-1.5 text-gray-900 dark:text-gray-100 hover:underline underline-offset-2"
              >
                {experiment.title}
                <ArrowUpRight size={12} weight="bold" className="text-gray-400 dark:text-gray-500" />
              </a>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-0.5">{experiment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiments;
