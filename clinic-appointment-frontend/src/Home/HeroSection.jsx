import React from 'react';
import { Phone, Star, Heart, FileText, User } from 'lucide-react'; 

const HeroSection = () => {
  return (
    
    <section className="relative w-full min-h-[600px] overflow-hidden bg-gradient-to-r from-[#e0f7fa] via-[#e8f5e9] to-[#ffffff] py-16 lg:py-24 ">

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        
        <div className="lg:w-1/2 z-10 space-y-8 text-left py-10 lg:py-0">
          
          <div className="flex items-center text-sky-500 font-bold text-lg">
             <span className="mr-5">|</span> Welcome to MadiFax
          </div>

          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
            We Are Committed To Your Health
          </h1>

          <p className="text-lg text-gray-600 max-w-lg">
            Elevating your health journey with compassionate care and medical excellence. We provide comprehensive services designed around your well-being, because your health is our greatest commitment</p>

          <button className="bg-sky-500 text-white px-10 py-3 rounded-full font-medium text-lg shadow-lg hover:bg-sky-600 transition duration-300">
            Meet A Doctor
          </button>
          
          <div className="flex space-x-10 pt-10">
            
            <div className="text-gray-900">
              <p className="text-4xl font-bold">355k+</p>
              <p className="text-base text-gray-600">Recovered Patients</p>
            </div>

            <div className="text-gray-900">
              <p className="text-4xl font-bold">98%</p>
              <p className="text-base text-gray-600">Good Review</p>
            </div>

            <div className="text-gray-900">
              <p className="text-4xl font-bold">120+</p>
              <p className="text-base text-gray-600">Popular Doctors</p>
            </div>
             
        <div className="pt-8">
          <div className="bg-white p-4 rounded-lg shadow-xl inline-flex items-center space-x-3">
            
            <img 
              src="/src/assets/review1.png" 
              alt="User profile"
              className="w-10 h-10 rounded-full object-cover border border-gray-200 shadow-sm"
            />

        <div>
          <div className="flex text-yellow-500">
            <Star size={16} fill="currentColor"/>
            <Star size={16} fill="currentColor"/>
            <Star size={16} fill="currentColor"/>
            <Star size={16} fill="currentColor"/>
            <Star size={16} fill="currentColor"/>
          </div>
          <span className="text-sm text-gray-700">5-Star Review</span>
        </div>
      </div>
    </div>


          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <img
            src="/src/assets/banner_img.png"
            alt="Smiling female doctor in blue scrubs giving a thumbs up"
            className="w-full max-w-lg h-auto object-cover rounded-tl-[100px] shadow-2xl"

          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;