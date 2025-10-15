import React from 'react';
import { Calendar, ChevronDown } from 'lucide-react';

const FormInput = ({ type = 'text', placeholder, icon: Icon, isSelect = false }) => {
  return (
    <div className="relative w-full">
      
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-4 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-300 transition duration-150"
        required
        style={type === 'date' ? { color: 'transparent', textShadow: '0 0 0 #000' } : {}}
        onFocus={(e) => { if (type === 'date') e.target.type = 'date'; }}
        onBlur={(e) => { if (e.target.value === '') e.target.type = 'text'; }}
      />
      
      {/* Icon for Date Field */}
      {Icon && !isSelect && (
        <Icon
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          size={20}
        />
      )}
      
      {/* Icon for Select Fields */}
      {isSelect && (
        <ChevronDown
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          size={20}
        />
      )}
    </div>
  );
};

const AppointmentFormSection = () => {
  return (
    <section className="py-20 px-6 bg-white" id="appointment">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row rounded-xl shadow-2xl overflow-hidden">

          {/* Left Column: Form (3/5 width) */}
          <div className="lg:w-3/5 w-full bg-sky-500 p-8 md:p-12 text-white">
            <div className="mb-8 space-y-2">
              <p className="text-lg font-semibold tracking-wider"><span className="mr-5">|</span>Appointment</p>
              <h2 className="text-4xl md:text-5xl font-extrabold">Apply For Free Now</h2>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <FormInput placeholder="Patient Name*" />
              <FormInput placeholder="Email*" />
              
              <FormInput placeholder="Email Address*" />
              <FormInput placeholder="Select Department" isSelect={true} />
              
              <FormInput placeholder="Select Doctor" isSelect={true} />
              <FormInput placeholder="DD/MM/YYYY" icon={Calendar} type="text" /> 
              
              <FormInput placeholder="Select Time" isSelect={true} />
              <button
                type="submit"
                className="w-full bg-blue-700 text-white font-semibold py-4 rounded-lg hover:bg-blue-800 transition duration-300 shadow-lg"
              >
                Book Appointment
              </button>
            </form>
          </div>

          <div className="lg:w-2/5 w-full hidden lg:block relative">
            <img
              src="/src/assets/appoinment_img.png"
              alt="Smiling female doctor with stethoscope"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentFormSection;