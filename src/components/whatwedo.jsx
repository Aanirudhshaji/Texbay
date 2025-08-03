import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Kompetenzen = () => {
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current.querySelector("span"),
      { yPercent: 80, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      paraRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="py-20 px-4">
      <h2
        ref={headingRef}
        className="text-4xl font-bold overflow-hidden inline-block"
      >
        <span className="block">{/* Title text */}Design und Technologie</span>
      </h2>

      <p
        ref={paraRef}
        className="mt-4 text-lg opacity-0"
      >
        Helga ist eine Digitalagentur, die dich begleitet und alles mitbringt…
      </p>
    </section>
  );
};

export default Kompetenzen;
