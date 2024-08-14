// Home.jsx
import React, { useRef } from 'react';
import Speakers from "./Speakers";
import { Footer } from "./Footer";
import { PreviousEvents } from './PreviousEvents';
import MainBg from "./MainBg";
import Sponsors from './Sponsors';

function Home() {
  const speakersRef = useRef(null);
  const sponsorsref = useRef(null);
  const previousEventsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <MainBg 
        scrollToSpeakers={() => scrollToSection(speakersRef)}
        scrollToSponsors={() => scrollToSection(sponsorsref)}
        scrollToPreviousEvents={() => scrollToSection(previousEventsRef)}
      />
      <div ref={speakersRef}>
        <Speakers />
      </div>
      <div ref={sponsorsref}>
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