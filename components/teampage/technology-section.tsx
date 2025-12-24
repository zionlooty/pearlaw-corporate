import Image from 'next/image';
import React from 'react';
import { Scale, Heart, Lightbulb, Users } from 'lucide-react';

const TechnologySection = () => {
  const cards = [
    { icon: <Scale />, title: "Professionalism", description: "Maintaining the highest standards of legal practice and ethical conduct in every case arises" },
    { icon: <Heart />, title: "Integrity", description: "Building trust through transparency, honesty, and unwavering commitment to our clients worldwide." },
    { icon: <Lightbulb />, title: "Innovation", description: "Embracing modern legal solutions and technology to deliver exceptional results to our clients." },
    { icon: <Users />, title: "Client focus", description: "Your success is our priority. We listen, understand, and deliver tailored legal solutions" },
  ];

  return (
    <section className="w-full flex justify-center mt-[60px] px-4 sm:px-6">
      <div className="relative w-full max-w-[1440px] flex justify-center">
        {/* Background Image */}
        <Image src="/assets/image5.jpg" alt="Technology Background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-[#131927]/60 z-10" />

        {/* Cards Grid */}
        <div className="relative z-20 w-full max-w-[1280px] mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 p-6 sm:p-8">
          {cards.map((card, idx) => (
            <div key={idx} className="flex flex-col items-center text-center h-full">
              {/* Icon */}
              <div className="text-[#C84E26] flex items-center justify-center mb-4
                              w-[56px] h-[56px] sm:w-[72px] sm:h-[72px] lg:w-[96px] lg:h-[96px]">
                {card.icon}
              </div>

              {/* Title */}
              <h2 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-[#FEFEFE] uppercase mb-2">
                {card.title}
              </h2>

              {/* Description */}
              <p className="text-[#FEFEFE]/80 text-[14px] sm:text-[15px] md:text-[16px] max-w-[260px] sm:max-w-[300px] lg:max-w-none">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
