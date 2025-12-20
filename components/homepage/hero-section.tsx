import { ArrowRight } from "lucide-react"

const HeroSection = () => {
    return (
        <div
            className='min-h-screen bg-center bg-cover relative flex justify-center items-center px-4'
            style={{ backgroundImage: "url(/assets/hero.jpg)" }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-[#0000005d]"></div>

            <div className="flex flex-col justify-center items-center text-center z-40 gap-5 sm:gap-6 md:gap-7 max-w-[90%]">

              
                <h1 className="uppercase text-white 
                               text-[20px] sm:text-[24px] 
                               md:text-[36px] lg:text-[40px]">
                    Welcome to
                </h1>

                
                <h1 className="text-white font-bold uppercase leading-tight
                               text-[32px] sm:text-[40px] 
                               md:text-[80px] lg:text-[96px] xl:text-[110px]">
                    pearlaw <br /> Corporate
                </h1>

            
                <p className="text-white font-medium
                              text-[12px] sm:text-[14px] 
                              md:text-[16px] lg:text-[18px] 
                              px-3 md:px-0 max-w-[600px]">
                    We provide expert legal solutions for businesses and individuals —
                    Experience. Trust. Results.
                </p>

               
                <div className="mt-4 sm:mt-6 md:mt-7">
                    <button
                        className="bg-linear-to-r from-[#C84E26] to-[#622613] 
               text-white text-[11px] sm:text-[13px] 
               font-semibold rounded-[4px] py-[10px] px-[18px] 
               w-[155px] sm:w-[150px] md:w-[160px] h-[40px] sm:h-[44px] 
               flex items-center justify-center gap-1 whitespace-nowrap">
                        <span>BOOK NOW</span>
                        <ArrowRight size={10} />
                    </button>


                </div>

            </div>
        </div>
    )
}

export default HeroSection
