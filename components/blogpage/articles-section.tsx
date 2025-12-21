import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';

const ArticlesSection = () => {
    const blog = [
        {
            image: "/assets/about.jpg",
            title: "How is Mediation Useful in Family Law Cases?",
            description:
                "With over 15 years of experience in corporate law and litigation, Pearl leads our team with unwavering dedication to client success.",
            date: "Feb 26, 2025",
            author: "Adam Ekongo",
            comments: "4 Comments",
        },
        {
            image: "/assets/blog2.jpg",
            title: "How is Mediation Useful in Family Law Cases?",
            description:
                "With over 15 years of experience in corporate law and litigation, Pearl leads our team with unwavering dedication to client success.",
            date: "Feb 26, 2025",
            author: "Adam Ekongo",
            comments: "4 Comments",
        },
        {
            image: "/assets/blog1.jpg",
            title: "Navigating Cruise Ship Contractual Claim Restrictions",
            description:
                "With over 15 years of experience in corporate law and litigation, Pearl leads our team with unwavering dedication to client success.",
            date: "Feb 26, 2025",
            author: "Adam Ekongo",
            comments: "4 Comments",
        },
        {
            image: "/assets/blog3.jpg",
            title: "A Legal Guide to Child Support and Parental Responsibilities",
            description:
                "With over 15 years of experience in corporate law and litigation, Pearl leads our team with unwavering dedication to client success.",
            date: "Feb 26, 2025",
            author: "Adam Ekongo",
            comments: "4 Comments",
        },
        {
            image: "/assets/blog5.jpg",
            title: "The Role of Attorneys in Domestic Abuse Cases",
            description:
                "With over 15 years of experience in corporate law and litigation, Pearl leads our team with unwavering dedication to client success.",
            date: "Feb 26, 2025",
            author: "Adam Ekongo",
            comments: "4 Comments",
        },
        {
            image: "/assets/blog6.jpg",
            title: "The Role of Family Courts in child Protection and Welfare",
            description:
                "With over 15 years of experience in corporate law and litigation, Pearl leads our team with unwavering dedication to client success.",
            date: "Feb 26, 2025",
            author: "Adam Ekongo",
            comments: "4 Comments",
        },
    ];

    const recentArticles = [
        {
            image: "/assets/blog1.jpg",
            title1: "Navigating Cruise Ship Contractual",
            title2: "Claim Restrictions",
            date: "Feb 26, 2025",
            author: "Adam Ekong",
        },
        {
            image: "/assets/blog2.jpg",
            title1: "Understand Your Legal Right In",
            title2: "Domestic Violence Cases",
            date: "Feb 26, 2025",
            author: "Adam",
        },
        {
            image: "/assets/blog3.jpg",
            title1: "A Legal Guide to Child Support and",
            title2: "Parental Responsibilities",
            date: "Feb 26, 2025",
            author: "Tony Patra",
        },
    ];

    const tags = [
        "ANTITRUST",
        "BANKRUPTCY",
        "EMPLOYEMENT",
        "FAMILY",
        "GENERAL PRACTICE",
        "IMMIGRATION",
        "LAW",
        "NONPROFIT",
        "PERSONAL INJURY",
        "PROPERTY",
    ];

    const practiceAreas = [
        "Corporate & Commercial",
        "Startups & MSME Law",
        "Tech Law",
        "Real Estate Law",
        "Regulatory Compliance",
        "Company Governance",
    ];

    return (
        <section className="w-full px-4 mt-[80px]">
            <div className="max-w-[1282px] mx-auto grid lg:grid-cols-[629px_auto] gap-[58px] w-full grid-cols-1">

                {/* Left Column */}
                <div className="flex flex-col gap-10">
                    {blog.map((item, index) => (
                        <div
                            key={index}
                            className="relative w-full lg:w-[629px] flex flex-col bg-white shadow-lg overflow-hidden"
                        >
                            {/* Image */}
                            <div className="relative w-full h-[514px] overflow-hidden">
                                <Image src={item.image} alt="Blog image" fill className="object-cover" />
                                {item.image === "/assets/about.jpg" && (
                                    <div className="absolute bottom-0 left-0 flex justify-center items-center gap-2 bg-[#F1F2F6] w-[217px] h-[76px]">
                                        <Icon icon="mdi:flash" className="text-[#C84E26] w-[20px] h-[20px]" />
                                        <span className="text-[#C84E26] text-[16px] font-semibold">STICKY POST</span>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex flex-col px-6 pt-6 pb-6 w-full">
                                <h1 className="text-[24px] font-semibold text-[#2B2B2B] mb-4 leading-snug">
                                    {item.title}
                                </h1>

                                <h5 className="text-[14px] text-[#2B2B2B]/70 mb-3">
                                    {item.description}
                                </h5>

                                <div className="flex items-center gap-3 text-[16px] text-[#2B2B2B]/70 flex-wrap mb-4">
                                    <span>{item.date}</span>
                                    <span className="w-[8px]">.</span>
                                    <span>{item.author}</span>
                                    <span className="w-[8px]">.</span>
                                    <span>{item.comments}</span>
                                </div>

                                {/* Button slightly up from bottom */}
                                <button className="w-full sm:w-[113px] h-[46px] bg-[#C84E26] rounded-[4px] text-[14px] text-[#F1F2F6] mt-6">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>



                {/* Right Column */}
                <div className="flex flex-col justify-start w-full lg:w-[631px]">
                    {/* Recent Articles */}
                    <div>
                        <div className="w-[32px] border-b-4 border-[#C84E26] mb-4" />
                        <h1 className="text-[18px] font-bold text-[#2B2B2B] uppercase mb-4">Recent Articles</h1>

                        {recentArticles.map((article, idx) => (
                            <div
                                key={idx}
                                className="flex gap-4 items-start mb-4" // flex-row always, no flex-col
                            >
                                {/* Image */}
                                <div className="relative w-[139px] h-[120px] flex-shrink-0">
                                    <Image src={article.image} alt="Blog thumbnail" fill className="object-cover" />
                                </div>

                                {/* Text */}
                                <div className="flex-1">
                                    <h2 className="text-[18px] font-semibold text-[#2B2B2B] leading-snug">
                                        {article.title1}
                                    </h2>
                                    <h2 className="text-[18px] font-semibold text-[#2B2B2B] leading-snug">
                                        {article.title2}
                                    </h2>
                                    <div className="flex gap-4 flex-wrap mt-2">
                                        <div className="flex items-center gap-2">
                                            <Icon icon="mingcute:time-line" className="w-[15px]" />
                                            <span className="text-[14px]">{article.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Icon icon="streamline-ultimate:notes-tasks" className="w-[15px]" />
                                            <span className="text-[14px]">{article.author}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                    {/* Tags */}
                    <div>
                        <h1 className="text-[24px] font-semibold text-[#2B2B2B] mt-20 mb-9">Tags</h1>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, idx) => (
                                <span key={idx} className="bg-[#C84E26]/80 text-[20px] font-semibold text-white rounded py-[14px] px-5">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Practice Areas */}
                    <div>
                        <h1 className="text-[24px] font-semibold text-[#2B2B2B] mt-20 mb-5">Practice Areas</h1>
                        {practiceAreas.map((area, idx) => (
                            <div key={idx} className="mb-2">
                                <p className="text-[18px] text-[#2B2B2B]">{area}</p>
                                {idx !== practiceAreas.length - 1 && (
                                    <div className="w-full border border-[#969595]/30 mb-2"></div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ArticlesSection;
