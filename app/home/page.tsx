import BlogSection from '@/components/homepage/blog-section'
import ChooseSection from '@/components/homepage/choose-section'
import ClientSection from '@/components/homepage/client-section'
import ConversationSection from '@/components/homepage/conversation-section'
import ExpertiseSection from '@/components/homepage/expertise-section'
import HelpSection from '@/components/homepage/help-section'
import HeroSection from '@/components/homepage/hero-section'
import LegalSection from '@/components/homepage/legal-section'
import PartnerSection from '@/components/homepage/partner-section'
import ServiceSection from '@/components/homepage/service-section'
import React from 'react'

const Home = () => {
  return (
    <>
      <HeroSection />
      <PartnerSection />
      <ExpertiseSection />
      <ChooseSection />
      <ConversationSection />
      <LegalSection />
      <ServiceSection />
      <ClientSection />
      <BlogSection />
      <HelpSection />
      
    </>
  )
}

export default Home