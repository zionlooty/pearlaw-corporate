import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const blogs = [
  {
    image: "/blog1.jpg",
    title: "Navigating Cruise Ship Contractual Claim Restrictions",
    date: "Feb 28, 2025",
    author: "Adam Ekongo",
    comments: "4 Comments",
  },
  {
    image: "/blog2.jpg",
    title: "Understanding Your Legal Rights in Domestic Violence Cases",
    date: "Feb 28, 2025",
    author: "Adamu Julius",
    comments: "1 Comment",
  },
  {
    image: "/blog3.jpg",
    title: "A Legal Guide to Child Support and Parental Responsibilities",
    date: "Feb 28, 2025",
    author: "Tony Patra",
    comments: "2 Comments",
  },
];

const BlogSection = () => {
  return (
    <section className="flex flex-col items-center mt-[120px]">
      
      <div className="text-center flex flex-col">
        <h1 className="uppercase text-[16px] text-[#2B2B2B]/60 mb-[24px]">
          our blogs
        </h1>

        <h1 className="uppercase text-[32px] font-semibold text-[#2B2B2B] mb-[24px]">
          recent articles
        </h1>

        <div className="h-[38px] border-l-2 border-[#C84E26] mb-12 mx-auto" />
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="w-[409px] h-[500px] rounded-[8px] bg-white shadow-lg overflow-hidden flex flex-col"
          >
            
            <div className="relative w-full h-[348px] overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            
            <div className="flex flex-col px-6 pt-6">
              <h1 className="text-[20px] font-semibold text-[#2B2B2B] mb-4 leading-snug">
                {blog.title}
              </h1>

              <div className="flex items-center gap-3 text-[14px] text-[#2B2B2B]/80 uppercase flex-wrap">
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
      <div className="mt-9">
        <button
          className="bg-[#C84E26] text-white text-[12px] font-semibold rounded-[4px] py-[13px] px-[18px] w-[179px] h-[50px] flex items-center justify-center gap-1 ">
          <span className="text-[12px] font-semibold capitalize">read the blogs</span>
          <ArrowRight size={9.04} />
        </button>

      </div>
    </section>
  );
};

export default BlogSection;
