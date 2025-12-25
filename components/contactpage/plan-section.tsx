import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'

const PlanSection = () => {
  const cards = [
    {
      title: "Priority Support",
      text: "Get expedited responses and dedicated attention",
      icon: "qlementine-icons:check-tick-24"
    },
    {
      title: "Cost Effective",
      text: "Fund monthly rates with predictable costs",
      icon: "mdi:clock-outline"
    },
    {
      title: "Flexible Terms",
      text: "Choose Plans that adapt to your needs",
      icon: "mdi:shield-check-outline"
    }
  ]

  return (
    <section className="w-full flex justify-center mt-16 px-4 sm:px-6 lg:px-8 pb-12">
      <div className="relative w-full max-w-[1440px] flex flex-col items-center justify-center">

        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/plan.jpg"
            alt="Plan Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#131927]/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center w-full pt-24 sm:pt-28">

          <h1 className="text-[14px] sm:text-[16px] font-semibold uppercase text-[#C84E26] mb-2 sm:mb-4 text-center">
            Flexible Plans
          </h1>

          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] text-white text-center mb-10 sm:mb-14 px-2 sm:px-0">
            Explore Our Retainership Plans
          </h2>

          {/* Cards */}
          <div className="w-full max-w-[1280px] flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 sm:gap-8 px-2 sm:px-0">

            {cards.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-4 items-center text-center w-full sm:w-[30%] min-h-[220px] sm:min-h-[250px]"
              >
                {/* Icon */}
                <div className="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] rounded-full bg-white flex items-center justify-center shadow-2xl">
                  <Icon icon={item.icon} className="text-[#C84E26] w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]" />
                </div>

                {/* Title */}
                <h3 className="text-[16px] sm:text-[18px] font-semibold text-white uppercase min-h-[48px] flex items-center justify-center">
                  {item.title}
                </h3>

                {/* Text */}
                <p className="text-white/80 text-[14px] sm:text-[16px] leading-relaxed px-4 sm:px-0">
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

export default PlanSection
