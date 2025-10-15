import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { HeartPulse } from 'lucide-react'; 

const TestimonialsSection = () => {
  const testimonialsData = [
    {
      id: 1,
      name: 'Robert Floxder',
      role: 'Customer',
      text: 'Robert’s feedback text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageSrc: '/src/assets/review1.png',
    },
    {
      id: 2,
      name: 'Vlack Marvin',
      role: 'Customer',
      text: 'Vlack’s feedback text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageSrc: '/src/assets/review2.png',
    },
    {
      id: 3,
      name: 'Jenny Wilson',
      role: 'Customer',
      text: 'Jenny’s feedback text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageSrc: '/src/assets/review3.png',
    },
    {
      id: 4,
      name: 'Michael Scott',
      role: 'Customer',
      text: 'Michael’s feedback text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageSrc: '/src/assets/review1.png',
    },
    {
      id: 5,
      name: 'Sarah Connor',
      role: 'Customer',
      text: 'Sarah’s feedback text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageSrc: '/src/assets/review2.png',
    },
  ];

  const cardsPerPage = 3; 
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(testimonialsData.length / cardsPerPage);

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const startIndex = currentPage * cardsPerPage;
  const currentTestimonials = testimonialsData.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-[#f0f8ff] to-[#f8f8ff] overflow-hidden">
      
      <div className="absolute top-10 right-10 text-sky-300 opacity-60 hidden md:block">
        <HeartPulse size={80} strokeWidth={1} />
      </div>

      <div className="absolute bottom-10 left-10 text-sky-300 opacity-60 hidden md:block">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <rect x="10" y="40" width="10" height="50" fill="#add8e6" opacity="0.6"/>
          <rect x="30" y="20" width="10" height="70" fill="#add8e6" opacity="0.6"/>
          <path d="M80 80 L70 90 L90 90 Z" fill="#add8e6" opacity="0.8"/>
          <circle cx="80" cy="80" r="10" stroke="#add8e6" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        <div className="text-center mb-16 space-y-3">
          <p className="text-lg font-semibold text-sky-500 tracking-wider uppercase flex items-center justify-center">
            <span className="mr-5">|</span>Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentTestimonials.map(testimonial => (
            <TestimonialCard 
              key={testimonial.id}
              text={testimonial.text}
              name={testimonial.name}
              role={testimonial.role}
              imageSrc={testimonial.imageSrc}
            />
          ))}
        </div>
        
        <div className="flex justify-center space-x-2 mt-12">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentPage === index ? 'bg-sky-500' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
