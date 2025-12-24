import { Icon } from "@iconify/react"
import Image from "next/image"
import React from "react"

const DifferenceSection = () => {
  return (
    <section className="w-full flex justify-center mt-[60px] pb-[100px] sm:pb-[120px] px-4">
      <div className="relative w-full max-w-[1440px] min-h-[600px] sm:min-h-[718px] flex flex-col items-center justify-center">

        {/* Background image */}
        <Image
          src="/assets/nn.jpeg"
          alt=""
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#131927]/60 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center w-full">

          <h1 className="text-[14px] sm:text-[16px] font-semibold uppercase text-[#C84E26] mb-2 sm:mb-4 text-center">
            why our expertise matters
          </h1>

          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] text-white text-center mb-10 sm:mb-14">
            How Our Expertise Makes a Difference
          </h2>

          <div className="w-full max-w-[1280px] border border-[#979797] rounded-tr-[30px] rounded-bl-[30px] flex flex-col sm:flex-row flex-wrap items-start justify-center p-6 sm:p-10 gap-6">

            {[
              {
                title: "Strategic business growth",
                text: "Our expertise empowers your business with the legal clarity and protection needed to pursue aggressive growth strategies, enter new markets, and seize opportunities with confidence."
              },
              {
                title: "Risk mitigation & compliance",
                text: "We help you navigate Nigeria’s regulatory environment, identifying potential legal risks before they become problems and ensuring your operations remain compliant and protected."
              },
              {
                title: "Tailored solutions for nigerian context",
                text: "Our deep understanding of local business practices, cultural nuances, and regulatory frameworks ensures legal strategies that are not just compliant, but practically effective in the Nigerian market."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-4 items-center text-center w-full sm:w-[30%]"
              >

                {/* Icon wrapper – guarantees equal visual size */}
                <div className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center shadow-2xl">
                  <Icon
                    icon="mdi:tick-decagram"
                    className="text-[#C84E26] w-[28px] h-[28px]"
                  />
                </div>

                {/* Fixed-height title for perfect alignment */}
                <h3 className="text-[16px] sm:text-[18px] font-semibold text-white uppercase min-h-[48px] flex items-center justify-center">
                  {item.title}
                </h3>

                <p className="text-white/80 text-[14px] sm:text-[16px] leading-relaxed">
                  {item.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default DifferenceSection
