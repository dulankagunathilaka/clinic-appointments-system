import React from 'react';
import HeroSection from './HeroSection';
import AboutUsSection from './AboutUsSection';
import ServicesSection from './ServicesSection';
import FAQSection from './FAQSection';
import WorkingProcessSection from './WorkingProcessSection';
import AppointmentFormSection from './AppointmentFormSection';
import EmergencyContactSection from './EmergencyContactSection';
import TeamSection from './TeamSection';
import TestimonialsSection from './TestimonialsSection';
import BlogSection from './BlogSection';
import FooterSection from '../components/FooterSection';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Page Content */}
      <main className="pt-[115px]">
        {/* Hero Section (Full Width) */}
        <section id="home" className="w-full">
          <HeroSection />
        </section>

        {/* Centered Sections */}
        <div className="container mx-auto">
          <AboutUsSection />
          <ServicesSection />
          <FAQSection />
          <WorkingProcessSection />
          <AppointmentFormSection />
          <EmergencyContactSection />
          <TeamSection />
          <TestimonialsSection />
          <BlogSection />
        </div>
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Home;
