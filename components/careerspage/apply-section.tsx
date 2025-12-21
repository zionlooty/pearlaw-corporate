import React from 'react'

const ApplySection = () => {
  return (
    <section className='flex flex-col items-center gap-20 justify-center w-full mt-20 px-4'>
      {/* Header */}
      <div className='w-full max-w-[1280px] h-auto bg-white shadow-2xl rounded-lg p-10'>
        <div className='text-center'>
          <h1 className='text-4xl lg:text-6xl text-[#C84E26] font-bold mb-4'>
            Join Our Team
          </h1>

          <p className='text-base lg:text-[20px] text-[#2B2B2B] mb-4 leading-relaxed'>
            At pearlaw Corporate, we believe in nurturing fresh talent and <br />
            providing opportunities for growth in the dynamic field of <br />
            corporate law.
          </p>

          <p className='text-base lg:text-[20px] text-[#2B2B2B] mb-4 leading-relaxed'>
            We are continuously looking for interns and fresh graduates who <br />
            are passionate about legal excellence and eager to learn from <br />
            experienced professionals.
          </p>

          <p className='text-base lg:text-[20px] text-[#2B2B2B] leading-relaxed'>
            While we may not have immediate openings, we maintain a pool <br /> 
            of qualified candidates. <br /> Submit your application below, and we will reach out when <br />
            suitable opportunities arise.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ApplySection
