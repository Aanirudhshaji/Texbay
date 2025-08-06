import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Races = () => {
  const racesRef = useRef(null);

  useEffect(() => {
    const races = racesRef.current;

    function getScrollAmount() {
      const racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    }

    const tween = gsap.to(races, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: races.parentElement,
      start: "top 20%",
      end: () => `+=${-getScrollAmount()}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      markers: true, // turn on to debug
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <>
      <div className="h-[50vh] bg-[#313143]"></div>

      <div className="overflow-hidden relative">
        <div ref={racesRef} className="flex whitespace-nowrap w-fit">
          {["Monaco", "Austria", "Hungary", "Netherlands", "Japan"].map(
            (race, index) => (
              <h2
                key={index}
                className={`text-[30vw] px-[0.3em] font-[Staatliches] flex-shrink-0 ${
                  race === "Japan"
                    ? "bg-[#e1e1ff] text-black"
                    : "text-[#e10600]"
                }`}
                style={{ margin: 0 }}
              >
                {race}
              </h2>
            )
          )}
        </div>
      </div>

      <div className="h-[100vh] bg-[#313143]"></div>

      <div className="bg-black text-center">
        <a
          href="https://www.creativecodingclub.com/bundles/creative-coding-club?src=cdpnhorscrll"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://assets.codepen.io/32887/logo-ill.svg"
            alt="logo"
            width={300}
            className="inline-block"
          />
        </a>
      </div>
    </>
  );
};

export default Races;
