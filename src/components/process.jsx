import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import r1 from "../assets/r1.png";
import r2 from "../assets/r2.png";
import r3 from "../assets/r3.png";
import r4 from "../assets/r4.png";

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef(null);
  const iconRefs = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".step-card");

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40, scale: 0.8 }, // Adding scale for more effect
        {
          opacity: 1,
          y: 0,
          scale: 1,  // Scaling up to full size
          duration: 0.3, // Increased duration for slower animation
          delay: i * 0.3, // Increased delay to space out animations
          ease: "back.out(1.7)", // Use a 'back' easing for more dynamic animation
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });

    iconRefs.current.forEach((icon, i) => {
      gsap.fromTo(
        icon,
        { scale: 0.5, rotate: -20, opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 1, // Increased duration for slower icon animation
          ease: "back.out(2)", // Using a stronger easing effect for a bounce-like feel
          delay: i * 0.3, // Increased delay to stagger animations
          scrollTrigger: {
            trigger: icon,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-white py-16">
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

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-gray-300"
        >
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
                      ? "opacity-30 blur-sm scale-[0.98]"
                      : "opacity-100 blur-0"
                  }
                  ${isActive ? "border-l-0 border-r-0" : ""}
                `}
              >
                <div className="flex justify-left mb-5">
                  <img
                    src={step.icon}
                    ref={(el) => (iconRefs.current[index] = el)}
                    alt={step.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h1 className="text-lg font-semibold text-[#002bba]">
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
