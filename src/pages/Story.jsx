import React from "react";
import engineerImage from "../assets/engineer.jpg"; // Replace with your actual image path

const Story = () => {
  return (
    <section className="w-full bg-white px-4 md:px-10 lg:px-20 py-12">
      {/* Top grid with heading and text */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
        {/* Left Column: Vertical Heading */}
        <div className="md:col-span-1 text-left">
        {/* Mobile (single line) */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002bba] leading-tight uppercase block md:hidden">
          Navigating Future Stories
        </h2>

        {/* Medium+ screens (stacked lines) */}
        <h2 className="hidden md:block text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002bba] leading-tight uppercase whitespace-pre-line">
          Navigating{"\n"}Future{"\n"}Stories
        </h2>
      </div>


        {/* Right Column: Paragraph Text */}
        <div className="md:col-span-2 space-y-8 text-lg md:ml-70 sm:text-base text-gray-800 leading-relaxed">
          <p>
            Mayda is an award-winning multidisciplinary creative studio where bold ideas come to life.
            Our team of directors, technologists, designers, artists, and producers bring together
            expertise in advertising, technology, and entertainment to craft work that resonates
            across platforms and connects with audiences in meaningful ways.
          </p>
          <p>
            Collaboration drives everything we do. We partner with forward-thinking agencies and brands,
            blending traditional craft with emerging technologies to push boundaries and deliver work
            that is both innovative and impactful. From concept to delivery, we approach every project
            as an opportunity to create something extraordinary.
          </p>
        </div>
      </div>

      {/* Full-width Image */}
      <div className="w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] mt-12">
        <img
          src={engineerImage}
          alt="Engineer working"
          className="w-full h-[40vh] md:h-[80vh] object-cover"
        />
      </div>
    </section>
  );
};

export default Story;
