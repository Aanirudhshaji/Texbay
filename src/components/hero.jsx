import React, { useRef, useEffect, useCallback } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { gsap } from "gsap";
import heroVideo from "../assets/hero.mp4";
import loaderImage from "../assets/loder.png";

const Hero = () => {
  const headingRef = useRef([]);
  const paraRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.set(headingRef.current, {
      clipPath: "inset(0 100% 0 0)",
      opacity: 0,
    });

    gsap.to(headingRef.current, {
      clipPath: "inset(0 0% 0 0)",
      opacity: 1,
      duration: 1.2,
      stagger: 0.2,
      ease: "power2.out",
    });

    gsap.fromTo(
      paraRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1,
        ease: "power2.out",
      }
    );
  }, []);

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  const handlePointerDown = useCallback(() => {
    if (isDesktop && videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
    }
  }, [isDesktop]);

  const handlePointerUp = useCallback(() => {
    if (isDesktop && videoRef.current) {
      videoRef.current.muted = true;
    }
  }, [isDesktop]);

  return (
    <section
      className="relative w-full min-h-screen text-white overflow-hidden"
      onMouseDown={handlePointerDown}
      onMouseUp={handlePointerUp}
      onMouseLeave={handlePointerUp}
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={loaderImage}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen px-6 sm:px-10 lg:px-20 py-16 sm:py-24">
        <header className="w-full max-w-3xl space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
            <span ref={(el) => (headingRef.current[0] = el)}>Creating new</span>
            <br />
            <span ref={(el) => (headingRef.current[1] = el)}>
              possibilities for brands
            </span>
          </h1>

          <p
            ref={paraRef}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-xl"
          >
            An end-to-end digital growth platform that scales your brand through
            targeted campaigns, real-time analytics, and smart automation tools
            built for measurable success.
          </p>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-3 border border-white text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full font-medium text-sm sm:text-base hover:bg-white hover:text-black transition-all duration-300"
          >
            <span>Explore More</span>
            <FiArrowUpRight className="text-lg sm:text-xl" />
          </a>
        </header>
      </div>

      {/* Circular CTA Button */}
      <div className="hidden sm:block absolute bottom-8 right-8 z-20">
        <div className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px]">
          <div className="absolute inset-0 animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                />
              </defs>
              <text fontSize="9" fill="white" fontWeight="bold">
                <textPath xlinkHref="#circlePath" startOffset="0%">
                  • GET IN TOUCH • GET IN TOUCH • GET IN TOUCH
                </textPath>
              </text>
            </svg>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white/20 backdrop-blur-md w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center">
              <FiArrowUpRight className="text-white text-2xl md:text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
