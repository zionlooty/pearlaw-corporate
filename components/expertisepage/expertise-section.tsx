import { Icon } from "@iconify/react"
import { ArrowRight, Building2, FileCheck, Globe, House, Rocket, Scale, Shield, WholeWord } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const ExpertiseSection = () => {
    return (
        <section className="mt-[60px] min-h-screen flex flex-col items-center ">
            <div className="text-center mb-[6]">
                <h1 className="text-[16px] font-semibold text-[#8c8888] mb-[7]">OUR EXPERTISE</h1>
                <h1 className="text-[#2b2b2b] font-semibold text-[32px]">Legal Practice Areas</h1>
            </div>

            <div className="h-[38px] border-l-2 border-[#C84E26] mb-15"></div>

            <div className="grid grid-cols-3 px-10 gap-[60px] md:w-[90%] w-full mx-auto">
                <div className="col-span-1 flex flex-col gap-6 text-center items-center justify-center">

                    <Icon icon="streamline-ultimate:corporate-social-media" className="text-[#C84E26] w-[48px] h-[48px]" />
                    <h1 className="text-[18px] font-semibold text-[#2b2b2b] uppercase">Corperate & Commercial</h1>
                    <p className="text-[#2b2b2b] text-[18px]">End-to-end corporate structuring, M&A <br />
                        transactions, commercial contracts and joint <br />
                        ventures tailored to your business objectives.</p>

                </div>

                <div className="col-span-1 flex flex-col gap-6 text-center items-center justify-center">
                    <Scale className="w-[48px] h-[48px] text-[#C84E26]" />
                    <h1 className="text-[18px] font-semibold text-[#2b2b2b] uppercase">Tech Law</h1>
                    <p className="text-[#2b2b2b] text-[18px]">Navigate the digital landscape with expertise <br /> in data privacy, IP protection, software <br /> licensing, and technology transactions.</p>

                </div>



                <div className="col-span-1 flex flex-col gap-6 text-center items-center justify-center">
                    <House className="w-[48px] h-[48px] text-[#C84E26]" />
                    <h1 className="text-[18px] font-semibold text-[#2b2b2b] uppercase">Real Estate Law</h1>
                    <p className="text-[#2b2b2b] text-[18px]">Complete real estate solutions covering <br /> property transactions, due diligence, <br /> leasing, and title verification.</p>


                </div>



                <div className="col-span-1 flex flex-col gap-6 text-center items-center justify-center">
                    <Rocket className="w-[48px] h-[48px] text-[#C84E26]" />
                    <h1 className="text-[18px] font-semibold text-[#2b2b2b] uppercase">STARTUPS & MSME LAW</h1>
                    <p className="text-[#2b2b2b] text-[18px]">Comprehensive legal support for startups <br /> and MSME’s including incorporation, funding <br /> rounds, term sheets, and growth strategies.</p>


                </div>



                <div className="col-span-1 flex flex-col gap-6 text-center items-center justify-center">
                    <FileCheck className="w-[48px] h-[48px] text-[#C84E26]" />

                    <h1 className="text-[18px] font-semibold text-[#2b2b2b] uppercase">Company Governance</h1>
                    <p className="text-[#2b2b2b] text-[18px]">Ensure compliance with corporate <br /> governance standards, board processes,<br /> statutory fillings and regulatory.</p>


                </div>


                <div className="col-span-1 flex flex-col gap-6 text-center items-center justify-center">
                    <Shield className="w-[48px] h-[48px] text-[#C84E26]" />

                    <h1 className="text-[18px] font-semibold text-[#2b2b2b] uppercase">REGULATORY COMPLIANCE</h1>
                    <p className="text-[#2b2b2b] text-[18px]">Stay ahead of regulatory changes with our <br /> proactive compliance advisory across <br /> multiple sectors and jurisdictions.</p>


                </div>


            </div>
        </section>
    )
}

export default ExpertiseSection