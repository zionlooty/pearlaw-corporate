import Image from 'next/image'
import React from 'react'

const Herosection = () => {
    return (
        <section className="w-full">
            <div className="relative w-full h-[276px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
                <Image
                    src="/assets/hero5.jpg"
                    alt="Hero image"
                    fill
                    className="object-cover"
                    priority
                />
                <div className='absolute inset-0 w-full bg-[#131927]/70'></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-12">
                    <h1 className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-bold text-[#C84E26] uppercase mb-4 sm:mb-5">
                        Retainership plans
                    </h1>

                    <p className="max-w-full sm:max-w-[700px] md:max-w-[800px] lg:max-w-[900px] font-semibold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-[#FEFEFE] leading-relaxed">
                        Choose a plan that fits your business need. Get ongoing legal support with predictable costs and priority access to our expertise.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Herosection
