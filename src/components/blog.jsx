import React from "react";
import blogImg from "../assets/blog1.png";
import cloudImg from "../assets/bank.png";

const Blog = () => {
  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-8 md:py-12 bg-[#fbfbfb]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="lg:w-1/3 w-full flex flex-col items-start lg:items-start text-center lg:text-left">
          <div className="w-full">
            <span className="text-black uppercase tracking-wider text-sm font-medium">
                  Blogs
                </span>
            <h2 className="text-4xl font-semibold text-[#002bba] mb-4 leading-tight">
              Read our latest Blog
            </h2>
            <p className="text-[#002bba] mb-6">
              Learn more about digital mortgages and stay up to date with industry news
            </p>
          </div>
          {/* Button only visible on desktop */}
          <div className="hidden lg:block">
            <button className="px-6 py-2 border border-[#002bba] rounded-full text-[#1C2676] hover:bg-[#002bba] hover:text-white transition">
              Read all posts
            </button>
          </div>
        </div>

        {/* Right Section - Blog Cards */}
        <div className="lg:w-2/3 w-full flex flex-col md:flex-row gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-sm rounded-2xl overflow-hidden max-w-md mx-auto md:mx-0">
            <img src={blogImg} alt="Blog 1" className="w-full h-60 object-cover" />
            <div className="p-5">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-[#E5E4FA] text-[#002bba] text-xs px-3 py-1 rounded-full">Lenders</span>
                <span className="bg-[#E5E4FA] text-[#002bba] text-xs px-3 py-1 rounded-full">Productivity</span>
                <span className="text-sm text-gray-500 ml-auto">May 26, 2025</span>
              </div>
              <h3 className="text-lg font-medium text-[#002bba] leading-snug mb-4">
                How We Help German Banks Digitize Their Mortgage Origination - Fast
              </h3>
              <a href="#" className="text-[#1C2676] font-medium flex items-center gap-1">
                <span className="text-xl">⦿</span> More
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-sm rounded-2xl overflow-hidden max-w-md mx-auto md:mx-0">
            <img src={cloudImg} alt="Blog 2" className="w-full h-60 object-cover" />
            <div className="p-5">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-[#E5E4FA] text-[#002bba] text-xs px-3 py-1 rounded-full">Partnership</span>
                <span className="bg-[#E5E4FA] text-[#002bba] text-xs px-3 py-1 rounded-full">Innovation</span>
                <span className="text-sm text-gray-500 ml-auto">March 17, 2025</span>
              </div>
              <h3 className="text-lg font-medium text-[#002bba] leading-snug mb-4">
                How Oper is Transforming the Mortgage Experience with AI and Google Cloud
              </h3>
              <a href="#" className="text-[#1C2676] font-medium flex items-center gap-1">
                <span className="text-xl">⦿</span> More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Button at the bottom only visible on small screens */}
      <div className="block lg:hidden text-center mt-10">
        <button className="px-6 py-2 border border-[#002bba] rounded-full text-[#1C2676] hover:bg-[#002bba] hover:text-white transition">
          Read all posts
        </button>
      </div>
    </section>
  );
};

export default Blog;
