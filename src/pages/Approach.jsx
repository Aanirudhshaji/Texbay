import React from "react";
import aboutImg from "../assets/11.jpg"; // your full-width image

const AboutSection = () => {
  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-8 md:py-12 bg-[#fbfbfb]">
      {/* Top Grid */}
      <hr className="border-t border-gray-300 my-6" />

      {/* Sub Heading */}
      <p className="text-sm text-[#3F73D8] font-semibold mb-6">
        [OUR APPROACH]
      </p>

      {/* Paragraph */}
      <p className="text-black text-lg sm:text-5xl mb-10 leading-snug">
        &emsp; &emsp; &emsp; &emsp; We take a personal method to every project, ensuring that we understand
        your brand, your audience, and your objectives. With in-house
        distribution specialists, we incorporate a data-driven approach into
        everything we do. We don’t rely solely on gut feeling; instead, we
        enhance our projects with statistics, trends, and in-depth research.
      </p>

      {/* Full Width Image */}
      <div className="w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] mt-12">
        <img
          src={aboutImg}
          alt="About Visual"
          className="w-full h-[80vh] object-cover"
        />
      </div>
    </section>
  );
};

export default AboutSection;
