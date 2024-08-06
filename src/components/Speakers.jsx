import React from 'react'
import Marquee from "react-fast-marquee";
import { ProfileCard } from '../constants/ProfileCard';

const Speakers = () => {
  return (
    <>
    <div className='w-screen h-[45rem] bg-black text-center flex flex-col gap-2 p-7 pt-11'>
        <span className='text-white text-4xl font-orbitron'>Data Innovations Conference Experts</span>
        <span className='text-center font-orbitron text-white'>Data Innovations Conference Experts</span>
        <Marquee className='bg-black mt-6'>
            <ProfileCard name="Natalia"/>
            <ProfileCard name="Vishal"/>
            <ProfileCard name="Priyasnyi"/>
            <ProfileCard name="vbkbkn"/>
            <ProfileCard/>
        </Marquee>        
    </div>
        
    </>
  )
}

export default Speakers