import React from 'react'
import logo from '../assets/SampleLogo.svg'
import aanya from '../assets/amaya.png'
import mj from '../assets/mj.jpeg.jpg'
import grid from '../assets/gridart.jpg'
export function Sponsors() {
  return (
    <div className='bg-patt-grid p-4 sm:p-8 lg:p-[2rem] w-full text-center lg:pt-[5rem]'>
    <span className='font-orbitron text-white text-2xl sm:text-3xl lg:text-4xl'>Our Sponsors</span>

    <div className='p-4 sm:p-8 lg:p-[4rem] min-h-[20rem]'>
        <div className='text-center mb-4 sm:mb-8'>
            <span className='font-aston text-[#2cff7d] border-[#2cff7d] text-3xl sm:text-4xl lg:text-5xl border-[1px] p-[5px] px-4 sm:px-6 lg:px-[2rem] rounded-2xl inline-block'>TITLE</span>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2'>
            <img src={logo} className='h-24 sm:h-32 lg:h-[15rem] mx-auto' alt="" />
            <img src={logo} className='h-24 sm:h-32 lg:h-[15rem] mx-auto' alt="" />
            <img src={logo} className='h-24 sm:h-32 lg:h-[15rem] mx-auto' alt="" />
            <img src={logo} className='h-24 sm:h-32 lg:h-[15rem] mx-auto' alt="" />
        </div>
    </div>

    <div className='p-4 sm:p-6 lg:p-[3rem] min-h-[20rem]'>
        <div className='text-center mb-4 sm:mb-8'>
            <span className='font-aston text-[#FFFFFF] text-3xl sm:text-4xl lg:text-5xl border-[1px] border-[#FFFFFF] p-[5px] px-4 sm:px-5 lg:px-[1.5rem] rounded-2xl inline-block'>DIAMOND</span>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2'>
            <img src={logo} className='h-24 sm:h-32 lg:h-[15rem] mx-auto' alt="" />
            <img src={logo} className='h-24 sm:h-32 lg:h-[15rem] mx-auto' alt="" />
            <img src={logo} className='h-24 sm:h-32 lg:h-[15rem] mx-auto' alt="" />
            <img src={logo} className='h-24 sm:h-32 lg:h-[15rem] mx-auto' alt="" />
        </div>
    </div>

    <div className='p-4 sm:p-6 lg:p-[3rem] min-h-[20rem]'>
        <div className='text-center mb-4 sm:mb-8'>
            <span className='font-aston px-4 sm:px-5 lg:px-[1.5rem] text-[#FFB22C] border-[#FFB22C] text-3xl sm:text-4xl lg:text-5xl border-[1px] p-[5px] rounded-2xl inline-block'>GOLD</span>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2'>
            <img src={aanya} className='h-24 sm:h-32 lg:h-[15rem] mx-auto' alt="" />
            <img src={mj} className='h-24 sm:h-32 lg:h-[15rem] mx-auto' alt="" />
            <img src={grid} className='h-24 sm:h-32 lg:h-[15rem] mx-auto' alt="" /> 
        </div>
    </div>
</div>
  )
}

