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
      <Navbar />   

      <main className="container mx-auto pt-[115px]">
        <section id="home">
          <HeroSection />
        </section>
        <AboutUsSection />
        <ServicesSection />
        <FAQSection />
        <WorkingProcessSection />
        <AppointmentFormSection /> 
        <EmergencyContactSection />
        <TeamSection />
        <TestimonialsSection />
        <BlogSection />
      </main>

      <FooterSection />
    </div>
  );
};

export default Home;
