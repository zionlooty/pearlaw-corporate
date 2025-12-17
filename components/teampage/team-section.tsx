import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const LegalSection = () => {
  const teamMembers = [
    {
      img: "/team1.png",
      name: "Adebayo johnson",
      title: "Senior Associate",
    },
    {
      img: "/team3.png",
      name: "Chioma okonkwo",
      title: "Associate",
    },
    {
      img: "/team2.png",
      name: "Tunde Adeleke",
      title: "legal consultant",
    },
    {
      img: "/team4.png",
      name: "Blessing Adebayo",
      title: "junior Associate",
    },
   
  ];

  return (
    <section className="w-full flex flex-col items-center relative mt-[120px]">

      
      <div className="relative w-[1440px] min-h-[652px] flex flex-col items-center">
        <Image
          src="/image3.jpg"
          alt="Our Legal Team"
          fill
          priority
          className="object-cover"
        />

      
        <div className="absolute inset-0 bg-[#131927]/60 z-10" />

        
        <div className="relative z-20 flex flex-col items-center text-center pt-12">
          <h1 className="capitalize text-[28px] text-white mb-4">
            Our Legal Team
          </h1>

          <div className="flex items-center gap-[20px] text-[14px] text-[#C84E26] uppercase mb-4">
            <span>View all people</span>
            <ArrowRight size={16} />
          </div>

          <div className="h-[28px] border-l-2 border-[#C84E26] mb-8" />
        </div>
      </div>

     
      <div className="flex flex-wrap justify-center gap-6 -mt-75 z-20">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative w-[300px] h-[380px] bg-[#F5F5F5] rounded-[8px] shadow-lg overflow-hidden"
          >
            <div className="relative w-full h-[300px]">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>

           
            <div className="p-4 text-center">
              <h2 className="text-[16px] font-semibold uppercase text-[#2B2B2B]">
                {member.name}
              </h2>
              <p className="text-[#C84E26] text-[14px] uppercase">
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
