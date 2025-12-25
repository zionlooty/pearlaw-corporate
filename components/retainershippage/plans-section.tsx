import { Icon } from '@iconify/react'
import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const PlansSection = () => {
  return (
    <section className="w-full flex justify-center mt-[60px] px-4">
      <div className="relative w-full max-w-[1440px] flex flex-col items-center">

        <div className="relative w-full h-auto sm:h-[1048px] flex justify-center items-start">
          <Image
            src="/assets/retainer.jpg"
            alt="Client Section Background"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#131927]/60 z-10" />

          <div className="relative z-20 w-full sm:w-[1280px] h-auto sm:h-[964px]  mt-15 flex flex-col items-center p-4 sm:p-8">

            {/* Section Header */}
            <h1 className="text-[24px] font-bold uppercase text-[#FEFEFE] mb-3 text-center">
              Retainership plans
            </h1>

            <p className="text-[16px] text-center text-[#FEFEFE]/80 mb-10">
              Choose a plan that fits your business need. Get ongoing legal support with predictable costs <br className="hidden sm:block" /> and priority access to our expertise.
            </p>

            {/* Plan Cards */}
            <div className='flex flex-wrap justify-center gap-5 mb-7'>

              {/* GEM Plan */}
              <div className="w-full sm:w-[355px] h-auto sm:h-[598px] rounded-[14px] p-6 text-left shadow-2xl border bg-[#F1F2F6] flex flex-col">
                <h1 className="text-[14px] text-center font-semibold text-[#2B2B2B] mb-2">GEM Plan</h1>
                <h1 className="text-[32px] text-center font-bold text-[#2B2B2B] mb-2">#400,000</h1>
                <p className="text-[#2B2B2B]/60 text-[14px] text-center mb-6">
                  Perfect for early-stage startups and small <br /> businesses
                </p>

                <div className="w-full flex flex-col gap-3">
                  <div className="flex items-start gap-2">
                    <Check className="text-[#C84E26] w-[12px] h-[12px] mt-[3px]" />
                    <p className="text-[14px] text-[#2B2B2B] leading-relaxed">
                      Up to 10 hours of legal consultation <br /> monthly
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-[#C84E26] w-[12px] h-[12px] mt-[3px]" />
                    <p className="text-[14px] text-[#2B2B2B] leading-relaxed">Contract review and drafting</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-[#C84E26] w-[12px] h-[12px] mt-[3px]" />
                    <p className="text-[14px] text-[#2B2B2B] leading-relaxed">Basic compliance advisory</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-[#C84E26] w-[12px] h-[12px] mt-[3px]" />
                    <p className="text-[14px] text-[#2B2B2B] leading-relaxed">Email support (48hr response)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-[#C84E26] w-[12px] h-[12px] mt-[3px]" />
                    <p className="text-[14px] text-[#2B2B2B] leading-relaxed">Quarterly compliance check</p>
                  </div>
                </div>

                <div className="flex-1" />

                <button className="w-full sm:w-[299px] h-[44px] px-[12px] py-[16px] rounded-[6px] border border-[#969595] text-[14px] text-[#2B2B2B] flex justify-center items-center gap-2 mt-4">
                  <Icon icon="uil:schedule" width={20} height={20} />
                  Get Started
                </button>
              </div>

              {/* IVORY Plan */}
              <div className="w-full sm:w-[355px] h-auto sm:h-[598px] rounded-[14px] p-6 text-left shadow-2xl border bg-[#F1F2F6] flex flex-col relative">
                <h1 className="absolute -top-4 left-1/2 transform -translate-x-1/2 inline-block bg-[#C84E26] text-white text-[12px] font-semibold rounded-2xl px-3 py-1">
                  Most Popular
                </h1>
                <h1 className="text-[14px] text-center font-semibold text-[#2B2B2B] mb-2">IVORY Plan</h1>
                <h1 className="text-[32px] text-center font-bold text-[#2B2B2B] mb-2">#750,000</h1>
                <p className="text-[#2B2B2B]/60 text-[14px] text-center mb-6">
                  Ideal for growing businesses with regular legal needs.
                </p>

                <div className="w-full flex flex-col gap-3">
                  <div className="flex items-start gap-2">
                    <Check className="text-[#C84E26] w-[12px] h-[12px] mt-[3px]" />
                    <p className="text-[14px] text-[#2B2B2B] leading-relaxed">Up to 25 hours of legal consultation monthly</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-[#C84E26] w-[12px] h-[12px] mt-[3px]" />
                    <p className="text-[14px] text-[#2B2B2B] leading-relaxed">Unlimited contract review and drafting</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-[#C84E26] w-[12px] h-[12px] mt-[3px]" />
                    <p className="text-[14px] text-[#2B2B2B] leading-relaxed">Full compliance management</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-[#C84E26] w-[12px] h-[12px] mt-[3px]" />
                    <p className="text-[14px] text-[#2B2B2B] leading-relaxed">Priority email & phone support (24hr response)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-[#C84E26] w-[12px] h-[12px] mt-[3px]" />
                    <p className="text-[14px] text-[#2B2B2B] leading-relaxed">Monthly compliance audits</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-[#C84E26] w-[12px] h-[12px] mt-[3px]" />
                    <p className="text-[14px] text-[#2B2B2B] leading-relaxed">Data protection advisory</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-[#C84E26] w-[12px] h-[12px] mt-[3px]" />
                    <p className="text-[14px] text-[#2B2B2B] leading-relaxed">Employment law support</p>
                  </div>
                </div>

                <div className="flex-1" />

                <button className="w-full sm:w-[299px] h-[44px] px-[12px] py-[16px] rounded-[6px] text-[14px] text-[#F1F2F6] bg-[#C84E26] flex justify-center items-center gap-2 mt-4">
                  <Icon icon="uil:schedule" width={20} height={20} className='text-[#FFFFFF]' />
                  Get Started
                </button>
              </div>

              {/* JADE Plan */}
              <div className="w-full sm:w-[355px] h-auto sm:h-[598px] rounded-[14px] p-6 text-left shadow-2xl border bg-[#F1F2F6] flex flex-col text-center">
                <h1 className="text-[14px] font-semibold text-center text-[#2B2B2B] mb-2">JADE Plan</h1>
                <h1 className="text-[32px] font-bold text-center  text-[#2B2B2B] mb-2">#1,400,000</h1>
                <p className="text-[#2B2B2B]/60 text-[14px] text-center mb-6">
                  Comprehensive legal support for <br /> established businesses
                </p>

                <div className="w-full flex flex-col gap-3">
                  <div className="flex items-start gap-2">
                    <Check className="text-[#C84E26] w-[12px] h-[12px] mt-[3px]" />
                    <p className="text-[14px] text-[#2B2B2B] leading-relaxed">Unlimited legal consultation</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-[#C84E26] w-[12px] h-[12px] mt-[3px]" />
                    <p className="text-[14px] text-[#2B2B2B] leading-relaxed">Dedicated legal counsel</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-[#C84E26] w-[12px] h-[12px] mt-[3px]" />
                    <p className="text-[14px] text-[#2B2B2B] leading-relaxed">Basic compliance advisory</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-[#C84E26] w-[12px] h-[12px] mt-[3px]" />
                    <p className="text-[14px] text-[#2B2B2B] leading-relaxed">Full-service compliance management</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-[#C84E26] w-[12px] h-[12px] mt-[3px]" />
                    <p className="text-[14px] text-[#2B2B2B] leading-relaxed">24/7 priority support</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-[#C84E26] w-[12px] h-[12px] mt-[3px]" />
                    <p className="text-[14px] text-[#2B2B2B] leading-relaxed">Weekly compliance reviews</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-[#C84E26] w-[12px] h-[12px] mt-[3px]" />
                    <p className="text-[14px] text-[#2B2B2B] leading-relaxed">M&A and transaction support</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-[#C84E26] w-[12px] h-[12px] mt-[3px]" />
                    <p className="text-[14px] text-[#2B2B2B] leading-relaxed">Litigation management</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-[#C84E26] w-[12px] h-[12px] mt-[3px]" />
                    <p className="text-[14px] text-[#2B2B2B] leading-relaxed">Board advisory services</p>
                  </div>
                </div>

                <div className="flex-1" />

                <button className="w-full sm:w-[299px] h-[44px] px-[12px] py-[16px] rounded-[6px] border border-[#969595] text-[14px] text-[#2B2B2B] flex justify-center items-center gap-2 mt-4">
                  <Icon icon="uil:schedule" width={20} height={20} className='text-[#2B2B2B]' />
                  Get Started
                </button>
              </div>

            </div>

            {/* Bottom text and button */}
            <p className='text-[14px] text-center text-[#FEFEFE] mb-5 leading-relaxed'>
              Not sure which plan is right for you? Book a free consultation and <br className="hidden sm:block" /> we’ll help you choose the best option for your businesses
            </p>

            <button className="w-full sm:w-[445px] h-[44px] px-[12px] py-[16px] rounded-[6px] text-[14px] text-[#FFFFFF] flex justify-center items-center gap-2 bg-[#969595]">
              <Icon
                icon="uil:schedule"
                width={20}
                height={20}
                className='text-[#FFFFFF]'
              />
              Book Free Consultation
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}

export default PlansSection
