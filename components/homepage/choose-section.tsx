import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ChooseSection = () => {
  return (
    <section className="w-full flex justify-center mt-10 sm:mt-14 md:mt-16">
      <div className="relative w-full max-w-[1440px] 
  min-h-[650px] sm:min-h-[700px] md:min-h-[750px] 
  flex justify-center items-start">



        <Image
          src="/assets/image.jpg"
          alt="Law office"
          fill
          priority
          className="object-cover"
        />


        <div className="absolute inset-0 bg-[#000000C7] z-10" />

        <div className="relative z-20 w-[92%] sm:w-[90%] md:w-[85%] lg:w-[80%] h-auto  mt-14 sm:mt-16 md:mt-20 
                        p-5 sm:p-8 md:p-10 lg:p-14">


          <div className="flex flex-col items-center mt-6 sm:mt-8 md:mt-10">
            <h1 className="text-[#C84E26] text-[12px] sm:text-[14px] md:text-[16px] font-semibold uppercase text-center">
              What We Are Expert At
            </h1>

            <h2 className="text-[#FEFEFE] text-[20px] sm:text-[24px] md:text-[32px] font-semibold mt-1 sm:mt-2 text-center">
              Why Clients Choose Us?
            </h2>

            <div className="h-[32px] sm:h-[36px] md:h-[38px] border-l-2 border-[#C84E26] my-6 sm:my-8 md:my-10 mx-auto" />
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-10 md:mb-16 w-full">
            <p className="text-[#FEFEFE] text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed text-center md:text-left">
              Our firm is built on a foundation of trust, dedication, and exceptional service.
              For years, we have guided clients through complex legal matters with clarity and confidence.
              Every case we handle is approached with care, precision, and a deep commitment to achieving
              the <span>best possible outcome.</span>
            </p>

            <p className="text-[#FEFEFE] text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed text-center md:text-left">
              With extensive experience across diverse legal fields, we provide clients with strategic
              advice and reliable representation. Our focus is on delivering practical solutions,
              protecting our clients’ interests, and ensuring they are supported every step of the way.
            </p>
          </div>



          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 lg:gap-24 w-full px-4 text-center">

            <div className="flex flex-col gap-1 items-center w-full md:w-auto">
              <h1 className="text-[#FEFEFE] text-[36px] sm:text-[48px] md:text-[64px] font-extrabold">500+</h1>
              <p className="text-[#C84E26] text-[14px] sm:text-[16px] md:text-[18px]">Clients Served</p>
            </div>

            <div className="flex flex-col gap-1 items-center w-full md:w-auto">
              <h1 className="text-[#FEFEFE] text-[36px] sm:text-[48px] md:text-[64px] font-extrabold">98%</h1>
              <p className="text-[#C84E26] text-[14px] sm:text-[16px] md:text-[18px]">Success Rate</p>
            </div>

            <div className="flex flex-col gap-1 items-center w-full md:w-auto">
              <h1 className="text-[#FEFEFE] text-[36px] sm:text-[48px] md:text-[64px] font-extrabold">10Mlns</h1>
              <p className="text-[#C84E26] text-[14px] sm:text-[16px] md:text-[18px]">Recovered</p>
            </div>

            <div className="flex flex-col gap-1 items-center w-full md:w-auto">
              <h1 className="text-[#FEFEFE] text-[36px] sm:text-[48px] md:text-[64px] font-extrabold">15+</h1>
              <p className="text-[#C84E26] text-[14px] sm:text-[16px] md:text-[18px]">Years Experience</p>
            </div>

          </div>


        </div>
      </div>
    </section>
  )
}

export default ChooseSection
