// Home.jsx
import React, { useRef } from 'react';
import About from "./About";
import { Footer } from "./Footer";
import { PreviousEvents } from './PreviousEvents';
import MainBg from "./MainBg";
import { Sponsors } from './Sponsors';

function Home() {
  const aboutRef = useRef(null);
  const sponsorsRef = useRef(null);
  const previousEventsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <MainBg 
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToSponsors={() => scrollToSection(sponsorsRef)}
        scrollToPreviousEvents={() => scrollToSection(previousEventsRef)}
      />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={sponsorsRef}>
        <Sponsors />
      </div>      
      <div ref={previousEventsRef}>
        <PreviousEvents />
      </div>
      <Footer />
    </>
  );
}

export default Home;