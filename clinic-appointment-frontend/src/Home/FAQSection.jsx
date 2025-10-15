import React from 'react';
import { Play, Plus } from 'lucide-react';
import FAQItem from './FAQItem'; 

const FAQSection = () => {
  const faqData = [
    {
      question: 'What Happens To My Sample Once I Have Provided It?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      isOpen: true,
    },
    {
      question: 'Where Can I Go To Provide A Sample For Testing?',
      answer:
        'You can visit any of our certified collection centers listed on our "Locations" page. We also offer at-home collection services in select areas.',
    },
    {
      question: 'What Will Laboratory Testing Cost Me?',
      answer:
        'Costs vary based on the specific test and your insurance provider. Please contact our billing department or use the online quote tool for an estimate.',
    },
    {
      question: 'Can I Make Appointments by Phone?',
      answer:
        'Yes, absolutely! You can call our main number during business hours to schedule appointments for consultations or lab services.',
    },
    {
      question: 'Using Innovative Technology',
      answer:
        'We utilize state-of-the-art diagnostic equipment and innovative technology to ensure the highest accuracy and fastest turnaround times for all tests.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-lg font-semibold text-sky-500 tracking-wider uppercase flex items-center justify-center">
            <span className="mr-5">|</span>FAQ
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Column: FAQ List */}
          <div className="lg:w-1/2 w-full space-y-4">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={item.isOpen || false}
              />
            ))}
          </div>

          <div className="lg:w-1/2 w-full relative">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              
              <img
                src='/src/assets/faq-img.jpg' 
                alt="Doctors checking tablet"
                className="w-full h-auto object-cover rounded-xl"
              />

            
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center text-sky-500 shadow-xl transition hover:scale-105">
                  <Play size={24} fill="currentColor" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
