import React from "react";
import EventItems from "../constants/EventItems";
import tech from "../assets/technical.gif";
const TechEvents = () => {
  const events = [
    { id: 1, title: "Hackathon", description: "24-hour coding challenge", image: "path/to/image1.jpg" },
    { id: 2, title: "AI Workshop", description: "Learn about artificial intelligence", image: "path/to/image2.jpg" },
  
  ];
  return (
    <div className="bg-black w-full p-4 sm:p-6 md:p-8 lg:p-[4rem] relative lg:pt-[10rem]">
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

      <img
        src={tech}
        alt=""
        className="hidden sm:block w-1/3 md:w-1/4 lg:w-1/5 max-h-[20rem] object-contain absolute sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-[4rem] lg:right-[4rem]"
      />
    </div>
  );
};

export default TechEvents;