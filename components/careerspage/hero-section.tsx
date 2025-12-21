import Image from 'next/image'
import React from 'react'

const Herosection = () => {
  return (
    <section className="w-full">
      <div className="relative w-full h-[276px] sm:h-[350px] md:h-[400px]">
        <Image
          src="/assets/hero5.jpg"
          alt="Hero image"
          fill
          className="object-cover"
          priority
        />
        <div className='absolute inset-0 bg-[#131927]/70' />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold text-[#C84E26] uppercase mb-3 sm:mb-5">
            Careers at Pearlaw Corporate
          </h1>

          <p className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-[#FEFEFE] leading-relaxed max-w-[90%] sm:max-w-[700px]">
            Join our team of dedicated legal professionals
          </p>
        </div>
      </div>
    </section>
  )
}

export default Herosection
