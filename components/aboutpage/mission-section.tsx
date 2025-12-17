import { Eye } from 'lucide-react';
import React from 'react';

const MissionSection = () => {
  return (
    <section className="flex justify-center mt-[80px]">
      <div className="w-[1280px] h-[508px]  flex items-center gap-[24px]  justify-center">

        <div className="w-[628px] h-[450px] flex flex-col items-center justify-center shadow-2xl py-[60px] px-[80px] rounded-lg">

          <div className="flex gap-6 mb-6">
            <Eye size={48} className="text-[#C84E26]" />

          </div>

          <h2 className="text-[16px] font-bold mb-4 text-center uppercase">
            Our Mission
          </h2>
          <p className="text-[#2B2B2B]/80 text-[20px] text-center leading-relaxed">
            To provide exceptional legal services with unwavering integrity, advocating fiercely for our clients while maintaining the highest ethical standards. We strive to deliver practical solutions that protect our client’s interests and advance their goals.
          </p>
        </div>


        <div className="w-[628px] h-[450px] flex flex-col items-center justify-center shadow-2xl py-[60px] px-[80px] rounded-lg">

          <div className="flex gap-6 mb-6">
            <Eye size={48} className="text-[#C84E26]" />

          </div>

          <h2 className="text-[16px] font-bold mb-4 uppercase text-center">
            Our Vision
          </h2>
          <p className="text-[#2B2B2B]/80 text-[20px] text-center leading-relaxed">
            To be recognized as the most trusted and innovative law firm, setting the standard for legal excellence and client service. We envision a future where justice is accessible, and every client receives personalized attention that leads to meaningful results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
