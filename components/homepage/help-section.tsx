import { Clock, Mail, Quote } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HelpSection = () => {
  return (
    <section className="w-full flex justify-center mt-[60px]">
      <div className="relative w-[1440px] min-h-[674px] flex justify-center items-start">

        <Image
          src="/image5.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#131927]/60 z-10" />


        <div className="relative z-20 w-[1280px] h-[554px] border border-[#979797] rounded-tr-[30px] rounded-bl-[30px] mt-20 flex flex-col items-center p-8">


          <h1 className="text-[20px] font-bold uppercase text-[#FEFEFE] mb-5">
            Are you looking for someone to help?
          </h1>
          <h2 className="text-[32px] text-[#C84E26] mb-5">
            Let us help you! Call Now : (234)813 614 1666
          </h2>
          <div className='flex gap-2 items-center mb-5'>
            <div className='flex gap-1  items-center'>
              <Mail className='text-[#C84E26] w-[20px] h-[15px]' />
              <h1 className='text-[16px] text-[#FEFEFE]'>Contact@pearlaw.com</h1>
             
            </div>
            <div className='flex gap-1  items-center'>
              <Clock className='text-[#C84E26] w-[16px] h-[16px]' />
              <h1 className='text-[14px] text-[#FEFEFE]'>Mon-Fri: 9:00AM - 6:00PM</h1>
            </div>
          </div>

          <div className="h-[38px] border-l-2 border-[#C84E26] mb-12" />


          <h1 className='text-[28px] text-[#FEFEFE] mb-6'>Subscribe To Newsletter</h1>
          <form>
            <div className=" flex">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 h-[56px] w-[542px] bg-[#F1F2F6]/20 text-[14px] text-[#9E9E9E]
                 outline-none px-4
                 rounded-l-[4px]"
              />

              <button
                type="submit"
                className="h-[56px] w-[164px]
                 bg-[#C84E26] text-white text-[14px] font-semibold
                 rounded-r-[4px]"
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

export default HelpSection