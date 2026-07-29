import React from 'react';

const Testimonials = () => {
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
      organization: 'DataSpring',
      avatar: '/images/corinne.jpeg',
      content:
        'Working with Matt makes me excited to push my own performance—his great attitude and communication are contagious.',
      link: 'https://www.linkedin.com/in/corinne-romano-64b15563',
    },
    {
      id: 3,
      name: 'Andrew Hochradel',
      title: 'Career Center Content Manager',
      organization: 'Adobe',
      avatar: '/images/hoch.jpg',
      content:
        'Matt is an innovator and problem solver. Working with him was seamless and his input enhanced our project technically and creatively.',
      link: 'https://hoch.co',
    },
    // {
    //   id: 3,
    //   name: 'Todd Johnson',
    //   title: 'Solutions Architect',
    //   organization: 'Snowflake',
    //   avatar: '/images/todd.jpeg',
    //   content:
    //     'Working with Matt makes me excited to push my own performance—his great attitude and communication are contagious.',
    //   link: 'https://www.linkedin.com/in/mtoddjohnson/',
    // },
    {
      id: 4,
      name: 'Dan Draper',
      title: 'Designer',
      organization: 'Dan Draper Design',
      avatar: '/images/dan-d.png',
      content:
        "Matt has a skill set which can be hard to find in a creative team member — he's a graphic designer, UX designer, and a developer. This background and mix of talents makes him a thoughtful resource and an asset to any organization or client he works for.",
      link: 'https://dandraperdesign.com/',
    },
    {
      id: 5,
      name: 'Titus Smith',
      title: 'IXD Program Director',
      organization: 'University of Kansas',
      avatar: '/images/titus.jpg',
      content: 'Matt cares deeply.',
      link: 'https://thehideout.design/',
    },
  ];

  return (
    <section className="pt-16 pb-16 px-4">
      <div className="mb-8 max-w-4xl mx-auto">
        <h2 className="text-lg font-mono tracking-loose uppercase text-gray-500 mb-2 px-4">
          Testimonials
        </h2>
      </div>

      <div className="max-w-4xl lg:max-w-none mx-auto px-4">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex flex-col justify-start w-full mb-4 bg-white rounded-xl p-6 border border-gray-200 break-inside-avoid"
            >
              <blockquote className="text-gray-700 text-lg">{testimonial.content}</blockquote>

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
    </section>
  );
};

export default Testimonials;
