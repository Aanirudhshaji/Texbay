import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BG1 from "../assets/BG1.jpeg";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  useEffect(() => {
    // Parallax background animation on a separate layer
    gsap.to(".bg-layer", {
      y: 100,
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
      },
    });

    // Text content animation
    gsap.utils.toArray(".content-block").forEach((block, i) => {
      gsap.fromTo(
        block,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="scroll-section relative min-h-screen overflow-hidden">
      {/* Background Parallax Layer */}
      <div
        className="bg-layer absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url(${BG1})`,
          backgroundSize: "cover",
        }}
      ></div>

      {/* Foreground Content */}
      <div className="flex flex-col justify-center items-center h-full space-y-10 px-4 py-24">
        <div className="content-block text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          MANUFACTURED LOCALLY
        </div>
        <div className="content-block text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          SUSTAINABLE COOLING SOLUTIONS
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimation;
