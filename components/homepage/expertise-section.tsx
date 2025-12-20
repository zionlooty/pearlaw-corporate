import { Icon } from "@iconify/react";
import { ArrowRight, Building2, FileCheck, Globe, House, Rocket, Scale, Shield, WholeWord } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ExpertiseSection = () => {
  return (
    <section className="mt-[60px] min-h-screen flex flex-col items-center px-4">
      {/* Section Header */}
      <div className="text-center mb-6">
        <h1 className="text-[16px] font-semibold text-[#8c8888] mb-2">OUR EXPERTISE</h1>
        <h1 className="text-[#2b2b2b] font-semibold text-[32px] sm:text-[28px] md:text-[32px]">Legal Practice Areas</h1>
      </div>

      <div className="h-[38px] border-l-2 border-[#C84E26] mb-10"></div>

      {/* Expertise Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 w-full md:w-[90%] mx-auto">
        {/* Card Example */}
        <div className="flex flex-col gap-4 text-center items-center justify-center">
          <Icon icon="streamline-ultimate:corporate-social-media" className="text-[#C84E26] w-[48px] h-[48px]" />
          <h1 className="text-[16px] sm:text-[18px] font-semibold text-[#2b2b2b] uppercase">Corporate & Commercial</h1>
          <p className="text-[16px] sm:text-[16px] text-[#2b2b2b]/80">
            End-to-end corporate structuring, M&A transactions, commercial contracts and joint ventures tailored to your business objectives.
          </p>
          <div className="flex items-center justify-center text-[#C84E26] gap-2 text-[14px] sm:text-[12px] uppercase">
            <Link href="/">learn more</Link>
            <ArrowRight size={9.04} />
          </div>
        </div>

        {/* Repeat the same structure for the remaining expertise cards */}
        <div className="flex flex-col gap-4 text-center items-center justify-center">
          <Scale className="w-[48px] h-[48px] text-[#C84E26]" />
          <h1 className="text-[16px] sm:text-[18px] font-semibold text-[#2b2b2b] uppercase">Tech Law</h1>
          <p className="text-[16px] sm:text-[16px] text-[#2b2b2b]/80">
            Navigate the digital landscape with expertise in data privacy, IP protection, software licensing, and technology transactions.
          </p>
          <div className="flex items-center justify-center text-[#C84E26] gap-2 text-[12px] sm:text-[14px] uppercase">
            <Link href="/">learn more</Link>
            <ArrowRight size={9.04} />
          </div>
        </div>

        <div className="flex flex-col gap-4 text-center items-center justify-center">
          <House className="w-[48px] h-[48px] text-[#C84E26]" />
          <h1 className="text-[16px] sm:text-[18px] font-semibold text-[#2b2b2b] uppercase">Real Estate Law</h1>
          <p className="text-[16px] sm:text-[16px] text-[#2b2b2b]/80">
            Complete real estate solutions covering property transactions, due diligence, leasing, and title verification.
          </p>
          <div className="flex items-center justify-center text-[#C84E26] gap-2 text-[12px] sm:text-[14px] uppercase">
            <Link href="/">learn more</Link>
            <ArrowRight size={9.04} />
          </div>
        </div>

        {/* Continue similarly for the remaining three cards */}
        <div className="flex flex-col gap-4 text-center items-center justify-center">
          <Rocket className="w-[48px] h-[48px] text-[#C84E26]" />
          <h1 className="text-[16px] sm:text-[18px] font-semibold text-[#2b2b2b] uppercase">Startups & MSME Law</h1>
          <p className="text-[16px] sm:text-[16px] text-[#2b2b2b]/80">
            Comprehensive legal support for startups and MSMEs including incorporation, funding rounds, term sheets, and growth strategies.
          </p>
          <div className="flex items-center justify-center text-[#C84E26] gap-2 text-[12px] sm:text-[14px] uppercase">
            <Link href="/">learn more</Link>
            <ArrowRight size={9.04} />
          </div>
        </div>

        <div className="flex flex-col gap-4 text-center items-center justify-center">
          <FileCheck className="w-[48px] h-[48px] text-[#C84E26]" />
          <h1 className="text-[16px] sm:text-[18px] font-semibold text-[#2b2b2b] uppercase">Company Governance</h1>
          <p className="text-[16px] sm:text-[16px] text-[#2b2b2b]/80">
            Ensure compliance with corporate governance standards, board processes, statutory filings, and regulatory requirements.
          </p>
          <div className="flex items-center justify-center text-[#C84E26] gap-2 text-[12px] sm:text-[14px] uppercase">
            <Link href="/">learn more</Link>
            <ArrowRight size={9.04} />
          </div>
        </div>

        <div className="flex flex-col gap-4 text-center items-center justify-center">
          <Shield className="w-[48px] h-[48px] text-[#C84E26]" />
          <h1 className="text-[16px] sm:text-[18px] font-semibold text-[#2b2b2b] uppercase">Regulatory Compliance</h1>
          <p className="text-[16px] sm:text-[16px] text-[#2b2b2b]/80">
            Stay ahead of regulatory changes with proactive compliance advisory across multiple sectors and jurisdictions.
          </p>
          <div className="flex items-center justify-center text-[#C84E26] gap-2 text-[12px] sm:text-[14px] uppercase">
            <Link href="/">learn more</Link>
            <ArrowRight size={9.04} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
