import React, { useState } from "react";
import about1 from "../assets/about1.mp4";
import about2 from "../assets/about2.mp4";
import img1 from "../assets/1.jpg";
import img2 from "../assets/1.jpg";
import img3 from "../assets/1.jpg";
import imgFull from "../assets/11.jpg"; // ✅ New full-width image

const slides = [
  {
    title: "Discovery",
    description:
      "Every great project starts with asking the right questions. During Discovery, we dig deep into understanding your brand, goals, audience, and challenges. This is where we uncover insights, align on objectives, and define the foundation for success. Think of it as the blueprint for what’s to come.",
    grid: [
      { type: "image", src: img1, shape: "rect" },
      { type: "video", src: about1, shape: "rect" },
      { type: "video", src: about2, shape: "rect" },
      { type: "image", src: img2, shape: "rect" },
    ],
  },
  {
    title: "Strategy",
    description:
      "Ideas are only as powerful as the plan behind them. In the Strategy phase, we refine insights from Discovery into actionable roadmaps. From positioning and messaging to creative direction, we ensure every move is intentional, setting the stage for impactful outcomes.",
    grid: [
      { type: "image", src: img3, shape: "rect" },
      { type: "video", src: about2, shape: "rect" },
      { type: "video", src: about1, shape: "rect" },
      { type: "image", src: img1, shape: "rect" },
    ],
  },
  {
    title: "Concept",
    description:
      "Here’s where ideas take shape. Through an iterative and collaborative process, we explore big ideas, test creative boundaries, and deliver thoughtful concepts that align with your vision. We share early and often, bringing you into the process as we turn ideas into tangible solutions.",
    grid: [
      { type: "image", src: img2, shape: "rect" },
      { type: "video", src: about1, shape: "rect" },
      { type: "video", src: about2, shape: "rect" },
      { type: "image", src: img3, shape: "rect" },
    ],
  },
  {
    title: "Production",
    description:
      "With a clear vision in place, it’s time to bring it all to life. Whether it’s crafting visuals, designing interfaces, or developing final assets, we approach Production with precision and care. The result? Exceptional deliverables that drive results and leave a lasting impression.",
    grid: [
      { type: "image", src: img1, shape: "rect" },
      { type: "video", src: about2, shape: "rect" },
      { type: "video", src: about1, shape: "rect" },
      { type: "image", src: img2, shape: "rect" },
    ],
  },
];

const Story = () => {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  return (
    <>
      <section className="bg-[#fbfbfb] text-[#002bba] px-6 md:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          
          {/* LEFT COLUMN */}
          <div className="space-y-6 flex flex-col justify-top">
            <p className="text-sm tracking-widest text-[#000000] uppercase">
              Our Process
            </p>
            <h2 className="text-5xl font-bold">{slide.title}</h2>
            <p className="text-lg text-[#000000] leading-relaxed">
              {slide.description}
            </p>

            {/* Navigation Buttons */}
            <div className="flex space-x-4 md:mt-44">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`text-lg px-3 py-1 border rounded transition-all ${
                    current === index
                      ? "border-[#002bba] text-[#002bba] bg-transparent"
                      : "border-transparent text-gray-500 hover:text-white"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN GRID */}
          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            {slide.grid.map((item, i) => {
              if (item.type === "image") {
                return (
                  <div
                    key={i}
                    className="bg-black rounded-2xl overflow-hidden aspect-[4/3]"
                  >
                    <img
                      src={item.src}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              }
              if (item.type === "video") {
                return (
                  <div
                    key={i}
                    className="bg-black rounded-2xl overflow-hidden aspect-[4/3]"
                  >
                    <video
                      src={item.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </section>

      {/* ✅ Full-width image below the section */}
      <div className="w-full">
        <img
          src={imgFull}
          alt="Full section background"
          className="w-full h-full md:h-[600px] object-cover"
        />
      </div>
    </>
  );
};

export default Story;
