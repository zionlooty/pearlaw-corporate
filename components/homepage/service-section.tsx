import React from 'react';

const ServiceSection = () => {
    return (
        <section className="w-full flex justify-center mt-[80px]">
            <div className="w-[1280px] flex items-center p-6">
                <div className="grid grid-cols-2 gap-[24px] items-start">
                   
                    <div className="flex flex-col justify-start">
                        <h1 className="text-[24px] font-bold text-[#131927] mb-4">
                            We Render the Best Service
                        </h1>
                        <div className="w-[32px] border-b-3 border-[#C84E26]" />
                    </div>

                    <div>
                        <p className="text-[20px] text-[#2B2B2B]/80 leading-[1.6] max-w-[600px]">
                            In a remote region beyond the towering word-mountains, far removed from the realms of
                            Vokalia and Consonantia, there resided the forgotten texts. Secluded within Bookmarksgrove,
                            situated along the coast of the Semantics and bordered by an expansive linguistic sea,
                            they lived in quiet isolation. A gentle river called Duden coursed through their dwelling place,
                            carrying an enduring tranquility. Upon waking from a night of troubled dreams,
                            Gregor Samsa found himself altered in a manner he could scarcely comprehend.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
