import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';

const ClientSection = () => {
    return (
        <section className="w-full flex justify-center mt-[60px] px-4 sm:px-6">
            <div className="relative w-full max-w-[1440px] flex justify-center">

                {/* Background Image */}
                <div className="relative w-full min-h-[700px] sm:min-h-[600px] md:min-h-[750px] lg:min-h-[800px]">
                    <Image
                        src="/assets/image4.jpg"
                        alt="Client Section Background"
                        fill
                        className="object-cover "
                        priority
                    />
                    <div className="absolute inset-0 bg-[#131927]/60 rounded-tr-[30px] rounded-bl-[30px]" />
                </div>

                {/* Overlay Card */}
                <div className="
                    absolute top-0
                    w-[95%]
                    
                    flex flex-col items-center
                    p-4 sm:p-6 md:p-8
                    text-center
                ">

                    {/* Heading */}
                    <h1 className="text-[14px] sm:text-[14px] md:text-[16px] font-semibold uppercase text-[#C84E26] mb-2">
                        Testimonial
                    </h1>

                    <h2 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-[#FEFEFE] mb-6">
                        Words from Clients
                    </h2>

                    <div className="h-[30px] sm:h-[38px] border-l-2 border-[#C84E26] mb-8 mx-auto" />

                    {/* Quote Icon */}
                    <Icon
                        icon="sidekickicons:quotation-mark"
                        className="text-[#C84E26] w-[40px] sm:w-[60px] md:w-[85px] h-[28px] sm:h-[40px] md:h-[52px] mb-6"
                    />

                    {/* Testimonial Text */}
                    <p className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-[#FEFEFE]/80 leading-relaxed max-w-[95%] md:max-w-[700px] lg:max-w-[900px] mb-12">
                        Pearlaw’s expertise in tech law helped us navigate complex regulatory requirements as we scaled.
                        Their practical advice was invaluable. The firm handled my case with exceptional professionalism
                        and clarity. I felt supported at <span className="block">every stage.</span>
                    </p>

                    {/* Client Info */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center mb-8">

                        <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-full overflow-hidden relative">
                            <Image
                                src="/assets/pic1.jpg"
                                alt="Client"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col text-center sm:text-left">
                            <h1 className="text-[16px] sm:text-[18px] md:text-[18px] text-[#FEFEFE] font-semibold">Chidi Okonkwo</h1>
                            <h2 className="text-[12px] sm:text-[14px] md:text-[14px] text-[#C84E26]">CEO, TechVenture Nigeria</h2>
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex gap-2 items-center justify-center mb-4">
                        <div className="w-[16px] sm:w-[32px] border-b-4 sm:border-b-8 rounded-[6px] border-[#C84E26]" />
                        <div className="w-[10px] sm:w-[21px] border-b-4 sm:border-b-8 rounded-[6px] border-[#C84E26]" />
                        <div className="w-[6px] sm:w-[11px] border-b-4 sm:border-b-8 rounded-[6px] border-[#C84E26]" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ClientSection;
