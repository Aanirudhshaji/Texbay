import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Scroll from './components/scroll';
import About from './components/about';
import WhatWeDo from './components/whatwedo';
import Services from './components/services';
import Process from './components/process';
import Scroll1 from './components/scroll1';
import Projects from './components/project';
import Faq from './components/faq';
import Blog from './components/blog';
import CTA from './components/cta';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Scroll />
      <About />
      <WhatWeDo />
      <Services />
      <Process />
      <Scroll1 />
      <Projects />
      <Faq />
      <Blog />
      <CTA />
    </div>
  );
}

export default App;
