import React, { useState } from "react";

import r1 from "../assets/r1.png";
import r2 from "../assets/r2.png";
import r3 from "../assets/r3.png";
import r4 from "../assets/r4.png";

const steps = [
  {
    icon: r1,
    title: "Discovery & Design",
    description:
      "Define business goals, target audience, and essential features. Create a sitemap and research competitors.",
  },
  {
    icon: r2,
    title: "Development",
    description:
      "Develop a content strategy, conduct SEO research, and select the tech stack. Ensure performance and security considerations.",
  },
  {
    icon: r3,
    title: "Testing & Optimization",
    description:
      "Define business goals, target audience, and essential features. Create a sitemap and research competitors.",
  },
  {
    icon: r4,
    title: "Launch & Support",
    description:
      "Define business goals, target audience, and essential features. Create a sitemap and research competitors.",
  },
];

const Process = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="max-w-9xl mx-auto px-4 md:px-10 lg:px-20">
        <div className="text-center mb-14">
          <h4 className="text-[#000000] text-sm font-medium mb-3">
            How It Works
          </h4>
          <h1 className="text-2xl text-[#002bba] sm:text-4xl md:text-5xl font-roboto font-bold leading-tight">
            Proven process for success
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            We help you on every step of the journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-gray-300">
          {steps.map((step, index) => {
            const isHovered = hoveredIndex !== null;
            const isActive = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`step-card border-r border-b border-gray-300 last:border-r-0 lg:last:border-r lg:border-b-0 p-8 text-left transition-all duration-300
                  ${
                    isHovered && !isActive
                      ? "opacity-80 blur-sm scale-[0.98]"
                      : "opacity-100 blur-0"
                  }
                  ${isActive ? "border-l-0 border-r-0" : ""}
                `}
              >
                <div className="flex justify-left mb-5">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h1 className="text-lg font-bold text-[#002bba]">
                  {step.title}
                </h1>
                <p className="text-sm font-poppins font-medium text-[#002bba] mt-3 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
