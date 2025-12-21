import Image from "next/image";
import React from "react";

const HeroSection = () => {
    return (
        <section className="w-full">
            <div className="relative w-full h-[276px] sm:h-[350px] md:h-[400px] lg:h-[276px]">
                <Image
                    src="/assets/hero1.jpg"
                    alt="Hero image"
                    fill
                    className="object-cover"
                    priority
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                    <h1 className="text-[36px] sm:text-[40px] md:text-[48px] lg:text-[36px] text-white uppercase leading-tight">
                        About Pearlaw Corporate
                    </h1>
                    <h2 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[20px] text-white/80 uppercase mt-2">
                        Story about our firm
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
