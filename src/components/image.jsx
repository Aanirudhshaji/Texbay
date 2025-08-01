import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import background image
import BG1 from "../assets/BG1.jpeg"; // Make sure to provide the correct path

// Register ScrollTrigger plugin for GSAP
gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  useEffect(() => {
    // Parallax effect for background
    gsap.to(".scroll-container", {
      scrollTrigger: {
        trigger: ".scroll-container", // Scroll-triggers the entire container
        start: "top top", // Start when the top of the container hits the top of the viewport
        end: "bottom top", // End when the bottom of the container hits the top of the viewport
        scrub: true, // Synchronize the animation with the scroll position
      },
      backgroundPosition: "center 100%", // Create the parallax effect by changing the background position
    });

    // Scroll-triggered text change with delay
    gsap.fromTo(
      ".content",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5, // Adding delay to the animation
        scrollTrigger: {
          trigger: ".scroll-container", // Scroll-triggers the entire container
          start: "top 80%", // Start when the top of the section comes into view
          end: "bottom top", // End when the section reaches the top of the viewport
          scrub: true, // Smooth scroll-triggered animation
        },
      }
    );
  }, []);

  return (
    <div
      className="scroll-container relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BG1})` }} // Static background image
    >
      <div className="text text-white text-4xl font-bold absolute inset-0 flex items-center justify-center">
        <div className="content opacity-0">
          <h1>MANUFACTURED LOCALLY</h1>
        </div>
        <div className="content opacity-0">
          <h1>SUSTAINABLE COOLING SOLUTIONS</h1>
        </div>
        {/* Add more content divs as needed */}
      </div>
    </div>
  );
};

export default ScrollAnimation;
