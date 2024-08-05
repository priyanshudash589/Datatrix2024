import sample from '../assets/SampleLogo.svg';

const Hero = () => {
  return (
    <>
      <div className='bg-black h-screen w-screen pr-8 pl-8 pt-4 md:pr-16 md:pl-16 md:pt-8'>

        <div className='flex flex-col md:flex-row justify-between mb-16 items-center'>
          <img src={sample} alt="" className='h-20 md:h-40' />
          <span className='text-white font-orbitron text-lg md:text-xl text-center md:text-left'>
            Department Of Computer Science and Engineering with Specialization in Big Data
          </span>
          <img src={sample} alt="" className='h-20 md:h-40' />
        </div>

        <div className='border-[#EE2A4D] bg-transparent border-1 h-96 md:h-[35rem] flex flex-col rounded-t-xl'>
          <div className='border-b-[#EE2A4D] w-full h-24 md:h-24 border-b-1 bg-transparent border-0 p-4 md:p-7'>
            <span className='text-white text-2xl md:text-4xl font-orbitron'>D A T A T R I X . . . </span>
          </div>

          <span className='text-white text-justify p-4 md:p-8 font-orbitron tracking-wider text-base md:text-lg'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident corrupti ex officiis sint expedita, animi ducimus beatae vel iusto vitae veniam nisi eveniet consectetur enim molestiae quod nam aliquid eligendi!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus praesentium magnam dolorum minima quis, totam ab autem sapiente nam deserunt enim in quas ad accusantium molestias quasi nostrum pariatur iste natus placeat minus delectus! Voluptate aut eaque consequuntur est qui eligendi ad. Maxime itaque quam eveniet facilis facere aperiam quia iste asperiores ipsa neque consequatur suscipit minima, beatae aliquid culpa laboriosam! Perspiciatis itaque eaque assumenda ducimus que nobis magni beatae id aliquid?
          </span>
        </div>
      </div>
    </>
  );
}

export default Hero;