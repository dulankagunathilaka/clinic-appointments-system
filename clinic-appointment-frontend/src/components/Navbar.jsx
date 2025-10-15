import React, { useState } from "react";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      {/* --- Top bar --- */}
      <div className="bg-emerald-500 text-white text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+1 (700) 230-0035</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>support@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>2767 Sunrise Street, NY 1002, USA</span>
            </div>
          </div>

          <div className="flex gap-4 text-white text-lg">
            <a href="#" className="hover:text-gray-200">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-200">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-200">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="hover:text-gray-200">
              <i className="fab fa-google-plus-g"></i>
            </a>
          </div>
        </div>
      </div>

      {/* --- Main Navbar --- */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-3 px-4 relative">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <img
              src="/src/assets/logo.png"
              alt="MadiFax Logo"
              className="object-contain w-[140px] h-[45px]"
            />
          </Link>

          {/* Center Menu */}
          <ul
            className={`${
              isOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-center absolute md:static left-0 top-full md:top-auto w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:space-x-8 text-gray-800 font-medium justify-center transition-all duration-300`}
          >
            <li className="py-2 px-4 md:p-0 hover:text-sky-500 transition">
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="py-2 px-4 md:p-0 hover:text-sky-500 transition">
              <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li className="py-2 px-4 md:p-0 hover:text-sky-500 transition">
              <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
            </li>
            <li className="py-2 px-4 md:p-0 hover:text-sky-500 transition">
              <Link to="/pages" onClick={() => setIsOpen(false)}>Pages</Link>
            </li>
            <li className="py-2 px-4 md:p-0 hover:text-sky-500 transition">
              <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
            </li>
            <li className="py-2 px-4 md:p-0 hover:text-sky-500 transition">
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className="text-gray-700 hover:text-sky-500 font-medium"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-gray-700 hover:text-sky-500 font-medium"
            >
              Register
            </Link>
            <Link to="/book-appointment">
              <button className="bg-sky-500 text-white px-5 py-2 rounded-full font-medium hover:bg-sky-600 transition">
                Appointment
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 focus:outline-none ml-auto"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
