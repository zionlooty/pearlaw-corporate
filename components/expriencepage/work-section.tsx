import Image from 'next/image'
import React from 'react'

const WorkSection = () => {
    return (
        <section className="w-full flex justify-center mt-[80px] px-4">
            <div className="
                relative 
                w-full 
                max-w-[1440px] 
                h-[300px] 
                sm:h-[360px] 
                md:h-[430px] 
                overflow-hidden
            ">

                {/* Background */}
                <Image
                    src="/work.jpg"
                    alt="How we work"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#131927]/60 z-10" />

                {/* Content */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">

                    <h1 className="text-[12px] sm:text-[14px] md:text-[16px] font-semibold uppercase text-[#FEFEFE] mb-3 sm:mb-4">
                        WHERE WE WORK
                    </h1>

                    <h1 className="
                        font-bold uppercase text-[#C84E26]
                        text-[32px]
                        sm:text-[48px]
                        md:text-[64px]
                        mb-3 sm:mb-4
                    ">
                        PEARLAW
                    </h1>

                    <p className="
                        max-w-[900px] 
                        text-[13px] 
                        sm:text-[16px] 
                        md:text-[20px] 
                        font-semibold 
                        text-[#FEFEFE]/80 
                        leading-relaxed
                    ">
                        Operating virtually across jurisdictions, we bring legal excellence to <br className="hidden md:block" />
                        your location. Our flexible model allows us to serve clients wherever <br className="hidden md:block" />
                        business takes them, combining the agility of modern technology <br className="hidden md:block" />
                        with the depth of traditional legal expertise.
                    </p>

                </div>

            </div>
        </section>
    )
}

export default WorkSection
