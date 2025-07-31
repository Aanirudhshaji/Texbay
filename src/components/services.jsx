import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import branding from "../assets/branding.webp";
import marketing from "../assets/marketing.webp";
import embedded from "../assets/embedded.webp";
import webdesign from "../assets/webdesign.webp";

const services = [
  { id: "01", title: "Embedded System", image: embedded },
  { id: "02", title: "Marketing", image: marketing },
  { id: "03", title: "Web Design/Development", image: webdesign },
  { id: "04", title: "Branding", image: branding },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-6 lg:mb-0">
            <p className="text-[#000000] text-sm font-medium mb-3">
              Services
            </p>
            <h2 className="text-2xl text-[#0059FF] sm:text-4xl md:text-5xl font-roboto font-bold leading-tight">
              We Build, Brand, <br />
              and Innovate for You
            </h2>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition-all">
              Let’s discuss
            </button>
          </div>
        </div>

        {/* Services List */}
        <div className="mt-10 divide-y divide-black border-t border-b">
          {services.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group cursor-pointer relative"
            >
              {/* Row */}
              <div className="flex items-center justify-between w-full py-6 min-h-[90px] sm:min-h-[110px] md:min-h-[130px] px-2 sm:px-4">
                {/* Left: ID & Title */}
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-600 font-semibold">{`(${service.id})`}</span>
                  <h3
                    className={`text-base sm:text-lg md:text-6xl font-semibold font-roboto md:font-medium leading-tight transition-colors duration-300 ${
                      hoveredIndex === index ? "text-blue-600" : "text-black"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Right: Arrow */}
                <FiArrowRight
                  className={`text-xl sm:text-2xl md:text-4xl transition-all duration-300 ${
                    hoveredIndex === index
                      ? "text-blue-600 translate-x-1 opacity-100"
                      : "text-black opacity-50"
                  }`}
                />

                {/* Image Preview (absolute) */}
                <div
                  className={`absolute top-1/2 right-10 md:right-[10rem] transform -translate-y-1/2 w-30 h-30 sm:w-24 sm:h-24 md:w-64 md:h-64 rounded-lg bg-cover bg-center shadow-lg transition-all duration-500 ${
                    hoveredIndex === index
                      ? "opacity-100 translate-x-0 scale-100"
                      : "opacity-0 translate-x-10 scale-95"
                  }`}
                  style={{
                    backgroundImage: `url(${service.image})`,
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA Button */}
        <div className="lg:hidden mt-10 text-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition-all">
            Let’s discuss
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
