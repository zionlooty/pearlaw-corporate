import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ChooseSection = () => {
  return (
    <section className="w-full flex justify-center mt-[60px]">
      {/* Image container */}
      <div className="relative w-[1440px] min-h-[1100px] flex justify-center items-start">

        {/* Background Image */}
        <Image
          src="/image.jpg"
          alt="Law office"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#000000C7] z-10" />

        {/* Card */}
        <div
          className="relative z-20 w-[1280px] h-[900px] border border-[#979797CC] rounded-tr-[30px] rounded-bl-[30px] mt-20"
        >
          {/* Header */}
          <div className="flex flex-col items-center justify-center mt-12">
            <h1 className="text-[16px] font-semibold uppercase text-[#C84E26] mb-1">
              What We Are Expert At
            </h1>

            <h2 className="text-[32px] text-[#FEFEFE] mb-10">
              Why Clients Choose Us?
            </h2>

            <div className="h-[38px] border-l-2 border-[#C84E26] mb-20" />

            {/* Two column text */}
            <div className="grid grid-cols-2 px-10 gap-[60px] mb-20 w-full mx-auto">
              <div className="flex flex-col gap-6">
                <p className="text-[#FEFEFE] text-[20px] leading-relaxed">
                  Our firm is built on a foundation of trust, dedication, and
                  exceptional service. For years, we have guided clients
                  through complex legal matters with clarity and confidence.
                  Every case we handle is approached with care, precision, and
                  a deep commitment to achieving the{" "}
                  <span className="text-left">best possible outcome.</span>
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <p className="text-[#FEFEFE] text-[20px] leading-relaxed">
                  With extensive experience across diverse legal fields, we
                  provide clients with strategic advice and reliable
                  representation. Our focus is on delivering practical
                  solutions, protecting our clients’ interests, and ensuring
                  they are supported every step of the way.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center items-center gap-[120px] w-full px-10 text-center">
            <div className="flex flex-col gap-2 items-center">
              <h1 className="text-[64px] font-extrabold text-[#FEFEFE]">500+</h1>
              <h2 className="text-[20px] text-[#C84E26]">Clients Served</h2>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <h1 className="text-[64px] font-extrabold text-[#FEFEFE]">98%</h1>
              <h2 className="text-[20px] text-[#C84E26]">Success Rate</h2>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <h1 className="text-[64px] font-extrabold text-[#FEFEFE]">10Mlns</h1>
              <p className="text-[20px] text-[#C84E26]">
                Recovered for Clients
              </p>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <h1 className="text-[64px] font-extrabold text-[#FEFEFE]">15+</h1>
              <h2 className="text-[20px] text-[#C84E26]">Years Experience</h2>
            </div>
          </div>
        </div>
      </div>
    </section>



  )
}

export default ChooseSection