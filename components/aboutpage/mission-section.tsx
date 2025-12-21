import { Icon } from '@iconify/react';
import { Eye } from 'lucide-react';
import React from 'react';

const MissionSection = () => {
  return (
    <section className="flex justify-center mt-[80px] px-4">
      <div className="w-full max-w-[1280px] flex flex-col md:flex-row items-center gap-[24px] justify-center">

        {/* Mission Card */}
        <div className="w-full md:w-[628px] flex flex-col items-center justify-center shadow-2xl py-[40px] sm:py-[60px] px-6 sm:px-[80px] rounded-lg">
          <div className="flex gap-6 mb-6">
            <Icon
              icon="icon-park-outline:round-caliper"
              width={48}
              height={48}
              className="text-[#C84E26]"
            />
          </div>
          <h2 className="text-[16px] font-bold mb-4 text-center uppercase">
            Our Mission
          </h2>
          <p className="text-[#2B2B2B]/80 text-[18px] sm:text-[20px] text-center leading-relaxed">
            To provide exceptional legal services with unwavering integrity, advocating fiercely for our clients while maintaining the highest ethical standards. We strive to deliver practical solutions that protect our client’s interests and advance their goals.
          </p>
        </div>

        {/* Vision Card */}
        <div className="w-full md:w-[628px] flex flex-col items-center justify-center shadow-2xl py-[40px] sm:py-[60px] px-6 sm:px-[80px] rounded-lg">
          <div className="flex gap-6 mb-6">
            <Eye className="text-[#C84E26] w-[48px] h-[48px]" />
          </div>
          <h2 className="text-[16px] font-bold mb-4 text-center uppercase">
            Our Vision
          </h2>
          <p className="text-[#2B2B2B]/80 text-[18px] sm:text-[20px] text-center leading-relaxed">
            To be recognized as the most trusted and innovative law firm, setting the standard for legal excellence and client service. We envision a future where justice is accessible, and every client receives personalized attention that leads to meaningful results.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MissionSection;
