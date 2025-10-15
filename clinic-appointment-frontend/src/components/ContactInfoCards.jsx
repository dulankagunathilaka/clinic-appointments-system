import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const ContactInfoCards = () => {
  const contactInfo = [
    {
      icon: MapPin,
      iconBg: 'bg-pink-500',
      title: 'Office Address',
      details: [
        '16/A, Romadan House City,',
        'Tower New York, United',
        'States'
      ]
    },
    {
      icon: Phone,
      iconBg: 'bg-blue-500',
      title: 'Phone Number',
      details: [
        '+880 1234 567895',
        '+880 9876 543217'
      ]
    },
    {
      icon: Mail,
      iconBg: 'bg-yellow-500',
      title: 'Office Address',
      details: [
        'example@gmail.com',
        'junayedallinone@gmail.com'
      ]
    },
    {
      icon: Globe,
      iconBg: 'bg-green-500',
      title: 'Website Address',
      details: [
        '16/A, Romadan House City',
        'Tower New York, United',
        'States'
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              <div className={`${item.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>

              {/* Details */}
              <div className="text-gray-600 space-y-1">
                {item.details.map((detail, idx) => (
                  <p key={idx}>{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;