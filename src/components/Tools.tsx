import React from 'react';

interface TechItem {
  name: string;
  image: string;
  alt: string;
  category: string;
}

const Tools: React.FC = () => {

  // Tech stack data
  const techStack: TechItem[] = [
    // Frontend Frameworks
    {
      name: 'React',
      image: '/images/react.png',
      alt: 'React logo',
      category: 'frontend',
    },
    {
      name: 'Next.js',
      image: '/images/nextjs.png',
      alt: 'Next.js logo',
      category: 'frontend',
    },
    // {
    //   name: 'Svelte',
    //   image: '/images/svelte.png',
    //   alt: 'Svelte logo',
    //   category: 'frontend',
    // },
    // {
    //   name: 'Remix',
    //   image: '/images/remix.png',
    //   alt: 'Remix logo',
    //   category: 'frontend',
    // },

    // AI
    {
      name: 'Anthropic',
      image: '/images/anthropic.png',
      alt: 'Anthropic logo',
      category: 'ai',
    },
    {
      name: 'OpenAI',
      image: '/images/openai.png',
      alt: 'OpenAI logo',
      category: 'ai',
    },
    {
      name: 'Azure AI Foundry',
      image: '/images/ai-foundry.png',
      alt: 'Azure AI Foundry logo',
      category: 'ai',
    },
    {
      name: 'Azure',
      image: '/images/azure.png',
      alt: 'Azure logo',
      category: 'ai',
    },

    // Languages
    {
      name: 'TypeScript',
      image: '/images/ts.png',
      alt: 'TypeScript logo',
      category: 'languages',
    },
    {
      name: 'JavaScript',
      image: '/images/js.png',
      alt: 'JavaScript logo',
      category: 'languages',
    },
    {
      name: 'Swift',
      image: '/images/swift.png',
      alt: 'Swift logo',
      category: 'languages',
    },

    // Design Tools
    {
      name: 'Figma',
      image: '/images/figma.png',
      alt: 'Figma logo',
      category: 'design',
    },
    // {
    //   name: 'Adobe',
    //   image: '/images/adobe.png',
    //   alt: 'Adobe logo',
    //   category: 'design',
    // },

    // Development Tools
    // {
    //   name: 'VS Code',
    //   image: '/images/vscode.png',
    //   alt: 'VS Code logo',
    //   category: 'tools',
    // },
    // {
    //   name: 'Git',
    //   image: '/images/git.png',
    //   alt: 'Git logo',
    //   category: 'tools',
    // },
    {
      name: 'Vercel',
      image: '/images/vercel.svg',
      alt: 'Vercel logo',
      category: 'tools',
    },
    {
      name: 'Bun',
      image: '/images/bun.svg',
      alt: 'Bun logo',
      category: 'tools',
    },
    {
      name: 'Node.js',
      image: '/images/node.png',
      alt: 'Node.js logo',
      category: 'tools',
    },
    {
      name: 'Vite',
      image: '/images/vite.png',
      alt: 'Vite logo',
      category: 'tools',
    },
    {
      name: 'Storybook',
      image: '/images/storybook.png',
      alt: 'Storybook logo',
      category: 'tools',
    },

    // Styling & Build
    {
      name: 'Tailwind',
      image: '/images/tailwind.png',
      alt: 'Tailwind CSS logo',
      category: 'styling',
    },

    // Cloud & Deployment
    {
      name: 'Docker',
      image: '/images/docker.webp',
      alt: 'Docker logo',
      category: 'cloud',
    },
    {
      name: 'GraphQL',
      image: '/images/graphql.png',
      alt: 'GraphQL logo',
      category: 'cloud',
    },
    // {
    //   name: 'Wordpress',
    //   image: '/images/wordpress.png',
    //   alt: 'Wordpress logo',
    //   category: 'cloud',
    // },
    // {
    //   name: 'Sanity',
    //   image: '/images/sanity.png',
    //   alt: 'Sanity logo',
    //   category: 'cloud',
    // },
    // {
    //   name: 'Shopify',
    //   image: '/images/shopify.png',
    //   alt: 'Shopify logo',
    //   category: 'cloud',
    // },

    // AI & Experiments
    // {
    //   name: 'OpenAI',
    //   image: '/images/openai.png',
    //   alt: 'OpenAI logo',
    //   category: 'ai',
    // },
    // {
    //   name: 'Anthropic',
    //   image: '/images/anthropic.png',
    //   alt: 'Anthropic logo',
    //   category: 'ai',
    // },
  ];

  const duration = `${techStack.length * 1.25}s`;

  const TechItem: React.FC<{ item: TechItem }> = ({ item }) => (
    <div className="flex-shrink-0 flex flex-col items-center p-4 group">
      <div className="w-16 h-16 bg-white flex items-center justify-center">
        <img
          src={item.image}
          alt={item.alt}
          title={item.name}
          className="w-12 h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
        />
      </div>
      {/* <span className="text-xs text-gray-400 text-center font-medium group-hover:text-gray-600 transition-colors duration-300">
        {item.name}
      </span> */}
    </div>
  );

  return (
    <section className="px-4 flex-auto flex flex-col gap-4 mt-12 mb-8 overflow-hidden">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-lg mb-6 px-4 font-mono leading-tight uppercase text-gray-500">Tools</h2>

        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

          <div style={{ display: 'flex', width: 'max-content', willChange: 'transform', animation: `scrollLeft ${duration} linear infinite` }}>
            {[...techStack, ...techStack, ...techStack, ...techStack].map((item, index) => (
              <TechItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
      <p className="mt-6 px-4 text-gray-600 leading-relaxed max-w-4xl mx-auto">
        I care more about what tools enable than the tools themselves—but I'm always experimenting
        and refining my workflow to build better software.
      </p>

      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
      `}</style>
    </section>
  );
};

export default Tools;
