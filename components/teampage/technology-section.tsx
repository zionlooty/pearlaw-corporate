import Image from 'next/image';
import React from 'react';
import { Icon } from '@iconify/react';
import { Scale } from 'lucide-react';

const TechnologySection = () => {
    return (
        <section className="w-full flex justify-center mt-[60px] px-4 sm:px-6">
            <div className="relative w-full max-w-[1440px] min-h-[423px] flex justify-center items-start">

                <Image
                    src="/image5.jpg"
                    alt="Technology Background"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-[#131927]/60 z-10" />

                <div className="
                    relative z-20 
                    w-full max-w-[1280px] 
                    h-auto md:h-[263px] 
                    border border-[#979797] 
                    rounded-tr-[30px] rounded-bl-[30px] 
                    mt-20
                    flex flex-col md:flex-row 
                    justify-center items-center 
                    gap-[24px] 
                    p-6 sm:p-8
                ">

                    {/* CARD 1 */}
                    <div className="flex flex-col items-center w-full md:w-[293px] h-auto md:h-[189px] p-4">
                        <Scale className="w-[40px] h-[34px] text-[#C84E26] mb-4" />
                        <h2 className="text-[16px] sm:text-[18px] text-[#FEFEFE] font-semibold uppercase text-center mb-3">
                            Professionalism
                        </h2>
                        <p className="text-[#FEFEFE]/80 text-[14px] sm:text-[16px] text-center">
                            Maintaining the highest standards of legal practice and ethical conduct in every case arises
                        </p>
                    </div>

                    {/* CARD 2 */}
                    <div className="flex flex-col items-center w-full md:w-[293px] h-auto md:h-[189px] p-4">
                        <Icon icon="hugeicons:idea-01" className="text-[#C84E26] w-[40px] h-[34px] mb-4" />
                        <h2 className="text-[16px] sm:text-[18px] text-[#FEFEFE] font-semibold uppercase text-center mb-3">
                            Integrity
                        </h2>
                        <p className="text-[#FEFEFE]/80 text-[14px] sm:text-[16px] text-center leading-relaxed">
                            Building trust through transparency, honesty, and unwavering commitment to our clients worldwide.
                        </p>
                    </div>

                    {/* CARD 3 */}
                    <div className="flex flex-col items-center w-full md:w-[293px] h-auto md:h-[189px] p-4">
                        <Icon icon="hugeicons:idea-01" className="text-[#C84E26] w-[40px] h-[34px] mb-4" />
                        <h2 className="text-[16px] sm:text-[18px] text-[#FEFEFE] font-semibold uppercase text-center mb-3">
                            Innovation
                        </h2>
                        <p className="text-[#FEFEFE]/80 text-[14px] sm:text-[16px] text-center">
                            Embracing modern legal solutions and technology to deliver exceptional results to our clients.
                        </p>
                    </div>

                    {/* CARD 4 */}
                    <div className="flex flex-col items-center w-full md:w-[293px] h-auto md:h-[189px] p-4">
                        <Icon icon="ri:group-line" className="text-[#C84E26] w-[40px] h-[34px] mb-2" />
                        <h2 className="text-[16px] sm:text-[18px] text-[#FEFEFE] font-semibold uppercase text-center mb-3">
                            Technology Innovation
                        </h2>
                        <p className="text-[#FEFEFE]/80 text-[14px] sm:text-[16px] text-center">
                            Pioneered digital client services and modern case management systems.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TechnologySection;
