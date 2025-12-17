import Image from 'next/image';
import React from 'react';
import { FundOutlined } from '@ant-design/icons';
import { GiAchievement } from 'react-icons/gi';

const TechnologySection = () => {
    return (
        <section className="w-full flex justify-center mt-[60px]">
            <div className="relative w-[1440px] min-h-[423px] flex justify-center items-start">

                {/* Background Image */}
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
                        <FundOutlined style={{ fontSize: 30, color: '#C84E26' }} className="mb-4" />
                        <h2 className="text-sm text-[#FEFEFE] font-semibold uppercase text-center mb-5">
                            Pearlaw Funded
                        </h2>
                        <p className="text-[#FEFEFE]/80 text-[16px] text-center">
                            Established with a vision to provide exceptional legal services to our community.
                        </p>
                    </div>

                    <div className="flex flex-col items-center w-[293px] h-[189px] p-4">
                        <FundOutlined style={{ fontSize: 30, color: '#C84E26' }} className="mb-4" />
                        <h2 className="text-sm text-[#FEFEFE] font-semibold uppercase text-center mb-5">
                            Expansion & Growth
                        </h2>
                        <p className="text-[#FEFEFE]/80 text-[16px] text-center">
                            Expanded to a team of 15 attorneys and opened our second office location.
                        </p>
                    </div>

                  
                    <div className="flex flex-col items-center w-[293px] h-[189px] p-4">
                        <GiAchievement style={{ fontSize: 36, color: '#C84E26' }} className="mb-4" />
                        <h2 className="text-sm text-[#FEFEFE] font-semibold uppercase text-center mb-5">
                            Recognition of Excellence
                        </h2>
                        <p className="text-[#FEFEFE]/80 text-[16px] text-center">
                            Received multiple industry awards and recognition for outstanding legal representation.
                        </p>
                    </div>

                    <div className="flex flex-col items-center w-[293px] h-[189px] p-4">
                        <FundOutlined style={{ fontSize: 30, color: '#C84E26' }} className="mb-4" />
                        <h2 className="text-sm text-[#FEFEFE] font-semibold uppercase text-center mb-5">
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
