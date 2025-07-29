import React from 'react';
import {
  ArrowUpRight,
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
      title: 'Business Bingo Game',
      url: 'https://businessbingo.lol',
      icon: GridFour,
    },
    {
      id: 2,
      title: 'D U S T Writing App',
      url: 'https://dustwriting.space',
      icon: PenNib,
    },
    {
      id: 3,
      title: 'Vinyly App',
      url: 'https://github.com/mttwhlly/vinyly',
      icon: Disc,
    },
    {
      id: 4,
      title: 'Grounded App',
      url: 'https://t0ccko4o0sc0cc0wowsw4w04.mttwhlly.cc',
      icon: Tree,
    },
    {
      id: 5,
      title: 'Sui Sans Typeface',
      url: 'https://github.com/mttwhlly/sui-sans',
      icon: TextT,
    },
    {
      id: 6,
      title: 'Chart Generator Figma Plugin',
      url: 'https://github.com/mttwhlly/figma-charter',
      icon: ChartBar,
    },
    {
      id: 7,
      title: 'Standards Checker Figma Plugin',
      url: 'https://github.com/mttwhlly/design-standards-checker',
      icon: CheckSquare,
    },
    {
      id: 8,
      title: 'Get Layer Text Figma Plugin',
      url: 'https://github.com/mttwhlly/get-figma-text',
      icon: FileText,
    },
    {
      id: 9,
      title: 'Short Scories Microsite',
      url: 'https://shortscories.com/',
      icon: MusicNote,
    },
    {
      id: 10,
      title: 'Photobooth App',
      url: 'https://github.com/mttwhlly/photobooth',
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
            {/* <ArrowUpRight
              size={16}
              className="text-gray-400 group-hover:text-gray-600 transition-colors"
            /> */}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Experiments;
