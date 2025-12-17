import { Icon } from "@iconify/react"
import { Lightbulb, Search } from "lucide-react"
import Image from "next/image"
import React from "react"

const DifferenceSection = () => {
    return (
        <section className="w-full flex justify-center mt-[60px]">
            <div className="relative w-[1440px] min-h-[718px] flex flex-col items-center justify-center">

               
                <Image
                    src="/nn.jpeg"
                    alt=""
                    fill
                    priority
                    className="object-cover"
                />

                
                <div className="absolute inset-0 bg-[#131927]/60 z-10" />

                <div className="relative z-20 flex flex-col items-center w-full">

                    <h1 className="text-[16px] font-semibold uppercase text-[#C84E26] mb-4">
                        why our expertise matters
                    </h1>

                    <h2 className="text-[32px] text-white text-center mb-14">
                        How Our Expertise Makes a Difference
                    </h2>

                    
                    <div className="w-[1280px] min-h-[388px] border border-[#979797] rounded-tr-[30px] rounded-bl-[30px] flex items-center justify-center p-10">

                        <div className="grid grid-cols-3 gap-[60px] w-full">

                          
                            <div className="flex flex-col gap-6 items-center text-center">
                                <div className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center shadow-2xl">
                                    <Icon
                                        icon="mdi:tick-decagram"
                                        width={28}
                                        height={28}
                                        className="text-[#C84E26]"
                                    />
                                </div>

                                <h3 className="text-[18px] font-semibold text-white uppercase">
                                    Strategic business growth
                                </h3>

                                <p className="text-white/80 text-[16px] leading-relaxed">
                                    Our expertise empowers your business <br /> with the legal clarity
                                    and protection <br /> needed to pursue aggressive growth <br /> strategies,
                                    enter new markets, and seize <br />opportunities with confidence.
                                </p>
                            </div>

                            
                            <div className="flex flex-col gap-6 items-center text-center">
                                <div className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center shadow-2xl">
                                    <Icon
                                        icon="mdi:tick-decagram"
                                        width={28}
                                        height={28}
                                        className="text-[#C84E26]"
                                    />
                                </div>

                                <h3 className="text-[18px] font-semibold text-white uppercase">
                                Risk mitigation & compliance
                                </h3>

                                <p className="text-white/80 text-[16px] leading-relaxed">
                                We help you navigate Nigeria’s regulatory <br />environment, identifying potential legal <br /> risks before they become problems and <br /> ensuring your operations remain <br /> compliant and protected.
                                </p>
                            </div>

                            
                            <div className="flex flex-col gap-6 items-center text-center">
                                <div className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center shadow-2xl">
                                    <Icon
                                        icon="mdi:tick-decagram"
                                        width={28}
                                        height={28}
                                        className="text-[#C84E26]"
                                    />
                                </div>

                                <h3 className="text-[18px] font-semibold text-white uppercase">
                                Tailored solutions for nigerian context
                                </h3>

                                <p className="text-white/80 text-[16px] leading-relaxed">
                                Our deep understanding of local <br /> business practices, cultural nuances, and <br />regulatory frameworks ensures legal <br /> strategies that are not just compliant, but <br /> practically effective in the Nigerian <br /> market.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DifferenceSection
