import Image from 'next/image';
import React from 'react';
import { Icon } from '@iconify/react';
import { Scale } from 'lucide-react';

const TechnologySection = () => {
    const cards = [
        {
            icon: <Scale className="w-[40px] h-[34px] text-[#C84E26] mb-4" />,
            title: "Professionalism",
            description:
                "Maintaining the highest standards of legal practice and ethical conduct in every case arises",
        },
        {
            icon: <Icon icon="mdi:heart-outline" className="text-[#C84E26] w-[40px] h-[34px] mb-4" />,
            title: "Integrity",
            description:
                "Building trust through transparency, honesty, and unwavering commitment to our clients worldwide.",
        },
        {
            icon: <Icon icon="hugeicons:idea-01" className="text-[#C84E26] w-[40px] h-[34px] mb-4" />,
            title: "Innovation",
            description:
                "Embracing modern legal solutions and technology to deliver exceptional results to our clients.",
        },
        {
            icon: <Icon icon="ri:group-line" className="text-[#C84E26] w-[40px] h-[34px] mb-2" />,
            title: "Technology Innovation",
            description:
                "Pioneered digital client services and modern case management systems.",
        },
    ];

    return (
        <section className="w-full flex justify-center mt-[60px] px-4 sm:px-6">
            <div className="relative w-full max-w-[1440px] flex justify-center items-start">

                {/* Background Image */}
                <Image
                    src="/assets/image5.jpg"
                    alt="Technology Background"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#131927]/60 z-10" />

                {/* Cards Container */}
                <div className="
                    relative z-20
                    w-full max-w-[1280px]
                    mt-20
                    p-6 sm:p-8
                    flex flex-col lg:flex-row flex-wrap
                    justify-center lg:justify-between
                    gap-[24px]
                ">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col justify-between items-center w-full md:w-[293px] lg:w-[calc(25%-18px)] h-auto lg:h-[189px] p-4"
                        >
                            {card.icon}
                            <h2 className="text-[16px] sm:text-[18px] text-[#FEFEFE] font-semibold uppercase text-center mb-3">
                                {card.title}
                            </h2>
                            <p className="text-[#FEFEFE]/80 text-[14px] sm:text-[16px] text-center">
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
