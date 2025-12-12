import { ArrowRight, CheckCircle2Icon } from "lucide-react"


const PartnerSection = () => {
  return (
        <section className="flex flex-col items-center mt-30 gap-5">
            <div className="flex items-center gap-1 w-[209px] h-[38px] bg-[#ffd2b2] justify-center rounded-[30px]">
                <CheckCircle2Icon className="text-[#c84e26]" />
                <p className="text-[#c84e26] text-[12px]">Trusted Legal Partner</p>
            </div>

            <div className="flex flex-col text-center items-center gap-5">
                <h1 className="text-[32px] font-semibold leading-10">Your Partner in Corporate <br /> Business Success</h1>
                <div className="md:w-[600px] text-[18px]">
                    <p>Navigate complex corporate landscapes with confidence. Our boutique law firm delivers strategic legal solutions tailored to your business needs, combining seasoned expertise with innovative thinking.</p>
                </div>
            </div>


            <div className="flex justify-center items-center gap-5 mt-10">
                <button className="bg-[#C84E26] w-[182px] h-[46px] rounded-[4px] text-[14px] text-white flex justify-center items-center gap-2">
                        <span>Book Consultation</span>
                        <ArrowRight size={9.04} />
                </button>   
                <button className="bg-linear-to-r from-[#999999] to-white w-[182px] h-[46px] rounded-[4px] text-[14px] text-white flex justify-center items-center gap-2">
                        <span className="text-[#2b2b2b]">Book Consultation</span>
                        <ArrowRight size={9.04} />
                </button>   
            </div>
        </section>
  )
}

export default PartnerSection