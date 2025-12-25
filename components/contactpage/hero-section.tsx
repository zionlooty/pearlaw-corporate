import Image from "next/image"
import React from "react"

const Herosection = () => {
  return (
    <section className="w-full">
      <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px]">
        <Image
          src="/assets/hero5.jpg"
          alt="Hero image"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#131927]/70" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-semibold text-white uppercase mb-2">
            Professional Legal Service
          </h1>

          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-white mb-4 text-center sm:text-left">
            <span className="text-[#C84E26]">
              Get in Touch With
            </span>
            <br className="block sm:hidden" />

            <span className="text-[#C84E26]">
              Our
            </span>

           
            <br className="block sm:hidden" />

            <span>
              Legal Experts
            </span>
          </h2>


            <p className="max-w-[900px] text-[14px] sm:text-[16px] text-center md:text-[18px] lg:text-[20px] font-medium text-white leading-relaxed">
            Reach out for legal inquiries or professional support. Our <br /> experienced 
            team is here to help you navigate your legal <br /> needs with confidence and
            clarity.
          </p>



        </div>
      </div>
    </section>
  )
}

export default Herosection
