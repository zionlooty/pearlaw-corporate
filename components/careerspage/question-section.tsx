import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const QuestionSection = () => {
  return (
    <section className='w-full mt-20 flex flex-col items-center px-4'>
      <div className='w-full max-w-[1280px]'>
        {/* Header */}
        <div className='mb-6 text-center'>
          <h1 className='text-2xl lg:text-3xl text-[#2B2B2B] mb-3 mt-[40px] font-semibold'>
            Frequently Asked Questions
          </h1>
          <p className='text-sm lg:text-[16px] text-[#2B2B2B]/80'>
            Fill out the form below to submit your application.
          </p>
        </div>

        {/* FAQ Inputs */}
        <div className='flex flex-col gap-4'>
          {[
            "Who can apply for positions at Pearlaw Corporate?",
            "When will I be contacted after applying?",
            "What does the selection process involve?"
          ].map((question, idx) => (
            <div key={idx} className='relative'>
              <input
                type="text"
                placeholder={question}
                className='w-full h-14 border text-[14px] text-[#2B2B2B] outline-none px-4 pr-10 rounded-md bg-white'
              />
              <MdOutlineKeyboardArrowDown
                className='absolute right-4 top-1/2 -translate-y-1/2 text-[#9E9E9E] pointer-events-none'
                size={22}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuestionSection
