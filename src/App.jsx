import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Hero from './components/hero';
import Scroll from './components/scroll';
import About from './components/about';
import Services from './components/services';
import Process from './components/process';
import Scroll1 from './components/scroll1';
import Projects from './components/project';
import Faq from './components/faq';
import Blog from './components/blog';
import Testimonial from './components/testimonial';
import CTA from './components/cta';
import Footer from './components/footer';

import SmoothScrollWrapper from './components/SmoothScrollWrapper';
import CustomCursor from './components/CustomCursor';

// Pages
import AboutPage from './pages/about';

function App() {
  return (
    <Router>
      <CustomCursor />
      <Navbar />
      <SmoothScrollWrapper>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Scroll />
                <About />
                <Services />
                <Process />
                <Scroll1 />
                <Projects />
                <Faq />
                <Testimonial />
                <CTA />
                <Blog />
                <Footer />
              </>
            }
          />
          {/* About Page */}
          <Route
            path="/about"
            element={
              <>
                <AboutPage />
                <Footer />
              </>
            }
          />
        </Routes>
      </SmoothScrollWrapper>
    </Router>
  );
}

export default App;
