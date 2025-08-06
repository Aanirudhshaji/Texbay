import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  { id: '[01]', question: 'What digital marketing services do you offer?', answer: 'We offer curated travel packages, customized itineraries, group tours, and personalized travel planning assistance for domestic and international destinations.' },
  { id: '[02]', question: 'What is ROI in digital marketing, and why is it important?', answer: 'Absolutely! We specialize in building personalized itineraries based on your interests, budget, and travel goals.' },
  { id: '[03]', question: 'Do I need a big budget for digital marketing services?', answer: 'Yes, we take care of everything from flights and hotels to local transportation and guided tours, so you can travel worry-free.' },
  { id: '[04]', question: 'How much do you charge for your services?', answer: 'Yes, we offer flexible cancellation policies depending on the package you book. Full details are shared before confirmation.' },
  { id: '[05]', question: 'How far in advance should I book my trip?', answer: 'We recommend booking 1–3 months in advance for the best availability and rates, especially for international or seasonal trips.' },
  { id: '[06]', question: 'Do you offer support during the trip?', answer: 'Yes! Our team is available 24/7 during your trip to assist with any unexpected changes, emergencies, or questions.' },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-8 md:py-12 bg-[#fbfbfb]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <h2 className="text-4xl text-center md:text-left sm:text-5xl font-roboto font-medium  text-[#002bba] leading-snug">
            Frequently asked<br /> questions
          </h2>
          <p className="text-sm sm:text-base text-gray-600 text-center sm:text-left font-poppins md-8">
            Find quick answers about our travel packages,
            booking process,customization options, and how we help you explore the world with ease.
          </p>
        </div>

        {/* FAQ List */}
        <div className="divide-y divide-gray-200">
          {faqs.map((item, index) => (
            <div
              key={item.id}
              onClick={() => toggle(index)}
              className="py-5 flex justify-between items-start cursor-pointer group"
            >
              <div className="flex gap-5 w-full">
                <span className="text-sm text-gray-500 font-mono">{item.id}</span>
                <div className="flex flex-col w-full">
                  <h4 className="text-base sm:text-lg text-black font-normal group-hover:text-[#002bba]">
                    {item.question}
                  </h4>
                  {openIndex === index && (
                    <p className="text-sm text-gray-500 mt-2 pr-8 leading-relaxed">
                      {item.answer}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-1 text-gray-400 text-xl">
                {openIndex === index ? <FiMinus /> : <FiPlus />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
