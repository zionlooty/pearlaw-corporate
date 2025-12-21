import { Facebook, Instagram } from 'lucide-react'
import React from 'react'
import { RiTiktokFill } from 'react-icons/ri'

const StartedSection = () => {
    return (
        <section className="w-full bg-gradient-to-r from-[#2B2B2B] to-[#1E223F] mt-[120px]">
            <div className="w-full max-w-[1440px] h-auto md:h-[388px] mx-auto flex flex-col items-center justify-center px-6 text-center py-8">

                <h1 className="text-[14px] font-semibold text-[#FEFEFE]/80 uppercase mb-3">
                    Ready to get started?
                </h1>

                <p className="text-[24px] text-center font-semibold text-[#FEFEFE] leading-relaxed">
                    Follow us on social media for the latest updates on <br /> job openings and firm news.
                </p>

                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col items-center gap-5 justify-center mt-6">

                    <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-10'>
                        <button className='w-[129px] h-[46px] text-[14px] text-[#C84E26] bg-[#FFFFFF]/10 rounded-[4px] py-[10px] px-[14px] border-[0.6px] border-[#F1F2F6]/10 flex items-center gap-2'>
                            <Facebook size={16} />
                            Facebook
                        </button>

                        <button className='w-[129px] h-[46px] text-[14px] text-[#C84E26] bg-[#FFFFFF]/10 rounded-[4px] py-[10px] px-[14px] border-[0.6px] border-[#F1F2F6]/10 flex items-center gap-2'>
                            <Instagram size={16} />
                            Instagram
                        </button>
                    </div>

                    <button className='w-[129px] h-[46px] text-[14px] text-[#C84E26] bg-[#FFFFFF]/10 rounded-[4px] py-[10px] px-[14px] border-[0.6px] border-[#F1F2F6]/10 flex items-center gap-2'>
                        <RiTiktokFill size={16} />
                        Tiktok
                    </button>

                </div>
            </div>
        </section>
    )
}

export default StartedSection
