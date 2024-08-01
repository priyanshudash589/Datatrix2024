import React from 'react'
import Marquee from "react-fast-marquee";
import { ProfileCard } from '../constants/ProfileCard';

const Speakers = () => {
  return (
    <>
    <div className='w-screen h-[6rem] bg-black text-center flex flex-col gap-2'>
        <span className='text-white text-4xl font-orbitron'>Data Innovations Conference Experts</span>
        <span className='text-center font-orbitron text-white'>Data Innovations Conference Experts</span>
        
    </div>
        <Marquee className='bg-black pt-5'>
            <ProfileCard/>
            <ProfileCard/>
            <ProfileCard/>
            <ProfileCard/>
            <ProfileCard/>
        </Marquee>
    </>
  )
}

export default Speakers