import React, { useState } from 'react';
import { Heart, Microscope, Droplet } from 'lucide-react';
import ServiceCard from './ServiceCard';

const servicesData = [
  {
    id: 1,
    imageSrc: '/src/assets/surgery.jpg',
    title: 'Holter Heart Surgery',
    icon: Heart,
    iconBg: 'bg-sky-500',
  },
  {
    id: 2,
    imageSrc: '/src/assets/microscop.jpg',
    title: 'Diagnose & Research',
    icon: Microscope,
    iconBg: 'bg-pink-500',
  },
  {
    id: 3,
    imageSrc: '/src/assets/monitoring.jpg',
    title: 'Blood Test & Analysis',
    icon: Droplet,
    iconBg: 'bg-amber-500',
  },
  {
    id: 4,
    imageSrc: '/src/assets/eye-care.jpg',
    title: 'Ophthalmology Care',
    icon: Heart,
    iconBg: 'bg-blue-500',
  },
  {
    id: 5,
    imageSrc: '/src/assets/dental.jpg',
    title: 'Dental Care',
    icon: Heart,
    iconBg: 'bg-green-500',
  },
  {
    id: 6,
    imageSrc: '/src/assets/physiotherapy.jpg',
    title: 'Physiotherapy',
    icon: Heart,
    iconBg: 'bg-yellow-500',
  },
];

const ServicesSection = () => {
  const itemsPerPage = 3; 
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(servicesData.length / itemsPerPage);

  const currentServices = servicesData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="relative py-20 bg-[#f0f8ff] overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              'radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, #f0f8ff 1px)',
            backgroundSize: '10px 10px',
          }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-lg font-semibold text-sky-500 tracking-wider flex items-center justify-center">
            <span className="mr-5">|</span>Our Services
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Our Medical Services
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentServices.map((service) => (
            <ServiceCard
              key={service.id}
              imageSrc={service.imageSrc}
              title={service.title}
              icon={service.icon}
              iconBg={service.iconBg}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center space-x-3 mt-12">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`px-4 py-2 rounded-full ${
                currentPage === i + 1
                  ? 'bg-sky-500 text-white'
                  : 'bg-gray-300 text-gray-700'
              } transition`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
