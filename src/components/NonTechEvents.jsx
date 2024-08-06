import React from "react";
import EventItems from "../constants/EventItems";
import nonTech from "../assets/technical.gif"; // Assume you have a non-technical gif

const NonTechEvents = () => {
  return (
    <div className="bg-black w-full p-4 sm:p-6 md:p-8 lg:p-12 relative">
      <div className="bg-transparent text-2xl sm:text-3xl md:text-4xl text-white font-orbitron text-center mb-6 sm:mb-8 md:mb-[3rem]">
        <span>Non-Technical Events</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-[2rem] mb-24 sm:mb-28 md:mb-32 lg:mb-[20rem]">
        <a href="../components/Event">
          <EventItems />
        </a>
        <EventItems />
        <EventItems />
        <EventItems />
        <EventItems />
        <img
          src={nonTech}
          alt=""
          className="hidden sm:block w-1/3 md:w-1/4 lg:w-1/5 max-h-[20rem] object-contain absolute sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-[4rem] lg:right-[4rem]"
        />
      </div>
    </div>
  );
};

export default NonTechEvents;
