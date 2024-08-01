import React from 'react'
import EventItems from '../constants/EventItems'

const TechEvents = () => {
  return (
    <>
        <div className='bg-black h-[80rem] w-screen p-[4rem]'>
            <div className='bg-transparent text-4xl text-white font-orbitron text-center'>
                <span>Technical Events</span>
            </div>
            <div className='grid grid-flow-row grid-rows-2 grid-cols-4 gap-[2rem] pt-[3rem]'>

                <EventItems/>
                <EventItems/>
                <EventItems/>
                <EventItems/>
                <EventItems/>
            </div>
        </div>
    </>
  )
}

export default TechEvents