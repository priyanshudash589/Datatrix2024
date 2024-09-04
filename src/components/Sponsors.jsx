import React from 'react'
import aanya from '../assets/amaya.png'
import mj from '../assets/mj.png'
import grid from '../assets/gridart.jpg'
import silly from '../assets/silly_stiches.jpg'
import daphne from '../assets/daphnetech.jpg'
import codentatives from '../assets/Codentatives.png'
import black from '../assets/black.png'
import Nivellia_Fashion from '../assets/Nivellia_Fashion.png'
import Guvi from '../assets/Guvi.png'
import Alumaigal from '../assets/Alumaigal.png'
import Flynet from '../assets/flynet.png'
import Fragomen from '../assets/Fragomen.jpeg'

export function Sponsors() {
  return (
    <>
      <div className='bg-patt-grid p-4 sm:p-8 lg:p-[2rem] w-full text-center lg:pt-[3rem]'>
        <span className='font-orbitron text-white p-6 text-2xl sm:text-3xl lg:text-4xl'>Our Venue Partner</span>
        <div className='p-4 sm:p-6 lg:p-[3rem] min-h-[10rem]'>
          <div className='grid grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-4'>
            <img src={Guvi} className='h-24 sm:h-32 lg:h-[10rem] mx-auto' alt="" />
          </div>
        </div>
      </div>


      <div className='bg-patt-grid p-4 sm:p-8 lg:p-[2rem] w-full text-center'>
        <span className='font-orbitron text-white p-6 text-2xl sm:text-3xl lg:text-4xl'>Our Media Partner</span>
        <div className='p-4 sm:p-6 lg:p-[3rem] min-h-[13rem]'>
          <div className='grid grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-4'>
            <img src={Alumaigal} className='h-relative max-h-48 mx-auto' alt="" />
          </div>
        </div>
      </div>


      <div className='bg-patt-grid p-4 sm:p-8 lg:p-[2rem] w-full text-center'>
        <span className='font-orbitron text-white p-6 text-2xl sm:text-3xl lg:text-4xl'>Our Sponsors</span>
        <div className='p-4 sm:p-6 lg:p-[3rem] min-h-[20rem]'>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4'>
            <img src={grid} className='h-relative max-h-48 mx-auto' alt="" />
            <img src={Nivellia_Fashion} className='h-relative max-h-48 mx-auto' alt="" />
            {/* <img src={Guvi} className='h-24 sm:h-32 lg:h-[15rem] mx-auto bg-white' alt="" /> */}
            <img src={Flynet} className='h-relative max-h-48 mx-auto' alt="" />
            <img src={codentatives} className='h-relative max-h-48 mx-auto bg-white' alt="" />
            <img src={mj} className='h-relative max-h-48 mx-auto' alt="" />
            <img src={silly} className='h-relative max-h-48 mx-auto' alt="" />
          </div>
          <div className='grid grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-4 mt-4'>
            {/* <img src={black} className="hidden lg:block h-24 sm:h-32 lg:h-[15rem] mx-auto" alt="" /> */}
            <img src={aanya} className='h-relative max-h-48 mx-auto' alt="" />
            <img src={daphne} className='h-relative max-h-36 mx-auto' alt="" />
            <img src={Fragomen} className='h-relative max-h-36 mx-auto' alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

