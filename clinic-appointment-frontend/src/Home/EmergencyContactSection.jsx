import React from 'react';
import { Phone, Mail, CheckCircle, Stethoscope } from 'lucide-react';

const EmergencyContactSection = () => {
  return (
    <section className="relative py-20 px-6 bg-[#f0f8ff] overflow-hidden">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row gap-12 items-center">

        <div className="lg:w-1/2 w-full space-y-8 relative">
          
          <div className="space-y-2">
            <p className="text-lg font-semibold text-sky-500 tracking-wider flex items-center">
              <span className="mr-5">|</span>Emergency Helpline
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Need Emergency Contact
            </h2>
          </div>

            <p className="text-gray-600 text-lg max-w-lg">
            Our hospital is committed to providing immediate assistance in any medical emergency. 
            Our dedicated team of healthcare professionals is available 24/7 to guide you, 
            offer urgent care, and ensure you or your loved ones receive the help needed without delay. 
            Contact us anytime for prompt medical support and guidance.
            </p>


          {/* Feature List */}
          <div className="space-y-3 pt-4">
            {[
              "24/7 Contact Our Hospital.",
              "24 Hours Open Our Hospital.",
              "Emergency Contact Our Phone Number.",
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle size={20} className="text-sky-500 flex-shrink-0" fill="#38bdf8" stroke="white" />
                <span className="text-gray-700 text-lg">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/4 text-sky-300 opacity-50 hidden md:block">
            <Stethoscope size={64} className="rotate-45" />
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-8">
            
            <div className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Phone Number</p>
                <p className="text-gray-900 font-bold text-lg">+880 13 2525 065</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Quick Your Email</p>
                <p className="text-gray-900 font-bold text-lg">help.info@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex justify-center mt-12 lg:mt-0">
          <img
              src='/src/assets/helpline_img.png' 
              alt="Customer service agent with laptop and headset"
              className="w-full max-w-lg h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default EmergencyContactSection;