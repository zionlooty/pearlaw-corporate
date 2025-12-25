import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'

const PlanSection = () => {
  const plans = [
    {
      title: "Priority support",
      text: <>Get expedited responses <br />and dedicated attention</>,
      icon: "qlementine-icons:check-tick-24",
    },
    {
      title: "Cost effective",
      text: <>Fund monthly rates <br />with predictable costs</>,
      icon:  "mdi:clock-time-four-outline",
    },
    {
      title: "Flexible terms",
      text: <>Choose Plans <br />that adapt to your needs</>,
      icon: "tdesign:secured",
    },
  ]

  return (
    <section className="w-full flex justify-center mt-[60px] pb-[100px] sm:pb-[120px] px-4">
      <div className="relative w-full max-w-[1440px] min-h-[600px] sm:min-h-[718px] flex flex-col items-center justify-center">
        
        {/* Background image */}
        <Image
          src="/assets/plan.jpg"
          alt="Plan Background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#131927]/60 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center w-full">
          
          <h1 className="text-[14px] sm:text-[16px] font-semibold uppercase text-[#C84E26] mb-2 sm:mb-4 text-center">
            Flexible plans
          </h1>

          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] text-white text-center mb-10 sm:mb-14">
            Explore Our Retainership Plans
          </h2>

          {/* Plan Cards Container */}
          <div className="w-full max-w-[1280px] border border-white/40 rounded-tr-[30px] rounded-bl-[30px] flex flex-col sm:flex-row flex-wrap items-start justify-center p-6 sm:p-10 gap-6">

            {plans.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-4 items-center text-center w-full sm:w-[30%]"
              >
                {/* Icon wrapper – white background */}
                <div className="w-[52px] h-[52px] rounded-full bg-[#FFFFFF] flex items-center justify-center shadow-2xl">
                  <Icon
                    icon={item.icon}
                    className="text-[#C84E26] w-[28px] h-[28px]"
                  />
                </div>

                {/* Title */}
                <h3 className="text-[16px] sm:text-[18px] font-semibold text-white uppercase text-center">
                  {item.title}
                </h3>

                {/* Description with two lines */}
                <p className="text-white/80 text-[14px] sm:text-[16px] leading-relaxed text-center">
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
