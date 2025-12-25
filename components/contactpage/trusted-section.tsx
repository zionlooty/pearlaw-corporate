import { Clock, Shield, Users } from "lucide-react"
import React from "react"

const TrustedSection = () => {
  return (
    <section className="w-full flex justify-center mt-[80px] px-4">
      <div className="w-full max-w-[1280px] flex flex-col gap-4">
        
        {/* Item 1 */}
        <div className="border border-[#969595]/40 px-4 sm:px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="w-[60px] h-[60px] bg-[#C84E26] flex rounded-[8px] items-center justify-center shrink-0">
              <Shield className="w-[26px] h-[26px] text-white" />
            </div>

            <div>
              <h1 className="text-[20px] sm:text-[22px] lg:text-[24px]  font-semibold text-[#2B2B2B]">
                Trusted Counsel
              </h1>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#2B2B2B]">
                15 Years Experience
              </p>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="border border-[#969595]/40 px-4 sm:px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="w-[60px] h-[60px] bg-[#131927]  rounded-[8px] flex items-center justify-center shrink-0">
              <Users className="w-[26px] h-[26px] text-white" />
            </div>

            <div>
              <h1 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-[#2B2B2B]">
                Client First
              </h1>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#2B2B2B]">
                1000+ Happy Client
              </p>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="border border-[#969595]/40 px-4 sm:px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="w-[60px] h-[60px] bg-[#C84E26] flex items-center rounded-[8px] justify-center shrink-0">
              <Clock className="w-[26px] h-[26px] text-white" />
            </div>

            <div>
              <h1 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-[#2B2B2B]">
                Quick Response
              </h1>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#2B2B2B]">
                24-Hours Turnaround
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default TrustedSection
