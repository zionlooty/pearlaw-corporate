import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const QuestionSection = () => {
    return (
        <section className='w-full mt-[80px] flex flex-col items-center'>
            <div className='w-[1280px] h-[395px]'>
                <div className='mb-6'>
                    <h1 className='text-center text-[28px] text-[#2B2B2B] mb-3 font-semibold'>
                        Frequently Asked Questions
                    </h1>

                    <p className='text-[16px] text-[#2B2B2B]/80 text-center'>
                        Fill out the form below to submit your application.
                    </p>
                </div>

                <div className='relative mb-2'>

                    <input
                        type="text"
                        placeholder="Who can apply for positions at Pearlaw Corporate*"
                        className='w-[1280px] h-[56px] border text-[14px] mt-2 text-[#2B2B2B] outline-none px-4 pr-10 rounded-[5px] bg-[#FFFFFF]'
                    />

                    <MdOutlineKeyboardArrowDown
                        className='absolute right-4 top-[50%] translate-y-1/2 text-[#9E9E9E] pointer-events-none'
                        size={22}
                    />
                </div>

                <div className='relative mb-2'>

                    <input
                        type="text"
                        placeholder="When will i be contacted after applying"
                        className='w-[1280px] h-[56px] border text-[14px] mt-2 text-[#2B2B2B] outline-none px-4 pr-10 rounded-[5px] bg-[#FFFFFF]'
                    />

                    <MdOutlineKeyboardArrowDown
                        className='absolute right-4 top-[50%] translate-y-1/2 text-[#9E9E9E] pointer-events-none'
                        size={22}
                    />
                </div>

                <div className='relative mb-2'>

                    <input
                        type="text"
                        placeholder="What does the selection process involve?"
                        className='w-[1280px] h-[56px] border text-[14px] mt-2 text-[#2B2B2B] outline-none px-4 pr-10 rounded-[5px] bg-[#FFFFFF]'
                    />

                    <MdOutlineKeyboardArrowDown
                        className='absolute right-4 top-[50%] translate-y-1/2 text-[#9E9E9E] pointer-events-none'
                        size={22}
                    />
                </div>

            </div>
        </section>

    )
}

export default QuestionSection