import React from 'react';
import userImage from '../assets/1.jpg'; // your circular image

const Story = () => {
  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-8 md:py-12 bg-[#fbfbfb]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
        {/* Left: Title and Circles */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-roboto text-[#002bba] leading-tight mb-12">
            We make leading brands<br />
            grow through evidence<br />
            based influencer marketing.
          </h2>

          {/* Circle Group */}
          <div className="flex items-center gap-[-16px] relative mt-4 ">
            {/* Background circles */}
            <div className="w-16 h-16 rounded-full bg-[#0C0A3E] z-0 ml-0"></div>
            <div className="w-16 h-16 rounded-full bg-[#F97D6D] z-10 -ml-6"></div>
            {/* Image circle */}
            <img
              src={userImage}
              alt="User"
              className="w-16 h-16 rounded-full object-cover border-2 border-white z-20 -ml-6"
            />
          </div>
        </div>

        {/* Right: Paragraph and Dot */}
        <div className="relative ">

          {/* Paragraph */}
          <p className="text-[#000000] font-poppins text-base sm:text-lg leading-relaxed md:ml-50 md:mt-40">
            In a world full of noise, we focus on measurable brand impact. Instead of chasing trends, we’re here
            for brands who want to make their own waves. Not by selling talent rosters, but through unbiased data,
            award-winning strategy and creativity.
          </p>
        
        </div>
      </div>
    </section>
  );
};

export default Story;
