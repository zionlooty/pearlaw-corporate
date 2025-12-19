import { ArrowRight, CheckCircle2Icon } from "lucide-react";

const PartnerSection = () => {
    return (
        <section className="flex flex-col items-center mt-30 gap-5 px-4">

            {/* Badge */}
            <div className=" flex items-center gap-1  w-[170px] h-[30px] bg-[#A45C2A]/20 sm:w-[190px] sm:h-[34px]              
        lg:w-[209px] lg:h-[38px] lg:bg-[#ffd2b2]/* desktop */
        justify-center rounded-[30px]
      ">
                <CheckCircle2Icon className="text-[#c84e26]" />
                <p className="text-[#c84e26] text-[12px]">Trusted Legal Partner</p>
            </div>


            <div className="flex flex-col text-center items-center gap-5">

                <h1 className="
          text-[20px] leading-7 text-[#2B2B2B]   
          sm:text-[26px] sm:leading-9              
          lg:text-[32px] lg:leading-10 font-semibold
        ">
                    Your Partner in Corporate <br /> Business Success
                </h1>

                <div className="text-[16px] text-[#2B2B2B]/60           
          sm:text-[12px] sm:text-[#2B2B2B]/80      
          lg:text-[18px] lg:w-[600px]             
        ">
                    <p>
                        Navigate complex corporate landscapes with confidence. Our boutique
                        law firm delivers strategic legal solutions tailored to your business
                        needs, combining seasoned expertise with innovative thinking.
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center gap-3 mt-10 px-2 sm:gap-4 sm:px-0 lg:gap-5">
                <button className="bg-[#C84E26] w-[150px] h-[42px] sm:w-[150px] sm:h-[42px] lg:w-[182px] lg:h-[46px] rounded-[4px] text-[12px] sm:text-[12px] lg:text-[14px] text-white flex justify-center items-center gap-2">
                    <span>Book Consultation</span>
                    <ArrowRight size={9.04} />
                </button>

                <button className="bg-linear-to-r from-[#999999] to-white w-[150px] h-[42px] sm:w-[150px] sm:h-[42px] lg:w-[182px] lg:h-[46px] rounded-[4px] text-[12px] sm:text-[12px] lg:text-[14px] text-white flex justify-center items-center gap-2">
                    <span className="text-[#2b2b2b]">Book Consultation</span>
                </button>
            </div>



        </section>
    );
};

export default PartnerSection;
