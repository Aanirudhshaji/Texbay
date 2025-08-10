import React from "react";

const CTA = () => {
  return (
    <section className="bg-[#f99c42] py-20 flex items-center justify-center">
      <div className="relative inline-block px-10 py-6">
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-30 z-10"></div>
        <div className="relative z-20">
          <div className="text-center text-white text-5xl font-bold">
            <div className="overflow-hidden whitespace-nowrap">
              <div className="animate-marquee inline-block">
                Ready to get started?
              </div>
            </div>
          </div>
          <button className="mt-6 bg-white text-[#3b3b3b] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
