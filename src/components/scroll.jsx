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
    <div className="relative w-full bg-[#fbfbfb] py-2 overflow-hidden mt-10">
      {/* Left white gradient shadow */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      
      {/* Right white gradient shadow */}
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Scrolling content */}
      <div
        className="flex gap-10 animate-scroll whitespace-nowrap items-center"
        style={{
          animation: "scroll 30s linear infinite",
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index + 2}`}
            className="h-10 md:h-16 w-auto object-contain grayscale opacity-80"
            loading="lazy"
          />
        ))}
      </div>

      {/* Scroll animation keyframes in JSX */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Scroll;
