import React from 'react';
import { Plus, GraduationCap, Briefcase } from 'lucide-react';


const DoctorCard = ({ imageSrc, name, specialization, degrees }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition duration-300 hover:shadow-xl w-full max-w-sm mx-auto">
      
      <div className="bg-[#f0f8ff] p-4 pt-8 h-80 flex justify-center items-end">
        <img
          src={imageSrc}
          alt={`Dr. ${name}`}
          className="w-full h-full object-contain rounded-t-lg"
        />
      </div>

      <div className="bg-sky-500 text-white p-4 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm font-medium">{specialization}</p>
          <p className="text-xs opacity-80 mt-1">{degrees}</p>
        </div>
        
        <button className="w-8 h-8 bg-white text-sky-500 rounded-full flex items-center justify-center transition hover:bg-gray-100">
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
};

export default DoctorCard; 
