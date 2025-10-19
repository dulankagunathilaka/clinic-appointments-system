import React from 'react';
import ContactHeroSection from '../components/ContactHeroSection';
import ContactInfoCards from '../components/ContactInfoCards';
import ContactFormSection from '../components/ContactFormSection';
import FooterSection from '../components/FooterSection';

const ContactUsPage = () => {
  return (
    <div>
      <section id="contact" className="pt-[115px]">
        <ContactHeroSection/>
        <ContactInfoCards/>
        <ContactFormSection/>
        <FooterSection/>
      </section>
    </div>
  );
};

export default ContactUsPage;