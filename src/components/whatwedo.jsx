import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  // Clear previous refs on re-render
  cardsRef.current = [];

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      // Animate cards
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 px-6 bg-gray-100 text-gray-900"
    >
      <h2
        ref={headingRef}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        What We Do
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {["Design", "Development", "Strategy"].map((title, index) => (
          <div
            key={index}
            ref={addToCardsRef}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-600">
              We craft modern experiences with a balance of form, function, and
              storytelling.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
