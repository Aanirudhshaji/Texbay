import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const touchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsMobile(touchDevice);
    if (touchDevice) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const speed = 0.15; // follower lag

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * speed;
      followerY += (mouseY - followerY) * speed;
      follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
      requestAnimationFrame(animateFollower);
    };

    const addHoverEffect = () => gsap.to(follower, { scale: 2, duration: 0.1, ease: "none" });
    const removeHoverEffect = () => gsap.to(follower, { scale: 1, duration: 0.1, ease: "none" });

    const hoverTargets = document.querySelectorAll("a, button, .hover-target");
    hoverTargets.forEach(el => {
      el.addEventListener("mouseenter", addHoverEffect);
      el.addEventListener("mouseleave", removeHoverEffect);
    });

    window.addEventListener("mousemove", moveCursor);
    requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverTargets.forEach(el => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, []);

  if (isMobile) return null; // hide cursor completely on mobile

  return (
    <>
      {/* Follower pixel */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 z-[9999] w-4 h-4 bg-blue-500 pointer-events-none"
        style={{ transform: "translate(-50%, -50%)", imageRendering: "pixelated" }}
      />
      {/* Main pixel */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] w-2 h-2 bg-blue-600 pointer-events-none"
        style={{ transform: "translate(-50%, -50%)", imageRendering: "pixelated" }}
      />
    </>
  );
};

export default CustomCursor;
