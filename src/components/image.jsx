import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImageScrolling = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scroll = scrollRef.current;

    const totalScrollWidth = scroll.scrollWidth - container.offsetWidth;
    const scrollLength = totalScrollWidth + window.innerWidth;

    const startValue =
      window.innerWidth < 768 ? 'center center' : 'top center';

    const ctx = gsap.context(() => {
      gsap.to(scroll, {
        x: () => `-${totalScrollWidth}px`,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: startValue,
          end: () => `+=${scrollLength}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          markers: false,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const images = [
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1611926653458-09294b3142f5?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1581091012184-7acb998ac5cd?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1634746717890-6f86eeb8aaf8?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1612178991451-1f52ba9b31cb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80',
  ];

  return (
    <section className="relative w-full bg-white">
      <div
        ref={containerRef}
        className="relative w-full h-[300px] md:h-[400px] overflow-hidden"
      >
        <div
          ref={scrollRef}
          className="flex gap-6 w-max h-full px-4 will-change-transform pointer-events-none"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 md:w-96 h-64 md:h-96 overflow-hidden shadow-lg pointer-events-auto"
            >
              <img
                src={image}
                alt={`Tech Slide ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageScrolling;
