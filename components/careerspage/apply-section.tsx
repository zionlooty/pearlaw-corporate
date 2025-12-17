import { Icon } from '@iconify/react'
import { Send } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const ApplySection = () => {
    return (
        <section className='flex flex-col items-center gap-[80px] justify-center w-full mt-[120px] px-4'>
            <div className='w-full max-w-[1280px] h-[566px] bg-white shadow-2xl  rounded-lg p-10'>

                <div className='text-center'>
                    <h1 className='text-[64px]  text-[#C84E26] font-bold mb-2'>
                        Join Our Team
                    </h1>

                    <p className='text-[20px] text-[#2B2B2B] mb-4 leading-relaxed'>
                        At pearlaw Corporate, we believe in nurturing fresh talent and <br />providing opportunities for growth in the dynamic field of <br />
                        corporate law.
                    </p>

                    <p className='text-[20px] text-[#2B2B2B] mb-4 leading-relaxed'>
                        We are continuously looking for interns and fresh graduates who <br />
                        are passionate about legal excellence and eager to learn from <br />
                        experienced professionals.
                    </p>

                    <p className='text-[20px] text-[#2B2B2B] leading-relaxed'>
                        While we may not have immediate openings, we maintain a pool <br /> of qualified candidates. <br /> Submit your application below, and we will reach out when <br /> suitable opportunities arise.
                    </p>

                </div>
            </div>


            <div className='w-[1280px] h-[722px] border rounded-[8px] relative'>


                <Image
                    src="/image2.jpg"
                    width={868}
                    height={614}
                    alt=""
                    className='w-full h-full object-cover rounded-[8px]'
                    priority
                />


                <div className='absolute inset-0 bg-[#FFFFFF]/88 rounded-[8px] z-10'></div>

                <div className='absolute inset-0 flex flex-col items-center justify-center z-20 px-6'>
                    <h1 className='text-[28px] font-semibold mb-4 text-[#2B2B2B] capitalize text-center'>
                        Apply Now!
                    </h1>

                    <p className='text-[16px] text-[#2B2B2B]/80 mb-9 text-center'>
                        Fill out the form below to submit your application.
                    </p>

                    <form className='flex flex-col gap-4 w-full max-w-lg items-center'>
                        <div className='flex gap-6 mb-5'>
                            <div>
                                <label htmlFor="" className=' text-[16px] text-[#2B2B2B]'>Full Name*</label>
                                <input
                                    type="text"
                                    placeholder="Name*"
                                    className='w-[524px] h-[56px] border-none text-[14px] text-[#9E9E9E] outline-none px-4 rounded-[5px] mt-2 bg-[#FFFFFF]'
                                />
                            </div>
                            <div>
                                <label htmlFor="" className=' text-[16px] text-[#2B2B2B]'>Email*</label>
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    className='w-[524px] h-[56px] border-none text-[14px] text-[#9E9E9E] outline-none px-4 rounded-[5px] mt-2 bg-[#FFFFFF]'
                                />
                            </div>
                        </div>

                        <div className='flex gap-6 mb-5'>
                            <div>
                                <label htmlFor="" className=' text-[16px] text-[#2B2B2B]'>Phone*</label>
                                <input
                                    type="text"
                                    placeholder="phone*"
                                    className='w-[524px] h-[56px] border-none text-[14px] text-[#9E9E9E] outline-none px-4 rounded-[5px] mt-2 bg-[#FFFFFF]'
                                />
                            </div>
                            <div className='relative'>
                                <label htmlFor="" className='text-[16px] text-[#2B2B2B]'>
                                    Availability*
                                </label>

                                <input
                                    type="text"
                                    placeholder="Availability*"
                                    className='w-[524px] h-[56px] border-none text-[14px] mt-2 text-[#9E9E9E] outline-none px-4 pr-10 rounded-[5px] bg-[#FFFFFF]'
                                />

                                <MdOutlineKeyboardArrowDown
                                    className='absolute right-4 top-[50%] translate-y-1/2 text-[#9E9E9E] pointer-events-none'
                                    size={22}
                                />
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="" className=' text-[16px] text-[#2B2B2B]'>Year of Graduation*</label>
                            <input type="text" placeholder='Year of Graduation*' className='w-[1070px] h-[56px] border-none text-[14px] mt-2 text-[#9E9E9E] outline-none px-4 pr-10 rounded-[5px] bg-[#FFFFFF]' />
                        </div>





                        <button
                            type="submit"
                            className='bg-[#C84E26] text-[#FFFFFF] flex items-center justify-center gap-2 py-3 text-[14px] rounded-[8px] w-[1070px] h-[52px]'
                        >
                            <Icon
                                icon="uil:schedule"
                                width={20}
                                height={20}
                                className='text-[#FFFFFF]'

                            />
                            Submit your  Form

                        </button>
                    </form>

                </div>
            </div>
        </section>




    )
}

export default ApplySection