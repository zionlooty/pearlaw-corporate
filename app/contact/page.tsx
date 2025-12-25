import React from 'react'
import Herosection from '../../components/contactpage/hero-section'
import TrustedSection from '@/components/contactpage/trusted-section'
import ConversationSection from '@/components/contactpage/conversation-section'
import DetailsSection from '@/components/contactpage/details-section'
import PlanSection from '@/components/contactpage/plan-section'
import FooterSection from '@/components/contactpage/footer-section'


const ContactPage = () => {
  return (
  <>
  <Herosection/>
  <TrustedSection/>
  <ConversationSection/>
  <DetailsSection/>

  <PlanSection/>

  <FooterSection/>
 
  </>
  )
}

export default ContactPage