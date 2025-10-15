import React, { useState } from 'react';
import { Plus } from 'lucide-react';


const FAQItem = ({ question, answer, isOpen: initialOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const itemClasses = isOpen
    ? 'bg-sky-50 text-gray-900 shadow-md'
    : 'bg-sky-50/70 text-gray-700 hover:bg-sky-100 transition duration-300';

  return (
    <div
      className={`rounded-lg cursor-pointer p-4 md:p-6 ${itemClasses}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Question Row */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold pr-4">{question}</h3>
        <Plus
          size={20}
          className={`text-sky-500 transition-transform duration-300 ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
        />
      </div>

      {/* Answer Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pt-3 md:pt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 text-base">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
