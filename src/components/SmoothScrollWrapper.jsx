import { useRef, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { useLocation } from "react-router-dom";
import "locomotive-scroll/dist/locomotive-scroll.css";

const SmoothScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);
  const scrollInstanceRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.07,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    scrollInstanceRef.current = scroll;

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  useEffect(() => {
    const scroll = scrollInstanceRef.current;
    if (scroll) {
      // Give DOM time to render before scrollTo
      requestAnimationFrame(() => {
        scroll.scrollTo(0, {
          duration: 0,
          disableLerp: true,
          offset: 0,
        });

        // Update scroll instance
        scroll.update();
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
