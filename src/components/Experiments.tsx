import React from 'react';
import { ArrowSquareOut } from '@phosphor-icons/react';

const Experiments = () => {
  const experiments = [
    {
      id: 1,
      title: 'Short Scories',
      url: 'https://shortscories.com/',
      tags: ['Next.js', 'Strapi CMS', 'Spotify API'],
    },
    {
      id: 1,
      title: 'Business Bingo',
      url: 'https://businessbingo.lol',
      tags: ['Supabase', '98.css'],
    },
    {
      id: 2,
      title: 'D U S T',
      url: 'https://dustwriting.space',
      tags: ['Offline First', 'PWA'],
    },
    {
      id: 3,
      title: 'Vinyly',
      url: 'https://github.com/mttwhlly/vinyly',
      tags: ['Sveltekit', 'Spotify API', 'Discogs API'],
    },
    {
      id: 4,
      title: 'Grounded',
      url: 'https://github.com/mttwhlly/grounded',
      tags: ['GSAP'],
    },
    {
      id: 5,
      title: 'Sui Sans Font',
      url: '#',
      tags: ['Type Design', 'Figma'],
    },
    {
      id: 6,
      title: 'Chart Generator Plugin',
      url: 'https://github.com/mttwhlly/figma-charter',
      tags: ['Figma', 'Dataviz'],
    },
    {
      id: 7,
      title: 'Design Standards Checker Plugin',
      url: 'https://github.com/mttwhlly/design-standards-checker',
      tags: ['Figma', 'Design Systems'],
    },
    {
      id: 8,
      title: 'Get Layer Text Plugin',
      url: 'https://github.com/mttwhlly/get-figma-text',
      tags: ['Figma', 'Text Extraction'],
    },
    {
      id: 9,
      title: 'Photobooth',
      url: 'https://github.com/mttwhlly/photobooth',
      tags: ['Express', 'Cloudinary'],
    },
  ];

  return (
    <section className="container px-4 py-12 max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-lg font-mono tracking-loose leading-tight uppercase text-gray-500">
          Experiments
        </h2>
      </div>

      <div className="space-y-4">
        {experiments.map((experiment) => (
          <a
            href={experiment.url}
            key={experiment.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors duration-200"
          >
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 text-xl font-medium text-gray-900 transition-colors group">
                {experiment.title}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {experiment.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Experiments;
