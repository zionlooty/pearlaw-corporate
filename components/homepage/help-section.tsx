import { Clock, Mail } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const HelpSection = () => {
  return (
    <section className="w-full flex justify-center mt-[60px] px-4">
      <div className="relative w-full max-w-[1440px] flex justify-center">

       
        <div className="relative w-full h-[674px] sm:h-[500px] md:h-[600px] lg:h-[674px]">
          <Image
            src="/assets/image5.jpg"
            alt="Help Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#131927]/60 rounded-tr-[30px] rounded-bl-[30px]" />
        </div>

     
        <div className="
          absolute 
          top-0 left-1/2 -translate-x-1/2
          w-[90%] max-w-[1280px] 
          border border-[#979797] 
          rounded-tr-[30px] rounded-bl-[30px] 
          mt-20
          flex flex-col items-center 
          p-4 sm:p-6 md:p-8
        ">
          <h1 className="text-[18px] sm:text-[20px] font-bold uppercase text-[#FEFEFE] mb-5 text-center">
            Are you looking for someone to help?
          </h1>

          <h2 className="text-[22px] sm:text-[28px] md:text-[32px] text-[#C84E26] mb-5 text-center">
            Let us help you! Call Now : (234)813 614 1666
          </h2>

       
          <div className='flex flex-col sm:flex-row gap-4 items-center justify-center mb-5 text-center'>
            <div className='flex gap-1 items-center'>
              <Mail className='text-[#C84E26] w-[20px] h-[15px]' />
              <span className='text-[16px] text-[#FEFEFE]'>Contact@pearlaw.com</span>
            </div>

            <div className='flex gap-1 items-center'>
              <Clock className='text-[#C84E26] w-[16px] h-[16px]' />
              <span className='text-[14px] text-[#FEFEFE]'>Mon-Fri: 9:00AM - 6:00PM</span>
            </div>
          </div>

          <div className="h-[38px] border-l-2 border-[#C84E26] mb-8 sm:mb-10" />

          <h1 className='text-[22px] sm:text-[26px] md:text-[28px] text-[#FEFEFE] mb-6 text-center'>
            Subscribe To Newsletter
          </h1>

          
          <form className="w-full">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Your Email Address"
                className="h-[56px] w-full sm:w-[542px] bg-[#F1F2F6]/20 text-[14px] text-[#9E9E9E] outline-none px-4 rounded sm:rounded-l-[4px]"
              />

              <button
                type="submit"
                className="h-[56px] w-full sm:w-[164px] bg-[#C84E26] text-white text-[14px] font-semibold rounded sm:rounded-r-[4px]"
              >
                Subscribe
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}

export default HelpSection;
