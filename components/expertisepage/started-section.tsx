import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const StartedSection = () => {
    return (
        <section className="w-full bg-gradient-to-r from-[#2B2B2B] to-[#1E223F] ">
            <div className="w-full max-w-[1440px] h-auto md:h-[388px] mx-auto flex flex-col items-center justify-center px-4 md:px-6 text-center py-10 md:py-0">

                <h1 className="text-[14px] font-semibold text-[#FEFEFE]/80 uppercase mb-3">
                    Ready to get started?
                </h1>

                <p className="text-[20px] sm:text-[24px] max-w-[900px] font-semibold text-[#FEFEFE] leading-relaxed mb-6">
                    Whether you’re looking for ongoing legal support <br />through our retainership plans or need a guidance <br /> on a specific matter, we’re here to help.
                </p>

                <div className="flex flex-col items-center gap-4 w-full max-w-[660px]">
                    <button className="flex items-center justify-center gap-2 w-full sm:w-[660px] h-[50px] bg-[#C84E26] text-[#F1F2F6] text-[12px] font-semibold uppercase rounded-md">
                        Book Consultation
                        <FaArrowRight className="text-[#F1F2F6]" />
                    </button>

                    <button className="flex items-center justify-center gap-2 w-full sm:w-[660px] h-[50px] border border-[#969595] text-[#F1F2F6] text-[12px] font-semibold uppercase rounded-md">
                        Retainership Plans
                        <FaArrowRight className="text-[#F1F2F6]" />
                    </button>
                </div>

            </div>
        </section>
    )
}

export default StartedSection
