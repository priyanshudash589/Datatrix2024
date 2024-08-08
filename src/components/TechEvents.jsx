import React from "react";
import EventItems from "../constants/EventItems";
import tech from "../assets/technical.gif";
const TechEvents = () => {
  const events = [
    { id: 1, title: "Hackathon", description: "24-hour coding challenge", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" },
    { id: 2, title: "AI Workshop", description: "Learn about artificial intelligence", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" },
  
  ];
  return (
    <div className="bg-event w-full p-4 sm:p-6 md:p-8 lg:p-[4rem] relative lg:pt-[10rem] bg-cover">
      <div className="bg-transparent text-2xl sm:text-3xl md:text-4xl text-white font-orbitron text-center mb-6 sm:mb-8 md:mb-[3rem]">
        <span>Technical Events</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-[2rem] mb-24 sm:mb-28 md:mb-32 lg:mb-[20rem]">
      {events.map(event => (
          <EventItems 
            key={event.id}
            id={event.id}
            title={event.title}
            description={event.description}
            image={event.image}
          />
        ))}

      </div>
    </div>
  );
};

export default TechEvents;