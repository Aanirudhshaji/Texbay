import React from "react";
import { FaExpandArrowsAlt, FaGripLines, FaRegSquare, FaAsterisk } from "react-icons/fa";

const Approach = () => {
  return (
    <section className="bg-[#000000] text-[#f5f5f0] px-6 md:px-20 py-16 md:py-24">
      {/* Section Heading */}
      <h2 className="text-4xl text-center md:text-left md:text-5xl font-roboto font-bold mb-10 md:mb-30">
        What powers everything we do
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
        {/* Curiosity */}
        <div className="flex gap-6">
          <div className="flex-shrink-0 pt-1">
            <FaExpandArrowsAlt className="text-[#b3ff00] text-4xl md:text-5xl" />
          </div>
          <div>
            <h3 className="text-2xl md:text-4xl font-roboto font-bold mb-3">Curiosity</h3>
            <p className="text-lg leading-relaxed font-poppins max-w-md">
              We question everything — assumptions, best practices, "the way
              things are done." Breakthroughs come from those who dig deeper.
            </p>
          </div>
        </div>

        {/* Tenacity */}
        <div className="flex gap-6">
          <div className="flex-shrink-0 pt-1">
            <FaGripLines className="text-[#b3ff00] text-4xl md:text-5xl" />
          </div>
          <div>
            <h3 className="text-2xl md:text-4xl font-roboto font-bold mb-3">Tenacity</h3>
            <p className="text-lg leading-relaxed font-poppins max-w-md">
              We’re relentless. We don't stop at good enough, close enough, or
              almost there. We stop at perfect.
            </p>
          </div>
        </div>

        {/* Honesty */}
        <div className="flex gap-6">
          <div className="flex-shrink-0 pt-1">
            <FaRegSquare className="text-[#b3ff00] text-4xl md:text-5xl" />
          </div>
          <div>
            <h3 className="text-2xl md:text-4xl font-roboto font-bold mb-3">Honesty</h3>
            <p className="text-lg leading-relaxed font-poppins max-w-md">
              We say what needs to be said, even when it stings. Trust starts
              with truth.
            </p>
          </div>
        </div>

        {/* Creativity */}
        <div className="flex gap-6">
          <div className="flex-shrink-0 pt-1">
            <FaAsterisk className="text-[#b3ff00] text-4xl md:text-5xl" />
          </div>
          <div>
            <h3 className="text-2xl md:text-4xl font-roboto font-bold mb-3">Creativity</h3>
            <p className="text-lg leading-relaxed font-poppins max-w-md">
              The "done thing" has its place. But we like to push boundaries,
              try new approaches, and never settle for the obvious.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
