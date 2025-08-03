import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const mobileFollowerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const mobileFollower = mobileFollowerRef.current;

    // Detect if it's mobile
    const isMobileDevice = window.innerWidth < 768;
    setIsMobile(isMobileDevice);

    // Desktop: mousemove handling
    const handleMouseMove = (e) => {
      if (isMobileDevice) return;

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

    // Mobile: touchmove handling
    const handleTouchMove = (e) => {
      if (!isMobileDevice) return;

      const touch = e.touches[0];
      const { clientX, clientY } = touch;

      gsap.to(mobileFollower, {
        x: clientX,
        y: clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Attach correct listener
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <>
      {/* Desktop follower */}
      <div
        ref={followerRef}
        className="hidden md:block fixed top-0 left-0 z-[9999] w-8 h-8 rounded-full border border-white mix-blend-difference pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      {/* Desktop dot cursor */}
      <div
        ref={cursorRef}
        className="hidden md:block fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-white mix-blend-difference pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Mobile touch follower */}
      <div
        ref={mobileFollowerRef}
        className="block md:hidden fixed top-0 left-0 z-[9999] w-6 h-6 rounded-full bg-white/70 backdrop-blur-sm pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
};

export default CustomCursor;
