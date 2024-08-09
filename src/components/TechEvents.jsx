import React from "react";
import EventItems from "../constants/EventItems";
import events from '../Events/EventDetails'

const TechEvents = () => {

  return (
    <div className="bg-event w-full p-4 sm:p-6 md:p-8 lg:p-[4rem] relative lg:pt-[10rem] bg-cover lg:h-[82rem] md:h-[75rem] h-[200rem]">
      <div className="bg-transparent text-2xl sm:text-3xl md:text-4xl text-white font-orbitron text-center mb-6 sm:mb-8 md:mb-[3rem]">
        <span>Technical Events</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-[2rem] mb-24 sm:mb-28 md:mb-32 lg:mb-[20rem]">
        {events.map((event) => (
          <EventItems
            key={event.id}
            image={event.image}
            title={event.title}
            description={event.description}
            about={event.about}
            events={events}
          />
        ))}
      </div>
    </div>
  );
};

export default TechEvents;