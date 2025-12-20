import React from 'react';

const ServiceSection = () => {
  return (
    <section className="w-full flex justify-center mt-[80px] px-4 sm:px-6">
      <div className="w-full max-w-[1280px] flex flex-col sm:flex-row items-start gap-6 sm:gap-12 p-6">
        
      
        <div className="flex flex-col justify-start sm:w-1/2">
          <h1 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold whitespace-nowrap text-[#131927] mb-4">
            We Render the Best Service
          </h1>
          <div className="w-[32px] border-b-3 border-[#C84E26]" />
        </div>

       
        <div className="sm:w-1/2">
          <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#2B2B2B]/80 leading-[1.6]">
            In a remote region beyond the towering word-mountains, far removed from the realms of
            Vokalia and Consonantia, there resided the forgotten texts. Secluded within Bookmarksgrove,
            situated along the coast of the Semantics and bordered by an expansive linguistic sea,
            they lived in quiet isolation. A gentle river called Duden coursed through their dwelling place,
            carrying an enduring tranquility. Upon waking from a night of troubled dreams,
            Gregor Samsa found himself altered in a manner he could scarcely comprehend.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
