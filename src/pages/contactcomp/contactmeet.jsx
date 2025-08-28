import React, { useState } from "react";

const ContactMeet = () => {
  const [hovered, setHovered] = useState(null); // "left", "right", or null

  return (
    <section className="w-full flex items-center justify-center py-16 px-6 md:px-12 bg-gray-50">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Card */}
        <div
          onMouseEnter={() => setHovered("left")}
          onMouseLeave={() => setHovered(null)}
          className={`aspect-square flex flex-col justify-between p-10 md:p-12 shadow-xl cursor-pointer transition-all duration-300
            ${
              hovered === "left"
                ? "bg-white text-[#002bba]"
                : hovered === "right"
                ? "bg-[#002bba] text-white"
                : "bg-[#002bba] text-white"
            }`}
        >
          <div>
            <p className="text-lg font-medium">
              General enquiries <br />
              Fancy a chat? Grab a coffee? Pint?
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Say Hello</h2>
        </div>

        {/* Right Card */}
        <div
          onMouseEnter={() => setHovered("right")}
          onMouseLeave={() => setHovered(null)}
          className={`aspect-square flex flex-col justify-between p-10 md:p-12 shadow-xl cursor-pointer transition-all duration-300
            ${
              hovered === "right"
                ? "bg-white text-[#002bba]"
                : hovered === "left"
                ? "bg-[#002bba] text-white"
                : "bg-white text-[#002bba]"
            }`}
        >
          <div>
            <p className="text-lg font-medium">
              Want to join the Rise At Seven team? <br />
              Find your dream job
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Work for us</h2>
        </div>
      </div>
    </section>
  );
};

export default ContactMeet;
