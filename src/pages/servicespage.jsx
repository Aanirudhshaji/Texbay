// services.jsx
import React from "react";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import CTA from "./aboutcomp/cta";
import ServicesCard from "./servicescomp/servicescard";

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

        <div className="relative z-10 flex items-center justify-center w-full h-full px-4 md:px-10 lg:px-20 pb-12 md:items-end md:justify-start">
  <div className="flex flex-col items-center md:items-start">
    {/* Small Label */}
    <motion.span
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-white text-sm sm:text-base uppercase tracking-[4px] mb-4 text-center md:text-left"
    >
      Our Services
    </motion.span>

    {/* Animated Title */}
    <motion.h1
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-white text-[42px] sm:text-5xl md:text-7xl font-light leading-tight max-w-lg text-center md:text-left"
    >
      Insight-led.
      <br />
      Impact-driven.
    </motion.h1>
  </div>
</div>

      </section>

      {/* Work, Life & Services Section */}
      <section className="w-full px-4 md:px-10 lg:px-20 pt-12 md:pt-24 pb-2 bg-[#fbfbfb]">
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

          {/* Middle Column */}
          <div className="md:col-span-2 mb-6 md:mb-0">
            <motion.p
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-medium leading-snug md:leading-tight text-gray-900 text-center md:text-left"
            >
              We firmly believe that <br />
              achieving a balanced work-life <br />
              harmony is not just <br />
              beneficial—it’s absolutely <br />
              essential. This equilibrium <br />
              drives us to consistently <br />
              produce exceptional work.
            </motion.p>
          </div>

          {/* Right Column */}
          <div className="md:col-span-3 md:mt-20 grid grid-cols-1 md:grid-cols-2 items-start">
            {/* Left */}
            <div>
              <div className="flex items-center mb-6">
                <span className="text-xl text-black mr-2">•</span>
                <p className="text-sm font-medium tracking-wide uppercase text-gray-900">
                  Services
                </p>
              </div>

              {/* Animated Title + Button */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h2 className="text-4xl sm:text-5xl md:text-4xl lg:text-[56px] font-medium leading-tight text-[#002bba] lg:-mt-18 md:-mt-18">
                  <span className="hidden md:inline lg:inline"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  We’re a digital <br />
                  marketing agency <br />
                  with expertise
                </h2>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 flex items-center gap-2 bg-[#002bba] hover:bg-[#0077e6] transition px-6 py-3 rounded-full font-medium text-white"
                >
                  Let’s work
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </motion.div>
            </div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex items-center md:items-start"
            >
              <p className="text-lg sm:text-xl md:text-4xl leading-relaxed text-black max-w-xl mt-6 md:mt-35">
                We bring our passion for good design to brave brands and deliver
                something you can shout about.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="w-full h-px bg-neutral-300 mt-10"></div>
      </section>

      <ServicesCard />
      <CTA />
    </>
  );
};

export default Services;
