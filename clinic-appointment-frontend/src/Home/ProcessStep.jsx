import React from 'react';


const ProcessStep = ({ number, title, description, colorClass, lineStyle = '' }) => {
  return (
    <div className="flex flex-col items-center text-center relative w-full lg:w-1/4 px-4">
      
      <div className={`w-14 h-14 ${colorClass} rounded-full flex items-center justify-center text-white text-lg font-bold z-10 shadow-md`}>
        {number}
      </div>

      {lineStyle && (
        <div className="hidden lg:block absolute top-7 right-0 w-full h-0">
          <div className={`border-t-2 border-dashed ${lineStyle} absolute left-1/2 w-full`}></div>
        </div>
      )}

      <div className="mt-6 space-y-2">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
