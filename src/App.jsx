import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Scroll from './components/scroll';
import About from './components/about';
import Whatwedo from './components/whatwedo';
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

function App() {
  return (
    <>
      <CustomCursor /> 
      <Navbar />
      <SmoothScrollWrapper>
        <Hero />
        <Scroll />
        <About />
        <Whatwedo />
        <Services />
        <Process />
        <Scroll1 />
        <Projects />
        <Faq />
        <Testimonial />
        <CTA />
        <Blog />
        <Footer />
      </SmoothScrollWrapper>
    </>
  );
}

export default App;
