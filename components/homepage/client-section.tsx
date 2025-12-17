import { Icon } from '@iconify/react';
import { Quote } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const ClientSection = () => {
    return (
        <section className="w-full flex justify-center mt-[60px]">
            <div className="relative w-[1440px] min-h-[1038px] flex justify-center items-start">

                <Image
                    src="/image4.jpg"
                    alt="Client Section Background"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-[#131927]/60 z-10" />


                <div className="relative z-20 w-[1280px] h-[878px] border border-[#979797CC] rounded-tr-[30px] rounded-bl-[30px] mt-20 flex flex-col items-center p-8">


                    <h1 className="text-[16px] font-semibold uppercase text-[#C84E26] mb-1">
                        Testimonial
                    </h1>
                    <h2 className="text-[28px] text-[#FEFEFE] mb-10">
                        Words from Clients
                    </h2>
                    <div className="h-[38px] border-l-2 border-[#C84E26] mb-12" />

                    <Icon
                        icon="sidekickicons:quotation-mark"
                        className="text-[#C84E26] w-[85px] h-[52px] text-[#C84E26] mb-8"
                    />



                    <p className="text-[24px] text-[#FEFEFE]/80 leading-relaxed text-center max-w-[900px] mb-[160px]">
                        Pearlaw’s expertise in tech law helped us navigate complex regulatory requirements as we scaled. Their practical advice was invaluable. The firm handled my case with exceptional professionalism and clarity. I felt supported at <span className="block">every stage.</span>
                    </p>


                    <div className="flex gap-3 items-center mb-12">
                        <div className="w-[70px] h-[70px] rounded-full overflow-hidden relative">
                            <Image
                                src="/pic1.jpg"
                                alt="Client"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-[#FEFEFE] text-[18px]'>Chidi Okonkwo</h1>
                            <h2 className='text-[#C84E26] text-[14px]'>CEO, TechVenture Nigeria</h2>

                        </div>

                    </div>

                    <div className='flex gap-2 items-center justify-center'>
                        <div className="w-[32px] border-b-8 rounded-[6px] border-[#C84E26]"></div>
                        <div className="w-[21px] border-b-8 rounded-[6px] border-[#C84E26]"></div>
                        <div className="w-[11px] border-b-8 rounded-[6px] border-[#C84E26]"></div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default ClientSection;
