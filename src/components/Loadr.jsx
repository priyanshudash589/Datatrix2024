import React from 'react'
import loader from '../assets/71.gif'

const Loadr = () => {
  return (
    <>
        <div className='flex justify-center items-center bg-black h-screen w-screen'>
            <img src={loader} alt='loader...'></img>
        </div>
    </>
  )
}

export default Loadr