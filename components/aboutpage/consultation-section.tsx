import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ConsultationSection = () => {
    return (
        <section className="w-full bg-gradient-to-r from-[#2B2B2B] to-[#1E223F] mt-[120px]">
            <div className="w-full max-w-[1440px] h-auto sm:h-[388px] mx-auto flex flex-col items-center justify-center px-6 py-10 text-center">

                <h1 className="text-[14px] font-semibold text-[#FEFEFE]/80 uppercase mb-3">
                    Ready to get started?
                </h1>

                <p className="text-[24px] sm:text-[24px] text-[#FEFEFE] font-semibold leading-relaxed mb-6">
                    Schedule a consultation with our experienced legal <br className="hidden sm:block" /> team today.
                    Take a step to solve your legal matters <br className="hidden sm:block" />
                    <span className='text-center'>with confidence.</span>
                </p>

                <div className="flex items-center justify-center w-full">
                    <button className="flex items-center w-full max-w-[660px] sm:h-[50px] justify-center gap-2 bg-[#C84E26] text-[#F1F2F6] text-[12px] font-semibold uppercase py-[12px] px-[18px] rounded-md">
                        Book Consultation
                        <FaArrowRight className="text-[#F1F2F6]" />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default ConsultationSection;
