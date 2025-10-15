import React from 'react';
import { ChevronRight } from 'lucide-react';


const AboutHeroSection = ({ 
  title = "About Us", 
  breadcrumbPath = [{ name: 'Home', link: '/' }, { name: 'About Us', link: '/about' }] 
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#387498] min-h-[400px] flex items-center" id='about'>
      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-[#387498] bg-blend-multiply" 
        style={{ backgroundImage: "url('/src/assets/doctors-staff.jpg')" }}
      ></div>

      {/* Content Container */}
      <div className="container mx-auto max-w-7xl px-6 relative z-10 py-10 md:py-0">
        
        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
          {title}
        </h1>

        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-white text-base">
          {breadcrumbPath.map((item, index) => (
            <React.Fragment key={index}>
              <a 
                href={item.link} 
                className={`transition ${index < breadcrumbPath.length - 1 ? 'opacity-80 hover:opacity-100' : 'font-semibold'}`}
              >
                {item.name}
              </a>
              {index < breadcrumbPath.length - 1 && (
                <ChevronRight size={14} className="opacity-80"/>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default AboutHeroSection;