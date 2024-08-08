// Home.jsx
import React, { useRef } from 'react';
import Speakers from "./Speakers";
import TechEvents from "./TechEvents";
import { Footer } from "./Footer";
import Sponsors from "./Sponsors";
import { PreviousEvents } from './PreviousEvents';
import MainBg from "./MainBg";

function Home() {
  const speakersRef = useRef(null);
  const sponsorsRef = useRef(null);
  const techEventsRef = useRef(null);
  const previousEventsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <MainBg 
        scrollToSpeakers={() => scrollToSection(speakersRef)}
        scrollToSponsors={() => scrollToSection(sponsorsRef)}
        scrollToTechEvents={() => scrollToSection(techEventsRef)}
        scrollToPreviousEvents={() => scrollToSection(previousEventsRef)}
      />
      <div ref={speakersRef}>
        <Speakers />
      </div>
      <div ref={sponsorsRef}>
        <Sponsors />
      </div>
      <div ref={techEventsRef}>
        <TechEvents />
      </div>      
      <div ref={previousEventsRef}>
        <PreviousEvents />
      </div>
      <Footer />
    </>
  );
}

export default Home;