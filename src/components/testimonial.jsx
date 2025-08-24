// Testimonial.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Our website redesign and SEO optimization helped us boost traffic by 150%. The team really understands both software and marketing.",
    name: "Sophia",
    handle: "@growthguru",
    bg: "bg-lime-400",
    img: "https://i.pravatar.cc/100?img=12",
    rotate: "-6deg",
  },
  {
    text: "The custom CRM software they built streamlined our sales pipeline. Pairing it with digital ads doubled our conversions.",
    name: "Daniel",
    handle: "@dan_codes",
    bg: "bg-fuchsia-600 text-white",
    img: "https://i.pravatar.cc/100?img=32",
    rotate: "-2deg",
  },
  {
    text: "From UI/UX design to targeted email campaigns, they gave our startup the full digital push we needed. Brilliant execution.",
    name: "Aisha",
    handle: "@aisha_designs",
    bg: "bg-emerald-50",
    img: "https://i.pravatar.cc/100?img=45",
    rotate: "4deg",
  },
  {
    text: "Their mobile app development team delivered a flawless product, and the marketing strategy ensured a successful launch.",
    name: "Michael",
    handle: "@mike_dev",
    bg: "bg-orange-500 text-white",
    img: "https://i.pravatar.cc/100?img=50",
    rotate: "8deg",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-change every 4s (only mobile)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="w-full bg-[#fbfbfb] px-4 md:px-10 lg:px-20 
                 pt-14 md:pt-8 lg:pt-10
                 pb-20 md:pb-28 lg:pb-32 
                 -mt-8"
    >
      {/* Title */}
      <div className="mb-16 text-center">
        <span className="inline-block px-4 py-1 text-[#002bba] text-sm mb-4">
          TESTIMONIALS
        </span>
        <h2 className="text-3xl md:text-5xl font-roboto text-[#002bba] font-normal">
          Hear what our software & marketing <br className="hidden md:block" /> 
          clients are saying
        </h2>
      </div>

      {/* MOBILE: Single card auto-change */}
      <div className="block lg:hidden">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className={`${testimonials[activeIndex].bg} w-full max-w-md mx-auto p-6 rounded-xl shadow-lg`}
        >
          <p className="text-base md:text-lg leading-relaxed mb-6">
            {testimonials[activeIndex].text}
          </p>
          <div className="flex items-center gap-3">
            <img
              src={testimonials[activeIndex].img}
              alt={testimonials[activeIndex].name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-bold">{testimonials[activeIndex].name}</p>
              <p className="text-sm opacity-80">{testimonials[activeIndex].handle}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* DESKTOP: Grid */}
      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, rotate: 0 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className={`${t.bg} w-full max-w-xs p-6 rounded-xl shadow-lg`}
            style={{ rotate: t.rotate }}
          >
            <p className="text-base md:text-lg leading-relaxed mb-6">{t.text}</p>
            <div className="flex items-center gap-3">
              <img
                src={t.img}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-bold">{t.name}</p>
                <p className="text-sm opacity-80">{t.handle}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
