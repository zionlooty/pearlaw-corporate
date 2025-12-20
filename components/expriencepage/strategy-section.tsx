import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const StrategySection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#2B2B2B] to-[#1E223F] mt-[120px] px-4">
      <div className="w-full max-w-[1440px] h-[300px] sm:h-[330px] md:h-[388px] mx-auto flex flex-col items-center justify-center text-center">

        <h1 className="text-[12px] sm:text-[14px] md:text-[16px] font-semibold text-[#FEFEFE]/80 uppercase mb-3">
          Ready to change Your Legal Strategy?
        </h1>

        <p className="text-[16px] sm:text-[20px] md:text-[24px] font-semibold text-[#FEFEFE] leading-relaxed">
          Let’s discuss how Pearlaw Corporate can drive your <br className="sm:hidden" /> business forward.
        </p>

        <div className="flex items-center justify-center mt-6">
          <button
            className="
              flex items-center justify-center gap-2
              bg-[#C84E26] text-[#F1F2F6] uppercase font-semibold
              text-[10px] sm:text-[11px] md:text-[12px]
              h-[45px] sm:h-[48px] md:h-[50px]
              w-[220px] sm:w-[350px] md:w-[500px] lg:w-[660px]
              rounded-md
            "
          >
            Book Consultation
            <FaArrowRight className="text-[#F1F2F6]" />
          </button>
        </div>

      </div>
    </section>
  )
}

export default StrategySection
