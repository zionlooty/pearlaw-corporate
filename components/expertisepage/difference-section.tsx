import { Icon } from "@iconify/react"
import Image from "next/image"
import React from "react"

const DifferenceSection = () => {
  const items = [
    {
      title: "Strategic business growth",
      text: "Our expertise empowers your business with the legal clarity and protection needed to pursue aggressive growth strategies, enter new markets, and seize opportunities with confidence."
    },
    {
      title: "Risk mitigation & compliance",
      text: "We help you navigate Nigeria’s regulatory environment, identifying potential legal risks before they become problems and ensuring your operations remain compliant and protected."
    },
    {
      title: "Tailored solutions for Nigerian context",
      text: "Our deep understanding of local business practices, cultural nuances, and regulatory frameworks ensures legal strategies that are not just compliant, but practically effective in the Nigerian market."
    }
  ]

  return (
    <section className="w-full flex justify-center pb-24 sm:pb-32 px-4 mt-[60px]">
      <div className="relative w-full max-w-[1440px] min-h-[980px] sm:min-h-[718px] flex flex-col items-center justify-center">

        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/nn.jpeg"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#131927]/60 z-10" />
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center w-full">

          {/* Heading with margin on mobile and larger on desktop */}
          <h1 className="text-[14px] sm:text-[16px] font-semibold uppercase text-[#C84E26] text-center mt-6 sm:mt-16">
            Why Our Expertise Matters
          </h1>

          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] text-white text-center mb-10 sm:mb-14 px-2 sm:px-0">
            How Our Expertise Makes a Difference
          </h2>

          {/* Cards */}
          <div className="w-full max-w-[1280px] flex flex-col sm:flex-row flex-wrap items-start justify-center gap-6 px-2 sm:px-0">

            {items.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-4 items-center text-center w-full sm:w-[30%]"
              >

                {/* Icon */}
                <div className="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] rounded-full bg-white flex items-center justify-center shadow-2xl">
                  <Icon
                    icon="mdi:tick-decagram"
                    className="text-[#C84E26] w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]"
                  />
                </div>

                {/* Title */}
                <h3 className="text-[16px] sm:text-[18px] font-semibold text-white uppercase min-h-[48px] flex items-center justify-center">
                  {item.title}
                </h3>

                {/* Text */}
                <p className="text-white/80 text-[14px] sm:text-[16px] leading-relaxed px-2 sm:px-0">
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
