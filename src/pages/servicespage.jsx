// services.jsx
import React from "react";
import CTA from "./cta";

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

        <div className="relative z-10 flex items-end justify-start w-full h-full px-4 md:px-10 lg:px-20 pb-12 md:pb-20">
          <h1 className="text-white text-[42px] sm:text-5xl md:text-7xl font-light leading-tight max-w-lg">
            Insight-led.
            <br />
            Impact-driven.
          </h1>
        </div>
      </section>

      {/* Work, Life & Services Section */}
      <section className="w-full px-4 md:px-10 lg:px-20 py-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Work & Life */}
          <div className="md:col-span-1">
            <p className="text-sm text-center md:text-left text-[#002bba] uppercase font-semibold mb-4 tracking-wide">
              WORK &amp; LIFE
            </p>
            <p className="text-base text-center md:text-left leading-relaxed text-[#002bba]">
              Fostering strong team connections and maintaining a harmonious
              work-life balance empowers our team members to bring their best
              selves to work. This, in turn, enables us to craft exceptional
              designs.
            </p>
          </div>

          {/* Middle Column - Work & Life Text */}
          <div className="md:col-span-2 mb-12 md:mb-0">
            <p className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-medium leading-snug md:leading-tight text-gray-900 text-center md:text-left">
              We firmly believe that <br />
              achieving a balanced work-life <br />
              harmony is not just <br />
              beneficial—it’s absolutely <br />
              essential. This equilibrium <br />
              drives us to consistently <br />
              produce exceptional work.
            </p>
          </div>

          {/* Right Column - Services Heading & Description */}
          <div className="md:col-span-3 md:mt-20 grid grid-cols-1 md:grid-cols-2 items-start">
            {/* Left */}
            <div>
              <div className="flex items-center mb-6">
                <span className="text-xl text-black mr-2">•</span>
                <p className="text-sm font-medium tracking-wide uppercase text-gray-900">
                  Services
                </p>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-4xl lg:text-[56px] font-medium leading-tight text-[#002bba] lg:-mt-18 md:-mt-18">
                <span className="hidden md:inline lg:inline"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                We’re a digital <br />
                marketing agency <br />
                with expertise
              </h2>
            </div>

            {/* Right */}
            <div className="flex items-center md:items-start">
              <p className="text-lg sm:text-xl md:text-4xl leading-relaxed text-black max-w-xl md:mt-35">
                We bring our passion for good design to brave brands and deliver
                something you can shout about.
              </p>
            </div>
          </div>
        </div>
      <div className="w-full h-px bg-neutral-300 mt-10"></div>

      </section>

      <CTA />
    </>
  );
};

export default Services;
