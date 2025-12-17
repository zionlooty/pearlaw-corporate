import Image from 'next/image'
import React from 'react'

const WorkSection = () => {
    return (
        <section className="w-full flex justify-center mt-[80px]">
            <div className="relative w-full max-w-[1440px] h-[430px] overflow-hidden">

                
                <Image
                    src="/work.jpg"
                    alt="How we work"
                    fill
                    className="object-cover"
                    priority
                />

                
                <div className="absolute inset-0 bg-[#131927]/60 z-10" />

                
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-[16px] font-semibold uppercase text-[#FEFEFE] mb-4">
                        WHERE WE WORK
                    </h1>
                    <h1 className='font-bold text-[64px] uppercase text-[#C84E26] mb-4'>PEARLAW</h1>
                    <p className="max-w-[900px] text-[20px] font-semibold text-[#FEFEFE]/80 leading-relaxed text-center">
                        Operating virtually across jurisdictions, we bring legal excellence to <br />
                        your location.Our flexible model allows us to serve clients wherever <br />
                        business takes them,combining the agility of modern technology<br />
                        with the depth of traditional legal expertise.
                    </p>

                </div>

            </div>
        </section>

    )
}

export default WorkSection 