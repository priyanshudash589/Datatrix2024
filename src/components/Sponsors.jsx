import React from 'react'
import logo from '../assets/SampleLogo.svg'
const Sponsors = () => {
  return (
    <>
        <div className='bg-black p-[4rem] w-screen text-center '>

            <span className='font-orbitron text-white text-4xl '>Our Sponsors</span>

            <div className='p-[4rem] h-[28rem]'>
                <div className='text-center'>
                    <span className='font-aston text-[#FFB22C] border-[#FFB22C] text-5xl border-[1px] p-[5px] px-[2rem] rounded-2xl w-[5rem]'>GOLD</span>
                </div>

                <div className='grid grid-row-4 p-[4rem] gap-2 grid-flow-col'>
                    <img src={logo} className='h-[15rem]' alt="" />
                    <img src={logo} className='h-[15rem]' alt="" />
                    <img src={logo} className='h-[15rem]' alt="" />
                    <img src={logo} className='h-[15rem]' alt="" />
                </div>

            </div>

            <div className='p-[3rem] h-[28rem]'>
                <div className='text-center'>
                    <span className='font-aston text-[#FFFFFF] text-5xl border-[1px] border-[#FFFFFF] p-[5px] px-[1.5rem] rounded-2xl w-[5rem]'>SILVER</span>
                </div>
                <div className='grid grid-row-4 p-[4rem] gap-2 grid-flow-col'>
                    <img src={logo} className='h-[15rem]' alt="" />
                    <img src={logo} className='h-[15rem]' alt="" />
                    <img src={logo} className='h-[15rem]' alt="" />
                    <img src={logo} className='h-[15rem]' alt="" />
                </div>
            </div>

            <div className='p-[3rem] h-[28rem]'>
                <div className='Ttext-center'>
                    <span className='font-aston px-[1.5rem] text-[#973131] border-[#973131] text-5xl border-[1px] p-[5px] rounded-2xl w-[5rem]'>BROZE</span>
                </div>
                <div className='grid grid-row-4 p-[4rem] gap-2 grid-flow-col'>
                    <img src={logo} className='h-[15rem]' alt="" />
                    <img src={logo} className='h-[15rem]' alt="" />
                    <img src={logo} className='h-[15rem]' alt="" />
                    <img src={logo} className='h-[15rem]' alt="" />
                </div>
            </div>


        </div>
    </>
  )
}

export default Sponsors