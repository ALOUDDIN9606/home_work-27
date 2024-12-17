import React from 'react'
import img from '@/assets/images/Paste image (1).png'
import { Link } from 'react-router-dom'
import { IoArrowForwardOutline } from "react-icons/io5";


const Lower = () => {
  return (
    <div className='grid grid-cols-2'>
        <div className='border'>
            <img className='w-full h-full' src={img} alt="" />
        </div>
        <div className='flex items-center pl-20 bg-slate-100'>
            <div className='w-[53%] flex flex-wrap flex-col gap-3'>
                <p className='text-blue-600 font-bold'>SALE UP TO 35% OFF</p>
                <h2 className='text-[40px] font-bold'>HUNDREDS of New lower prices!</h2>
                <p className='text-[18px]'>Hurry up!!! Winter is coming!</p>
                <Link className="flex items-center gap-3 text-[16px] relative group" to="/">
                    <span className='text-[18px]'>Shop Now</span>
                    <IoArrowForwardOutline />
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-[100px]"></span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Lower