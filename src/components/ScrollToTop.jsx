import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Fix for mobile browsers that delay or ignore immediate scroll
    const timeout = setTimeout(() => {
      // Scroll to top of window
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, 100); // Delay helps on some mobile devices

    // Clean up timeout on unmount or route change
    return () => clearTimeout(timeout);
  }, [pathname]);

  return null; // No UI to render
};

export default ScrollToTop;
