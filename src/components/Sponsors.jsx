import React from 'react'
import aanya from '../assets/amaya.png'
import mj from '../assets/mj.jpeg.jpg'
import grid from '../assets/gridart.jpg'
import silly from '../assets/silly_stiches.jpg'
import daphne from '../assets/daphnetech.jpg'
import codentatives from '../assets/Codentatives.png'
export function Sponsors() {
  return (
    <div className='bg-patt-grid p-4 sm:p-8 lg:p-[2rem] w-full text-center lg:pt-[5rem]'>
    <span className='font-orbitron text-white p-6 text-2xl sm:text-3xl lg:text-4xl'>Our Sponsors</span>

  

    <div className='p-4 sm:p-6 lg:p-[3rem] min-h-[20rem]'>
        
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-2'>
            <img src={aanya} className='h-24 sm:h-32 lg:h-[15rem] mx-auto' alt="" />
            <img src={mj} className='h-24 sm:h-32 lg:h-[15rem] mx-auto' alt="" />
            <img src={grid} className='h-24 sm:h-32 lg:h-[15rem] mx-auto' alt="" /> 
            <img src={silly} className='h-24 sm:h-32 lg:h-[15rem] mx-auto' alt="" /> 
            <img src={daphne} className='h-24 sm:h-32 lg:h-[15rem] mx-auto' alt="" /> 
            <img src={codentatives} className='h-24 sm:h-32 lg:h-[15rem] mx-auto' alt="" /> 
        </div>
    </div>
</div>
  )
}

