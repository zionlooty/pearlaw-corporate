import Image from 'next/image';
import React from 'react';
import { Icon } from '@iconify/react';

const TechnologySection = () => {
    const cards = [
        {
            icon: "ant-design:fund-outlined",
            title: "Pearlaw Funded",
            description: "Established with a vision to provide exceptional legal services to our community.",
        },
        {
            icon: "streamline-flex:decent-work-and-economic-growth",
            title: "Expansion & Growth",
            description: "Expanded to a team of 15 attorneys and opened our second office location.",
        },
        {
            icon: "game-icons:achievement",
            title: "Recognition of Excellence",
            description: "Received multiple industry awards and recognition for outstanding legal representation.",
        },
        {
            icon: "streamline:ai-technology-spark",
            title: "Technology Innovation",
            description: "Pioneered digital client services and modern case management systems.",
        },
    ];

    return (
        <section className="w-full flex justify-center mt-[60px] px-4">
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
                <div
                    className="
                        relative z-20
                        w-full max-w-[1280px]
                        mt-20
                        p-8
                        flex flex-col lg:flex-row flex-wrap gap-[24px] justify-center lg:justify-between
                    "
                >
                    {cards.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col justify-between items-center w-full lg:w-[calc(25%-18px)] h-auto lg:h-[250px] p-4"
                        >
                            <Icon
                                icon={item.icon}
                                className="text-[#C84E26] mb-3 w-[48px] h-[48px]"
                            />
                            <h2 className="text-sm text-[#FEFEFE] font-semibold uppercase text-center mb-3">
                                {item.title}
                            </h2>
                            <p className="text-[#FEFEFE]/80 text-[16px] text-center">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default TechnologySection;
