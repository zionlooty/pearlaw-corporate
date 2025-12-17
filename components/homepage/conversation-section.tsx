import { Send } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const ConversationSection = () => {
    return (
        <section className="flex items-center justify-center w-full -mt-78">
            <div className='w-[868px] h-[614px] border rounded-[8px] relative'>


                <Image
                    src="/image2.jpg"
                    width={868}
                    height={614}
                    alt=""
                    className='w-full h-full object-cover rounded-[8px]'
                    priority
                />

                <div className='absolute inset-0 bg-[#FFFFFF]/90 rounded-[8px] z-10'></div>


                <div className='absolute inset-0 flex flex-col items-center justify-center z-20 px-6'>
                    <h1 className='text-[28px] font-semibold mb-4 text-[#2B2B2B] capitalize text-center'>
                        Let's Start the Conversation
                    </h1>

                    <p className='text-[16px] text-[#2B2B2BCC] mb-9 text-center'>
                        Whether you need legal advice, consultation, or representation, we’re here to <br />
                        <span className='block'>help you every step of the way.</span>
                    </p>

                    <form className='flex flex-col gap-4 w-full max-w-lg items-center'>
                        <div className='flex gap-6 mb-5'>
                            <input
                                type="text"
                                placeholder="Name*"
                                className='w-[343px] h-[56px] border-none text-[14px] text-[#9E9E9E] outline-none px-4 rounded-[5px] bg-[#FFFFFF]'
                            />
                            <input
                                type="email"
                                placeholder="Email*"
                                className='w-[343px] h-[56px] border-none text-[14px] text-[#9E9E9E] outline-none px-4 rounded-[5px] bg-[#FFFFFF]'
                            />
                        </div>


                        <div className='flex gap-6 mb-5'>
                            <input
                                type="text"
                                placeholder="Phone*"
                                className='w-[343px] h-[56px] border-none text-[14px] text-[#9E9E9E] outline-none px-4 rounded-[5px] bg-[#FFFFFF]'
                            />
                            <div className='relative'>
                                <input
                                    type="text"
                                    placeholder="Availability*"
                                    className='w-[343px] h-[56px] border-none text-[14px] text-[#9E9E9E] outline-none px-4 pr-10 rounded-[5px] bg-[#FFFFFF]'
                                />

                                <MdOutlineKeyboardArrowDown
                                    className='absolute right-4 top-1/2 -translate-y-1/2 text-[#9E9E9E] pointer-events-none'
                                    size={22}
                                />
                            </div>





                        </div>

                        <textarea
                            placeholder="Message*"
                            className='w-[708px] outline-none h-[117px] px-4 py-2 text-[14px] rounded-[5px] text-[#333333] bg-[#ffffff] resize-none'
                        ></textarea>

                        <button
                            type="submit"
                            className='bg-[#C84E26] text-[#FFFFFF] flex items-center justify-center gap-2 py-3 text-[14px] rounded-[8px] w-[708px] h-[52px]'
                        >
                            Submit inquiry
                            <Send className='text-[#F1F2F6] w-[20px] h-[20px]' />
                        </button>
                    </form>
                </div>
            </div>
        </section>






    )
}

export default ConversationSection