import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const blogs = [
  {
    image: "/assets/blog1.jpg",
    title: "Navigating Cruise Ship Contractual Claim Restrictions",
    date: "Feb 28, 2025",
    author: "Adam Ekongo",
    comments: "4 Comments",
  },
  {
    image: "/assets/blog2.jpg",
    title: "Understanding Your Legal Rights in Domestic Violence Cases",
    date: "Feb 28, 2025",
    author: "Adamu Julius",
    comments: "1 Comment",
  },
  {
    image: "/assets/blog3.jpg",
    title: "A Legal Guide to Child Support and Parental Responsibilities",
    date: "Feb 28, 2025",
    author: "Tony Patra",
    comments: "2 Comments",
  },
];

const BlogSection = () => {
  return (
    <section className="flex flex-col items-center mt-[120px] px-4 sm:px-6">

  
      <div className="text-center flex flex-col">
        <h1 className="uppercase text-[16px] text-[#2B2B2B]/60 mb-6">
          our blogs
        </h1>

        <h1 className="uppercase text-[28px] sm:text-[32px] font-semibold text-[#2B2B2B] mb-6">
          recent articles
        </h1>

        <div className="h-[28px] sm:h-[38px] border-l-2 border-[#C84E26] mb-12 mx-auto" />
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="w-full max-w-[409px] rounded-[8px] bg-white shadow-lg overflow-hidden flex flex-col mx-auto"
          >
            <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] lg:h-[348px] overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col px-4 sm:px-6 pt-4 sm:pt-6 pb-6">
              <h1 className="text-[18px] sm:text-[20px] font-semibold text-[#2B2B2B] mb-3 leading-snug">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[12px] sm:text-[14px] text-[#2B2B2B]/80 uppercase">
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.author}</span>
                <span>•</span>
                <span>{blog.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

  
      <div className="mt-8 sm:mt-10">
        <button
          className="bg-[#C84E26] text-white text-[12px] sm:text-[14px] font-semibold rounded-[4px] py-3 px-5 sm:px-6 flex items-center justify-center gap-2">
          <span className="capitalize">read the blogs</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
