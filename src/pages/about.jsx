import React from "react";
import heroVideo from "../assets/about.mp4";
import Story from "./Story";
import Team from "./team";
import Approach from "./Approach";
import Blog from "../components/Blog";
import CTA from "./cta";

const Home = () => {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-[50px] sm:text-5xl md:text-7xl lg:text-7xl font-light font-roboto leading-tight mb-6">
            Kerala-Origin<br />Excellence for the World
          </h1>
          <button className="flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-full text-sm sm:text-base font-semibold hover:scale-105 transition">
            let’s talk
            <span className="bg-blue-600 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold">
              ➤
            </span>
          </button>
        </div>
      </section>

      {/* STORY SECTION */}
      <Story />
      <Approach />
      <Team />
      <Blog />
      <CTA />
    </div>
  );
};

export default Home;
