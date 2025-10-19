import React from 'react';


const TestimonialCard = ({ text, name, role, imageSrc }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-xl border border-gray-100 relative w-full max-w-sm mx-auto">
      
      <div className="flex text-yellow-500 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.295l-7.416 3.818 1.48-8.279L.001 9.306l8.332-1.151L12 .587z"/>
          </svg>
        ))}
      </div>

      <p className="text-gray-700 italic mb-6">
        "{text}"
      </p>

      <div className="flex justify-between items-center mt-6">
        
        <div className="flex items-center space-x-4">
          <img
            src={imageSrc}
            alt={name}
            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
          />
          <div>
            <p className="text-lg font-bold text-gray-900">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>

        <div className="flex space-x-1 text-sky-500 opacity-80">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M9.983 3.003L.031 9.09v6.526h6.11l3.842 4.385V9.09h-3.95zm14.004 0L14.035 9.09v6.526h6.11l3.842 4.385V9.09h-3.95z"/>
          </svg>
          <svg className="w-6 h-6 fill-current transform scale-x-[-1]" viewBox="0 0 24 24">
            <path d="M9.983 3.003L.031 9.09v6.526h6.11l3.842 4.385V9.09h-3.95zm14.004 0L14.035 9.09v6.526h6.11l3.842 4.385V9.09h-3.95z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 
