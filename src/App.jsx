import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Scroll from './components/scroll';
import About from './components/about';
import ImageScrolling from './components/image';
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
      <ImageScrolling />
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
