import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <section className="w-full">
            <div className="relative w-full h-[276px] md:h-[350px] lg:h-[420px]">
                <Image
                    src="/assets/hero2.jpg"
                    alt="Hero image"
                    fill
                    className="object-cover"
                    priority
                />

                <div className="w-full bg-[#131927]/70 absolute inset-0"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
                    <h1 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold text-[#C84E26] uppercase mb-4 sm:mb-5">
                        Experience PLC
                    </h1>

                    <p className="max-w-[900px] font-semibold text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] text-[#FEFEFE] leading-relaxed">
                        Pearlaw Corporate delivers strategic legal excellence tailored to your business ambitions,
                        empowering companies to navigate complexity with confidence.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default HeroSection
