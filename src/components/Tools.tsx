import React, { useEffect, useRef } from 'react';

interface TechItem {
  name: string;
  image: string;
  alt: string;
  category: string;
}

const Tools: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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
    {
      name: 'Svelte',
      image: '/images/svelte.png',
      alt: 'Svelte logo',
      category: 'frontend',
    },
    {
      name: 'Astro',
      image: '/images/astro.png',
      alt: 'Astro logo',
      category: 'frontend',
    },
    {
      name: 'Lit',
      image: '/images/lit.svg',
      alt: 'Lit logo',
      category: 'frontend',
    },
    // {
    //   name: 'Remix',
    //   image: '/images/remix.png',
    //   alt: 'Remix logo',
    //   category: 'frontend',
    // },

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
      name: 'HTML5',
      image: '/images/html5.png',
      alt: 'HTML5 logo',
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
    {
      name: 'NPM',
      image: '/images/npm.png',
      alt: 'Npm logo',
      category: 'tools',
    },
    // {
    //   name: 'Expo',
    //   image: '/images/expo.svg',
    //   alt: 'Expo logo',
    //   category: 'tools',
    // },

    // Styling & Build
    {
      name: 'Tailwind',
      image: '/images/tailwind.png',
      alt: 'Tailwind CSS logo',
      category: 'styling',
    },
    {
      name: 'CSS3',
      image: '/images/css3.png',
      alt: 'CSS3 logo',
      category: 'styling',
    },
    {
      name: 'GSAP',
      image: '/images/gsap.webp',
      alt: 'GSAP logo',
      category: 'tools',
    },
    {
      name: 'PWA',
      image: '/images/pwa.png',
      alt: 'PWA logo',
      category: 'tools',
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

  // Split tech stack into rows
  const getRowItems = (startIndex: number, count: number): TechItem[] => {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(techStack[(startIndex + i) % techStack.length]);
    }
    return items;
  };

  const row1 = getRowItems(0, 10);
  const row2 = getRowItems(10, 20);
  // const row3 = getRowItems(16, 24);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const rows = containerRef.current?.querySelectorAll('.tech-row');
    rows?.forEach((row) => observer.observe(row));

    return () => observer.disconnect();
  }, []);

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
      <div className="max-w-4xl mx-auto w-full" ref={containerRef}>
        <h2 className="text-lg mb-6 px-4 font-mono leading-tight uppercase text-gray-500">Tools</h2>

        <div className="overflow-hidden space-y-4 relative">
          {/* Left gradient */}
          <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

          {/* Right gradient */}
          <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          {/* Left gradient */}
          <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

          {/* Right gradient */}
          <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          {/* Row 1 - Left to Right */}
          <div className="tech-row tech-row-ltr relative">
            <div className="flex gap-4 animate-scroll-ltr">
              {[...row1, ...row1].map((item, index) => (
                <TechItem key={`row1-${index}`} item={item} />
              ))}
            </div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="tech-row tech-row-rtl relative">
            <div className="flex gap-4 animate-scroll-rtl">
              {[...row2, ...row2].map((item, index) => (
                <TechItem key={`row2-${index}`} item={item} />
              ))}
            </div>
          </div>

          {/* Row 3 - Left to Right */}
          {/* <div className="tech-row tech-row-ltr relative">
            <div className="flex gap-4 animate-scroll-ltr">
              {[...row3, ...row3].map((item, index) => (
                <TechItem key={`row3-${index}`} item={item} />
              ))}
            </div>
          </div> */}
        </div>
      </div>
      <p className="mt-6 px-4 text-gray-600 leading-relaxed max-w-4xl mx-auto">
        I care more about what tools enable than the tools themselves—but I'm always experimenting
        and refining my workflow to build better software.
      </p>

      <style>{`
        .tech-row {
          opacity: 0;
          transform: translateY(20px);
          transition:
            opacity 0.6s ease,
            transform 0.6s ease;
        }

        .tech-row.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-scroll-ltr {
          animation: scrollLeft 16s linear infinite;
        }

        .animate-scroll-rtl {
          animation: scrollRight 16s linear infinite;
        }

        .tech-row:hover .animate-scroll-ltr,
        .tech-row:hover .animate-scroll-rtl {
          animation-play-state: paused;
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Tools;
