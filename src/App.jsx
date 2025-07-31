import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Scroll from './components/scroll';
import About from './components/about';
import ImageScrolling from './components/image';
import Services from './components/services';
import Faq from './components/faq';
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
      <Faq />
      <CTA />
    </div>
  );
}

export default App;
