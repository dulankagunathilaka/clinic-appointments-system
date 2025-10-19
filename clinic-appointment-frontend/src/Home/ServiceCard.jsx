import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ imageSrc, title, icon: Icon, iconBg }) => {
  const serviceDescriptions = {
    'Holter Heart Surgery':
      'Advanced cardiac surgery for patients with heart rhythm disorders, using the latest minimally invasive techniques.',
    'Diagnose & Research':
      'Comprehensive diagnostics and research services, including lab tests and clinical studies to ensure accurate health assessments.',
    'Blood Test & Analysis':
      'Full range of blood tests for detecting health conditions early, with precise and reliable lab results.',
    'Ophthalmology Care':
      'Specialized eye care services including vision correction, cataract treatment, and glaucoma management.',
    'Dental Care':
      'Professional dental services including preventive care, teeth whitening, and restorative treatments.',
    'Physiotherapy':
      'Personalized physiotherapy sessions to aid rehabilitation, improve mobility, and reduce pain.',
  };

  const description = serviceDescriptions[title] || 'High quality medical services for your well-being.';

  return (
    <div className="bg-white rounded-lg shadow-xl p-4 overflow-hidden transform transition duration-300 hover:shadow-2xl hover:-translate-y-1 w-full max-w-sm mx-auto">
      
      <div className="relative h-48 overflow-hidden rounded-lg">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="flex justify-start">
        <div
          className={`relative -mt-8 p-4 rounded-xl ${iconBg} text-white shadow-lg flex items-center justify-center`}
        >
          <Icon size={28} fill="currentColor" />
        </div>
      </div>

      <div className="pt-6 pb-4 px-2 space-y-3 text-left">
        <h3 className="text-xl font-bold text-gray-900 mt-2">{title}</h3>
        <p className="text-gray-600 text-sm">
          {description}
        </p>

        <a 
          href="#"
          className="flex items-center justify-start text-sm font-medium text-gray-700 hover:text-sky-500 transition pt-2"
        >
          Read More <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
