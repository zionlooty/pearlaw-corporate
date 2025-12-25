import { Send } from "lucide-react"
import React from "react"

const ConversationSection = () => {
  return (
    <section className="w-full flex items-center flex-col mt-[80px] px-4">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-[#2B2B2B] text-[28px] text-center font-semibold mb-3">
          Let’s Start the Conversation
        </h1>
        <p className="text-[16px] text-[#2B2B2B]/80 text-center">
          We’re here to help you every step of the way
        </p>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-[1280px] shadow-2xl px-6 py-8">
        <div className="flex gap-2 items-center mb-8">
          <div className="w-[54px] border-b-[3px] border-[#C84E26]" />
          <h1 className="text-[16px] sm:text-[18px] font-bold text-[#2B2B2B]/80 uppercase">
            Send Us a Message
          </h1>
        </div>

        {/* Form */}
        <form className="w-full flex flex-col gap-6">
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-[#2B2B2B]">
              Full Name*
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border border-[#969595]/40 px-4 py-3 outline-none  bg-[#F1F2F6]"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-[#2B2B2B]">
              Email Address*
            </label>
            <input
              type="email"
              placeholder="johndeo@example.com"
              className="w-full border border-[#969595]/40 px-4 py-3 outline-none bg-[#F1F2F6]"
            />
          </div>



          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-[#2B2B2B]">
              Phone Number*
            </label>
            <input
              type="tel"
              placeholder="+234 000 000 0000"
              className="w-full border border-[#969595]/40 px-4 py-3 outline-none  bg-[#F1F2F6]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-[#2B2B2B]">
              Nature of Inquiry*
            </label>

            <select
              className="w-full border border-[#969595]/40 px-4 py-3 outline-none bg-[#F1F2F6] text-[#2B2B2B]"
            >
              <option value="" disabled selected>
                Select your availability
              </option>
              <option value="consultation">Legal Consultation</option>
              <option value="family">Family Law</option>
              <option value="corporate">Corporate Law</option>
              <option value="real-estate">Real Estate</option>
              <option value="litigation">Litigation</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Nature of Inquiry */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-[#2B2B2B]">
              Nature of Inquiry
            </label>
            <textarea
              rows="4"
              placeholder="Brief of inquiry"
              className="w-full border border-[#969595]/40 px-4 py-3 outline-none resize-none  bg-[#F1F2F6]"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-1 rounded-[8px] bg-[#C84E26] text-white py-4 font-semibold "
          >
            Submit Inquiry
            <Send className="w-[18px] h-[18px]" />
          </button>
        </form>
      </div>
    </section>
  )
}

export default ConversationSection
