import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ben Stafford',
      title: 'Co-owner and Designer, Foxmeadow Creative',
      content:
        'Matt has a wonderful ability to tackle complex challenges with simple creative solutions. He’s trustworthy, reliable, and a smart designer. You may regret some things in life, but you’ll never regret hiring Matt.',
      link: 'https://BenIllustrated.com',
      avatar: '/images/ben.png',
    },
    {
      id: 2,
      name: 'Corinne Beyer',
      title: 'UX Design Manager, DataSpring',
      content:
        'Working with Matt makes me excited to push my own performance—his great attitude and communication are contagious.',
      link: 'https://www.linkedin.com/in/corinne-romano-64b15563',
      avatar: '/images/corinne.jpeg',
    },
    {
      id: 3,
      name: 'Andrew Hochradel',
      title: 'Career Center Content Manager, Adobe',
      content:
        'Matt is an innovator and problem solver. Working with him was seamless and his input enhanced our project technically and creatively.',
      link: 'https://hoch.co',
      avatar: '/images/hoch.jpg',
    },
  ];

  return (
    <section className="max-w-2xl mx-auto px-6 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-x-6 gap-y-2 sm:gap-y-1">
        <h2 className="self-start font-mono text-sm text-gray-500 dark:text-gray-400 pt-0.5">Testimonials</h2>
        <div className="flex flex-col gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <p className="font-serif italic text-lg text-gray-700 dark:text-gray-300 leading-snug">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-2 mt-2">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-6 h-6 rounded-full object-cover grayscale shrink-0"
                />
                <p className="text-sm text-gray-400 dark:text-gray-500">
                  <a
                    href={testimonial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:underline underline-offset-2"
                  >
                    {testimonial.name}
                  </a>
                  {', '}
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
