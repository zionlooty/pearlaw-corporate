import Image from "next/image";
import React from "react";

const HeroSection = () => {
    return (
        <section className="w-full">
            <div className="relative w-full h-[276px]">
                <Image
                    src="/assets/hero1.jpg"
                    alt="Hero image"
                    fill
                    className="object-cover"
                    priority
                />

                <div className=" absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-[36px] text-[#ffffff] uppercase">
                        About Pearlaw Corporate
                    </h1>
                    <h2 className="text-[20px] text-[#FEFEFE]/80 uppercase">Story about our firm</h2>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
