import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const CustomButton = () => (
    <button
      type="submit"
      className="flex justify-left gap-2 items-center shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-[#396FD4] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-[#396FD4] before:-z-10 before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
    >
      Explore
      <svg
        className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
        viewBox="0 0 16 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
          className="fill-gray-800 group-hover:fill-gray-800"
        />
      </svg>
    </button>
  );

  return (
    <section className="relative overflow-hidden bg-white py-12 px-4 sm:px-6 md:px-20" id="about">
      {/* Side shadows */}
      <div className="hidden md:block absolute left-0 top-0 h-full w-12 bg-white shadow-[40px_0_60px_20px_rgba(255,255,255,1)] z-10"></div>
      <div className="hidden md:block absolute right-0 top-0 h-full w-12 bg-white shadow-[-40px_0_60px_20px_rgba(255,255,255,1)] z-10"></div>

      <div className="max-w-7xl mx-auto relative z-20 grid grid-cols-1 md:grid-cols-2 items-start">
        {/* Left side */}
        <div className="text-center md:text-left">
          <h4 className="text-[#396FD4] text-sm text-left sm:text-base font-medium mb-3">
            About Us
          </h4>

          <h2 className="text-2xl sm:text-4xl md:text-5xl text-left font-bold leading-snug sm:leading-tight mb-4">
            A unique blend of strategy,{" "}
            <span className="relative inline-block">
              marketing
              <svg
                viewBox="0 0 286 73"
                fill="none"
                className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.25, ease: "easeInOut" }}
                  d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                  stroke="#FACC15"
                  strokeWidth="3"
                />
              </svg>
            </span>
            , design, and digital expertise.
          </h2>

          {/* Desktop-only Button */}
          <div className="hidden md:block mt-6">
            <CustomButton />
          </div>
        </div>

        {/* Right side */}
        <div className="pt-2 sm:pt-12">
          <p className="text-sm sm:text-base leading-relaxed text-gray-800 mb-8 sm:mb-14 text-left md:text-left">
            Companies and organizations have no choice but to achieve perfection in a world of algorithms, artificial intelligence, and word-of-mouth.
            Keeper has assembled a group of strategists, designers, branding experts, business model specialists, and service designers.
            We assist our clients in excelling in their fields. or even more powerful.
          </p>

          {/* Stats */}
          <div
            ref={ref}
            className="flex flex-row justify-left items-center gap-2 md:gap-13 text-center overflow-x-auto px-2 no-scrollbar mb-6"
          >
            <div className="min-w-[90px] flex-shrink-0">
              <h3 className="text-3xl sm:text-7xl font-semibold text-[#396FD4] whitespace-nowrap">
                {inView && <CountUp end={3} duration={2} />}+
              </h3>
              <p className="text-xs sm:text-base text-gray-600 mt-1 whitespace-nowrap">
                Years Experience
              </p>
            </div>

            <div className="h-10 border-l border-gray-300 mx-2" />

            <div className="min-w-[90px] flex-shrink-0">
              <h3 className="text-3xl sm:text-7xl font-semibold text-[#396FD4] whitespace-nowrap">
                {inView && <CountUp end={15} duration={2} />}+
              </h3>
              <p className="text-xs sm:text-base text-gray-600 mt-1 whitespace-nowrap">
                Global Presence
              </p>
            </div>

            <div className="h-10 border-l border-gray-300 mx-2" />

            <div className="min-w-[90px] flex-shrink-0">
              <h3 className="text-3xl sm:text-7xl font-semibold text-[#396FD4] whitespace-nowrap">
                {inView && <CountUp end={20} duration={2} />}+
              </h3>
              <p className="text-xs sm:text-base text-gray-600 mt-1 whitespace-nowrap">
                Projects Over
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-only Button */}
      <div className="mt-6 md:hidden">
        <CustomButton />
      </div>
    </section>
  );
};

export default About;
