import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

const ServicesFilterBar = () => {
  return (
    <div className="container mx-auto max-w-7xl px-6 mb-12 mt-20">
      <div className="bg-white p-4 rounded-full shadow-xl flex flex-wrap md:flex-nowrap items-center justify-between space-y-3 md:space-y-0 md:space-x-4">
        
        {/* Select Inputs */}
        <div className="flex w-full md:w-auto space-x-2 md:space-x-4">
          {['Location', 'Select Department', 'Select Rating'].map((placeholder, index) => (
            <div key={index} className="relative flex-1">
              <select className="appearance-none bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-sky-500 w-full text-sm">
                <option value="" disabled selected>{placeholder}</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <ChevronDown className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500" size={16} />
            </div>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative flex-grow-0 flex-shrink-0 w-full md:w-auto md:max-w-xs">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-white border border-gray-200 py-3 pl-4 pr-14 rounded-full text-gray-700 focus:outline-none focus:bg-white focus:border-sky-500 text-sm"
          />
          <button className="absolute right-1 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition">
            <Search size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesFilterBar;
