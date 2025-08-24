import React from "react";
import logo2 from "../assets/2.png";
import logo3 from "../assets/3.png";
import logo4 from "../assets/4.png";
import logo5 from "../assets/5.png";
import logo6 from "../assets/6.png";
import logo7 from "../assets/7.png";
import logo8 from "../assets/8.png";
import logo9 from "../assets/9.png";
import logo10 from "../assets/10.png";
import logo11 from "../assets/11.png";
import logo12 from "../assets/12.png";

const logos = [
  logo2, logo3, logo4, logo5, logo6,
  logo7, logo8, logo9, logo10, logo11, logo12
];

const Scroll = () => {
  return (
    // This wrapper provides the top/bottom space AND the background color
    <section className="w-full bg-[#fbfbfb] py-10">
      <div className="relative w-full overflow-hidden">
        {/* Side fade matches the same bg */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#fbfbfb] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#fbfbfb] to-transparent z-10 pointer-events-none" />

        {/* Scrolling content */}
        <div
          className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 whitespace-nowrap items-center py-2 md:py-3 lg:py-4"
          style={{ animation: "scroll 30s linear infinite" }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index + 2}`}
              className="h-8 sm:h-10 md:h-14 lg:h-16 w-auto object-contain grayscale opacity-80"
              loading="lazy"
            />
          ))}
        </div>

        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Scroll;
