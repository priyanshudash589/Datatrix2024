import EventItems from '../constants/EventItems';

const eventData = [
  { id: 1, title: 'Event 1', description: 'Description for Event 1' },
  { id: 2, title: 'Event 2', description: 'Description for Event 2' },
  { id: 3, title: 'Event 3', description: 'Description for Event 3' },
  { id: 4, title: 'Event 4', description: 'Description for Event 4' },
  { id: 5, title: 'Event 5', description: 'Description for Event 5' },
];

const TechEvents = () => {
  return (
    <div className='bg-black h-auto w-screen p-[4rem]'>
      <div className='bg-transparent text-4xl text-white font-orbitron text-center'>
        <span>Technical Events</span>
      </div>
      <div className='grid grid-flow-row grid-rows-2 grid-cols-4 gap-[2rem] pt-[3rem]'>
        {eventData.map(event => (
          <EventItems key={event.id} title={event.title} description={event.description} />
        ))}
      </div>
    </div>
  );
};

export default TechEvents;