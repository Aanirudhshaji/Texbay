import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const KeyholeAnimation = () => {
  const keyholeRef = useRef(null);

  useEffect(() => {
    const circle = keyholeRef.current;

    gsap.fromTo(
      circle,
      { scale: 0.2 },
      {
        scale: 6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: circle,
          start: "top center",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      }
    );
  }, []);

  return (
    <section className="h-[300vh] relative bg-gray-900 text-white overflow-hidden">
      {/* === Embedded CSS Styles === */}
      <style>
        {`
          .keyhole {
            position: relative;
            z-index: 10;
            mix-blend-mode: screen;
            pointer-events: none;
          }

          .text-content {
            color: white;
            max-width: 100%;
          }
        `}
      </style>

      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div
          ref={keyholeRef}
          className="keyhole bg-white rounded-full w-40 h-40 z-10"
        ></div>

        <div className="absolute text-content text-center z-0 px-4">
          <h1 className="text-4xl font-bold">Welcome to the Future</h1>
          <p className="mt-4 text-lg max-w-md mx-auto">
            Scroll to peek through the keyhole and reveal what lies ahead.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KeyholeAnimation;
