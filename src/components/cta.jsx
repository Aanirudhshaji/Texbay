import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ctaVideo from '../assets/cta.mp4';

const CTA = () => {
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      subtextRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.5, duration: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      buttonRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, delay: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center py-20 sm:py-55">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={ctaVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-3 sm:px-6 max-w-[90%] sm:max-w-3xl text-white">
        <h1
          ref={headingRef}
          className="text-3xl sm:text-5xl md:text-7xl font-Roboto leading-tight mb-4 sm:mb-6"
        >
          Unlock Your Digital <br className="hidden sm:block" />
          Potential Today.
        </h1>
        <p
          ref={subtextRef}
          className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 sm:mb-10"
        >
          Design thinking-led processes, deep dives to understand user needs,
          form the core of designing and developing quality consumable
          products. We find the best solution by starting with your customer
          and working our way backward.
        </p>
        <button
          ref={buttonRef}
          className="inline-flex items-center px-6 py-3 text-sm sm:text-base rounded-lg border border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300"
        >
          Schedule Meeting →
        </button>
      </div>
    </section>
  );
};

export default CTA;
