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
      className="relative w-full h-screen text-white overflow-hidden"
      onMouseDown={handlePointerDown}
      onMouseUp={handlePointerUp}
      onMouseLeave={handlePointerUp}
    >
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-[130vh] sm:h-[115vh] md:h-screen z-0">
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
      <div className="relative z-10 h-full flex items-center px-6 md:px-16 lg:px-20 pt-72">
        <header className="max-w-2xl space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-roboto font-medium leading-tight">
            <span ref={(el) => (headingRef.current[0] = el)}>Creating new</span>
            <br />
            <span ref={(el) => (headingRef.current[1] = el)}>
              possibilities for brands
            </span>
          </h1>
          <p
            ref={paraRef}
            className="text-base font-roboto sm:text-lg lg:text-xl text-gray-200"
          >
            An end-to-end digital growth platform that scales your brand through
            targeted campaigns, real-time analytics, and smart automation tools
            built for measurable success.
          </p>

          <a
            href="#"
            className="inline-flex items-center justify-between gap-4 border-2 border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300"
          >
            <span>Explore More</span>
          </a>
        </header>
      </div>

      {/* CTA */}
      <div className="hidden sm:block absolute bottom-10 right-10 z-20">
        <div className="relative w-[120px] h-[120px]">
          <div className="absolute inset-0 spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50
                    m -35, 0
                    a 35,35 0 1,1 70,0
                    a 35,35 0 1,1 -70,0"
                />
              </defs>
              <text
                fontSize="9"
                fill="white"
                fontWeight="bold"
                fontFamily="sans-serif"
              >
                <textPath xlinkHref="#circlePath" startOffset="0%">
                  • GET IN TOUCH • GET IN TOUCH • GET IN TOUCH
                </textPath>
              </text>
            </svg>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="bg-white/20 backdrop-blur-md w-18 h-18 rounded-full flex items-center justify-center"
              aria-label="Get in touch"
            >
              <FiArrowUpRight className="text-white text-5xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
