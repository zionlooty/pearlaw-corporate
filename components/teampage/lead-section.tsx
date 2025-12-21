import Image from 'next/image'
import React from 'react'

const LeadSection = () => {
    return (
        <section className='w-full mt-[120px] flex items-center justify-center px-4'>
            <div className='w-full max-w-[1032px]'>
                <div className='grid grid-cols-1 md:grid-cols-2 h-full gap-[60px]'>

                    {/* Image */}
                    <div className='w-full h-[400px] md:h-[550px] relative overflow-hidden rounded-[6px]'>
                        <Image src={"/assets/team.png"} alt="Team Lead" fill className='object-cover' />
                    </div>

                    {/* Text Content */}
                    <div>
                        <div className="w-[32px] border-b-3 border-[#C84E26] mb-4" />

                        <h1 className='text-[24px] md:text-[24px] text-[#2B2B2B] font-bold uppercase'>Pearl Eghimentor</h1>

                        <h3 className='text-[16px] md:text-[18px] text-[#C84E26] mb-2 capitalize'>Team Lead</h3>

                        <h1 className='text-[16px] md:text-[18px] text-[#2B2B2B] mb-2'>Credentials</h1>
                        <p className='text-[12px] md:text-[14px] text-[#2B2B2B]/80 mb-2'>
                            LLB, BL, Member Nigerian Bar <br /> Association
                        </p>

                        <h1 className='text-[16px] md:text-[18px] text-[#2B2B2B] mb-2'>Education</h1>
                        <p className='text-[12px] md:text-[14px] text-[#2B2B2B]/80 mb-2'>
                            University of Lagos, Nigerian Law <br /> School
                        </p>

                        <h1 className='text-[16px] md:text-[18px] text-[#2B2B2B] mb-2'>Specialties</h1>
                        <p className='text-[12px] md:text-[14px] text-[#2B2B2B]/80 mb-2'>
                            Corporate Law, Contract <br /> Negotiation, Litigation
                        </p>

                        <h1 className='text-[16px] md:text-[18px] text-[#2B2B2B] mb-3'>About</h1>
                        <p className='text-[14px] md:text-[16px] text-[#2B2B2B]/70 leading-relaxed'>
                            With over 15 years of experience in corporate law and litigation, Pearl leads
                            our team with unwavering dedication to client success. Her strategic approach and
                            attention to detail have earned her recognition as one of the top legal minds in the region.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default LeadSection
