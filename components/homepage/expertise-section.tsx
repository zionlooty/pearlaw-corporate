import { WholeWord } from "lucide-react"


const ExpertiseSection = () => {
    return (
        <section className="mt-[60px] min-h-screen flex flex-col">
            <div className="text-center">
                <h1 className="text-[16px] font-semibold text-[#2b2b2b]">OUR EXPERTISE</h1>
                <h1 className="text-[#2b2b2b] font-semibold text-[32px]">Legal Practice Areas</h1>
            </div>
            <div className="grid grid-cols-3 px-10 gap-[60px] md:w-[90%] w-full mx-auto">
                <div className="col-span-1 flex flex-col gap-6 text-center items-center justify-center">
                    <WholeWord />
                    <h1 className="text-[18px] font-semibold text-[#2b2b2b] uppercase">Corperate & Commercial</h1>
                    <p>End-to-end corporate structuring, M&A
                        transactions, commercial contracts and joint
                        ventures tailored to your business objectives.</p>
                </div>
                <div className="col-span-1 flex flex-col gap-6 text-center items-center justify-center">
                    <WholeWord />
                    <h1 className="text-[18px] font-semibold text-[#2b2b2b] uppercase">Corperate & Commercial</h1>
                    <p>End-to-end corporate structuring, M&A
                        transactions, commercial contracts and joint
                        ventures tailored to your business objectives.</p>
                </div>
                <div className="col-span-1 flex flex-col gap-6 text-center items-center justify-center">
                    <WholeWord />
                    <h1 className="text-[18px] font-semibold text-[#2b2b2b] uppercase">Corperate & Commercial</h1>
                    <p>End-to-end corporate structuring, M&A
                        transactions, commercial contracts and joint
                        ventures tailored to your business objectives.</p>
                </div>
            </div>
        </section>
    )
}

export default ExpertiseSection