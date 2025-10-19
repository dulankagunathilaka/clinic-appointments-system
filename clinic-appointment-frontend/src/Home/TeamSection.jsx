import React from 'react';
import DoctorCard from './DoctorCard';

const TeamSection = () => {
  
  const doctorsData = [
    {
      id: 1,
      imageSrc: '/src/assets/team-1.jpg' , 
      name: 'Dr. Jon Miller',
      specialization: 'Neurology',
      degrees: 'MBBS, FCPS, FRCS',
    },
    {
      id: 2,
      imageSrc: '/src/assets/team-2.jpg' , 
      name: 'Dr. Jon Miller', 
      specialization: 'Cardiology',
      degrees: 'MBBS, FCPS, FRCS',
    },
    {
      id: 3,
      imageSrc: '/src/assets/team-3.jpg' , 
      name: 'Dr. Jon Miller',
      specialization: 'Ophthalmology',
      degrees: 'MBBS, FCPS, FRCS',
    },
    {
      id: 4,
      imageSrc: '/src/assets/team-4.jpg' , 
      name: 'Dr. Jon Miller',
      specialization: 'Pediatric',
      degrees: 'MBBS, FCPS, FRCS',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl relative">
        
        <div className="text-center mb-16 space-y-3">
          <p className="text-lg font-semibold text-sky-500 tracking-wider uppercase flex items-center justify-center">
            | Our Team
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Meet Our Expert Doctor
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctorsData.map(doctor => (
            <DoctorCard 
              key={doctor.id}
              imageSrc={doctor.imageSrc}
              name={doctor.name}
              specialization={doctor.specialization}
              degrees={doctor.degrees}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-sky-500 text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg hover:bg-sky-600 transition duration-300">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;