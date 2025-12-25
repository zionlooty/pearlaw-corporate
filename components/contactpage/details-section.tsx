import { Shield } from 'lucide-react'
import React from 'react'
import { CiClock2, CiMail } from 'react-icons/ci'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { IoCallOutline, IoLogoTiktok, IoLogoWhatsapp } from 'react-icons/io5'

const DetailsSection = () => {
    return (
        <section className="w-full mt-[80px] px-4 flex justify-center">
            <div className="w-full max-w-[1280px]">

                {/* Header */}
                <div className="flex items-center gap-2 mb-8">
                    <div className="w-[54px] border-b-[3px] border-[#C84E26]" />
                    <h1 className="text-[16px] sm:text-[18px] font-bold text-[#2B2B2B]/80 uppercase">
                        Contact Details:
                    </h1>
                </div>

                {/* WhatsApp Card */}
                {/* WhatsApp Card */}
                <div className="border border-[#969595]/40 px-4 sm:px-6 py-5 mb-4">
                    <div className="flex items-center gap-4">
                        <div className="w-[60px] h-[60px] bg-[#C84E26] rounded-[8px] flex items-center justify-center shrink-0">
                            <IoLogoWhatsapp className="w-[24px] h-[24px] text-white" />
                        </div>

                        <div>
                            <span className="block text-[13px] sm:text-[14px] text-[#2B2B2B]/70">
                                WhatsApp
                            </span>
                            <h1 className="text-[17px] sm:text-[18px] lg:text-[19px] font-medium text-[#2B2B2B]">
                                +234 806 430 5645
                            </h1>
                            <p className="text-[13px] sm:text-[14px] text-[#2B2B2B]/80">
                                Quick response available
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call Card */}
                <div className="border border-[#969595]/40 px-4 sm:px-6 py-5 mb-4">
                    <div className="flex items-center gap-4">
                        <div className="w-[60px] h-[60px] bg-[#131927] rounded-[8px] flex items-center justify-center shrink-0">
                            <IoCallOutline className="w-[24px] h-[24px] text-white" />
                        </div>

                        <div>
                            <span className="block text-[13px] sm:text-[14px] text-[#2B2B2B]/70">
                                Call Us
                            </span>
                            <h1 className="text-[17px] sm:text-[18px] lg:text-[19px] font-medium text-[#2B2B2B]">
                                +234 813 614 1666
                            </h1>
                            <p className="text-[13px] sm:text-[14px] text-[#2B2B2B]/80">
                                Mon–Fri, 9AM–6PM EST
                            </p>
                        </div>
                    </div>
                </div>

                {/* Email Card */}
                <div className="border border-[#969595]/40 px-4 sm:px-6 py-5 mb-4">
                    <div className="flex items-center gap-4">
                        <div className="w-[60px] h-[60px] bg-[#131927] rounded-[8px] flex items-center justify-center shrink-0">
                            <CiMail className="w-[24px] h-[24px] text-white" />
                        </div>

                        <div className="max-w-[260px] sm:max-w-none">
                            <span className="block text-[13px] sm:text-[14px] text-[#2B2B2B]/70">
                                Email
                            </span>
                            <h1 className="text-[17px] sm:text-[18px] lg:text-[19px] font-medium text-[#2B2B2B] break-words">
                                contact@pearlaw.com
                            </h1>
                            <p className="text-[13px] sm:text-[14px] text-[#2B2B2B]/80">
                                24-hour response time
                            </p>
                        </div>
                    </div>
                </div>

                {/* Business Hours Card */}
                <div className="border border-[#969595]/40 px-4 sm:px-6 py-5">
                    <div className="flex items-center gap-4">
                        <div className="w-[60px] h-[60px] bg-[#131927] rounded-[8px] flex items-center justify-center shrink-0">
                            <CiClock2 className="w-[26px] h-[26px] text-white" />
                        </div>

                        <div>
                            <span className="block text-[13px] sm:text-[14px] text-[#2B2B2B]/70">
                                Business Hours
                            </span>
                            <h1 className="text-[17px] sm:text-[18px] lg:text-[19px] font-medium text-[#2B2B2B]">
                                Mon–Fri: 9:00AM – 6:00PM
                            </h1>
                            <p className="text-[13px] sm:text-[14px] text-[#2B2B2B]/80">
                                Closed on Sundays
                            </p>
                        </div>
                    </div>
                </div>


                <h1 className="text-[16px] sm:text-[28px] md:text-[32px] font-semibold mt-10 text-[#2B2B2B] mb-6">
                    Connect With Us
                </h1>
                <div className="flex gap-4">
                    <div className="w-[48px] h-[46px] bg-[#131927] rounded-[8px] flex items-center justify-center">
                        <FaFacebookF className="w-[24px] h-[24px] text-white" />
                    </div>

                    <div className="w-[48px] h-[46px] bg-[#131927] rounded-[8px] flex items-center justify-center">
                        <FaInstagram className="w-[24px] h-[24px] text-white" />
                    </div>

                    <div className="w-[48px] h-[46px] bg-[#131927] rounded-[8px] flex items-center justify-center">
                        <IoLogoTiktok className="w-[24px] h-[24px] text-white" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default DetailsSection
