import Image from 'next/image'
import React from 'react'

const Herosection = () => {
    return (
        <section className="w-full">
            <div className="relative w-full h-[276px]">
                <Image
                    src="/assets/hero5.jpg"
                    alt="Hero image"
                    fill
                    className="object-cover"
                    priority
                />
                <div className='w-full bg-[#131927]/70 absolute inset-0'></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-[20px] font-bold text-[#C84E26] uppercase mb-5">
                        Retainership plans
                    </h1>

                    <p className="max-w-[900px] font-semibold text-[24px] text-[#FEFEFE] leading-relaxed">
                        Choose a plan that fits your business need. Get ongoing legal support with predictable costs and priority access to our expertise.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Herosection