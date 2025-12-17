import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
    return (
        <section className="w-full flex items-center justify-center mt-[80px]">
            <div className="w-[1284px] h-[488px]">
                <div className="grid grid-cols-2 gap-[60px] h-full">
                    <div className="relative w-[629px] h-[488px] rounded-[6px] overflow-hidden">
                        <Image
                            src="/experience.jpg"
                            alt="About image"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-start">
                        <div className="w-[32px] border-b-3 border-[#C84E26] mb-4" />
                        <p className="text-[21.5px] text-[#2B2B2B] italic font-normal leading-relaxed">
                            At Pearlaw Corporate, we bridge the legal gaps that stand between your business and its full potential. Our boutique approach combines deep legal expertise with strategic business acumen, ensuring every solution we craft aligns with your commercial objectives. We don’t just solve legal problems, we partner with you to unlock opportunities, mitigate risks, and drive sustainable growth.
                        </p>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutSection