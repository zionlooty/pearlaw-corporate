import { Send } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const ConversationSection = () => {
    return (
        <section className="flex items-center justify-center w-full mt-24 px-4 sm:px-6">
        <div className="w-full max-w-[868px] min-h-[614px]  rounded-[8px] relative p-4 sm:p-6">
      
          <Image
            src="/assets/image2.jpg"
            width={868}
            height={614}
            alt=""
            className="w-full h-full object-cover rounded-[8px]"
            priority
          />
      
          <div className="absolute inset-0 bg-[#FFFFFF]/90 rounded-[8px] z-10"></div>
      
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 sm:px-6">
      
            <h1 className="text-[22px] sm:text-[28px] font-semibold mb-4 text-[#2B2B2B] capitalize text-center">
              Let's Start the Conversation
            </h1>
      
            <p className="text-[14px] sm:text-[16px] text-[#2B2B2BCC] mb-9 text-center">
              Whether you need legal advice, consultation, or representation, we’re here to help you every step of the way.
            </p>
      
            <form className="flex flex-col gap-4 w-full max-w-[708px] items-center">
      
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full sm:w-[343px] h-[56px] px-4 bg-white text-[14px] text-[#9E9E9E] rounded-[5px] outline-none"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full sm:w-[343px] h-[56px] px-4 bg-white text-[14px] text-[#9E9E9E] rounded-[5px] outline-none"
                />
              </div>
      
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <input
                  type="text"
                  placeholder="Phone*"
                  className="w-full sm:w-[343px] h-[56px] px-4 bg-white text-[14px] text-[#9E9E9E] rounded-[5px] outline-none"
                />
      
                <div className="relative w-full sm:w-[343px]">
                  <input
                    type="text"
                    placeholder="Availability*"
                    className="w-full h-[56px] px-4 pr-10 bg-white text-[14px] text-[#9E9E9E] rounded-[5px] outline-none"
                  />
                  <MdOutlineKeyboardArrowDown
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9E9E9E]"
                    size={22}
                  />
                </div>
              </div>
      
              <textarea
                placeholder="Message*"
                className="w-full h-[117px] px-4 py-2 bg-white text-[14px] text-[#333] rounded-[5px] resize-none"
              ></textarea>
      
              <button
                type="submit"
                className="bg-[#C84E26] text-white flex items-center justify-center gap-2 text-[14px] rounded-[8px] w-full h-[52px]"
              >
                Submit inquiry
                <Send className="w-[20px] h-[20px]" />
              </button>
      
            </form>
      
          </div>
        </div>
      </section>
      
    )
}

export default ConversationSection
