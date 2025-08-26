// services.jsx
import React from "react";

const Services = () => {
  return (
    <>
      {/* Existing Video Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          src="https://res.cloudinary.com/demeflwme/video/upload/v1756195884/serv_komn3g.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Container with same padding */}
        <div className="relative z-10 flex items-end justify-start w-full h-full px-4 md:px-10 lg:px-20 
          pb-8 md:pb-16 lg:pb-20"> 
          <h1 className="text-white text-[50px] sm:text-5xl md:text-7xl lg:text-7xl font-light font-roboto leading-tight max-w-lg 
            mb-8 md:mb-0"> 
            {/* 👆 On mobile: extra bottom margin to push it upward */}
            Insight-led.
            <br />
            Impact-driven.
          </h1>
        </div>
      </section>

      {/* MakeReign-style “Work & Life” Section */}
      <section className="w-full px-4 md:px-10 lg:px-20 py-8 md:py-12 bg-[#fbfbfb] font-roboto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="md:col-span-1">
            <p className="text-sm uppercase font-semibold mb-4 tracking-wide">
              WORK &amp; LIFE
            </p>
            <p className="text-base leading-relaxed text-gray-900">
              Fostering strong team connections and maintaining a harmonious
              work-life balance empowers our team members to bring their best
              selves to work. This, in turn, enables us to craft exceptional
              designs.
            </p>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2">
            <p className="hidden md:block text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-gray-900">
              We firmly believe that <br />
              achieving a balanced work-life <br />
              harmony is not just <br />
              beneficial—it’s absolutely <br />
              essential. This equilibrium <br />
              drives us to consistently <br />
              produce exceptional work.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
