import React from "react";

const CTA = () => {
  return (
    <section className="w-full bg-[#e4e2d3] py-12 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">

        {/* Small subtitle */}
        <p className="text-sm md:text-base text-black/80 mb-6">
          Texbay 2024 Creative Insights
        </p>

        {/* HEADLINE */}
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <span className="font-extrabold text-black leading-none text-[28px] sm:text-[64px] md:text-[40px] lg:text-[50px] xl:text-[60px]" style={{ lineHeight: 0.9 }}>
              EMPOWER
            </span>

            {/* Inline rounded video */}
            <span className="inline-block rounded-md md:rounded-2xl overflow-hidden w-[50px] h-[40px] sm:w-[30px] sm:h-[30px] md:w-[90px] md:h-[50px] lg:w-[100px] lg:h-[60px]" aria-hidden="true">
              <video
                src="https://res.cloudinary.com/demeflwme/video/upload/v1756263980/bbcta-_77uto9R_rktp39.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </span>

            <span className="font-extrabold text-black leading-none text-[28px] sm:text-[64px] md:text-[40px] lg:text-[50px] xl:text-[60px]" style={{ lineHeight: 0.9 }}>
              STRATEGIES THAT
            </span>
          </div>

          <div>
            <h1 className="font-extrabold text-black leading-none mt-2 text-[28px] sm:text-[72px] md:text-[40px] lg:text-[50px] xl:text-[60px]" style={{ lineHeight: 0.9 }}>
              IGNITE YOUR GROWTH
            </h1>
          </div>
        </div>

        {/* Short description */}
        <p className="mt-6 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          See how visuals can power growth, loyalty & revenue
        </p>

        {/* CTA Button with hover video */}
        <div className="mt-8 flex justify-center">
          <button
            onMouseEnter={(e) => {
              const vid = e.currentTarget.querySelector("video");
              if (vid) vid.play();
            }}
            className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full text-base md:text-lg font-medium text-white overflow-hidden shadow-lg"
          >
            <video
              src="https://res.cloudinary.com/demeflwme/video/upload/v1756263899/button-DTIcGFbp_sjrdcv.mp4"
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="absolute inset-0 bg-[#002bba] group-hover:opacity-0 transition-opacity duration-300"></span>
            <span className="relative z-10">Schedule Meeting</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
