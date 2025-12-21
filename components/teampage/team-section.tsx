import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const LegalSection = () => {
  const teamMembers = [
    { img: "/assets/team1.png", name: "Adebayo Johnson", title: "Senior Associate" },
    { img: "/assets/team3.png", name: "Chioma Okonkwo", title: "Associate" },
    { img: "/assets/team2.png", name: "Tunde Adeleke", title: "Legal Consultant" },
    { img: "/assets/team4.png", name: "Blessing Adebayo", title: "Junior Associate" },
  ];

  return (
    <section className="w-full flex flex-col items-center relative mt-[120px] px-4">

      {/* Hero Background */}
      <div className="relative w-full max-w-[1440px] h-[400px] md:h-[652px] flex flex-col items-center">
        <Image
          src="/assets/image3.jpg"
          alt="Our Legal Team"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#131927]/60 z-10" />

        <div className="relative z-20 flex flex-col items-center text-center pt-12">
          <h1 className="capitalize text-[24px] md:text-[28px] text-white mb-4">
            Our Legal Team
          </h1>

          <div className="flex items-center gap-[12px] md:gap-[20px] text-[12px] md:text-[14px] text-[#C84E26] uppercase mb-4">
            <span>View all people</span>
            <ArrowRight size={16} />
          </div>

          <div className="h-[28px] border-l-2 border-[#C84E26] mb-8" />
        </div>
      </div>

      {/* Team Cards */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 -mt-20 md:-mt-75 z-20">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative w-[90%] sm:w-[300px] h-[380px] bg-[#F5F5F5] rounded-[8px] shadow-lg overflow-hidden"
          >
            <div className="relative w-full h-[250px] sm:h-[300px]">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4 text-center">
              <h2 className="text-[14px] md:text-[16px] font-semibold uppercase text-[#2B2B2B]">
                {member.name}
              </h2>
              <p className="text-[#C84E26] text-[12px] md:text-[14px] uppercase">
                {member.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LegalSection;
