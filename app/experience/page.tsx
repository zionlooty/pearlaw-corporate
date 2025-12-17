import AboutSection from '@/components/expriencepage/about-section'
import ClientSection from '@/components/expriencepage/client-section'
import FooterSection from '@/components/expriencepage/footer-section'
import HeroSection from '@/components/expriencepage/hero-section'
import SpecializedSection from '@/components/expriencepage/specialized-section'
import StrategySection from '@/components/expriencepage/strategy-section'
import WorkSection from '@/components/expriencepage/work-section'

import React from 'react'

const Experience = () => {
    return (

        <>
            <HeroSection />

            <AboutSection/>

            <SpecializedSection/>

            <WorkSection/>

            <ClientSection/>

            <StrategySection/>

            <FooterSection/>

        </>
    )


}

export default Experience