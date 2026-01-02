import AboutSection from '@/components/aboutpage/about-section'
import ConsultationSection from '@/components/aboutpage/consultation-section'
import HeroSection from '@/components/aboutpage/hero-section'
import HistorySection from '@/components/aboutpage/history-section'
import MissionSection from '@/components/aboutpage/mission-section'
import TechnologySection from '@/components/aboutpage/technology-section'
import React from 'react'

const About = () => {
  return (
    <>

      <HeroSection />
      <AboutSection/>
      <MissionSection/>
      <HistorySection/>
      <TechnologySection/>
      <ConsultationSection/>
      

    </>
  )
}

export default About