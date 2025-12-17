import Image from 'next/image'
import React from 'react'

const LeadSection = () => {
    return (
        <section className='w-full mt-[120px] flex items-center justify-center'>
            <div className='w-full max-w-[1032px] h-[618px]'>
                <div className=' grid grid-cols-2 h-full gap-[60px]'>
                    <div className='w-full h-[550px] relative overflow-hidden rounded-[6px]'>

                        <Image src={"/team.png"} alt="" fill className='object-cover' />
                    </div>
                    <div>
                        <div className="w-[32px] border-b-3 border-[#C84E26] mb-4" />

                        <h1 className='text-[24px] font-bold uppercase text-[#2B2B2B]'>Pearl Eghimentor</h1>

                        <h3 className='text-[18px] capitalize text-[#C84E26] mb-2'>Team Lead</h3>

                        <h1 className='text-[18px] text-[#2B2B2B] mb-2'>Credentials</h1>
                        <p className='text-[14px] text-[#2B2B2B]/80 mb-2'>LLB, BL, Memeber Nigerian Bar <br />
                            Association</p>

                        <h1 className='text-[18px] text-[#2B2B2B] mb-2'>Education</h1>
                        <p className='text-[14px] text-[#2B2B2B]/80 mb-2'>University of Lagos, Nigerian Law <br />School</p>

                        <h1 className='text-[18px] text-[#2B2B2B] mb-2'>Specialties</h1>
                        <p className='text-[14px] text-[#2B2B2B]/80 mb-2'>Corporate Law, Contract <br />
                            Negotiation, Litigation</p>


                        <h1 className='text-[18px] text-[#2B2B2B] mb-3'>About</h1>
                        <p className='text-[16px] text-[#2B2B2B]/70'>With over 15 years of experience in <br /> corporate law and litigation, Pearl leads <br /> our team with unwavering dedication to <br />client success. Her strategic approach and <br />attention to detail have earned her <br /> recognition as one of the top legal minds <br />in the region.</p>




                    </div>
                </div>
            </div>

        </section>
    )
}

export default LeadSection