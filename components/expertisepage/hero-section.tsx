import Image from 'next/image'
import React from 'react'

const Herosection = () => {
  return (
    <section className="w-full">
      <div className="relative w-full h-[276px] sm:h-[300px] md:h-[350px] lg:h-[276px]">
        <Image
          src="/assets/hero4.jpg"
          alt="Hero image"
          fill
          className="object-cover"
          priority
        />
        <div className='absolute inset-0 bg-[#000000]/60' />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="text-[16px] sm:text-[18px] md:text-[20px] text-[#C84E26] uppercase font-bold mb-2">
            Our expertise
          </h1>
          <p className="text-[14px] sm:text-[18px] md:text-[24px] max-w-[90%] sm:max-w-[700px] md:max-w-[900px] text-[#FEFEFE] font-semibold leading-relaxed">
            Pearlaw provides focused legal solutions tailored to Nigerian businesses, combining deep industry knowledge with practical, results-driven counsel.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Herosection
