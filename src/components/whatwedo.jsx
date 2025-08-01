import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image1 from "../assets/1.jpg"; // Update path if necessary

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const image = imageRef.current;

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      })
        .fromTo(
          image,
          {
            width: "30vw",
            height: "30vh",
            borderRadius: "2rem",
          },
          {
            width: "100vw",
            height: "100vh",
            borderRadius: "0rem",
            ease: "power2.out",
          }
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full overflow-hidden">
      {/* Scroll-Based Image Zoom Section */}
      <div
        ref={sectionRef}
        className="relative w-full h-screen flex items-center justify-center bg-white"
      >
        <div
          ref={imageRef}
          className="overflow-hidden w-[30vw] h-[30vh] rounded-2xl pointer-events-auto touch-pan-y"
        >
          <img
            src={Image1}
            alt="Scroll Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* What We Do Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-[#f8f9fa]">
        {/* Title + Button */}
        <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-3 md:space-y-0">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            What We Do
          </h2>
          <button className="bg-black text-white px-6 py-2 rounded-md md:ml-0">
            Explore More
          </button>
        </div>

        {/* Description */}
        <p className="mt-6 md:mt-0 max-w-2xl text-gray-700 text-center md:text-left text-base md:text-lg">
          We provide innovative marketing and design solutions that make a real
          impact. Our team of creative experts collaborates with you to craft
          strategies and visuals that elevate your brand and drive meaningful
          results.
        </p>
      </div>
    </section>
  );
};

export default WhatWeDo;
