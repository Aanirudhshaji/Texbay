// contact.jsx
import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./contactcomp/contactform";
import ContactMeet from "./contactcomp/contactmeet";

const Contact = () => {
  return (
  <div className="w-full">
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src="https://res.cloudinary.com/demeflwme/video/upload/v1756326639/8207251-hd_1920_1080_30fps_mblkhc.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
     <div className="relative z-10 flex items-center justify-center w-full h-full px-4 md:px-10 lg:px-20">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Small Top Label */}
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-white text-sm sm:text-base uppercase tracking-[4px] mb-4 text-center md:text-left"
          >
            Contact Us
          </motion.span>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-white text-[36px] sm:text-5xl md:text-6xl font-light leading-tight max-w-xl text-center"
          >
            Say Hi! and tell me about your idea
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            className="text-white text-base sm:text-lg mt-6 text-center md:text-left max-w-md"
          >
            Have a nice works? Reach out and let's chat.
          </motion.p>
        </div>
      </div>
    </section>
    <ContactForm />
    <ContactMeet />
  </div>
  );
};

export default Contact;
