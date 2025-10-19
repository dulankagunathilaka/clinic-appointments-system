import React from 'react'
import AboutHeroSection from './AboutHeroSection'
import AboutUsSection from './AboutUsSection'
import AppointmentFormSection from './AppointmentFormSection'
import WorkingProcessSection from './WorkingProcessSection'
import TeamSection from './TeamSection'
import EmergencyContactSection from './EmergencyContactSection'
import BlogSection from './BlogSection'
import FooterSection from '../components/FooterSection'

const AboutUsPage = () => {
  return (
    <div>
      <section id="about" className="pt-[115px]">
        <AboutHeroSection/>
        <AboutUsSection/>
        <AppointmentFormSection/>
        <WorkingProcessSection/>
        <TeamSection/>
        <EmergencyContactSection />
        <BlogSection/>
        <FooterSection/>
      </section>
    </div>
  )
}

export default AboutUsPage