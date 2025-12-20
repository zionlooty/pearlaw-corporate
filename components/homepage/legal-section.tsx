import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const LegalSection = () => {
  const teamMembers = [
    {
      img: "/assets/team1.png",
      name: "Adebayo johnson",
      title: "Senior Associate",
    },
    {
      img: "/assets/team3.png",
      name: "Chioma okonkwo",
      title: "Associate",
    },
    {
      img: "/assets/team2.png",
      name: "Tunde Adeleke",
      title: "legal consultant",
    },
    {
      img: "/assets/team4.png",
      name: "Blessing Adebayo",
      title: "junior Associate",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center relative mt-[120px] px-3 sm:px-4">

      {/* Background */}
      <div className="
        relative
        w-full lg:w-[1440px]
        min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[652px]
        flex flex-col items-center
      ">
        <Image
          src="/assets/image3.jpg"
          alt="Our Legal Team"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#131927]/60 z-10" />

        {/* Title */}
        <div className="relative z-20 flex flex-col items-center text-center pt-10 lg:pt-12">
          <h1 className="capitalize text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] text-white mb-4">
            Our Legal Team
          </h1>

          <div className="flex items-center gap-[10px] sm:gap-[15px] lg:gap-[20px] text-[12px] sm:text-[13px] lg:text-[14px] text-[#C84E26] uppercase mb-4">
            <span>View all people</span>
            <ArrowRight size={16} />
          </div>

          <div className="h-[20px] sm:h-[24px] lg:h-[28px] border-l-2 border-[#C84E26] mb-6 lg:mb-8" />
        </div>
      </div>

      {/* Cards */}
      <div className="
        flex flex-wrap justify-center
        gap-4 sm:gap-5 lg:gap-6
        -mt-[60px] sm:-mt-[70px] lg:-mt-75
        z-20
        w-full
      ">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="
              relative
              w-[85%] sm:w-[260px] md:w-[280px] lg:w-[300px]
              h-[330px] sm:h-[350px] md:h-[360px] lg:h-[380px]
              bg-[#F5F5F5]
              rounded-[8px]
              shadow-lg
              overflow-hidden
            "
          >
            <div className="relative w-full h-[220px] sm:h-[240px] md:h-[270px] lg:h-[300px]">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4 text-center">
              <h2 className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold uppercase text-[#2B2B2B]">
                {member.name}
              </h2>
              <p className="text-[#C84E26] text-[12px] sm:text-[13px] md:text-[14px] uppercase">
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
