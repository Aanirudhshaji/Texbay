import { useRef, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { useLocation } from "react-router-dom";
import "locomotive-scroll/dist/locomotive-scroll.css";

const SmoothScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);
  const scrollInstanceRef = useRef(null); // Store instance
  const location = useLocation();

  useEffect(() => {
    // Init Locomotive Scroll
    scrollInstanceRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.05,
    });

    return () => {
      if (scrollInstanceRef.current) scrollInstanceRef.current.destroy();
    };
  }, []);

  // 🔁 Handle route changes: scroll to top and update instance
  useEffect(() => {
    const scroll = scrollInstanceRef.current;
    if (scroll) {
      scroll.scrollTo(0, { duration: 0, disableLerp: true }); // scroll to top
      setTimeout(() => {
        scroll.update(); // refresh instance to re-calculate positions
      }, 100); // slight delay to ensure DOM is rendered
    }
  }, [location.pathname]);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default SmoothScrollWrapper;
