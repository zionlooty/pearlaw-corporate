import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full flex items-center justify-center mt-[80px]">
      <div className="w-[1284px] h-[488px]">
        <div className="grid grid-cols-2 gap-[60px] h-full">

          {/* Image Column */}
          <div className="relative w-[629px] h-[488px] rounded-[6px] overflow-hidden">
            <Image
              src="/about.jpg"
              alt="About image"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-start">
            <div className="w-[32px] border-b-3 border-[#C84E26] mb-4" />
            <h1 className="text-[18px] font-bold text-[#2B2B2B]/80  uppercase mb-4">
              About Pearlaw
            </h1>

            <h1 className="text-[24px] text-[#2B2B2B] font-bold mb-4">Our Gorgeous History</h1>
            <p className="text-[21.5px] text-[#2B2B2B] italic font-normal leading-relaxed">
              Founded with a commitment to excellence and integrity, Pearlaw Corporate has been
              serving clients with distinction for over two decades. Our team of experienced
              attorneys combines deep legal expertise with a client-first approach, ensuring that
              every case receives the attention and dedication it deserves.
              <br /><br />
              We believe in building lasting relationships based on trust, transparency, and
              results. Whether you’re facing a complex litigation matter or need strategic legal
              counsel, Pearlaw Corporate is your partner in achieving the best possible outcome.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
