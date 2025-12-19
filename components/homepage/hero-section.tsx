import { ArrowRight } from "lucide-react"

const HeroSection = () => {
    return (
        <div 
            className='min-h-screen bg-center bg-cover relative flex justify-center items-center px-4'
            style={{ backgroundImage: "url(/assets/hero.jpg)" }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-[#0000005d]"></div>
            
            <div className="flex flex-col justify-center items-center text-center z-40 gap-7">
                
                {/* SMALL HEADING */}
                <h1 className="uppercase text-white 
                               text-[26px] md:text-[36px]">
                    Welcome to
                </h1>

                {/* MAIN HEADING */}
                <h1 className="text-white font-bold uppercase leading-24
                               text-[48px] md:text-[96px]">
                    pearlaw <br /> Corporate
                </h1>

                {/* PARAGRAPH */}
                <p className="text-white font-semibold
                              text-[14px] md:text-[16px] px-2 md:px-0">
                    We provide expert legal solutions for businesses and individuals
                    experience, Trust. Result
                </p>

                {/* BUTTON */}
                <div className="mt-5 md:mt-7">
                    <button 
                        className="bg-linear-to-r from-[#C84E26] to-[#622613] 
                                   text-white text-[12px] font-semibold 
                                   rounded-[4px] py-[13px] px-[18px] 
                                   w-[130px] md:w-[140px] h-[42px] 
                                   flex items-center justify-center gap-2">
                            <span className="text-[12px] font-semibold">BOOK NOW</span>
                            <ArrowRight size={9.04} />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default HeroSection
