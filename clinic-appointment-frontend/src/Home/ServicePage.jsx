import React, { useState } from 'react';
import { Heart, Droplet, Microscope, Monitor, ChevronLeft, ChevronRight } from 'lucide-react';
import ServiceHeroSection from './ServiceHeroSection';
import ServicesFilterBar from './ServicesFilterBar';
import ServiceCard from './ServiceCard';

const ServicePage = () => {
  // Sample service data
  const servicesData = [
    { id: 1, imageSrc: '/src/assets/surgery.jpg', title: 'Holter Heart Surgery', icon: Heart, iconBg: 'bg-sky-500' },
    { id: 2, imageSrc: '/src/assets/microscop.jpg', title: 'Diagnose & Research', icon: Microscope, iconBg: 'bg-pink-500' },
    { id: 3, imageSrc: '/src/assets/monitoring.jpg', title: 'Blood Test & Analysis', icon: Droplet, iconBg: 'bg-amber-500' },
    { id: 4, imageSrc: '/src/assets/eye-care.jpg', title: 'Ophthalmology Care', icon: Heart, iconBg: 'bg-blue-500' },
    { id: 5, imageSrc: '/src/assets/dental.jpg', title: 'Dental Care', icon: Heart, iconBg: 'bg-green-500' },
    { id: 6, imageSrc: '/src/assets/physiotherapy.jpg', title: 'Physiotherapy', icon: Heart, iconBg: 'bg-yellow-500' },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 3;
  const totalPages = Math.ceil(servicesData.length / servicesPerPage);
  const currentServices = servicesData.slice(
    (currentPage - 1) * servicesPerPage,
    currentPage * servicesPerPage
  );

  return (
    <div className="bg-white">
       <section id="about" className="pt-[115px]">
         <ServiceHeroSection 
        title="Our Services" 
        breadcrumbPath={[{ name: 'Home', link: '/' }, { name: 'Services', link: '/services' }]}
      />
       </section>

      {/* Filter Bar */}
      <ServicesFilterBar />

      {/* Services Grid */}
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentServices.map(service => (
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
        <div className="flex justify-center items-center space-x-3 mt-12">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            className="w-10 h-10 rounded-full text-gray-400 hover:text-sky-500 transition"
          >
            <ChevronLeft size={20} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`px-4 py-2 rounded-full ${
                currentPage === i + 1 ? 'bg-sky-500 text-white' : 'bg-gray-300 text-gray-700'
              } transition`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            className="w-10 h-10 rounded-full text-gray-400 hover:text-sky-500 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
