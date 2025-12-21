import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const ConsultationSection = () => {
    return (
        <section className="w-full bg-gradient-to-r from-[#2B2B2B] to-[#1E223F] mt-[120px] px-4">
            <div className="w-full max-w-[1440px] h-auto sm:h-[388px] mx-auto flex flex-col items-center justify-center text-center py-8">

                <h1 className="text-[14px] font-semibold text-[#FEFEFE]/80 uppercase mb-3">
                    Ready to get started?
                </h1>

                <p className="text-[24px] sm:text-[20px] font-semibold text-[#FEFEFE] leading-relaxed">
                    Let’s discuss how Pearlaw Corporate can drive your business forward.
                </p>

                <div className="flex flex-row flex-wrap items-center gap-4 justify-center mt-6 w-full">
                    
                    <button className="flex items-center justify-center gap-2 w-[65%] sm:w-[660px] h-[50px] bg-[#C84E26] text-[#F1F2F6] text-[12px] font-semibold uppercase rounded-md">
                        Book Consultation
                        <FaArrowRight className="text-[#F1F2F6]" />
                    </button>

                    <button className="w-[auto] min-w-[105px] sm:w-[151px] h-[42px] py-3 px-4 rounded-[2px] font-semibold text-[14px] text-[#FFFFFF] border border-[#C84E26]">
                        Contact Us
                    </button>
                </div>

            </div>
        </section>
    )
}

export default ConsultationSection
