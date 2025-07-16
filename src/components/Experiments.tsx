import React from 'react';
import {
  ArrowSquareOut,
  MusicNote,
  GridFour,
  PenNib,
  Disc,
  Tree,
  TextT,
  ChartBar,
  CheckSquare,
  FileText,
  Camera,
} from '@phosphor-icons/react';

const Experiments = () => {
  const experiments = [
    {
      id: 1,
      title: 'Short Scories',
      url: 'https://shortscories.com/',
      tags: ['Next.js', 'Strapi CMS', 'Spotify API'],
      icon: MusicNote,
    },
    {
      id: 2,
      title: 'Business Bingo',
      url: 'https://businessbingo.lol',
      tags: ['Supabase', '98.css'],
      icon: GridFour,
    },
    {
      id: 3,
      title: 'D U S T',
      url: 'https://dustwriting.space',
      tags: ['Offline First', 'PWA'],
      icon: PenNib,
    },
    {
      id: 4,
      title: 'Vinyly',
      url: 'https://github.com/mttwhlly/vinyly',
      tags: ['Sveltekit', 'Spotify API', 'Discogs API'],
      icon: Disc,
    },
    {
      id: 5,
      title: 'Grounded',
      url: 'https://t0ccko4o0sc0cc0wowsw4w04.mttwhlly.cc',
      tags: ['GSAP'],
      icon: Tree,
    },
    {
      id: 6,
      title: 'Sui Sans Font',
      url: 'https://github.com/mttwhlly/sui-sans',
      tags: ['Type Design', 'Figma'],
      icon: TextT,
    },
    {
      id: 7,
      title: 'Chart Generator Plugin',
      url: 'https://github.com/mttwhlly/figma-charter',
      tags: ['Figma', 'Dataviz'],
      icon: ChartBar,
    },
    {
      id: 8,
      title: 'Design Standards Checker Plugin',
      url: 'https://github.com/mttwhlly/design-standards-checker',
      tags: ['Figma', 'Design Systems'],
      icon: CheckSquare,
    },
    {
      id: 9,
      title: 'Get Layer Text Plugin',
      url: 'https://github.com/mttwhlly/get-figma-text',
      tags: ['Figma', 'Text Extraction'],
      icon: FileText,
    },
    {
      id: 10,
      title: 'Photobooth',
      url: 'https://github.com/mttwhlly/photobooth',
      tags: ['Express', 'Cloudinary'],
      icon: Camera,
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
            target="_blank"
            rel="noopener noreferrer"
            key={experiment.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors duration-200"
          >
            <div className="flex-1">
              <div className="inline-flex items-center gap-3 text-xl font-medium text-gray-900 transition-colors group">
                <experiment.icon size={20} className="text-gray-500 flex-shrink-0" />
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
