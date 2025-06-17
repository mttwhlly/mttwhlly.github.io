import React from 'react';
import { Quotes } from '@phosphor-icons/react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ben Stafford',
      title: 'Creative Director',
      organization: 'Foxmeadow Creative',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format',
      content:
        "Matt has a wonderful ability to tackle complex challenges with simple creative solutions. He's trustworthy, reliable, and a smart designer. You may regret some things in life, but you'll never regret hiring Matt.",
    },
    {
      id: 2,
      name: 'Dan Draper',
      title: 'Designer',
      organization: 'Dan Draper Design',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format',
      content:
        "Matt has a skill set which can be hard to find in a creative team member — he's a graphic designer, UX designer, and a developer. This background and mix of talents makes him a thoughtful resource and an asset to an organization or client he works for.",
    },
    {
      id: 3,
      name: 'Titus Smith',
      title: 'Principal',
      organization: 'The Hideout',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face&auto=format',
      content: 'Matt cares deeply.',
    },
  ];

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-16 overflow-hidden">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-heading uppercase text-gray-900 mb-2">Testimonials</h2>
      </div>

      <div className="relative">
        <div className="flex space-x-6 animate-scroll hover:animate-pause">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex flex-col justify-between flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <blockquote className="text-gray-700 text-lg">"{testimonial.content}"</blockquote>

              <div className="flex items-start space-x-4 mt-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 mt-4 rounded-full object-cover flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col space-x-2 mt-2">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                    <p className="text-sm text-gray-600">{testimonial.organization}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
