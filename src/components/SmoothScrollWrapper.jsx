import { useRef, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);
  const scrollInstanceRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const scrollEl = scrollRef.current;

    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.07,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    scrollInstanceRef.current = scroll;

    // Sync LocomotiveScroll with GSAP ScrollTrigger
    scroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        return arguments.length
          ? scroll.scrollTo(value, { duration: 0, disableLerp: true })
          : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollEl.style.transform ? "transform" : "fixed",
    });

    // Refresh ScrollTrigger after Locomotive updates
    ScrollTrigger.addEventListener("refresh", () => scroll.update());
    ScrollTrigger.refresh();

    return () => {
      if (scroll) scroll.destroy();
      ScrollTrigger.removeEventListener("refresh", () => scroll.update());
    };
  }, []);

  // Reset scroll to top on route change
  useEffect(() => {
    const scroll = scrollInstanceRef.current;
    if (scroll) {
      requestAnimationFrame(() => {
        scroll.scrollTo(0, { duration: 0, disableLerp: true });
        scroll.update();
        ScrollTrigger.refresh();
      });
    }
  }, [location.pathname]);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default SmoothScrollWrapper;
