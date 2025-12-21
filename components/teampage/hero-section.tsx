import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <section className="w-full">
            <div className="relative w-full h-[276px] sm:h-[276px] xs:h-[200px]">
                <Image
                    src="/assets/hero1.jpg"
                    alt="Hero image"
                    fill
                    className="object-cover"
                    priority
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                    <h1 className="text-[36px] sm:text-[36px] xs:text-[24px] text-[#ffffff] capitalize">
                        Meet the Team
                    </h1>
                    <h2 className="text-[20px] sm:text-[20px] xs:text-[16px] text-[#FEFEFE]/80 uppercase">
                        meet with the attorneys
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
