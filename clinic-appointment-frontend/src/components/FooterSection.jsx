import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const FooterSection = () => {
  const footerLinks = [
    {
      title: "Company",
      links: ["Home", "About Us", "Our Service", "Our Team", "Contact Us"],
    },
    {
      title: "Important",
      links: ["Our Process", "Appointment", "FAQ", "Privacy Policy", "Terms & Conditions"],
    },
    {
      title: "Quick Link",
      links: ["Why Choose Us", "Pricing Plan", "News & Articles", "Login", "Subscribe"],
    },
  ];

  return (
    <>
      <div className="relative z-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="bg-sky-500 rounded-full py-6 md:py-8 px-6 flex flex-col md:flex-row justify-between items-center shadow-2xl transform translate-y-1/2">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-0">
              Subscribe for the Exclusive Updates!
            </h3>

    
            <form className="flex w-full md:w-auto md:min-w-[400px] bg-white rounded-full p-1 shadow-md">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-grow p-3 rounded-l-full text-gray-700 focus:outline-none focus:ring-0"
                required
              />
              <button
                type="submit"
                className="bg-sky-500 text-white font-medium px-6 py-3 rounded-full hover:bg-sky-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="relative bg-gradient-to-t from-[#e0f7fa] to-white pt-32 md:pt-40 overflow-hidden mt-20">
        <div className="container mx-auto max-w-7xl px-6 pb-10 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 text-gray-700">
            
            <div className="col-span-2 md:col-span-1 space-y-6">
              <div className="flex items-center space-x-2 text-2xl font-bold text-gray-900">
                <div className="text-sky-500 text-3xl font-extrabold">+</div>
                <span>MadiFax</span>
              </div>
              
              <p className="text-sm">
                There are to popular belie Lorem is Ipsum is not simply random.
              </p>

              <div className='space-y-2'>
                <p className='text-sm font-semibold'>
                  Hello to: <a href='mailto:support@gmail.com' className='text-sky-500 font-normal'>support@gmail.com</a>
                </p>
              </div>

              <div className='flex gap-3 pt-2'>
                <a href='#' className='w-8 h-8 bg-sky-500/10 text-sky-500 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition'>
                  <i className="fab fa-facebook-f text-sm"></i>
                </a>
                <a href='#' className='w-8 h-8 bg-sky-500/10 text-sky-500 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition'>
                  <i className="fab fa-twitter text-sm"></i>
                </a>
                <a href='#' className='w-8 h-8 bg-sky-500/10 text-sky-500 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition'>
                  <i className="fab fa-pinterest text-sm"></i>
                </a>
                <a href='#' className='w-8 h-8 bg-sky-500/10 text-sky-500 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition'>
                  <i className="fab fa-linkedin-in text-sm"></i>
                </a>
              </div>
            </div>

            {footerLinks.map((col, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-lg font-bold text-gray-900 mb-4">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-sm hover:text-sky-500 transition duration-150">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            <div className="space-y-4 col-span-2 md:col-span-1">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Official Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-sky-500 mt-1 flex-shrink-0" />
                  <p className="text-sm">2767 Sunrise Street, NY 1002, USA</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-sky-500 flex-shrink-0" />
                  <p className="text-sm">company@gmail.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-sky-500 flex-shrink-0" />
                  <p className="text-sm">+965548547564</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="border-t border-gray-100 mt-10 py-4 text-gray-500 text-sm">
          <div className="container mx-auto max-w-7xl px-6 flex justify-between items-center flex-wrap">
            <p className="mb-2 md:mb-0">
              © 2023 MadiFax. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-sky-500 transition">Terms and conditions</a>
              <a href="#" className="hover:text-sky-500 transition">Cookies</a>
              <a href="#" className="hover:text-sky-500 transition">Privacy policy</a>
            </div>
          </div>
        </div>

        <a href="#" className="fixed bottom-4 right-4 w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-sky-600 transition">
          <div className='w-4 h-4 border-l-2 border-t-2 border-white transform -rotate-45 -translate-y-0.5'></div>
        </a>
      </footer>
    </>
  );
};

export default FooterSection;
