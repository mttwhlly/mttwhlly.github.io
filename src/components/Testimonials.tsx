import React, { useRef, useEffect, useState } from 'react';

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [showGradient, setShowGradient] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const isScrolledToEnd = scrollLeft + clientWidth >= scrollWidth - 10; // 10px tolerance
        setShowGradient(!isScrolledToEnd);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial state
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Ben Stafford',
      title: 'Co-owner and Designer',
      organization: 'Foxmeadow Creative',
      avatar: '/images/ben.png',
      content:
        "Matt has a wonderful ability to tackle complex challenges with simple creative solutions. He's trustworthy, reliable, and a smart designer. You may regret some things in life, but you'll never regret hiring Matt.",
      link: 'https://BenIllustrated.com',
    },
    {
      id: 2,
      name: 'Corinne Beyer',
      title: 'UX Design Manager',
      organization: 'CAQH',
      avatar: '/images/corinne.jpeg',
      content:
        'Working with Matt makes me excited to push my own performance—his great attitude and communication are contagious.',
      link: '#',
    },
    {
      id: 3,
      name: 'Dan Draper',
      title: 'Designer',
      organization: 'Dan Draper Design',
      avatar: '/images/dan-d.png',
      content:
        "Matt has a skill set which can be hard to find in a creative team member — he's a graphic designer, UX designer, and a developer. This background and mix of talents makes him a thoughtful resource and an asset to any organization or client he works for.",
      link: 'https://dandraperdesign.com/',
    },
    {
      id: 4,
      name: 'Titus Smith',
      title: 'IXD Program Director',
      organization: 'University of Kansas',
      avatar: '/images/titus.jpg',
      content: 'Matt cares deeply.',
      link: 'https://thehideout.design/',
    },
  ];

  return (
    <section className="py-16 px-4 overflow-hidden">
      <div className="mb-8 max-w-4xl mx-auto">
        <h2 className="text-lg font-mono tracking-loose uppercase text-gray-500 mb-2 px-4">
          Testimonials
        </h2>
      </div>

      <div className="max-w-4xl mx-auto relative px-4">
        {/* Scroll affordance - only visible on desktop and when not scrolled to end */}
        {showGradient && (
          <div className="hidden md:block absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        )}

        <div ref={scrollRef} className="overflow-x-scroll">
          <div className="flex flex-col md:flex-row space-x-2 items-start md:pr-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex flex-col justify-start w-full md:w-80 md:min-w-80 mb-4 md:mb-0 bg-white rounded-xl p-6 border border-gray-200"
              >
                <blockquote className="text-gray-700 text-lg">"{testimonial.content}"</blockquote>

                <div className="flex items-start space-x-4 mt-4">
                  <a
                    href={testimonial.link}
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 mt-4 rounded-full object-cover flex-shrink-0"
                    />
                  </a>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col space-x-2 mt-2">
                      <a
                        href={testimonial.link}
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      </a>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                      <p className="text-sm text-gray-600">{testimonial.organization}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
