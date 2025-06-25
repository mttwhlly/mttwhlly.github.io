import React, { useState } from 'react';
import { Plus, Minus } from '@phosphor-icons/react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const faqs = [
    {
      id: 1,
      question: 'Why all side projects and no work case studies here?',
      answer:
        'My day job work (healthcare + internal systems) is mostly NDA-bound or not visually shareable. These personal projects reflect how I think, design, and build when I have full autonomy—and where my interests and skills intersect.',
    },
    {
      id: 2,
      question: 'What\'s with multiple projects with "Lab" in the title?',
      answer:
        "Naming is hard. I like the simplicity of the word 'Lab' and the fact that it's a common term for experimentation and learning. Also, my wife's maiden initials are L.A.B.",
    },
    // {
    //   id: 3,
    //   question: "What's your design process?",
    //   answer:
    //     'I start with user needs and business goals, then move through research, wireframing, and prototyping. I believe in designing with real content and constraints in mind, and I always consider accessibility and performance from the beginning, not as an afterthought.',
    // },
    // {
    //   id: 4,
    //   question: 'How do you approach design systems?',
    //   answer:
    //     "I focus on scalable, maintainable systems that serve both designers and developers. This means clear documentation, consistent patterns, and components that work across different contexts. I've found success in starting small and evolving based on real usage.",
    // },
  ];

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="container px-4 py-20 max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-heading leading-tight mb-6">In case you were wondering...</h2>
        {/* <p className="text-xl text-gray-600 leading-relaxed">
          A few things people often ask about my work and approach.
        </p> */}
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => {
          const isOpen = openItems.has(faq.id);

          return (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-gray-300"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="cursor-pointer w-full px-6 py-6 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                aria-expanded={isOpen}
              >
                <h3 className="text-2xl font-sans text-gray-900 pr-4">{faq.question}</h3>
                <div className="flex-shrink-0 ml-4">
                  {isOpen ? (
                    <Minus size={24} className="text-gray-600" />
                  ) : (
                    <Plus size={24} className="text-gray-600" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <p className="text-xl text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
