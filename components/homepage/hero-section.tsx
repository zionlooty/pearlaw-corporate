import { ArrowRight } from "lucide-react"


const HeroSection = () => {
    return (
        <div className='min-h-screen bg-center bg-cover relative flex justify-center items-center' style={{ backgroundImage: "url(assets/hero.jpg)" }}>
            <div className="absolute top-0 left-0 w-full h-full bg-[#0000005d]"></div>
            <div className="flex flex-col justify-center items-center text-center z-40 gap-7">
                <h1 className="uppercase text-[36px] text-white">Welcome to</h1>
                <h1 className="text-[96px] font-bold text-white uppercase leading-24">pearlaw <br /> Corporate</h1>
                <p className="text-[16px] font-semibold text-white">We provide expert legal solutions for businesses and individuals experience, Trust. Result</p>
                <div className="mt-7">
                    <button 
                        className="bg-linear-to-r from-[#C84E26] to-[#622613] text-white text-[12px] font-semibold rounded-[4px] py-[13px] px-[18px] w-[140px] h-[42px] flex items-center justify-center gap-2 ">
                            <span className="text-[12px] font-semibold">BOOK NOW</span>
                            <ArrowRight size={9.04} />
                    </button>

                </div>
            </div>
        </div>
    )
}

export default HeroSection