import { Facebook, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline, IoLogoTiktok } from "react-icons/io5";

const FooterSection = () => {
  return (
    <footer className="w-full overflow-x-hidden bg-gradient-to-l from-[#131927] to-[#1E223F] mt-[120px]">

      
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-16">

       
        <div>
          <Link
            href="/"
            className="flex items-center gap-4 text-white text-[20px] font-semibold mb-6 whitespace-nowrap"
          >
            <Image src="/logo1.png" width={48} height={48} alt="Pearlaw" />
            <span>Pearlaw Corporate</span>
          </Link>

          <p className="text-[14px] text-white/70 mb-6 leading-relaxed">
            Protecting your rights with clarity, confidence,
            and trusted legal experience.
          </p>

          <div className="flex gap-3">
            <div className="flex items-center justify-center w-[28px] h-[28px] rounded-full bg-white/10">
              <Facebook size={14} className="text-[#C84E26]" />
            </div>

            <div className="flex items-center justify-center w-[28px] h-[28px] rounded-full bg-white/10">
              <Instagram size={14} className="text-[#C84E26]" />
            </div>

            <div className="flex items-center justify-center w-[28px] h-[28px] rounded-full bg-white/10">
              <IoLogoTiktok size={14} className="text-[#C84E26]" />
            </div>
          </div>
        </div>

       
        <div>
          <h1 className="uppercase text-[18px] font-bold text-white mb-6">
            Contact Info
          </h1>

          <div className="flex items-center gap-2 mb-2 text-white">
            <FaWhatsapp className="text-[#C84E26]" />
            <span className="text-[16px]">+234 806 430 5645</span>
          </div>

          <div className="flex items-center gap-2 mb-2 text-white">
            <IoCallOutline className="text-[#C84E26]" />
            <span className="text-[16px]">+234 813 614 1666</span>
          </div>

          <div className="flex items-center gap-2 text-white">
            <Mail size={14} className="text-[#C84E26]" />
            <span className="text-[16px]">
              contact@pearlawcorporate.com
            </span>
          </div>
        </div>

      
        <div>
          <h1 className="uppercase text-[18px] font-bold text-white mb-6">
            Practice Areas
          </h1>

          <ul className="space-y-3 text-[16px] text-[#FEFEFE]">
            <li>Corporate & Securities</li>
            <li>Tech Law</li>
            <li>Estate Law</li>
            <li>Startups & MSME Law</li>
            <li>Company Governance</li>
            <li>Regulatory Compliance</li>
          </ul>
        </div>

        
        <div>
          <h1 className="uppercase text-[18px] font-bold text-[#FEFEFE] mb-6">
            Quick Links
          </h1>

          <ul className="flex flex-col space-y-4 text-[16px] text-[#FEFEFE]">
            <Link href="/" >
              About Us
            </Link>
            <Link href="/retainership" >
              Retainership
            </Link>
            <Link href="/careers" >
              Careers
            </Link>
            <Link href="/blog" >
              Blog
            </Link>
            <Link href="/" >
              Privacy Policy
            </Link>
            <Link href="/" >
              Terms of Service
            </Link>
          </ul>
        </div>
      </div>

    
      <div className="w-full border-t border-white/30" />

      
      <div className="py-6 text-center text-[14px] text-[#ffffff]">
         {new Date().getFullYear()} Pearlaw Corporate. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
