import React from 'react';
import {
  ArrowUpRight,
  MusicNote,
  GridFour,
  Disc,
  TextT,
  Camera,
  CodepenLogo,
  GithubLogo,
  MapPin,
} from '@phosphor-icons/react';

const Experiments = () => {
  const experiments = [
    {
      id: 4,
      title: 'Sui Sans Typeface',
      url: 'https://github.com/mttwhlly/sui-sans',
      icon: TextT,
    },
    {
      id: 13,
      title: '40 Rocks',
      url: 'https://github.com/mttwhlly/forty-rocks',
      icon: MapPin,
    },
    {
      id: 1,
      title: 'Business Bingo',
      url: 'https://github.com/mttwhlly/business-bingo',
      icon: GridFour,
    },
    {
      id: 8,
      title: 'Short Scories',
      url: 'https://shortscories.com/',
      icon: MusicNote,
    },
    {
      id: 9,
      title: 'Vinyly',
      url: 'https://github.com/mttwhlly/vinyly',
      icon: Disc,
    },
    {
      id: 10,
      title: 'Photobooth',
      url: 'https://github.com/mttwhlly/photobooth',
      icon: Camera,
    },
    {
      id: 11,
      title: 'Codepen',
      url: 'http://codepen.io/mttwhlly',
      icon: CodepenLogo,
    },
    {
      id: 12,
      title: 'Github',
      url: 'https://github.com/mttwhlly',
      icon: GithubLogo,
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
            className="inline-flex items-center gap-3 py-2 px-3 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors duration-200 group"
          >
            <experiment.icon size={20} className="text-gray-500 flex-shrink-0" />
            <span className="text-lg font-medium text-gray-900">{experiment.title}</span>
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
