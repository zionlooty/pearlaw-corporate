import { ScheduleOutlined } from '@ant-design/icons'
import { Icon } from '@iconify/react'
import { House, Lightbulb, Scale, Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const SpecializedSection
    = () => {
        return (
            <section className="w-full mt-[80px] flex justify-center">
                <div className="w-full max-w-[1440px] h-[510px] shadow-2xl px-10 py-8">

                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-[14px] font-semibold uppercase mb-5 text-[#2B2B2B]/60">
                            How we work
                        </h1>

                        <h1 className='text-[32px] font-semibold text-[#2B2B2B]'>Specialized Areas</h1>

                        <div className="h-[38px] border-l-2 border-[#C84E26] mb-15"></div>
                    </div>

                    <div className="grid grid-cols-3 px-10 gap-[60px] md:w-[90%] w-full mx-auto">
                        <div className="col-span-1 flex flex-col gap-6 text-center items-center justify-center">

                            <ScheduleOutlined
                                style={{ fontSize: 36, color: '#C84E26' }}
                            />

                            <h1 className="text-[18px] font-semibold text-[#2b2b2b] uppercase">
                                Book a consultation
                            </h1>

                            <p className="text-[#2b2b2b]/80 text-[18px]">
                                Schedule an initial consultation where we listen carefully to understand your business context and legal needs.
                            </p>

                        </div>


                        <div className="col-span-1 flex flex-col gap-6 text-center items-center justify-center">
                            <Search className="w-[36px] h-[36px] text-[#C84E26]" />
                            <h1 className="text-[18px] font-semibold text-[#2b2b2b] uppercase">we understand your needs</h1>
                            <p className="text-[#2b2b2b]/80 text-[18px]">Through detailed analysis and dialogue, we identify the core challenges and opportunities that requires legal attention.</p>

                        </div>



                        <div className="col-span-1 flex flex-col gap-6 text-center items-center justify-center">
                            <Icon
                                icon="hugeicons:idea-01"

                                className="text-[#C84E26] w-[48px] h-[48px]"
                            />


                            <h1 className="text-[18px] font-semibold text-[#2b2b2b] uppercase">we craft tailored solutions</h1>
                            <p className="text-[#2b2b2b]/80 text-[18px]">Leveraging our expertise, we design and implement legal strategies that align with your business objectives.</p>


                        </div>
                    </div>

                </div>
            </section>


        )
    }

export default SpecializedSection
