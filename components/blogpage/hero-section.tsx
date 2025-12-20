import Image from 'next/image'
import React from 'react'

const Herosection = () => {
    return (
        <section className="w-full">
            <div className="relative w-full h-[276px] sm:h-[320px] md:h-[400px] lg:h-[450px]">
                <Image
                    src="/assets/hero1.jpg"
                    alt="Hero image"
                    fill
                    className="object-cover"
                    priority
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                    <h1 className="text-[24px] sm:text-[30px] md:text-[36px] text-[#ffffff] capitalize">
                        Blog
                    </h1>
                    <h2 className="text-[14px] sm:text-[16px] md:text-[20px] text-[#FEFEFE]/80 uppercase mt-2">
                        caption aligned here
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Herosection
