import { ScheduleOutlined } from '@ant-design/icons'
import { Icon } from '@iconify/react'
import { Search } from 'lucide-react'
import React from 'react'

const SpecializedSection = () => {
    return (
        <section className="w-full mt-[80px] flex justify-center px-4">
            <div className="w-full max-w-[1440px] min-h-[510px] shadow-2xl px-6 sm:px-10 py-8">

                {/* Header */}
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-[14px] font-semibold uppercase mb-5 text-[#2B2B2B]/60">
                        How we work
                    </h1>

                    <h1 className="text-[26px] sm:text-[32px] font-semibold text-[#2B2B2B]">
                        Specialized Areas
                    </h1>

                    <div className="h-[32px] sm:h-[38px] border-l-2 border-[#C84E26] mb-10" />
                </div>

                {/* Cards */}
                <div className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                    gap-10
                    md:gap-[60px]
                    w-full
                    md:w-[90%]
                    mx-auto
                    text-center
                "
                >

                    {/* Card 1 */}
                    <div className="flex flex-col gap-4 sm:gap-6 items-center">
                        <ScheduleOutlined style={{ fontSize: 36, color: '#C84E26' }} />

                        <h1 className="text-[16px] sm:text-[18px] font-semibold uppercase text-[#2b2b2b]">
                            Book a consultation
                        </h1>

                        <p className="text-[#2b2b2b]/80 text-[15px] sm:text-[18px] leading-relaxed">
                            Schedule an initial consultation where we listen carefully to understand your business context and legal needs.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col gap-4 sm:gap-6 items-center">
                        <Search className="w-[36px] h-[36px] text-[#C84E26]" />

                        <h1 className="text-[16px] sm:text-[18px] font-semibold uppercase text-[#2b2b2b]">
                            we understand your needs
                        </h1>

                        <p className="text-[#2b2b2b]/80 text-[15px] sm:text-[18px] leading-relaxed">
                            Through detailed analysis and dialogue, we identify the core challenges and opportunities that requires legal attention.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col gap-4 sm:gap-6 items-center">
                        <Icon icon="hugeicons:idea-01" className="text-[#C84E26] w-[48px] h-[48px]" />

                        <h1 className="text-[16px] sm:text-[18px] font-semibold uppercase text-[#2b2b2b]">
                            we craft tailored solutions
                        </h1>

                        <p className="text-[#2b2b2b]/80 text-[15px] sm:text-[18px] leading-relaxed">
                            Leveraging our expertise, we design and implement legal strategies that align with your business objectives.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SpecializedSection
