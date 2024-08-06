import React from 'react'
import sample from '../assets/SampleLogo.svg'
const Hero = () => {
  return (
    <>
        <div className='bg-black h-screen w-screen pr-[8rem]
        pl-[8rem] pt-[4rem] '>
        

            <div className='flex justify-between mb-[4rem] items-center'>
                <img src={sample} alt="" className='h-[5rem]'/>
                <span className='text-white font-orbitron text-xl'>Department Of Computer Science and Engineering with Specialization in Big Data</span>
                <img src={sample} alt="" className='h-[5rem]'/>
            </div>

            <div className='border-[#EE2A4D] bg-transparent border-[1px] h-[35rem] flex flex-col rounded-t-xl '>
                <div className='border-b-[#EE2A4D] w-full h-[6rem] border-b-[1px] bg-transparent border-0 p-7 '>
                    <span className='text-white text-4xl font-orbitron'>D A T A T R I X . . . </span>
                </div>

                <span className='text-white text-justify p-[2rem] font-orbitron tracking-wider text-[23px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident corrupti ex officiis sint expedita, animi ducimus beatae vel iusto vitae veniam nisi eveniet consectetur enim molestiae quod nam aliquid eligendi!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus praesentium magnam dolorum minima quis, totam ab autem sapiente nam deserunt enim in quas ad accusantium molestias quasi nostrum pariatur iste natus placeat minus delectus! Voluptate aut eaque consequuntur est qui eligendi ad. Maxime itaque quam eveniet facilis facere aperiam quia iste asperiores ipsa neque consequatur suscipit minima, beatae aliquid culpa laboriosam! Perspiciatis itaque eaque assumenda ducimus que nobis magni beatae id aliquid?
                </span>

                

            </div>
        </div>
    </>
  )
}

export default Hero