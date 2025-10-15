import React from 'react';
import { CheckCircle, Play } from 'lucide-react';

const AboutUsSection = () => {
  return (
    <section className="py-20 px-6 bg-white" id="about">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row gap-12 items-center">

        {/* --- Left Image Column --- */}
        <div className="lg:w-1/2 relative">
          
          <div className="absolute top-1/3 right-0 transform translate-x-1/2 -translate-y-1/2 hidden md:block z-0">
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" stroke="#38bdf8" strokeWidth="2" strokeDasharray="5 5" />
              <circle cx="50" cy="50" r="30" stroke="#38bdf8" strokeWidth="2" strokeDasharray="5 5" />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="rounded-2xl overflow-hidden shadow-2xl w-3/5 h-auto absolute top-0 left-0 transform -translate-x-6 -translate-y-20">
              <img
                src="/src/assets/surgery.jpg" 
                alt="Medical team performing surgery"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl w-3/5 right-10 h-auto ml-auto mt-24 relative">
              <img
                src="/src/assets/doctor.jpg"
                alt="Doctor talking to a mother and child"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center text-sky-500 shadow-xl transition hover:scale-105">
                  <Play size={24} fill="currentColor" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- Right Content Column --- */}
        <div className="lg:w-1/2 space-y-6 lg:pl-12 mt-16 lg:mt-0">
          
          {/* Subheading */}
          <p className="text-lg font-semibold text-sky-500 tracking-wider flex items-center">
             <span className="mr-5">|</span> About Us
          </p>

          {/* Main Title */}
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            The Great Place Of Medical Hospital Center.
          </h2>

          {/* Description Text */}
          <p className="text-gray-600 text-lg">
                At MadiFax, we believe that quality healthcare begins with compassion, trust, and innovation.
                Our mission is to provide world-class medical care using advanced technology and a patient-centered approach.
                From diagnosis to recovery, our dedicated team of doctors, nurses, and specialists work together to ensure every patient receives personalized attention and effective treatment.

                With a commitment to excellence, we continuously strive to make healthcare more accessible, affordable, and comforting — because your health deserves nothing less.</p>

          {/* Feature List Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 pt-4">
            
            {/* Feature Item */}
            {[
              "Ambulance Services",
              "Oxizen On Wheel",
              "Pharmacy On Clinic",
              "On Duty Doctors",
              "24/7 Medical Emergency",
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle size={20} className="text-sky-500 flex-shrink-0" fill="#38bdf8" stroke="white" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <button className="bg-sky-500 text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg hover:bg-sky-600 transition duration-300">
              Discover More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUsSection;