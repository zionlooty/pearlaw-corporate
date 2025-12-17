import Image from 'next/image';
import React from 'react';
import { FundOutlined } from '@ant-design/icons';
import { GiAchievement } from 'react-icons/gi';
import { Heart, Lightbulb, Scale, UsersRound } from 'lucide-react';
import { Icon } from '@iconify/react';

const TechnologySection = () => {
    return (
        <section className="w-full flex justify-center mt-[60px]">
            <div className="relative w-[1440px] min-h-[423px] flex justify-center items-start">


                <Image
                    src="/image5.jpg"
                    alt="Technology Background"
                    fill
                    priority
                    className="object-cover"
                />


                <div className="absolute inset-0 bg-[#131927]/60 z-10" />

                <div className="relative z-20 w-[1280px] h-[263px] border border-[#979797] rounded-tr-[30px] rounded-bl-[30px] mt-20 flex justify-center items-center gap-[24px] p-8">


                    <div className="flex flex-col items-center w-[293px] h-[189px] p-4">
                        <Scale className="w-[48px] h-[48px] text-[#C84E26] mb-4" />
                        <h2 className="text-[18px] text-[#FEFEFE] font-semibold uppercase text-center mb-3">
                            Professionalism
                        </h2>
                        <p className="text-[#FEFEFE]/80 text-[16px] text-center">
                            Maintaining the highest standards of legal practice and ethical conduct in every case arises
                        </p>
                    </div>


                    <div className="flex flex-col items-center w-[293px] h-[189px] p-4">
                        <Icon
                            icon="hugeicons:idea-01"
                            width={48}
                            height={48}
                            className="text-[#C84E26] mb-4"
                        />
                        <h2 className="text-[18px] text-[#FEFEFE] font-semibold uppercase text-center mb-3">
                            Integrity
                        </h2>
                        <p className="text-[#FEFEFE]/80 text-[16px] text-center leading-relaxed">
                            Building trust through transparency, honesty, and unwavering commitment to our clients worldwide.
                        </p>
                    </div>


                    <div className="flex flex-col items-center w-[293px] h-[189px] p-4">
                        <Icon
                            icon="hugeicons:idea-01"
                            width={48}
                            height={48}
                            className="text-[#C84E26] mb-4"
                        />
                        <h2 className="text-[18px] text-[#FEFEFE] font-semibold uppercase text-center mb-3">
                            Innovation
                        </h2>
                        <p className="text-[#FEFEFE]/80 text-[16px] text-center">
                            Embracing modern legal solutions and technology to deliver exceptional results to our clients.
                        </p>
                    </div>


                    <div className="flex flex-col items-center w-[293px] h-[189px] p-4">
                        <UsersRound style={{ fontSize: 48, color: '#C84E26' }} className="mb-4" />
                        <h2 className="text-[18px] text-[#FEFEFE] font-semibold uppercase text-center mb-3">
                            Technology Innovation
                        </h2>
                        <p className="text-[#FEFEFE]/80 text-[16px] text-center">
                            Pioneered digital client services and modern case management systems.
                        </p>
                    </div>

                </div>


            </div>
        </section>
    );
};

export default TechnologySection;
