import Image from 'next/image'
import React from 'react'

const Herosection = () => {
  return (
   <section className="w-full">
               <div className="relative w-full h-[276px]">
                   <Image
                       src="/assets/hero4.jpg"
                       alt="Hero image"
                       fill
                       className="object-cover"
                       priority
                   />
                     <div className='w-full bg-[#000000]/60 absolute inset-0'></div>
   
                   <div className=" absolute inset-0 flex flex-col items-center justify-center">
                       <h1 className="text-[20px] text-[#C84E26] uppercase font-bold">
                       Our expertise
                       </h1>
                       <p className="text-[24px] max-w-[900px] font-semibold text-[#FEFEFE]">Pearlaw provides focused legal solutions tailored to Nigerian businesses, combing deep industry knowledge with practical, results-driven counsel.</p>
                   </div>
               </div>
           </section>
  )
}

export default Herosection