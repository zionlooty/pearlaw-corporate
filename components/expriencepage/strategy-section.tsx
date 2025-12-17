import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const StrategySection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#2B2B2B] to-[#1E223F] mt-[120px]">
               <div className="w-full max-w-[1440px] h-[388px] mx-auto flex flex-col items-center justify-center px-6 text-center">
   
                   <h1 className="text-[14px] font-semibold text-[#FEFEFE]/80 uppercase mb-3">
                   Ready to  change Your Legal Strategy?
                   </h1>
   
                   <p className="text-[24px] font-semibold text-[#FEFEFE]  leading-relaxed">
                   Let’s discuss how Pearlaw Corporate can drive your <br /> business forward.
                   </p>
                   <div className="flex items-center justify-center mt-6">
                       <button className=" flex items-center w-[660px] h-[50px] justify-center gap-2 bg-[#C84E26] text-[#F1F2F6] text-[12px] font-semibold uppercase py-[10px] px-[18px] rounded-md">
                           Book Consultation
                           <FaArrowRight   className=" text-[#F1F2F6]" />
                       </button>
                   </div>
   
                   
   
               </div>
           </section>
  )
}

export default StrategySection