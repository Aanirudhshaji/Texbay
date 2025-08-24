// About.jsx
import React from "react";
import { motion } from "framer-motion";
import aboutVideo from "../assets/1.mp4"; // replace with your video file

const About = () => {
  return (
    <section className="w-full bg-[#fbfbfb] px-4 md:px-10 lg:px-20 py-6 sm:py-4 md:py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl space-y-6"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#002bba] font-roboto leading-snug">
            At <span className="font-semibold">Texbay</span>, we craft exceptional{" "}
            <span className="italic">digital strategies</span> with expertise in{" "}
            <span className="italic">branding, UI/UX design</span>, and{" "}
            <span className="italic">web & mobile development</span>.
          </h2>

          {/* Desktop Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-block bg-[#002bba] hover:bg-[#001a7d] text-white px-6 py-2.5 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end md:-mt-30">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="md:text-lg text-sm uppercase font-bold tracking-wide text-gray-800">
              Digital Design Studio
            </h3>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              Our team of skilled strategists and designers collaborates with you
              to develop tailored solutions that highlight your brand’s value,
              engage audiences, and boost conversions.
            </p>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              We’re committed to delivering impactful outcomes that go beyond
              aesthetics — helping businesses thrive in the digital era.
            </p>

            {/* Mobile Button */}
            <div className="md:hidden flex justify-center">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#002bba] hover:bg-[#001a7d] text-white px-6 py-2.5 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Right Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex md:justify-end"
          >
            <video
              src={aboutVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-90 h-90 sm:w-80 sm:h-80 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
