// Testimonial.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    text: "If I went back in time I would definitely work with Shape again. Our website would stand up as being totally unique against all our competitors. Shape are so hip & so different and their approach is so fresh. Andy really goes above and beyond with everything you ask him to do.",
    name: "Rachel Bates",
    handle: "Rachel Bates",
    initial: "R",
  },
  {
    text: "I don't think I understood just how good a website could be until I saw the drafts from Shape. Shape have worked with massive companies like Blackberry, but they also make time for smaller local businesses as well and I think that is really good in a company.",
    name: "Nicola Wellard",
    handle: "Silver Sixpence",
    initial: "N",
  },
  {
    text: "The Shape team transformed our outdated site into something modern and elegant. The process was smooth and collaborative, and the results were beyond our expectations.",
    name: "James Carter",
    handle: "TechSolutions",
    initial: "J",
  },
  {
    text: "Shape is truly visionary. They understand design trends and know how to adapt them to business goals. Our engagement went up immediately after the redesign.",
    name: "Elena Rodriguez",
    handle: "Bright Marketing",
    initial: "E",
  },
  {
    text: "Working with Shape felt like having an in-house design team. They are approachable, innovative, and deliver on time. We’re already planning our next project together.",
    name: "David Kim",
    handle: "NextGen Labs",
    initial: "D",
  },
  {
    text: "The Shape experience is unmatched. They combine technical expertise with creativity in a way that makes every project unique and effective.",
    name: "Sophia Lee",
    handle: "GreenTech",
    initial: "S",
  },
];

const infiniteTestimonials = [...testimonials, ...testimonials];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const scrollRef = useRef(null);
  const dragRef = useRef({ startX: 0, startScroll: 0 });

  const next = () => setActiveIndex((p) => (p + 1) % testimonials.length);
  const prev = () => setActiveIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1));

  const scrollByStep = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector(".testimonial-card")?.clientWidth || 380;
    const gap = 24;
    const step = cardWidth * 2 + gap * 2;
    let target = dir === "left" ? el.scrollLeft - step : el.scrollLeft + step;

    const half = el.scrollWidth / 2;
    if (target < 0) target = half + target;
    if (target >= half) target = target - half;

    el.scrollTo({ left: target, behavior: "smooth" });
  };

  const handleLoopScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    if (el.scrollLeft >= half) el.scrollLeft = el.scrollLeft - half;
    if (el.scrollLeft < 0) el.scrollLeft = el.scrollLeft + half;
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const id = setTimeout(() => {
      const half = el.scrollWidth / 2;
      if (half > 0) el.scrollLeft = Math.min(half - 1, el.clientWidth);
    }, 0);
    return () => clearTimeout(id);
  }, []);

  const pageX = (e) => ("touches" in e ? e.touches[0].pageX : e.pageX);

  const handlePointerDown = (e) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    dragRef.current.startX = pageX(e);
    dragRef.current.startScroll = el.scrollLeft;
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const el = scrollRef.current;
    if (!el) return;
    const delta = pageX(e) - dragRef.current.startX;
    el.scrollLeft = dragRef.current.startScroll - delta;
    handleLoopScroll();
  };

  const handlePointerUp = () => setIsDragging(false);

  return (
    <section className="w-full bg-[#fbfbfb] px-4 md:px-10 lg:px-20 py-20 overflow-hidden">
      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Left */}
        <div className="lg:col-span-1 flex flex-col justify-between">
          <div>
            <p className="text-gray-700 text-sm mb-4">• Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-medium font-roboto leading-tight mb-6">
              Why our <br /> clients <br /> love Shape
            </h2>

            {/* Button + arrows (mobile: arrows right aligned) */}
            <div className="flex items-center justify-between">
              <button className="flex items-center gap-2 bg-[#002bba] hover:bg-[#0040ff] transition px-6 py-3 rounded-full font-medium text-white w-fit">
                Let’s chat <ArrowUpRight size={18} />
              </button>

              {/* Mobile arrows on right end */}
              <div className="flex lg:hidden gap-2">
                <button onClick={prev} className="p-3 rounded-full bg-gray-100 hover:bg-gray-200">
                  <ArrowLeft size={20} />
                </button>
                <button onClick={next} className="p-3 rounded-full bg-gray-100 hover:bg-gray-200">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Desktop arrows */}
          <div className="hidden lg:flex gap-4 mt-10">
            <button
              onClick={() => scrollByStep("left")}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => scrollByStep("right")}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="lg:col-span-2 relative">
          {/* Fade edges */}
          <div className="hidden lg:block absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#fbfbfb] to-transparent pointer-events-none z-10" />
          <div className="hidden lg:block absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#fbfbfb] to-transparent pointer-events-none z-10" />

          {/* Desktop: 2 visible cards */}
          <div
            ref={scrollRef}
            className={`hidden lg:flex gap-6 overflow-x-auto pb-4 scrollbar-hide pl-4 relative select-none ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            onScroll={handleLoopScroll}
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={handlePointerUp}
            onMouseLeave={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
            onDragStart={(e) => e.preventDefault()}
          >
            {infiniteTestimonials.map((t, i) => (
              <div
                key={i}
                className="testimonial-card min-w-[45%] bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm"
              >
                <p className="text-lg leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center text-amber-50 rounded-md bg-[#002bba] font-bold">
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-gray-600">{t.handle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: single card full width */}
          <div className="block lg:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
                className="w-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8"
              >
                <p className="text-lg leading-relaxed mb-6">
                  {testimonials[activeIndex].text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center text-amber-50 justify-center rounded-md bg-[#002bba] font-bold">
                    {testimonials[activeIndex].initial}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonials[activeIndex].name}</p>
                    <p className="text-sm text-gray-600">{testimonials[activeIndex].handle}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
