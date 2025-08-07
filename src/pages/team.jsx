import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Replace these with actual image paths
import person1 from "../assets/person1.jpg"; // Featured
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";
import person5 from "../assets/person5.jpg";

const Team = () => {
  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-12 bg-white text-black">
      {/* Heading and Description */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-10">
        {/* Left Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002bba]">
          Meet The <br className="hidden sm:block" />
          Team
        </h2>

        {/* Right Description */}
        <p className="text-base sm:text-lg leading-relaxed text-gray-800">
          A complete collective of skills, minds & perspectives. United by design thinking we use technology to build worlds and tell stories.
        </p>
      </div>

      {/* Team Images Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {/* Featured member (larger) */}
        <div className="col-span-2">
          <img
            src={person1}
            alt="Mike Scarcella"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Supporting members */}
        {[person2, person3, person4, person5].map((img, index) => (
          <div key={index} className="col-span-1">
            <img
              src={img}
              alt={`Team ${index + 2}`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>

      {/* Name and Role of Featured Member */}
      <div className="max-w-7xl mx-auto mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-[#002bba] mb-1">
          Mike Scarcella
        </h3>
        <p className="text-sm sm:text-base text-gray-800">Co–Founder And CEO</p>
      </div>

      {/* Navigation Arrows */}
      <div className="max-w-7xl mx-auto flex justify-end gap-4">
        <button className="w-10 h-10 rounded-full bg-[#002bba] text-white flex items-center justify-center hover:bg-[#001e8a] transition">
          <ArrowLeft size={18} />
        </button>
        <button className="w-10 h-10 rounded-full bg-[#002bba] text-white flex items-center justify-center hover:bg-[#001e8a] transition">
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default Team;
