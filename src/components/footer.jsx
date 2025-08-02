import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white relative border-t border-white/20">
      {/* === Custom Marquee Style === */}
      <style>
        {`
          @keyframes scrollMarquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          .marquee-content {
            animation: scrollMarquee 20s linear infinite;
            display: flex;
            width: max-content;
            white-space: nowrap;
          }

          .marquee:hover .marquee-content {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* === Top Scrolling Text === */}
      <div className="w-full bg-[#000000] overflow-hidden marquee py-3 cursor-pointer">
        <div className="marquee-content text-3xl sm:text-8xl font-bold text-white tracking-wide gap-12 px-6">
          {Array(6).fill(0).map((_, index) => (
            <span key={index}>
              Texbay Media <span className="underline">Contact Us</span> ↗
            </span>
          ))}
        </div>
      </div>

      {/* === Footer Content === */}
      <div className="px-6 md:px-16 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          {/* Left */}
          <div className="md:w-1/3">
            <h2 className="text-5xl font-bold text-white mb-4">
              Texbay<span className="text-[#3366ff]">.</span>
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Crafting unique visual identities that capture your brand's
              essence and resonate with your target audience.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="bg-white text-black p-3 rounded-full hover:scale-110 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-white text-black p-3 rounded-full hover:scale-110 transition">
                <FaInstagram />
              </a>
              <a href="#" className="bg-white text-black p-3 rounded-full hover:scale-110 transition">
                <FaLinkedinIn />
              </a>
              <a href="#" className="bg-white text-black p-3 rounded-full hover:scale-110 transition">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Center */}
          <div className="md:w-1/4">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Portfolio</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          {/* Right */}
          <div className="flex flex-col md:flex-row gap-12 md:w-1/3">
            <div>
              <h4 className="text-xl font-semibold mb-2 underline">India</h4>
              <p>Mariyam Tower,<br />AirportRoad, Valiyannur,<br />Kannur, Kerala</p>
              <p className="mt-2">info@texbay.in</p>
              <p className="mt-1">+91-9544044888</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 underline">Oman</h4>
              <p>Ruwi High Street, near<br />Bank Muscat, Ruwi Branch,<br />Sultanate of Oman</p>
              <p className="mt-2">info@texbay.in</p>
              <p className="mt-1">+91-9544044888</p>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 pt-6 text-center text-sm border-t border-white/20">
          Copyright 2025 Texbay - All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
