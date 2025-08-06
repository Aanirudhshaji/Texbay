import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect touch device
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    setIsMobile(isTouchDevice);

    if (isTouchDevice) return; // Stop running cursor logic on mobile

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.15,
        ease: "power2.out",
      });

      gsap.to(follower, {
        x: clientX,
        y: clientY,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    const addHoverEffect = () => {
      gsap.to(followerRef.current, {
        scale: 2,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const removeHoverEffect = () => {
      gsap.to(followerRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const hoverTargets = document.querySelectorAll("a, button, .hover-target");

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", addHoverEffect);
      el.addEventListener("mouseleave", removeHoverEffect);
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, []);

  // 🧼 Don't render anything on mobile
  if (isMobile) return null;

  return (
    <>
      {/* Follower */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 z-[9999] w-10 h-10 rounded-full border border-[#002BBA] pointer-events-none"
        style={{
          transform: "translate(-50%, -50%)",
          backdropFilter: "blur(5px)",
          transition: "transform 0.3s ease-out",
        }}
      />

      {/* Cursor Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] w-2.5 h-2.5 rounded-full bg-[#002BBA] pointer-events-none"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
};

export default CustomCursor;
